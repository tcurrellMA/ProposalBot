const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const crypto = require("crypto");
const { spawn } = require("child_process");
const { fileURLToPath, pathToFileURL } = require("url");
const { createSharedDraftStore, MAX_DRAFT_BYTES } = require("./shared-drafts");

const ROOT = __dirname;
const PORT = Number(process.env.PORT || process.env.PROPOSAL_BOT_PORT || 4181);
const HOST = process.env.HOST || "127.0.0.1";
const PROJECT_IMAGES_DIR = process.env.PROPOSAL_BOT_PROJECT_IMAGES_DIR
  ? path.resolve(process.env.PROPOSAL_BOT_PROJECT_IMAGES_DIR)
  : path.join(ROOT, "Project Images");
const DRAFTS_DIR = process.env.PROPOSAL_BOT_DATA_DIR
  ? path.resolve(process.env.PROPOSAL_BOT_DATA_DIR)
  : path.join(ROOT, "data");
const sharedDrafts = createSharedDraftStore(DRAFTS_DIR);
const AUTH_REQUIRED = /^(1|true|yes)$/i.test(String(process.env.PROPOSAL_BOT_AUTH_REQUIRED || ""));
const MICROSOFT_TENANT_ID = String(process.env.MICROSOFT_TENANT_ID || "").trim();
const MICROSOFT_CLIENT_ID = String(process.env.MICROSOFT_CLIENT_ID || "").trim();
const MICROSOFT_CLIENT_SECRET = String(process.env.MICROSOFT_CLIENT_SECRET || "").trim();
const MICROSOFT_REDIRECT_URI = String(process.env.MICROSOFT_REDIRECT_URI || `http://localhost:${PORT}/auth/microsoft/callback`).trim();
const MICROSOFT_CONFIGURED = Boolean(MICROSOFT_TENANT_ID && MICROSOFT_CLIENT_ID && MICROSOFT_CLIENT_SECRET);
const MICROSOFT_AUTHORITY = `https://login.microsoftonline.com/${encodeURIComponent(MICROSOFT_TENANT_ID)}`;
const ALLOWED_EMAILS = new Set(String(process.env.PROPOSAL_BOT_ALLOWED_EMAILS || "")
  .split(/[;,\s]+/)
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean));
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const SECURE_SESSION_COOKIE = MICROSOFT_REDIRECT_URI.toLowerCase().startsWith("https://");
const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".otf": "font/otf",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};
const PROJECT_IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp"]);

let idmlBaseFiles = null;
let microsoftOidcCache = null;
const sessions = new Map();
const pendingMicrosoftAuth = new Map();

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

    if (request.method === "GET" && url.pathname === "/api/health") {
      sendJson(response, {
        ok: true,
        service: "Proposal Bot",
        authRequired: AUTH_REQUIRED,
        microsoftConfigured: MICROSOFT_CONFIGURED,
        projectImagesDirectory: PROJECT_IMAGES_DIR,
        sharedDraftsDirectory: DRAFTS_DIR
      });
      return;
    }

    if (request.method === "GET" && url.pathname === "/auth/microsoft") {
      beginMicrosoftLogin(response);
      return;
    }
    if (request.method === "GET" && url.pathname === "/auth/microsoft/callback") {
      await finishMicrosoftLogin(url, response);
      return;
    }
    if (request.method === "POST" && url.pathname === "/api/logout") {
      const token = getSessionToken(request);
      if (token) sessions.delete(token);
      clearSessionCookie(response);
      sendJson(response, { ok: true });
      return;
    }

    const user = requireOfficeAccess(request, response, url);
    if (!user) return;
    if (request.method === "GET" && url.pathname === "/api/session") {
      sendJson(response, { authenticated: AUTH_REQUIRED, user });
      return;
    }
    if (url.pathname === "/api/drafts") {
      if (request.method === "GET") {
        sendJson(response, await sharedDrafts.list());
        return;
      }
    }
    const draftRoute = /^\/api\/drafts\/([a-zA-Z0-9][a-zA-Z0-9_-]{0,127})$/.exec(url.pathname);
    if (draftRoute && (request.method === "PUT" || request.method === "DELETE")) {
      try {
        const id = draftRoute[1];
        const revision = String(request.headers["if-match"] || "");
        if (request.method === "PUT") {
          const draft = await readJsonBody(request, MAX_DRAFT_BYTES);
          sendJson(response, { revision: await sharedDrafts.save(id, draft, revision) });
        } else {
          sendJson(response, { deleted: await sharedDrafts.remove(id, revision) });
        }
      } catch (error) {
        if (!error.status) throw error;
        sendJson(response, { error: error.message }, error.status);
      }
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/export-idml") {
      await handleInDesignExport(request, response);
      return;
    }
    if (request.method === "GET" && url.pathname === "/api/project-images") {
      await handleProjectImages(request, response);
      return;
    }
    if (request.method === "OPTIONS") {
      response.writeHead(204, corsHeaders());
      response.end();
      return;
    }
    serveStaticFile(request, response);
  } catch (error) {
    console.error(error);
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8", ...corsHeaders() });
    response.end(error && error.stack ? error.stack : String(error));
  }
});

if (require.main === module) {
  server.listen(PORT, HOST, () => {
    console.log("Proposal Bot server running at http://" + HOST + ":" + PORT + "/");
  });
}

function requireOfficeAccess(request, response, url) {
  if (!AUTH_REQUIRED) {
    return { name: "Local user", email: "" };
  }
  if (!MICROSOFT_CONFIGURED || !ALLOWED_EMAILS.size) {
    sendAuthConfigurationError(response, url);
    return null;
  }
  const token = getSessionToken(request);
  const session = token ? sessions.get(token) : null;
  if (!session || session.expiresAt < Date.now()) {
    if (token) sessions.delete(token);
    if (url.pathname.startsWith("/api/")) {
      sendJson(response, { error: "Please sign in." }, 401);
    } else {
      sendRedirect(response, "/auth/microsoft");
    }
    return null;
  }
  session.expiresAt = Date.now() + SESSION_MAX_AGE_MS;
  return { name: session.name, email: session.email };
}

function beginMicrosoftLogin(response) {
  if (!AUTH_REQUIRED) {
    sendRedirect(response, "/");
    return;
  }
  if (!MICROSOFT_CONFIGURED || !ALLOWED_EMAILS.size) {
    sendAuthErrorPage(response, "Microsoft 365 sign-in has not been configured for Proposal Bot.", 503);
    return;
  }
  const state = randomBase64Url(32);
  const nonce = randomBase64Url(32);
  const verifier = randomBase64Url(48);
  const challenge = crypto.createHash("sha256").update(verifier).digest("base64url");
  pendingMicrosoftAuth.set(state, { nonce, verifier, expiresAt: Date.now() + 10 * 60 * 1000 });
  prunePendingMicrosoftAuth();
  const authorizeUrl = new URL(`${MICROSOFT_AUTHORITY}/oauth2/v2.0/authorize`);
  authorizeUrl.search = new URLSearchParams({
    client_id: MICROSOFT_CLIENT_ID,
    response_type: "code",
    redirect_uri: MICROSOFT_REDIRECT_URI,
    response_mode: "query",
    scope: "openid profile email",
    state,
    nonce,
    code_challenge: challenge,
    code_challenge_method: "S256"
  }).toString();
  sendRedirect(response, authorizeUrl.toString());
}

async function finishMicrosoftLogin(url, response) {
  const state = String(url.searchParams.get("state") || "");
  const pending = pendingMicrosoftAuth.get(state);
  pendingMicrosoftAuth.delete(state);
  if (url.searchParams.get("error")) {
    sendAuthErrorPage(response, "Microsoft sign-in was canceled or could not be completed.", 401);
    return;
  }
  if (!pending || pending.expiresAt < Date.now()) {
    sendAuthErrorPage(response, "The Microsoft sign-in request expired. Please try again.", 401);
    return;
  }
  const code = String(url.searchParams.get("code") || "");
  if (!code) {
    sendAuthErrorPage(response, "Microsoft did not return a sign-in code.", 401);
    return;
  }
  try {
    const tokenResponse = await fetch(`${MICROSOFT_AUTHORITY}/oauth2/v2.0/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: MICROSOFT_CLIENT_ID,
        client_secret: MICROSOFT_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: MICROSOFT_REDIRECT_URI,
        code_verifier: pending.verifier,
        scope: "openid profile email"
      })
    });
    const tokens = await tokenResponse.json();
    if (!tokenResponse.ok || !tokens.id_token) throw new Error("Microsoft could not verify this sign-in.");
    const claims = await validateMicrosoftIdToken(tokens.id_token, pending.nonce);
    const email = String(claims.email || claims.preferred_username || "").trim().toLowerCase();
    if (!email || !ALLOWED_EMAILS.has(email)) {
      throw new Error("Your Microsoft 365 account is not approved to use Proposal Bot.");
    }
    createSession(response, { email, name: String(claims.name || email).trim().slice(0, 160) || email });
    sendRedirect(response, "/");
  } catch (error) {
    console.error("Microsoft sign-in failed:", error && error.message ? error.message : error);
    sendAuthErrorPage(response, error && error.message ? error.message : "Microsoft sign-in could not be verified.", 401);
  }
}

async function validateMicrosoftIdToken(token, expectedNonce) {
  const parts = String(token || "").split(".");
  if (parts.length !== 3) throw new Error("Microsoft returned an invalid identity token.");
  let header;
  let claims;
  try {
    header = JSON.parse(Buffer.from(parts[0], "base64url").toString("utf8"));
    claims = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
  } catch {
    throw new Error("Microsoft returned an invalid identity token.");
  }
  if (header.alg !== "RS256" || !header.kid) throw new Error("Microsoft returned an unsupported identity token.");
  const oidc = await getMicrosoftOidcConfiguration();
  let jwk = oidc.keys.find((item) => item.kid === header.kid && item.kty === "RSA");
  if (!jwk) {
    microsoftOidcCache = null;
    const refreshed = await getMicrosoftOidcConfiguration();
    jwk = refreshed.keys.find((item) => item.kid === header.kid && item.kty === "RSA");
  }
  if (!jwk) throw new Error("Microsoft's signing key was not recognized.");
  const validSignature = crypto.verify(
    "RSA-SHA256",
    Buffer.from(`${parts[0]}.${parts[1]}`),
    crypto.createPublicKey({ key: jwk, format: "jwk" }),
    Buffer.from(parts[2], "base64url")
  );
  const now = Math.floor(Date.now() / 1000);
  const audienceValid = claims.aud === MICROSOFT_CLIENT_ID || (Array.isArray(claims.aud) && claims.aud.includes(MICROSOFT_CLIENT_ID));
  if (!validSignature || !audienceValid) throw new Error("Microsoft could not verify this identity token.");
  if (String(claims.iss || "") !== String(oidc.metadata.issuer || "")) throw new Error("The Microsoft token issuer was not recognized.");
  if (String(claims.tid || "").toLowerCase() !== MICROSOFT_TENANT_ID.toLowerCase()) throw new Error("Use an account from the configured Microsoft 365 organization.");
  if (String(claims.nonce || "") !== expectedNonce) throw new Error("The Microsoft sign-in response could not be matched to this request.");
  if (!Number(claims.exp) || claims.exp <= now || (claims.nbf && claims.nbf > now + 60)) throw new Error("The Microsoft identity token is expired or not active.");
  return claims;
}

async function getMicrosoftOidcConfiguration() {
  if (microsoftOidcCache && microsoftOidcCache.expiresAt > Date.now()) return microsoftOidcCache;
  const metadataResponse = await fetch(`${MICROSOFT_AUTHORITY}/v2.0/.well-known/openid-configuration`);
  if (!metadataResponse.ok) throw new Error("Microsoft identity metadata is unavailable.");
  const metadata = await metadataResponse.json();
  if (!String(metadata.jwks_uri || "").startsWith("https://login.microsoftonline.com/")) throw new Error("Microsoft returned an invalid signing-key endpoint.");
  const keysResponse = await fetch(metadata.jwks_uri);
  if (!keysResponse.ok) throw new Error("Microsoft signing keys are unavailable.");
  const keys = await keysResponse.json();
  microsoftOidcCache = { metadata, keys: Array.isArray(keys.keys) ? keys.keys : [], expiresAt: Date.now() + 60 * 60 * 1000 };
  return microsoftOidcCache;
}

function createSession(response, user) {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, { ...user, expiresAt: Date.now() + SESSION_MAX_AGE_MS });
  response.setHeader("Set-Cookie", `proposal_bot_session=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${Math.floor(SESSION_MAX_AGE_MS / 1000)}${SECURE_SESSION_COOKIE ? "; Secure" : ""}`);
}

function clearSessionCookie(response) {
  response.setHeader("Set-Cookie", `proposal_bot_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0${SECURE_SESSION_COOKIE ? "; Secure" : ""}`);
}

function getSessionToken(request) {
  const cookies = String(request.headers.cookie || "").split(";");
  const item = cookies.map((cookie) => cookie.trim()).find((cookie) => cookie.startsWith("proposal_bot_session="));
  return item ? item.slice(item.indexOf("=") + 1) : "";
}

function randomBase64Url(bytes) {
  return crypto.randomBytes(bytes).toString("base64url");
}

function prunePendingMicrosoftAuth() {
  const now = Date.now();
  for (const [key, value] of pendingMicrosoftAuth) {
    if (value.expiresAt < now) pendingMicrosoftAuth.delete(key);
  }
}

function sendAuthConfigurationError(response, url) {
  const message = "Proposal Bot access has not been configured yet. Contact the administrator.";
  if (url.pathname.startsWith("/api/")) {
    sendJson(response, { error: message }, 503);
  } else {
    sendAuthErrorPage(response, message, 503);
  }
}

function sendAuthErrorPage(response, message, statusCode) {
  response.writeHead(statusCode, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
  response.end(`<!doctype html><html lang="en"><meta charset="utf-8"><title>Proposal Bot access</title><body style="font:16px system-ui,sans-serif;margin:3rem;max-width:42rem"><h1>Proposal Bot access</h1><p>${escapeHtml(String(message || "Access could not be completed."))}</p></body></html>`);
}

function sendRedirect(response, location) {
  response.writeHead(302, { Location: location, "Cache-Control": "no-store" });
  response.end();
}

function sendJson(response, payload, statusCode = 200) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  response.end(JSON.stringify(payload));
}

async function handleInDesignExport(request, response) {
  const payload = await readJsonBody(request);
  if (!payload || !Array.isArray(payload.pages) || !payload.pages.length) {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8", ...corsHeaders() });
    response.end("No proposal pages were provided for the InDesign export.");
    return;
  }

  const editablePages = await extractEditableProposalPages(
    payload.pages,
    payload.stylesText || "",
    payload.bodyClasses || "",
    payload.baseUrl || ""
  );
  const packageBuffer = buildEditableInDesignPackageBufferFromLayout(editablePages, payload.pageSize || {}, payload.filenameBase || "proposal");
  const downloadName = safeFilename(payload.filenameBase || "proposal") + "-indesign-package.zip";

  response.writeHead(200, {
    "Content-Type": "application/zip",
    "Content-Disposition": 'attachment; filename="' + downloadName + '"',
    ...corsHeaders()
  });
  response.end(packageBuffer);
}

async function handleProjectImages(request, response) {
  const images = await listProjectImages(PROJECT_IMAGES_DIR, "");

  images.sort((a, b) => (a.relativePath || a.name).localeCompare(b.relativePath || b.name, undefined, { numeric: true, sensitivity: "base" }));
  response.writeHead(200, { "Content-Type": "application/json; charset=utf-8", ...corsHeaders() });
  response.end(JSON.stringify({ images }));
}

async function listProjectImages(rootDir, relativeDir) {
  let entries = [];
  try {
    entries = await fs.promises.readdir(path.join(rootDir, relativeDir), { withFileTypes: true });
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }

  const images = [];
  for (const entry of entries) {
    const nextRelativePath = relativeDir ? path.posix.join(relativeDir, entry.name) : entry.name;
    if (entry.isDirectory()) {
      images.push(...await listProjectImages(rootDir, nextRelativePath));
      continue;
    }
    if (!entry.isFile() || !PROJECT_IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      continue;
    }
    const filePath = path.join(rootDir, nextRelativePath);
    const stats = await fs.promises.stat(filePath);
    const parentDir = path.posix.dirname(nextRelativePath);
    images.push({
      name: entry.name,
      relativePath: nextRelativePath,
      typology: parentDir && parentDir !== "." ? path.posix.basename(parentDir) : "",
      url: "/Project%20Images/" + nextRelativePath.split("/").map(encodeURIComponent).join("/"),
      updatedAt: stats.mtime.toISOString(),
      size: stats.size
    });
  }
  return images;
}

function serveStaticFile(request, response) {
  const pathname = (request.url || "/").split("?")[0];
  let relativePath;
  try {
    relativePath = pathname === "/" ? "index.html" : decodeURIComponent(pathname).replace(/^\/+/, "");
  } catch {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Invalid path");
    return;
  }
  const projectImageRequest = relativePath.startsWith("Project Images/");
  const allowedRoot = projectImageRequest ? PROJECT_IMAGES_DIR : ROOT;
  const filePath = path.resolve(allowedRoot, projectImageRequest
    ? relativePath.slice("Project Images/".length)
    : relativePath);
  const publicFile = relativePath === "index.html"
    || relativePath === "app.js"
    || relativePath === "text-flow.js"
    || relativePath === "global-changes.js"
    || relativePath === "compensation-import.js"
    || relativePath === "styles.css"
    || relativePath === "MA Logo.jpg"
    || relativePath === "version.json"
    || (relativePath.startsWith("assets/") && filePath.startsWith(path.join(ROOT, "assets") + path.sep))
    || (projectImageRequest && PROJECT_IMAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase()));
  if (!publicFile || !filePath.startsWith(allowedRoot + path.sep)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }
    const headers = { "Content-Type": MIME_TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream" };
    if (["index.html", "app.js", "text-flow.js", "global-changes.js", "compensation-import.js", "styles.css", "version.json"].includes(relativePath)) {
      headers["Cache-Control"] = "no-store";
    }
    response.writeHead(200, headers);
    response.end(data);
  });
}

async function renderProposalPages(pages, stylesText, bodyClasses, baseUrl) {
  const scratchDir = fs.mkdtempSync(path.join(os.tmpdir(), "proposal-bot-idml-"));
  const executablePath = detectChromiumExecutable();
  const rendered = [];
  try {
    for (let index = 0; index < pages.length; index += 1) {
      const pageDef = pages[index];
      const width = Math.max(1, Number(pageDef.width) || 816);
      const height = Math.max(1, Number(pageDef.height) || 1056);
      const htmlPath = path.join(scratchDir, "page-" + (index + 1) + ".html");
      const pngPath = path.join(scratchDir, "page-" + (index + 1) + ".png");
      const profilePath = path.join(scratchDir, "profile-" + (index + 1));
      fs.writeFileSync(htmlPath, buildCaptureHtml(pageDef.html || "", stylesText, width, height, bodyClasses, baseUrl), "utf8");
      await captureScreenshot(executablePath, [
        "--headless",
        "--no-first-run",
        "--disable-background-networking",
        "--disable-extensions",
        "--disable-gpu",
        "--disable-gpu-compositing",
        "--disable-accelerated-2d-canvas",
        "--disable-3d-apis",
        "--disable-features=UseGraphiteDawn,Vulkan,CalculateNativeWinOcclusion",
        "--allow-file-access-from-files",
        "--hide-scrollbars",
        "--run-all-compositor-stages-before-draw",
        "--force-device-scale-factor=2",
        "--user-data-dir=" + profilePath,
        "--virtual-time-budget=2500",
        "--window-size=" + width + "," + height,
        "--screenshot=" + pngPath,
        pathToFileURL(htmlPath).href
      ], pngPath);
      rendered.push(fs.readFileSync(pngPath));
    }
  } finally {
    removeScratchDirectory(scratchDir);
  }
  return rendered;
}

async function extractEditableProposalPages(pages, stylesText, bodyClasses, baseUrl) {
  const scratchDir = fs.mkdtempSync(path.join(os.tmpdir(), "proposal-bot-layout-"));
  const executablePath = detectChromiumExecutable();
  const extracted = [];
  try {
    for (let index = 0; index < pages.length; index += 1) {
      const pageDef = pages[index];
      const width = Math.max(1, Number(pageDef.width) || 816);
      const height = Math.max(1, Number(pageDef.height) || 1056);
      const htmlPath = path.join(scratchDir, "page-" + (index + 1) + ".html");
      const profilePath = path.join(scratchDir, "profile-" + (index + 1));
      fs.writeFileSync(htmlPath, buildLayoutCaptureHtml(pageDef.html || "", stylesText, width, height, bodyClasses, baseUrl), "utf8");
      const result = await runProcess(executablePath, [
        "--headless",
        "--no-first-run",
        "--disable-background-networking",
        "--disable-extensions",
        "--disable-gpu",
        "--disable-gpu-compositing",
        "--disable-accelerated-2d-canvas",
        "--disable-3d-apis",
        "--disable-features=UseGraphiteDawn,Vulkan,CalculateNativeWinOcclusion",
        "--allow-file-access-from-files",
        "--hide-scrollbars",
        "--run-all-compositor-stages-before-draw",
        "--force-device-scale-factor=1",
        "--user-data-dir=" + profilePath,
        "--virtual-time-budget=3000",
        "--window-size=" + width + "," + height,
        "--dump-dom",
        pathToFileURL(htmlPath).href
      ], { timeoutMs: 60000 });
      extracted.push(parseLayoutDump(result.stdout, index + 1, width, height));
    }
  } finally {
    removeScratchDirectory(scratchDir);
  }
  return extracted;
}

function buildLayoutCaptureHtml(pageHtml, stylesText, width, height, bodyClasses, baseUrl) {
  const safeWidth = Math.max(1, Number(width) || 816);
  const safeHeight = Math.max(1, Number(height) || 1056);
  return [
    "<!doctype html>",
    '<html lang="en">',
    "<head>",
    '<meta charset="utf-8">',
    baseUrl ? '<base href="' + escapeHtmlAttribute(baseUrl) + '">' : "",
    "<style>",
    "html,body{margin:0;padding:0;background:#ffffff;overflow:hidden;}",
    "html,body{width:" + safeWidth + "px;height:" + safeHeight + "px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}",
    stylesText,
    captureOverrideCss(safeWidth, safeHeight),
    "#proposal-bot-layout-json{display:none!important;}",
    "</style>",
    "</head>",
    '<body class="' + escapeHtmlAttribute(bodyClasses || "") + '">',
    '<div style="width:' + safeWidth + "px;height:" + safeHeight + 'px;overflow:hidden;background:#ffffff;">',
    pageHtml,
    "</div>",
    layoutExtractionScript(),
    "</body>",
    "</html>"
  ].join("");
}

function layoutExtractionScript() {
  return [
    "<script>",
    "(function(){",
    "function imageReady(img){if(!img||img.complete){return Promise.resolve();}return new Promise(function(resolve){img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});});}",
    "function ready(){var images=Array.prototype.slice.call(document.images||[]).map(imageReady);var fonts=document.fonts&&document.fonts.ready?document.fonts.ready.catch(function(){}):Promise.resolve();return Promise.all(images.concat([fonts]));}",
    "function round(value){return Math.round(Number(value||0)*1000)/1000;}",
    "function parseCssNumber(value){var n=parseFloat(value);return isFinite(n)?n:0;}",
    "function encodeBase64(text){return btoa(unescape(encodeURIComponent(text)));}",
    "function rgba(value){var text=String(value||'').trim();if(!text||text==='transparent'){return null;}var m=text.match(/^rgba?\\(([^)]+)\\)$/i);if(!m){return null;}var parts=m[1].split(',').map(function(part){return part.trim();});var r=parseFloat(parts[0]);var g=parseFloat(parts[1]);var b=parseFloat(parts[2]);var a=parts.length>3?parseFloat(parts[3]):1;if(!isFinite(r)||!isFinite(g)||!isFinite(b)||!isFinite(a)||a<=0){return null;}if(a<1){r=255-(255-r)*a;g=255-(255-g)*a;b=255-(255-b)*a;}return {r:Math.max(0,Math.min(255,Math.round(r))),g:Math.max(0,Math.min(255,Math.round(g))),b:Math.max(0,Math.min(255,Math.round(b)))};}",
    "function colorHex(value){var c=rgba(value);if(!c){return '';}function h(n){return n.toString(16).padStart(2,'0');}return '#'+h(c.r)+h(c.g)+h(c.b);}",
    "function isHiddenElement(el){if(!el||el.nodeType!==1){return true;}if(el.closest('.photo-slot-tools,.photo-frame-resize-handle,.text-frame-resize-handle')){return true;}var style=getComputedStyle(el);return style.display==='none'||style.visibility==='hidden'||parseFloat(style.opacity||'1')<=0.01;}",
    "function clippedBounds(rect,pageRect){var left=Math.max(rect.left,pageRect.left);var top=Math.max(rect.top,pageRect.top);var right=Math.min(rect.right,pageRect.right);var bottom=Math.min(rect.bottom,pageRect.bottom);var width=right-left;var height=bottom-top;if(width<=0.5||height<=0.5){return null;}return {x:round(left-pageRect.left),y:round(top-pageRect.top),width:round(width),height:round(height)};}",
    "function rectBounds(el,pageRect){return clippedBounds(el.getBoundingClientRect(),pageRect);}",
    "function unionTextRects(rects,pageRect){var filtered=rects.filter(function(rect){return rect.width>0.25&&rect.height>0.25;});if(!filtered.length){return null;}var left=Math.min.apply(null,filtered.map(function(rect){return rect.left;}));var top=Math.min.apply(null,filtered.map(function(rect){return rect.top;}));var right=Math.max.apply(null,filtered.map(function(rect){return rect.right;}));var bottom=Math.max.apply(null,filtered.map(function(rect){return rect.bottom;}));return clippedBounds({left:left,top:top,right:right,bottom:bottom},pageRect);}",
    "function transformedText(text, transform, trim){var value=String(text||'').replace(/\\s+/g,' ');if(trim!==false){value=value.trim();}if(!value){return '';}if(transform==='uppercase'){return value.toUpperCase();}if(transform==='lowercase'){return value.toLowerCase();}if(transform==='capitalize'){return value.replace(/\\b\\S/g,function(ch){return ch.toUpperCase();});}return value;}",
    "function firstFontFamily(value){var families=String(value||'Arial').split(',');for(var i=0;i<families.length;i+=1){var family=families[i].replace(/[\"']/g,'').trim();if(family){return family;}}return 'Arial';}",
    "function textStyle(el){var style=getComputedStyle(el);var fontSize=parseCssNumber(style.fontSize)||12;var lineHeight=parseCssNumber(style.lineHeight)||fontSize*1.2;var letterSpacing=style.letterSpacing==='normal'?0:parseCssNumber(style.letterSpacing);return {fontFamily:firstFontFamily(style.fontFamily),fontSize:round(fontSize),lineHeight:round(lineHeight),fontWeight:String(style.fontWeight||'400'),fontStyle:String(style.fontStyle||'normal'),color:colorHex(style.color)||'#000000',textAlign:String(style.textAlign||'left'),letterSpacing:round(letterSpacing),textTransform:String(style.textTransform||'none')};}",
    "function addShape(items, bounds, color, role){if(!bounds||!color){return;}items.push({type:'shape',role:role||'fill',bounds:bounds,color:color});}",
    "function collectElementPaint(el,page,pageRect,items){if(isHiddenElement(el)){return;}var bounds=rectBounds(el,pageRect);if(!bounds){return;}var style=getComputedStyle(el);var bg=colorHex(style.backgroundColor);var isPage=el===page;var coversPage=isPage||bounds.width>pageRect.width-1&&bounds.height>pageRect.height-1;if(bg&&!(coversPage&&bg==='#ffffff')){addShape(items,bounds,bg,'background');}var sides=[['Top','top'],['Right','right'],['Bottom','bottom'],['Left','left']];sides.forEach(function(side){var width=parseCssNumber(style['border'+side[0]+'Width']);var color=colorHex(style['border'+side[0]+'Color']);if(width<=0.25||!color){return;}if(side[1]==='top'){addShape(items,{x:bounds.x,y:bounds.y,width:bounds.width,height:round(width)},color,'border');}if(side[1]==='bottom'){addShape(items,{x:bounds.x,y:round(bounds.y+bounds.height-width),width:bounds.width,height:round(width)},color,'border');}if(side[1]==='left'){addShape(items,{x:bounds.x,y:bounds.y,width:round(width),height:bounds.height},color,'border');}if(side[1]==='right'){addShape(items,{x:round(bounds.x+bounds.width-width),y:bounds.y,width:round(width),height:bounds.height},color,'border');}});}",
    "function collectImage(el,pageRect,items){var imageRect=el.getBoundingClientRect();var slot=el.closest('.editable-photo-slot');var bounds=clippedBounds(slot?slot.getBoundingClientRect():imageRect,pageRect);if(!bounds){return;}var style=getComputedStyle(el);var naturalWidth=el.naturalWidth||imageRect.width;var naturalHeight=el.naturalHeight||imageRect.height;var width=imageRect.width;var height=imageRect.height;var fit=style.objectFit||'fill';if(fit==='cover'||fit==='contain'||fit==='scale-down'){var factor=(fit==='cover'?Math.max:Math.min)(width/naturalWidth,height/naturalHeight);if(fit==='scale-down'){factor=Math.min(1,factor);}width=naturalWidth*factor;height=naturalHeight*factor;}var position=String(style.objectPosition||'50% 50%').split(' ');function fraction(value){return /%$/.test(value)?parseFloat(value)/100:0.5;}var left=imageRect.left+(imageRect.width-width)*fraction(position[0]);var top=imageRect.top+(imageRect.height-height)*fraction(position[1]||position[0]);items.push({type:'image',bounds:bounds,graphicBounds:{x:round(left-pageRect.left-bounds.x),y:round(top-pageRect.top-bounds.y),width:round(width),height:round(height)},src:el.currentSrc||el.src||el.getAttribute('src')||'',alt:el.alt||'',objectFit:fit,objectPosition:style.objectPosition||'50% 50%',naturalWidth:el.naturalWidth||0,naturalHeight:el.naturalHeight||0});}",
    "function shouldSkipTextParent(el){if(!el||el.nodeType!==1){return true;}var tag=el.tagName;return tag==='SCRIPT'||tag==='STYLE'||tag==='NOSCRIPT'||tag==='TEXTAREA'||tag==='INPUT'||tag==='SELECT'||tag==='OPTION'||tag==='BUTTON'||!!el.closest('.photo-slot-tools');}",
    "function styleKey(style){return [style.fontFamily,style.fontSize,style.lineHeight,style.fontWeight,style.fontStyle,style.color,style.textAlign,style.letterSpacing].join('|');}",
    "function pushRun(runs,text,style){if(!text){return;}var last=runs[runs.length-1];if(last&&styleKey(last.style)===styleKey(style)){last.text+=text;}else{runs.push({text:text,style:style});}}",
    "function trimRuns(runs){while(runs.length&&/^\\s*$/.test(runs[0].text)){runs.shift();}while(runs.length&&/^\\s*$/.test(runs[runs.length-1].text)){runs.pop();}if(runs.length){runs[0].text=runs[0].text.replace(/^\\s+/,'');runs[runs.length-1].text=runs[runs.length-1].text.replace(/\\s+$/,'');}return runs.filter(function(run){return !!run.text;});}",
    "function collectInlineRuns(node,runs,root){Array.prototype.slice.call(node.childNodes||[]).forEach(function(child){if(child.nodeType===3){var parent=child.parentElement;if(shouldSkipTextParent(parent)||isHiddenElement(parent)){return;}var style=textStyle(parent);pushRun(runs,transformedText(child.nodeValue,style.textTransform,false),style);return;}if(child.nodeType!==1||isHiddenElement(child)){return;}if(child.tagName==='BR'){pushRun(runs,'\\n',textStyle(child.parentElement||root));return;}if((child.tagName==='UL'||child.tagName==='OL')&&child!==root){return;}collectInlineRuns(child,runs,root);});}",
    "function paragraphFromElement(el,prefix){var runs=[];if(prefix){pushRun(runs,prefix,textStyle(el));}collectInlineRuns(el,runs,el);runs=trimRuns(runs);return runs.length?{style:textStyle(el),runs:runs}:null;}",
    "function listParagraphs(list){var ordered=list.tagName==='OL';var start=parseInt(list.getAttribute('start')||'1',10);if(!isFinite(start)){start=1;}return Array.prototype.slice.call(list.children||[]).filter(function(child){return child.tagName==='LI'&&!isHiddenElement(child);}).map(function(li,index){var liStyle=getComputedStyle(li);var prefix='';if(liStyle.listStyleType&&liStyle.listStyleType!=='none'){prefix=ordered?String(start+index)+'. ':'\\u2022 ';}return paragraphFromElement(li,prefix);}).filter(Boolean);}",
    "function hasBlockTextChild(el){return Array.prototype.slice.call(el.children||[]).some(function(child){if(!String(child.textContent||'').trim()){return false;}var display=getComputedStyle(child).display;return display!=='inline'&&display!=='inline-block'&&display!=='contents';});}",
    "function isTextGroup(el,page){if(el===page||!String(el.textContent||'').trim()){return false;}if(el.tagName==='UL'||el.tagName==='OL'){return true;}if(/^(P|H1|H2|H3|H4|H5|H6|BLOCKQUOTE|FIGCAPTION|TD|TH|LABEL)$/.test(el.tagName)){return true;}var display=getComputedStyle(el).display;return (display==='block'||display==='list-item'||display==='table-cell'||display==='flex')&&!hasBlockTextChild(el);}",
    "function collectTextGroup(el,pageRect,items){var isList=el.tagName==='UL'||el.tagName==='OL';var paragraphs=isList?listParagraphs(el):[paragraphFromElement(el,'')].filter(Boolean);if(!paragraphs.length){return;}var range=document.createRange();range.selectNodeContents(el);var rects=Array.prototype.slice.call(range.getClientRects());range.detach();var bounds=unionTextRects(rects,pageRect);var box=rectBounds(el,pageRect);if(!bounds){bounds=box;}if(!bounds){return;}if(box){var left=isList?Math.max(box.x,bounds.x-(Number(paragraphs[0].style.fontSize)||12)*1.25):box.x;var right=Math.max(bounds.x+bounds.width,box.x+box.width);bounds.x=round(left);bounds.width=round(right-left);}var text=paragraphs.map(function(paragraph){return paragraph.runs.map(function(run){return run.text;}).join('');}).join('\\n');items.push({type:'text',bounds:bounds,text:text,style:paragraphs[0].style,paragraphs:paragraphs,tag:el.tagName||''});}",
    "function walk(node,page,pageRect,items,skipText){if(node.nodeType!==1){return;}var el=node;if(isHiddenElement(el)){return;}if(!skipText||el.tagName==='IMG'){collectElementPaint(el,page,pageRect,items);}if(el.tagName==='IMG'){collectImage(el,pageRect,items);return;}if(!skipText&&isTextGroup(el,page)){collectTextGroup(el,pageRect,items);skipText=true;}Array.prototype.slice.call(el.childNodes||[]).forEach(function(child){walk(child,page,pageRect,items,skipText);});}",
    "function extract(){var page=document.querySelector('.proposal-page')||document.body;var pageRect=page.getBoundingClientRect();var items=[];walk(page,page,pageRect,items);return {width:round(pageRect.width),height:round(pageRect.height),items:items};}",
    "ready().then(function(){var pre=document.createElement('pre');pre.id='proposal-bot-layout-json';pre.textContent=encodeBase64(JSON.stringify(extract()));document.body.appendChild(pre);document.documentElement.setAttribute('data-layout-json-ready','true');}).catch(function(error){document.documentElement.setAttribute('data-layout-json-error',String(error&&error.stack||error));});",
    "}());",
    "</script>"
  ].join("");
}

function parseLayoutDump(stdout, pageNumber, width, height) {
  const match = String(stdout || "").match(/<pre[^>]+id=["']proposal-bot-layout-json["'][^>]*>([\s\S]*?)<\/pre>/i);
  if (!match) {
    const errorMatch = String(stdout || "").match(/data-layout-json-error=["']([^"']*)["']/i);
    const detail = errorMatch ? " " + decodeHtmlAttribute(errorMatch[1]) : "";
    throw new Error("Could not read editable layout data for proposal page " + pageNumber + "." + detail);
  }
  const encoded = match[1].replace(/\s+/g, "");
  let parsed = null;
  try {
    parsed = JSON.parse(Buffer.from(encoded, "base64").toString("utf8"));
  } catch (error) {
    throw new Error("The editable layout data for proposal page " + pageNumber + " could not be parsed.");
  }
  const items = Array.isArray(parsed.items) ? parsed.items : [];
  return {
    width: Number(parsed.width) || width,
    height: Number(parsed.height) || height,
    items: items.filter((item) => item && item.type && item.bounds)
  };
}

function decodeHtmlAttribute(value) {
  return String(value || "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

async function renderProposalPageFiles(pages, stylesText, bodyClasses, baseUrl, scratchDir) {
  const executablePath = detectChromiumExecutable();
  const pagesDir = path.join(scratchDir, "rendered-pages");
  fs.mkdirSync(pagesDir, { recursive: true });
  const rendered = [];
  for (let index = 0; index < pages.length; index += 1) {
    const pageDef = pages[index];
    const width = Math.max(1, Number(pageDef.width) || 816);
    const height = Math.max(1, Number(pageDef.height) || 1056);
    const htmlPath = path.join(pagesDir, "page-" + (index + 1) + ".html");
    const pngPath = path.join(pagesDir, "page-" + (index + 1) + ".png");
    const profilePath = path.join(scratchDir, "profile-" + (index + 1));
    fs.writeFileSync(htmlPath, buildCaptureHtml(pageDef.html || "", stylesText, width, height, bodyClasses, baseUrl), "utf8");
    await captureScreenshot(executablePath, [
      "--headless",
      "--no-first-run",
      "--disable-background-networking",
      "--disable-extensions",
      "--disable-gpu",
      "--disable-gpu-compositing",
      "--disable-accelerated-2d-canvas",
      "--disable-3d-apis",
      "--disable-features=UseGraphiteDawn,Vulkan,CalculateNativeWinOcclusion",
      "--allow-file-access-from-files",
      "--hide-scrollbars",
      "--run-all-compositor-stages-before-draw",
      "--force-device-scale-factor=2",
      "--user-data-dir=" + profilePath,
      "--virtual-time-budget=2500",
      "--window-size=" + width + "," + height,
      "--screenshot=" + pngPath,
      pathToFileURL(htmlPath).href
    ], pngPath);
    rendered.push({ filePath: pngPath, width, height });
  }
  return rendered;
}

async function buildEditableNativeInDesignPackageBuffer(layoutPages, pageSize, filenameBase) {
  const scratchDir = fs.mkdtempSync(path.join(os.tmpdir(), "proposal-bot-native-indesign-"));
  try {
    const safeBase = safeFilename(filenameBase || "proposal");
    const packageFolderName = safeBase + "-indesign-package";
    const packageDir = path.join(scratchDir, packageFolderName);
    const linksDir = path.join(packageDir, "Links");
    const inddPath = path.join(packageDir, safeBase + ".indd");
    const idmlPath = path.join(packageDir, safeBase + ".idml");
    const layoutPath = path.join(scratchDir, "editable-layout.json");
    const jsxPath = path.join(scratchDir, "build-editable-indesign-package.jsx");
    const psPath = path.join(scratchDir, "run-editable-indesign-package.ps1");
    const logPath = path.join(scratchDir, "editable-indesign-package.log");
    const width = Number(pageSize.width) || 612;
    const height = Number(pageSize.height) || 792;

    fs.mkdirSync(linksDir, { recursive: true });
    const layout = prepareEditableNativeLayout(layoutPages, width, height, linksDir);
    layout.inddPath = toInDesignPath(inddPath);
    layout.idmlPath = toInDesignPath(idmlPath);
    layout.logPath = toInDesignPath(logPath);

    fs.writeFileSync(layoutPath, JSON.stringify(layout), "utf8");
    fs.writeFileSync(jsxPath, buildEditableNativeInDesignJsx(layoutPath), "utf8");
    fs.writeFileSync(psPath, buildRunInDesignPowerShell(jsxPath), "utf8");

    await runProcess("powershell.exe", [
      "-STA",
      "-NoProfile",
      "-ExecutionPolicy",
      "Bypass",
      "-File",
      psPath
    ], { timeoutMs: 300000 });

    if (!fs.existsSync(inddPath)) {
      const logText = fs.existsSync(logPath) ? fs.readFileSync(logPath, "utf8") : "";
      throw new Error("InDesign did not create the editable .indd file." + (logText ? "\n" + logText : ""));
    }

    fs.writeFileSync(path.join(packageDir, "README.txt"), [
      "Editable InDesign proposal package",
      "",
      "Unzip this folder before opening the InDesign file.",
      "Open the .indd file first. The .idml file is included as a compatibility copy.",
      "Keep the Links folder beside the InDesign file so all proposal photos stay linked.",
      "",
      "Open: " + safeBase + ".indd"
    ].join("\r\n"), "utf8");

    return zipDirectoryBuffer(packageDir, packageFolderName);
  } finally {
    removeScratchDirectory(scratchDir);
  }
}

function buildEditableInDesignPackageBufferFromLayout(layoutPages, pageSize, filenameBase) {
  const scratchDir = fs.mkdtempSync(path.join(os.tmpdir(), "proposal-bot-editable-idml-"));
  try {
    const safeBase = safeFilename(filenameBase || "proposal");
    const folderName = safeBase + "-indesign-package";
    const linksDir = path.join(scratchDir, "Links");
    const width = Number(pageSize.width) || 612;
    const height = Number(pageSize.height) || 792;
    fs.mkdirSync(linksDir, { recursive: true });
    const layout = prepareEditableNativeLayout(layoutPages, width, height, linksDir);
    const idmlBuffer = buildEditableInDesignIdmlBuffer(layout);
    const entries = [
      {
        name: folderName + "/" + safeBase + ".idml",
        bytes: idmlBuffer
      },
      {
        name: folderName + "/README.txt",
        bytes: Buffer.from([
          "Editable InDesign proposal package",
          "",
          "Unzip this folder before opening the IDML file.",
          "Open the .idml file in InDesign. The proposal text is exported as editable text frames.",
          "Keep the Links folder beside the IDML file so all proposal photos stay linked.",
          "",
          "Open: " + safeBase + ".idml"
        ].join("\r\n"), "utf8")
      }
    ];

    layout.assets.forEach((asset) => {
      entries.push({
        name: folderName + "/Links/" + asset.linkName,
        bytes: asset.bytes
      });
    });

    return createStoredZipBuffer(entries);
  } finally {
    removeScratchDirectory(scratchDir);
  }
}

function buildEditableInDesignIdmlBuffer(layout) {
  const baseFiles = loadIdmlBaseFiles();
  const width = Number(layout.width) || 612;
  const height = Number(layout.height) || 792;
  const spreadDescriptors = [];
  const storyDescriptors = [];
  let storyIndex = 1;
  let itemIndex = 1;
  const entries = [
    { name: "mimetype", bytes: Buffer.from("application/vnd.adobe.indesign-idml-package", "utf8") },
    { name: "META-INF/container.xml", bytes: Buffer.from(baseFiles["META-INF/container.xml"] || "", "utf8") },
    { name: "META-INF/metadata.xml", bytes: Buffer.from(baseFiles["META-INF/metadata.xml"] || "", "utf8") },
    { name: "Resources/Graphic.xml", bytes: Buffer.from(buildIdmlGraphicXml(baseFiles["Resources/Graphic.xml"] || "", layout.colors || []), "utf8") },
    { name: "Resources/Fonts.xml", bytes: Buffer.from(baseFiles["Resources/Fonts.xml"] || "", "utf8") },
    { name: "Resources/Styles.xml", bytes: Buffer.from(baseFiles["Resources/Styles.xml"] || "", "utf8") },
    { name: "Resources/Preferences.xml", bytes: Buffer.from(baseFiles["Resources/Preferences.xml"] || "", "utf8") },
    { name: "XML/Tags.xml", bytes: Buffer.from(baseFiles["XML/Tags.xml"] || "", "utf8") },
    { name: "XML/BackingStory.xml", bytes: Buffer.from(baseFiles["XML/BackingStory.xml"] || "", "utf8") },
    { name: "MasterSpreads/MasterSpread_uca.xml", bytes: Buffer.from(buildIdmlMasterSpreadXml(width, height), "utf8") }
  ];

  (layout.pages || []).forEach((page, index) => {
    const pageNumber = index + 1;
    const spreadSelf = "pbSpread" + pageNumber;
    const pageSelf = "pbPage" + pageNumber;
    const spreadPath = "Spreads/Spread_" + spreadSelf + ".xml";
    const pageItems = (page.items || []).map((item) => {
      const next = { ...item, self: "pbItem" + itemIndex };
      itemIndex += 1;
      if (item.type === "text") {
        next.storySelf = "pbStory" + storyIndex;
        storyIndex += 1;
        storyDescriptors.push({ storySelf: next.storySelf });
        entries.push({
          name: "Stories/Story_" + next.storySelf + ".xml",
          bytes: Buffer.from(buildIdmlStoryXml(next), "utf8")
        });
      }
      return next;
    });
    spreadDescriptors.push({ spreadPath, pageSelf });
    entries.push({
      name: spreadPath,
      bytes: Buffer.from(buildEditableIdmlSpreadXml(spreadSelf, pageSelf, pageNumber, width, height, pageItems), "utf8")
    });
  });

  (layout.assets || []).forEach((asset) => {
    entries.push({
      name: "Links/" + asset.linkName,
      bytes: asset.bytes
    });
  });

  entries.splice(2, 0, {
    name: "designmap.xml",
    bytes: Buffer.from(buildIdmlDesignmapXml(baseFiles["designmap.xml"] || "", spreadDescriptors, storyDescriptors), "utf8")
  });

  return createStoredZipBuffer(entries);
}

function buildIdmlGraphicXml(template, colors) {
  const extraColors = (colors || [])
    .map((color) => normalizeHexColor(color))
    .filter((color) => color && color !== "000000" && color !== "ffffff")
    .filter((color, index, all) => all.indexOf(color) === index)
    .map((color) => {
      const r = parseInt(color.slice(0, 2), 16);
      const g = parseInt(color.slice(2, 4), 16);
      const b = parseInt(color.slice(4, 6), 16);
      const self = idmlColorSelf(color);
      return '\t<Color Self="' + self + '" Model="Process" Space="RGB" ColorValue="' + r + " " + g + " " + b + '" ColorOverride="Normal" AlternateSpace="NoAlternateColor" AlternateColorValue="" Name="PB #' + color.toUpperCase() + '" ColorEditable="true" ColorRemovable="true" Visible="true" SwatchCreatorID="7937"/>';
    });
  if (!extraColors.length) {
    return template;
  }
  return String(template || "").replace(/\n\t<Ink /, "\n" + extraColors.join("\n") + "\n\t<Ink ");
}

function buildEditableIdmlSpreadXml(spreadSelf, pageSelf, pageNumber, width, height, items) {
  const pageX = -width / 2;
  const pageY = -height / 2;
  const itemXml = (items || []).map((item) => {
    if (item.type === "shape") {
      return buildIdmlShapeXml(item, pageX, pageY);
    }
    if (item.type === "image") {
      return buildIdmlImageFrameXml(item, pageX, pageY);
    }
    if (item.type === "text") {
      return buildIdmlTextFrameXml(item, pageX, pageY);
    }
    return "";
  }).filter(Boolean).join("\n");
  return [
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    '<idPkg:Spread xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="7.5">',
    '\t<Spread Self="' + spreadSelf + '" FlattenerOverride="Default" AllowPageShuffle="true" ItemTransform="1 0 0 1 0 0" ShowMasterItems="true" PageCount="1" BindingLocation="0" PageTransitionType="None" PageTransitionDirection="NotApplicable" PageTransitionDuration="Medium">',
    '\t\t<FlattenerPreference LineArtAndTextResolution="300" GradientAndMeshResolution="150" ClipComplexRegions="false" ConvertAllStrokesToOutlines="false" ConvertAllTextToOutlines="false"><Properties><RasterVectorBalance type="double">50</RasterVectorBalance></Properties></FlattenerPreference>',
    '\t\t<Page Self="' + pageSelf + '" GeometricBounds="0 0 ' + fmtPoint(height) + " " + fmtPoint(width) + '" ItemTransform="1 0 0 1 ' + fmtPoint(pageX) + " " + fmtPoint(pageY) + '" Name="' + pageNumber + '" AppliedTrapPreset="TrapPreset/$ID/kDefaultTrapStyleName" OverrideList="" AppliedMaster="n" MasterPageTransform="1 0 0 1 0 0" TabOrder="" GridStartingPoint="TopOutside" UseMasterGrid="false">',
    '\t\t\t<Properties><Descriptor type="list"><ListItem type="string"></ListItem><ListItem type="enumeration">Arabic</ListItem><ListItem type="boolean">true</ListItem><ListItem type="boolean">false</ListItem><ListItem type="long">' + pageNumber + '</ListItem><ListItem type="string"></ListItem></Descriptor><PageColor type="enumeration">UseMasterColor</PageColor></Properties>',
    '\t\t\t<MarginPreference ColumnCount="1" ColumnGutter="12" Top="0" Bottom="0" Left="0" Right="0" ColumnDirection="Horizontal" ColumnsPositions="0 ' + fmtPoint(width) + '"/>',
    '\t\t\t<GridDataInformation FontStyle="Regular" PointSize="12" CharacterAki="0" LineAki="9" HorizontalScale="100" VerticalScale="100" LineAlignment="LeftOrTopLineJustify" GridAlignment="AlignEmCenter" CharacterAlignment="AlignEmCenter"><Properties><AppliedFont type="string">Minion Pro</AppliedFont></Properties></GridDataInformation>',
    "\t\t</Page>",
    itemXml,
    "\t</Spread>",
    "</idPkg:Spread>"
  ].join("\n");
}

function buildIdmlShapeXml(item, pageX, pageY) {
  const b = item.bounds || {};
  const x = pageX + (Number(b.x) || 0);
  const y = pageY + (Number(b.y) || 0);
  const w = Math.max(0.25, Number(b.width) || 0);
  const h = Math.max(0.25, Number(b.height) || 0);
  return [
    '\t\t<Rectangle Self="' + item.self + '" ContentType="Unassigned" StoryTitle="$ID/" ParentInterfaceChangeCount="" TargetInterfaceChangeCount="" LastUpdatedInterfaceChangeCount="" OverriddenPageItemProps="" HorizontalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" VerticalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" FlexItemWidthMode="FlexFixed" FlexItemHeightMode="FlexFixed" FillColor="' + idmlSwatchForHex(item.color) + '" StrokeWeight="0" StrokeColor="Swatch/None" GradientFillStart="0 0" GradientFillLength="0" GradientFillAngle="0" GradientStrokeStart="0 0" GradientStrokeLength="0" GradientStrokeAngle="0" ItemLayer="ub3" Locked="false" LocalDisplaySetting="Default" GradientFillHiliteLength="0" GradientFillHiliteAngle="0" GradientStrokeHiliteLength="0" GradientStrokeHiliteAngle="0" AppliedObjectStyle="ObjectStyle/$ID/[None]" Visible="true" Name="$ID/" ItemTransform="1 0 0 1 ' + fmtPoint(x) + " " + fmtPoint(y) + '">',
    "\t\t\t<Properties>" + rectanglePathGeometryXml(w, h) + "</Properties>",
    textWrapNoneXml("\t\t\t"),
    "\t\t</Rectangle>"
  ].join("\n");
}

function buildIdmlTextFrameXml(item, pageX, pageY) {
  const b = item.bounds || {};
  const x = pageX + (Number(b.x) || 0);
  const y = pageY + (Number(b.y) || 0);
  const w = Math.max(1, Number(b.width) || 1);
  const h = Math.max(1, Number(b.height) || 1);
  return [
    '\t\t<TextFrame Self="' + item.self + '" ParentStory="' + item.storySelf + '" PreviousTextFrame="n" NextTextFrame="n" ContentType="TextType" ParentInterfaceChangeCount="" TargetInterfaceChangeCount="" LastUpdatedInterfaceChangeCount="" OverriddenPageItemProps="" HorizontalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" VerticalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" FlexItemWidthMode="FlexFixed" FlexItemHeightMode="FlexFixed" GradientFillStart="0 0" GradientFillLength="0" GradientFillAngle="0" GradientStrokeStart="0 0" GradientStrokeLength="0" GradientStrokeAngle="0" ItemLayer="ub3" Locked="false" LocalDisplaySetting="Default" GradientFillHiliteLength="0" GradientFillHiliteAngle="0" GradientStrokeHiliteLength="0" GradientStrokeHiliteAngle="0" AppliedObjectStyle="ObjectStyle/$ID/[Normal Text Frame]" Visible="true" Name="$ID/" ItemTransform="1 0 0 1 ' + fmtPoint(x) + " " + fmtPoint(y) + '">',
    "\t\t\t<Properties>" + rectanglePathGeometryXml(w, h) + "</Properties>",
    '\t\t\t<TextFramePreference TextColumnCount="1" TextColumnFixedWidth="' + fmtPoint(w * 12) + '" TextColumnMaxWidth="0"><Properties><InsetSpacing type="list"><ListItem type="unit">0</ListItem><ListItem type="unit">0</ListItem><ListItem type="unit">0</ListItem><ListItem type="unit">0</ListItem></InsetSpacing></Properties></TextFramePreference>',
    textWrapNoneXml("\t\t\t"),
    objectExportOptionXml("\t\t\t"),
    "\t\t</TextFrame>"
  ].join("\n");
}

function buildIdmlImageFrameXml(item, pageX, pageY) {
  const b = item.bounds || {};
  const x = pageX + (Number(b.x) || 0);
  const y = pageY + (Number(b.y) || 0);
  const w = Math.max(1, Number(b.width) || 1);
  const h = Math.max(1, Number(b.height) || 1);
  const linkName = path.basename(String(item.filePath || "").replace(/\\/g, "/"));
  const linkPath = "Links/" + linkName;
  const imageSelf = item.self + "Image";
  const linkSelf = item.self + "Link";
  const format = idmlImageFormat(linkName);
  const graphic = item.imageBounds || { x: 0, y: 0, width: w, height: h };
  let linkSize = "0~0";
  try {
    const stats = fs.statSync(String(item.filePath || ""));
    linkSize = "0~" + Math.max(0, Number(stats.size) || 0).toString(16);
  } catch (error) {
    linkSize = "0~0";
  }
  return [
    '\t\t<Rectangle Self="' + item.self + '" ContentType="GraphicType" StoryTitle="$ID/" ParentInterfaceChangeCount="" TargetInterfaceChangeCount="" LastUpdatedInterfaceChangeCount="" OverriddenPageItemProps="" HorizontalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" VerticalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" FlexItemWidthMode="FlexFixed" FlexItemHeightMode="FlexFixed" StrokeWeight="0" StrokeColor="Swatch/None" GradientFillStart="0 0" GradientFillLength="0" GradientFillAngle="0" GradientStrokeStart="0 0" GradientStrokeLength="0" GradientStrokeAngle="0" ItemLayer="ub3" Locked="false" LocalDisplaySetting="Default" GradientFillHiliteLength="0" GradientFillHiliteAngle="0" GradientStrokeHiliteLength="0" GradientStrokeHiliteAngle="0" AppliedObjectStyle="ObjectStyle/$ID/[Normal Graphics Frame]" Visible="true" Name="$ID/" ItemTransform="1 0 0 1 ' + fmtPoint(x) + " " + fmtPoint(y) + '">',
    "\t\t\t<Properties>" + rectanglePathGeometryXml(w, h) + "</Properties>",
    textWrapNoneXml("\t\t\t"),
    '\t\t\t<InCopyExportOption IncludeGraphicProxies="true" IncludeAllResources="false"/>',
    '\t\t\t<FrameFittingOption AutoFit="false" LeftCrop="0" TopCrop="0" RightCrop="0" BottomCrop="0" FittingOnEmptyFrame="' + (item.imageBounds ? 'None' : idmlFittingMode(item.fit)) + '" FittingAlignment="CenterAnchor"/>',
    objectExportOptionXml("\t\t\t"),
    '\t\t\t<Image Self="' + imageSelf + '" Space="$ID/#Links_RGB" ActualPpi="96 96" EffectivePpi="96 96" ImageRenderingIntent="UseColorSettings" OverriddenPageItemProps="" LocalDisplaySetting="Default" ImageTypeName="' + format.typeName + '" AppliedObjectStyle="ObjectStyle/$ID/[None]" ItemTransform="1 0 0 1 ' + fmtPoint(graphic.x) + ' ' + fmtPoint(graphic.y) + '" ParentInterfaceChangeCount="" TargetInterfaceChangeCount="" LastUpdatedInterfaceChangeCount="" HorizontalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" VerticalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" FlexItemWidthMode="FlexFixed" FlexItemHeightMode="FlexFixed" GradientFillStart="0 0" GradientFillLength="0" GradientFillAngle="0" GradientFillHiliteLength="0" GradientFillHiliteAngle="0" Visible="true" Name="$ID/">',
    '\t\t\t\t<Properties><Profile type="string">$ID/None</Profile><GraphicBounds Left="0" Top="0" Right="' + fmtPoint(graphic.width) + '" Bottom="' + fmtPoint(graphic.height) + '"/></Properties>',
    textWrapNoneXml("\t\t\t\t"),
    '\t\t\t\t<Link Self="' + linkSelf + '" AssetURL="$ID/" AssetID="$ID/" RenditionData="Actual" LinkResourceURI="file:' + escapeXmlAttribute(linkPath) + '" PDFIdentifier="0" LinkResourceFormat="' + format.resourceFormat + '" StoredState="Normal" LinkClassID="35906" LinkClientID="257" LinkResourceModified="false" LinkObjectModified="false" ShowInUI="true" CanEmbed="true" CanUnembed="true" CanPackage="true" ImportPolicy="NoAutoImport" ExportPolicy="NoAutoExport" LinkResourceSize="' + linkSize + '"/>',
    '\t\t\t\t<ClippingPathSettings ClippingType="None" InvertPath="false" IncludeInsideEdges="false" RestrictToFrame="false" UseHighResolutionImage="true" Threshold="25" Tolerance="2" InsetFrame="0" AppliedPathName="$ID/" Index="-1"/>',
    '\t\t\t\t<ImageIOPreference ApplyPhotoshopClippingPath="true" AllowAutoEmbedding="true" AlphaChannelName="$ID/"/>',
    "\t\t\t</Image>",
    "\t\t</Rectangle>"
  ].join("\n");
}

function buildIdmlCharacterStyleRangeXml(run, appendParagraphBreak) {
  const fontFamily = escapeXmlText(run.fontFamily || "Arial");
  const fontStyle = escapeXmlAttribute(run.fontStyle || "Regular");
  const pointSize = fmtPoint(run.pointSize || 12);
  const leading = fmtPoint(run.leading || (Number(run.pointSize) || 12) * 1.2);
  const fillColor = idmlSwatchForHex(run.color || "000000");
  const tracking = Number(run.tracking) || 0;
  const parts = String(run.text || "").split("\n");
  const contentXml = parts.map((part, index) => {
    const content = part ? "\t\t\t\t<Content>" + escapeXmlText(part) + "</Content>" : "";
    return content + (index < parts.length - 1 ? "\n\t\t\t\t<Br/>" : "");
  }).join("\n") + (appendParagraphBreak ? "\n\t\t\t\t<Br/>" : "");
  return [
    '\t\t\t<CharacterStyleRange AppliedCharacterStyle="CharacterStyle/$ID/[No character style]" FontStyle="' + fontStyle + '" PointSize="' + pointSize + '" Leading="' + leading + '" FillColor="' + fillColor + '" Tracking="' + tracking + '">',
    "\t\t\t\t<Properties><AppliedFont type=\"string\">" + fontFamily + "</AppliedFont></Properties>",
    contentXml,
    "\t\t\t</CharacterStyleRange>"
  ].filter(Boolean).join("\n");
}

function buildIdmlStoryXml(item) {
  const paragraphs = Array.isArray(item.paragraphs) && item.paragraphs.length
    ? item.paragraphs
    : [{
        justification: item.justification,
        runs: [{
          text: item.text || "",
          fontFamily: item.fontFamily,
          fontStyle: item.fontStyle,
          pointSize: item.pointSize,
          leading: item.leading,
          tracking: item.tracking,
          color: item.color
        }]
      }];
  const paragraphXml = paragraphs.map((paragraph, paragraphIndex) => {
    const runs = Array.isArray(paragraph.runs) ? paragraph.runs : [];
    const runXml = runs.map((run, runIndex) => buildIdmlCharacterStyleRangeXml(
      run,
      paragraphIndex < paragraphs.length - 1 && runIndex === runs.length - 1
    )).join("\n");
    return [
      '\t\t<ParagraphStyleRange AppliedParagraphStyle="ParagraphStyle/$ID/NormalParagraphStyle" Justification="' + idmlJustification(paragraph.justification || item.justification) + '">',
      runXml,
      "\t\t</ParagraphStyleRange>"
    ].join("\n");
  }).join("\n");
  return [
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    '<idPkg:Story xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="7.5">',
    '\t<Story Self="' + item.storySelf + '" AppliedTOCStyle="n" UserText="true" TrackChanges="false" StoryTitle="$ID/" AppliedNamedGrid="n">',
    '\t\t<StoryPreference OpticalMarginAlignment="false" OpticalMarginSize="12" FrameType="TextFrameType" StoryOrientation="Horizontal" StoryDirection="LeftToRightDirection"/>',
    '\t\t<InCopyExportOption IncludeGraphicProxies="true" IncludeAllResources="false"/>',
    paragraphXml,
    "\t</Story>",
    "</idPkg:Story>"
  ].join("\n");
}

function rectanglePathGeometryXml(width, height) {
  return [
    "<PathGeometry>",
    '<GeometryPathType PathOpen="false"><PathPointArray>' +
      '<PathPointType Anchor="0 0" LeftDirection="0 0" RightDirection="0 0"/>' +
      '<PathPointType Anchor="0 ' + fmtPoint(height) + '" LeftDirection="0 ' + fmtPoint(height) + '" RightDirection="0 ' + fmtPoint(height) + '"/>' +
      '<PathPointType Anchor="' + fmtPoint(width) + " " + fmtPoint(height) + '" LeftDirection="' + fmtPoint(width) + " " + fmtPoint(height) + '" RightDirection="' + fmtPoint(width) + " " + fmtPoint(height) + '"/>' +
      '<PathPointType Anchor="' + fmtPoint(width) + ' 0" LeftDirection="' + fmtPoint(width) + ' 0" RightDirection="' + fmtPoint(width) + ' 0"/>' +
      "</PathPointArray></GeometryPathType>",
    "</PathGeometry>"
  ].join("");
}

function textWrapNoneXml(indent) {
  return indent + '<TextWrapPreference Inverse="false" ApplyToMasterPageOnly="false" TextWrapSide="BothSides" TextWrapMode="None"><Properties><TextWrapOffset Top="0" Left="0" Bottom="0" Right="0"/></Properties><ContourOption ContourType="SameAsClipping" IncludeInsideEdges="false" ContourPathName="$ID/"/></TextWrapPreference>';
}

function objectExportOptionXml(indent) {
  return indent + '<ObjectExportOption EpubType="$ID/" SizeType="DefaultSize" CustomSize="$ID/" PreserveAppearanceFromLayout="PreserveAppearanceDefault" EpubAriaRole="$ID/" EpubAriaLabel="$ID/" EpubAriaLabelSourceType="AutomaticARIALabel" AltTextSourceType="SourceXMLStructure" ActualTextSourceType="SourceXMLStructure" CustomAltText="$ID/" CustomActualText="$ID/" ApplyTagType="TagFromStructure" ImageConversionType="JPEG" ImageExportResolution="Ppi300" GIFOptionsPalette="AdaptivePalette" GIFOptionsInterlaced="true" JPEGOptionsQuality="High" JPEGOptionsFormat="BaselineEncoding" ImageAlignment="AlignLeft" ImageSpaceBefore="0" ImageSpaceAfter="0" UseImagePageBreak="false" ImagePageBreak="PageBreakBefore" CustomImageAlignment="false" SpaceUnit="CssPixel" CustomLayout="false" CustomLayoutType="AlignmentAndSpacing"><Properties><AltMetadataProperty NamespacePrefix="$ID/" PropertyPath="$ID/"/><ActualMetadataProperty NamespacePrefix="$ID/" PropertyPath="$ID/"/></Properties></ObjectExportOption>';
}

function idmlColorSelf(color) {
  return "Color/pb_" + normalizeHexColor(color);
}

function idmlSwatchForHex(color) {
  const hex = normalizeHexColor(color);
  if (!hex) {
    return "Color/Black";
  }
  if (hex === "000000") {
    return "Color/Black";
  }
  if (hex === "ffffff") {
    return "Color/Paper";
  }
  return idmlColorSelf(hex);
}

function idmlJustification(value) {
  const align = String(value || "").toLowerCase();
  if (align === "center") {
    return "CenterAlign";
  }
  if (align === "right") {
    return "RightAlign";
  }
  if (align === "justify") {
    return "LeftJustified";
  }
  return "LeftAlign";
}

function idmlFittingMode(value) {
  if (value === "contain") {
    return "Proportionally";
  }
  if (value === "stretch") {
    return "ContentToFrame";
  }
  return "FillProportionally";
}

function idmlImageFormat(filename) {
  const ext = path.extname(String(filename || "")).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg") {
    return { typeName: "$ID/JPEG", resourceFormat: "$ID/JPEG" };
  }
  if (ext === ".gif") {
    return { typeName: "$ID/CompuServe GIF (GIF)", resourceFormat: "$ID/CompuServe GIF (GIF)" };
  }
  if (ext === ".webp") {
    return { typeName: "$ID/WEBP", resourceFormat: "$ID/WEBP" };
  }
  return { typeName: "$ID/Portable Network Graphics (PNG)", resourceFormat: "$ID/Portable Network Graphics (PNG)" };
}

function fmtPoint(value) {
  const rounded = Math.round(Number(value || 0) * 1000) / 1000;
  return String(Math.abs(rounded) < 0.0005 ? 0 : rounded);
}

function escapeXmlText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeXmlAttribute(value) {
  return escapeXmlText(value).replace(/"/g, "&quot;");
}

function prepareEditableTextStyle(style, scaleY, colorSet) {
  const source = style || {};
  const color = normalizeHexColor(source.color || "#000000") || "000000";
  colorSet.add(color);
  const sourceFontSize = Number(source.fontSize) || 12;
  const fontSize = Math.max(2, sourceFontSize * scaleY);
  const leading = Math.max(fontSize * 1.05, (Number(source.lineHeight) || sourceFontSize * 1.2) * scaleY);
  const tracking = Number(source.letterSpacing) && sourceFontSize
    ? Math.round((Number(source.letterSpacing) / sourceFontSize) * 1000)
    : 0;
  return {
    fontFamily: inDesignFontFamily(source.fontFamily),
    fontStyle: inDesignFontStyle(source.fontWeight, source.fontStyle, source.fontFamily),
    pointSize: roundNumber(fontSize),
    leading: roundNumber(leading),
    tracking,
    color,
    justification: inDesignJustification(source.textAlign)
  };
}

function prepareEditableTextParagraphs(item, scaleY, colorSet) {
  const sourceParagraphs = Array.isArray(item.paragraphs) && item.paragraphs.length
    ? item.paragraphs
    : [{ style: item.style || {}, runs: [{ text: item.text || "", style: item.style || {} }] }];
  return sourceParagraphs.map((paragraph) => {
    const paragraphStyle = prepareEditableTextStyle(paragraph.style || item.style || {}, scaleY, colorSet);
    const runs = (Array.isArray(paragraph.runs) ? paragraph.runs : []).map((run) => ({
      ...prepareEditableTextStyle(run.style || paragraph.style || item.style || {}, scaleY, colorSet),
      text: String(run.text || "")
    })).filter((run) => run.text);
    return { ...paragraphStyle, runs };
  }).filter((paragraph) => paragraph.runs.length);
}

function prepareEditableNativeLayout(layoutPages, pageWidth, pageHeight, linksDir) {
  const assetMap = new Map();
  const usedLinkNames = new Set();
  const colorSet = new Set();
  const pages = layoutPages.map((page) => {
    const sourceWidth = Number(page.width) || 816;
    const sourceHeight = Number(page.height) || 1056;
    const scaleX = pageWidth / sourceWidth;
    const scaleY = pageHeight / sourceHeight;
    const items = [];
    (Array.isArray(page.items) ? page.items : []).forEach((item) => {
      const bounds = convertExportBounds(item.bounds, scaleX, scaleY, pageWidth, pageHeight);
      if (!bounds) {
        return;
      }
      if (item.type === "shape") {
        const color = normalizeHexColor(item.color);
        if (!color) {
          return;
        }
        colorSet.add(color);
        items.push({ type: "shape", bounds, color });
        return;
      }
      if (item.type === "image") {
        const src = String(item.src || "");
        if (!src) {
          return;
        }
        const asset = getOrCreatePackageImageAsset(src, linksDir, assetMap, usedLinkNames);
        items.push({
          type: "image",
          bounds,
          filePath: toInDesignPath(asset.filePath),
          imageBounds: item.graphicBounds ? {
            x: roundNumber(Number(item.graphicBounds.x) * scaleX),
            y: roundNumber(Number(item.graphicBounds.y) * scaleY),
            width: roundNumber(Number(item.graphicBounds.width) * scaleX),
            height: roundNumber(Number(item.graphicBounds.height) * scaleY)
          } : null,
          fit: imageFitMode(item.objectFit)
        });
        return;
      }
      if (item.type === "text") {
        const paragraphs = prepareEditableTextParagraphs(item, scaleY, colorSet);
        if (!paragraphs.length) {
          return;
        }
        const baseStyle = paragraphs[0];
        const fontSize = Math.max(...paragraphs.flatMap((paragraph) => paragraph.runs.map((run) => Number(run.pointSize) || 0)), Number(baseStyle.pointSize) || 12);
        const textBounds = padTextBounds(bounds, fontSize, pageWidth, pageHeight);
        const text = paragraphs.map((paragraph) => paragraph.runs.map((run) => run.text).join("")).join("\n");
        items.push({
          type: "text",
          bounds: textBounds,
          text,
          tag: item.tag || "",
          paragraphs,
          fontFamily: baseStyle.fontFamily,
          fontStyle: baseStyle.fontStyle,
          pointSize: baseStyle.pointSize,
          leading: baseStyle.leading,
          tracking: baseStyle.tracking,
          color: baseStyle.color,
          justification: baseStyle.justification
        });
      }
    });
    return { items };
  });

  return {
    width: roundNumber(pageWidth),
    height: roundNumber(pageHeight),
    colors: Array.from(colorSet).sort(),
    assets: Array.from(assetMap.values()).map((asset) => ({
      filePath: asset.filePath,
      linkName: asset.linkName,
      bytes: asset.bytes,
      extension: asset.extension
    })),
    pages
  };
}

function convertExportBounds(bounds, scaleX, scaleY, pageWidth, pageHeight) {
  if (!bounds) {
    return null;
  }
  const x = Math.max(0, Number(bounds.x) || 0) * scaleX;
  const y = Math.max(0, Number(bounds.y) || 0) * scaleY;
  const width = Math.max(0, Number(bounds.width) || 0) * scaleX;
  const height = Math.max(0, Number(bounds.height) || 0) * scaleY;
  const right = Math.min(pageWidth, x + width);
  const bottom = Math.min(pageHeight, y + height);
  const safeWidth = right - Math.min(pageWidth, x);
  const safeHeight = bottom - Math.min(pageHeight, y);
  if (safeWidth <= 0.25 || safeHeight <= 0.25) {
    return null;
  }
  return {
    x: roundNumber(Math.min(pageWidth, x)),
    y: roundNumber(Math.min(pageHeight, y)),
    width: roundNumber(safeWidth),
    height: roundNumber(safeHeight)
  };
}

function padTextBounds(bounds, fontSize, pageWidth, pageHeight) {
  const topPad = Math.max(1, fontSize * 0.2);
  const bottomPad = Math.max(2, fontSize * 0.45);
  const sidePad = 0.5;
  const x = Math.max(0, bounds.x - sidePad);
  const y = Math.max(0, bounds.y - topPad);
  const right = Math.min(pageWidth, bounds.x + bounds.width + sidePad);
  const bottom = Math.min(pageHeight, bounds.y + bounds.height + bottomPad);
  return {
    x: roundNumber(x),
    y: roundNumber(y),
    width: roundNumber(Math.max(1, right - x)),
    height: roundNumber(Math.max(fontSize * 1.2, bottom - y))
  };
}

function getOrCreatePackageImageAsset(src, linksDir, assetMap, usedLinkNames) {
  if (assetMap.has(src)) {
    return assetMap.get(src);
  }
  const source = readImageSource(src);
  if (!source) {
    throw new Error("The InDesign export could not find this linked proposal image: " + src);
  }
  const extension = source.extension || ".png";
  const baseName = safeFilename(source.name ? path.basename(source.name, path.extname(source.name)) : "proposal-image");
  let linkName = baseName + extension;
  let counter = 1;
  while (usedLinkNames.has(linkName.toLowerCase())) {
    linkName = baseName + "-" + counter + extension;
    counter += 1;
  }
  usedLinkNames.add(linkName.toLowerCase());
  const filePath = path.join(linksDir, linkName);
  fs.writeFileSync(filePath, source.bytes);
  const asset = { filePath, linkName, bytes: source.bytes, extension };
  assetMap.set(src, asset);
  return asset;
}

function readImageSource(src) {
  const dataMatch = String(src || "").match(/^data:([^;,]+)?(;base64)?,([\s\S]*)$/i);
  if (dataMatch) {
    const mime = (dataMatch[1] || "image/png").toLowerCase();
    const bytes = dataMatch[2]
      ? Buffer.from(dataMatch[3], "base64")
      : Buffer.from(decodeURIComponent(dataMatch[3]), "utf8");
    return { bytes, extension: extensionForMime(mime), name: "proposal-image" + extensionForMime(mime) };
  }

  const filePath = localFilePathFromImageSource(src);
  if (!filePath || !fs.existsSync(filePath)) {
    return null;
  }
  const extension = supportedImageExtension(path.extname(filePath).toLowerCase());
  return {
    bytes: fs.readFileSync(filePath),
    extension,
    name: path.basename(filePath)
  };
}

function localFilePathFromImageSource(src) {
  const value = String(src || "");
  try {
    const url = new URL(value);
    if (url.protocol === "file:") {
      return safeWorkspacePath(fileURLToPath(url));
    }
    if ((url.protocol === "http:" || url.protocol === "https:") && /^(127\.0\.0\.1|localhost)$/i.test(url.hostname)) {
      const pathname = decodeURIComponent(url.pathname || "");
      return safeWorkspacePath(path.join(ROOT, pathname.replace(/^\/+/, "")));
    }
  } catch (error) {
    if (path.isAbsolute(value)) {
      return safeWorkspacePath(value);
    }
  }
  return null;
}

function safeWorkspacePath(candidate) {
  const resolved = path.resolve(candidate);
  const root = path.resolve(ROOT);
  if (resolved.toLowerCase() === root.toLowerCase() || resolved.toLowerCase().startsWith((root + path.sep).toLowerCase())) {
    return resolved;
  }
  return null;
}

function extensionForMime(mime) {
  const normalized = String(mime || "").toLowerCase();
  if (normalized.includes("jpeg") || normalized.includes("jpg")) {
    return ".jpg";
  }
  if (normalized.includes("gif")) {
    return ".gif";
  }
  if (normalized.includes("webp")) {
    return ".webp";
  }
  return ".png";
}

function supportedImageExtension(extension) {
  const normalized = String(extension || "").toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(normalized)) {
    return normalized === ".jpeg" ? ".jpg" : normalized;
  }
  return ".png";
}

function normalizeHexColor(value) {
  const match = String(value || "").trim().match(/^#?([0-9a-f]{6})$/i);
  return match ? match[1].toLowerCase() : "";
}

function imageFitMode(value) {
  const fit = String(value || "").toLowerCase();
  if (fit === "contain" || fit === "scale-down") {
    return "contain";
  }
  if (fit === "fill") {
    return "stretch";
  }
  return "cover";
}

function inDesignFontFamily(value) {
  const family = String(value || "").replace(/["']/g, "").trim();
  const lower = family.toLowerCase();
  if (lower.includes("georgia")) {
    return "Georgia";
  }
  if (lower.includes("times")) {
    return "Times New Roman";
  }
  if (lower.includes("arial narrow") || lower.includes("franklin") || lower.includes("impact")) {
    return "Arial Narrow";
  }
  if (lower.includes("century gothic")) {
    return "Century Gothic";
  }
  return family || "Arial";
}

function inDesignFontStyle(weight, style, family) {
  const numericWeight = parseInt(weight, 10) || 400;
  const italic = /italic|oblique/i.test(String(style || ""));
  const bold = numericWeight >= 600 || /bold|black/i.test(String(weight || ""));
  const fontFamily = String(family || "").toLowerCase();
  if (fontFamily.includes("arial narrow")) {
    if (bold && italic) {
      return "Narrow Bold Italic";
    }
    if (bold) {
      return "Narrow Bold";
    }
    if (italic) {
      return "Narrow Italic";
    }
    return "Narrow";
  }
  if (bold && italic) {
    return "Bold Italic";
  }
  if (bold) {
    return "Bold";
  }
  if (italic) {
    return "Italic";
  }
  return "Regular";
}

function inDesignJustification(value) {
  const align = String(value || "").toLowerCase();
  if (align === "center") {
    return "center";
  }
  if (align === "right" || align === "end") {
    return "right";
  }
  if (align === "justify") {
    return "justify";
  }
  return "left";
}

function roundNumber(value) {
  return Math.round(Number(value || 0) * 1000) / 1000;
}

function buildEditableNativeInDesignJsx(layoutJsonPath) {
  return [
    "#target indesign",
    "(function () {",
    "  var dataPath = " + jsxString(toInDesignPath(layoutJsonPath)) + ";",
    "  var dataFile = File(dataPath);",
    "  dataFile.encoding = 'UTF-8';",
    "  if (!dataFile.open('r')) { throw new Error('Could not open editable layout data.'); }",
    "  var dataText = dataFile.read();",
    "  dataFile.close();",
    "  var data = JSON && JSON.parse ? JSON.parse(dataText) : eval('(' + dataText + ')');",
    "  var logFile = File(data.logPath);",
    "  function log(message) {",
    "    try { logFile.encoding = 'UTF-8'; logFile.open('a'); logFile.writeln(message); logFile.close(); } catch (ignored) {}",
    "  }",
    "  function colorFromHex(doc, hex) {",
    "    hex = String(hex || '000000').replace(/^#/, '').toLowerCase();",
    "    if (hex === 'ffffff') { return doc.swatches.itemByName('Paper'); }",
    "    if (hex === '000000') { return doc.swatches.itemByName('Black'); }",
    "    var name = 'PB #' + hex.toUpperCase();",
    "    var existing = doc.colors.itemByName(name);",
    "    if (existing && existing.isValid) { return existing; }",
    "    var r = parseInt(hex.substr(0, 2), 16);",
    "    var g = parseInt(hex.substr(2, 2), 16);",
    "    var b = parseInt(hex.substr(4, 2), 16);",
    "    return doc.colors.add({ name: name, model: ColorModel.PROCESS, space: ColorSpace.RGB, colorValue: [r, g, b] });",
    "  }",
    "  function none(doc) { return doc.swatches.itemByName('None'); }",
    "  function bounds(item) {",
    "    var b = item.bounds || {};",
    "    return [Number(b.y) || 0, Number(b.x) || 0, (Number(b.y) || 0) + (Number(b.height) || 0), (Number(b.x) || 0) + (Number(b.width) || 0)];",
    "  }",
    "  function applyJustification(text, value) {",
    "    if (value === 'center') { text.justification = Justification.CENTER_ALIGN; return; }",
    "    if (value === 'right') { text.justification = Justification.RIGHT_ALIGN; return; }",
    "    if (value === 'justify') { text.justification = Justification.FULLY_JUSTIFIED; return; }",
    "    text.justification = Justification.LEFT_ALIGN;",
    "  }",
    "  function applyFont(text, item) {",
    "    var family = item.fontFamily || 'Arial';",
    "    try { text.appliedFont = family; } catch (fontError) { try { text.appliedFont = 'Arial'; } catch (ignored) {} }",
    "    try { text.fontStyle = item.fontStyle || 'Regular'; } catch (styleError) { try { text.fontStyle = 'Regular'; } catch (ignoredStyle) {} }",
    "  }",
    "  try {",
    "    app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;",
    "    var doc = app.documents.add();",
    "    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.POINTS;",
    "    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.POINTS;",
    "    doc.documentPreferences.facingPages = false;",
    "    doc.documentPreferences.pageWidth = String(data.width) + 'pt';",
    "    doc.documentPreferences.pageHeight = String(data.height) + 'pt';",
    "    while (doc.pages.length < data.pages.length) { doc.pages.add(LocationOptions.AT_END); }",
    "    while (doc.pages.length > data.pages.length) { doc.pages.item(doc.pages.length - 1).remove(); }",
    "    for (var p = 0; p < data.pages.length; p += 1) {",
    "      var page = doc.pages.item(p);",
    "      page.marginPreferences.top = 0;",
    "      page.marginPreferences.bottom = 0;",
    "      page.marginPreferences.left = 0;",
    "      page.marginPreferences.right = 0;",
    "      var items = data.pages[p].items || [];",
    "      for (var i = 0; i < items.length; i += 1) {",
    "        var item = items[i];",
    "        if (item.type === 'shape') {",
    "          var shape = page.rectangles.add();",
    "          shape.geometricBounds = bounds(item);",
    "          shape.strokeWeight = 0;",
    "          shape.strokeColor = none(doc);",
    "          shape.fillColor = colorFromHex(doc, item.color);",
    "        } else if (item.type === 'image') {",
    "          var frame = page.rectangles.add();",
    "          frame.geometricBounds = bounds(item);",
    "          frame.strokeWeight = 0;",
    "          frame.strokeColor = none(doc);",
    "          frame.fillColor = none(doc);",
    "          var imageFile = File(item.filePath);",
    "          if (!imageFile.exists) { throw new Error('Missing linked image: ' + item.filePath); }",
    "          frame.place(imageFile);",
    "          if (item.fit === 'contain') { frame.fit(FitOptions.PROPORTIONALLY); }",
    "          else if (item.fit === 'stretch') { frame.fit(FitOptions.CONTENT_TO_FRAME); }",
    "          else { frame.fit(FitOptions.FILL_PROPORTIONALLY); }",
    "          frame.fit(FitOptions.CENTER_CONTENT);",
    "        } else if (item.type === 'text') {",
    "          var tf = page.textFrames.add();",
    "          tf.geometricBounds = bounds(item);",
    "          tf.strokeWeight = 0;",
    "          tf.strokeColor = none(doc);",
    "          tf.fillColor = none(doc);",
    "          tf.textFramePreferences.insetSpacing = [0, 0, 0, 0];",
    "          tf.contents = item.text || '';",
    "          var text = tf.texts.item(0);",
    "          applyFont(text, item);",
    "          text.pointSize = Number(item.pointSize) || 12;",
    "          if (Number(item.leading) > 0) { text.leading = Number(item.leading); }",
    "          if (Number(item.tracking)) { text.tracking = Number(item.tracking); }",
    "          text.fillColor = colorFromHex(doc, item.color);",
    "          applyJustification(text, item.justification);",
    "        }",
    "      }",
    "    }",
    "    var inddFile = File(data.inddPath);",
    "    doc.save(inddFile);",
    "    doc.exportFile(ExportFormat.INDESIGN_MARKUP, File(data.idmlPath), false);",
    "    doc.close(SaveOptions.YES);",
    "    log('OK created editable InDesign package: ' + inddFile.fsName);",
    "  } catch (error) {",
    "    try { log('ERROR ' + error + ' line ' + (error && error.line ? error.line : '')); } catch (ignored) {}",
    "    throw error;",
    "  }",
    "}());"
  ].join("\n");
}

async function buildNativeInDesignPackageBuffer(pageFiles, pageSize, filenameBase, scratchDir) {
  const safeBase = safeFilename(filenameBase || "proposal");
  const packageFolderName = safeBase + "-indesign-package";
  const packageDir = path.join(scratchDir, packageFolderName);
  const linksDir = path.join(packageDir, "Links");
  const inddPath = path.join(packageDir, safeBase + ".indd");
  const jsxPath = path.join(scratchDir, "build-indesign-package.jsx");
  const psPath = path.join(scratchDir, "run-indesign-package.ps1");
  const logPath = path.join(scratchDir, "indesign-package.log");
  const width = Number(pageSize.width) || 612;
  const height = Number(pageSize.height) || 792;

  fs.mkdirSync(linksDir, { recursive: true });
  const linkFiles = pageFiles.map((page, index) => {
    const linkPath = path.join(linksDir, "page-" + (index + 1) + ".png");
    fs.copyFileSync(page.filePath, linkPath);
    return linkPath;
  });

  fs.writeFileSync(jsxPath, buildNativeInDesignPackageJsx({
    inddPath,
    linkFiles,
    logPath,
    width,
    height
  }), "utf8");
  fs.writeFileSync(psPath, buildRunInDesignPowerShell(jsxPath), "utf8");

  await runProcess("powershell.exe", [
    "-STA",
    "-NoProfile",
    "-ExecutionPolicy",
    "Bypass",
    "-File",
    psPath
  ], { timeoutMs: 180000 });

  if (!fs.existsSync(inddPath)) {
    const logText = fs.existsSync(logPath) ? fs.readFileSync(logPath, "utf8") : "";
    throw new Error("InDesign did not create the packaged .indd file." + (logText ? "\n" + logText : ""));
  }

  fs.writeFileSync(path.join(packageDir, "README.txt"), [
    "InDesign package export",
    "",
    "Open the .indd file in this folder.",
    "Keep the Links folder beside the .indd file so InDesign can resolve the rendered proposal pages.",
    "",
    "Open: " + safeBase + ".indd"
  ].join("\r\n"), "utf8");

  return zipDirectoryBuffer(packageDir, packageFolderName);
}

function buildNativeInDesignPackageJsx(options) {
  const linkArray = options.linkFiles.map((filePath) => jsxString(toInDesignPath(filePath))).join(",");
  const width = Number(options.width) || 612;
  const height = Number(options.height) || 792;
  return [
    "#target indesign",
    "(function () {",
    "  var logFile = File(" + jsxString(toInDesignPath(options.logPath)) + ");",
    "  function log(message) {",
    "    logFile.encoding = 'UTF-8';",
    "    logFile.open('a');",
    "    logFile.writeln(message);",
    "    logFile.close();",
    "  }",
    "  try {",
    "    app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;",
    "    var pageWidth = " + JSON.stringify(String(width) + "pt") + ";",
    "    var pageHeight = " + JSON.stringify(String(height) + "pt") + ";",
    "    var pageWidthPoints = " + JSON.stringify(width) + ";",
    "    var pageHeightPoints = " + JSON.stringify(height) + ";",
    "    var inddFile = File(" + jsxString(toInDesignPath(options.inddPath)) + ");",
    "    var linkFiles = [" + linkArray + "].map(function (item) { return File(item); });",
    "    var doc = app.documents.add();",
    "    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.POINTS;",
    "    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.POINTS;",
    "    doc.documentPreferences.facingPages = false;",
    "    doc.documentPreferences.pageWidth = pageWidth;",
    "    doc.documentPreferences.pageHeight = pageHeight;",
    "    while (doc.pages.length < linkFiles.length) { doc.pages.add(LocationOptions.AT_END); }",
    "    while (doc.pages.length > linkFiles.length) { doc.pages.item(doc.pages.length - 1).remove(); }",
    "    for (var i = 0; i < linkFiles.length; i += 1) {",
    "      var page = doc.pages.item(i);",
    "      page.marginPreferences.top = 0;",
    "      page.marginPreferences.bottom = 0;",
    "      page.marginPreferences.left = 0;",
    "      page.marginPreferences.right = 0;",
    "      var frame = page.rectangles.add();",
    "      frame.geometricBounds = [0, 0, pageHeightPoints, pageWidthPoints];",
    "      frame.strokeWeight = 0;",
    "      frame.strokeColor = doc.swatches.itemByName('None');",
    "      frame.fillColor = doc.swatches.itemByName('None');",
    "      frame.place(linkFiles[i]);",
    "      frame.fit(FitOptions.CONTENT_TO_FRAME);",
    "    }",
    "    doc.save(inddFile);",
    "    doc.close(SaveOptions.YES);",
    "    log('OK created ' + inddFile.fsName);",
    "  } catch (error) {",
    "    try { log('ERROR ' + error + ' line ' + (error && error.line ? error.line : '')); } catch (ignored) {}",
    "    throw error;",
    "  }",
    "}());"
  ].join("\n");
}

function buildRunInDesignPowerShell(jsxPath) {
  return [
    "$ErrorActionPreference = 'Stop'",
    "$progIds = @('InDesign.Application.2026', 'InDesign.Application.2025', 'InDesign.Application.2024', 'InDesign.Application')",
    "$app = $null",
    "$lastError = $null",
    "foreach ($progId in $progIds) {",
    "  try {",
    "    $app = New-Object -ComObject $progId",
    "    break",
    "  } catch {",
    "    $lastError = $_",
    "  }",
    "}",
    "if ($null -eq $app) { throw $lastError }",
    "$script = Get-Content -LiteralPath " + psString(jsxPath) + " -Raw",
    "$arguments = [object[]]@()",
    "$app.DoScript($script, 1246973031, $arguments, 1699963733, 'Proposal Bot InDesign Export')"
  ].join("\r\n");
}

function zipDirectoryBuffer(directoryPath, rootName) {
  const entries = [];
  collectZipEntries(directoryPath, rootName, entries);
  return createStoredZipBuffer(entries);
}

function collectZipEntries(directoryPath, zipPath, entries) {
  fs.readdirSync(directoryPath, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(directoryPath, entry.name);
    const entryPath = zipPath + "/" + entry.name;
    if (entry.isDirectory()) {
      collectZipEntries(fullPath, entryPath, entries);
      return;
    }
    entries.push({
      name: entryPath.replace(/\\/g, "/"),
      bytes: fs.readFileSync(fullPath)
    });
  });
}

function runProcess(command, args, options) {
  const timeoutMs = options && options.timeoutMs ? options.timeoutMs : 30000;
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { windowsHide: true });
    let stdout = "";
    let stderr = "";
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) {
        return;
      }
      settled = true;
      child.kill();
      reject(new Error(command + " timed out."));
    }, timeoutMs);

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("error", (error) => {
      if (settled) {
        return;
      }
      settled = true;
      clearTimeout(timer);
      reject(error);
    });
    child.on("exit", (code) => {
      if (settled) {
        return;
      }
      settled = true;
      clearTimeout(timer);
      if (code === 0) {
        resolve({ stdout, stderr });
        return;
      }
      reject(new Error((stderr || stdout || command + " failed with exit code " + code).trim()));
    });
  });
}

function toInDesignPath(value) {
  return String(value || "").replace(/\\/g, "/");
}

function jsxString(value) {
  return JSON.stringify(String(value || ""));
}

function psString(value) {
  return "'" + String(value || "").replace(/'/g, "''") + "'";
}

function buildCaptureHtml(pageHtml, stylesText, width, height, bodyClasses, baseUrl) {
  const safeWidth = Math.max(1, Number(width) || 816);
  const safeHeight = Math.max(1, Number(height) || 1056);
  return [
    "<!doctype html>",
    '<html lang="en">',
    "<head>",
    '<meta charset="utf-8">',
    baseUrl ? '<base href="' + escapeHtmlAttribute(baseUrl) + '">' : "",
    "<style>",
    "html,body{margin:0;padding:0;background:#ffffff;overflow:hidden;}",
    "html,body{width:" + safeWidth + "px;height:" + safeHeight + "px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}",
    stylesText,
    captureOverrideCss(safeWidth, safeHeight),
    "</style>",
    "</head>",
    '<body class="' + escapeHtmlAttribute(bodyClasses || "") + '">',
    '<div style="width:' + safeWidth + "px;height:" + safeHeight + 'px;overflow:hidden;background:#ffffff;">',
    pageHtml,
    "</div>",
    captureReadyScript(),
    "</body>",
    "</html>"
  ].join("");
}

function captureOverrideCss(width, height) {
  return [
    ".proposal-page{width:" + width + "px!important;height:" + height + "px!important;min-height:" + height + "px!important;margin:0!important;border:0!important;box-shadow:none!important;break-after:auto!important;page-break-after:auto!important;}",
    ".proposal-page:last-child{break-after:auto!important;page-break-after:auto!important;}",
    ".page-inner,.structured-page-inner{width:" + width + "px!important;height:" + height + "px!important;}",
    ".photo-slot-tools{display:none!important;}",
    "img{max-width:none;}"
  ].join("\n");
}

function captureReadyScript() {
  return [
    "<script>",
    "(function(){",
    "function imageReady(img){if(!img||img.complete){return Promise.resolve();}return new Promise(function(resolve){img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});});}",
    "var images=Array.prototype.slice.call(document.images||[]).map(imageReady);",
    "var fonts=document.fonts&&document.fonts.ready?document.fonts.ready.catch(function(){}):Promise.resolve();",
    "Promise.all(images.concat([fonts])).then(function(){requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.setAttribute('data-capture-ready','true');});});});",
    "}());",
    "</script>"
  ].join("");
}

function detectChromiumExecutable() {
  const candidates = [
    process.env.CHROMIUM_EXECUTABLE,
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe"
  ];
  const match = candidates.find((candidate) => fs.existsSync(candidate));
  if (!match) {
    throw new Error("No Chromium browser executable was found for headless InDesign export.");
  }
  return match;
}

function loadIdmlBaseFiles() {
  if (idmlBaseFiles) {
    return idmlBaseFiles;
  }
  const source = fs.readFileSync(path.join(ROOT, "indesign-template.js"), "utf8");
  const match = source.match(/window\.PROPOSAL_BOT_IDML_BASE_FILES\s*=\s*(\{[\s\S]*\});/);
  if (!match) {
    throw new Error("Could not load the base InDesign package resources.");
  }
  idmlBaseFiles = JSON.parse(match[1]);
  return idmlBaseFiles;
}

function buildInDesignIdmlBuffer(jpegPages, pageSize) {
  const baseFiles = loadIdmlBaseFiles();
  const width = Number(pageSize.width) || 612;
  const height = Number(pageSize.height) || 792;
  const spreadDescriptors = [];
  const entries = [
    { name: "mimetype", bytes: Buffer.from("application/vnd.adobe.indesign-idml-package", "utf8") },
    { name: "META-INF/container.xml", bytes: Buffer.from(baseFiles["META-INF/container.xml"] || "", "utf8") },
    { name: "META-INF/metadata.xml", bytes: Buffer.from(baseFiles["META-INF/metadata.xml"] || "", "utf8") },
    { name: "Resources/Graphic.xml", bytes: Buffer.from(baseFiles["Resources/Graphic.xml"] || "", "utf8") },
    { name: "Resources/Fonts.xml", bytes: Buffer.from(baseFiles["Resources/Fonts.xml"] || "", "utf8") },
    { name: "Resources/Styles.xml", bytes: Buffer.from(baseFiles["Resources/Styles.xml"] || "", "utf8") },
    { name: "Resources/Preferences.xml", bytes: Buffer.from(baseFiles["Resources/Preferences.xml"] || "", "utf8") },
    { name: "XML/Tags.xml", bytes: Buffer.from(baseFiles["XML/Tags.xml"] || "", "utf8") },
    { name: "XML/BackingStory.xml", bytes: Buffer.from(baseFiles["XML/BackingStory.xml"] || "", "utf8") },
    { name: "MasterSpreads/MasterSpread_uca.xml", bytes: Buffer.from(buildIdmlMasterSpreadXml(width, height), "utf8") }
  ];

  jpegPages.forEach((jpegBuffer, index) => {
    const pageNumber = index + 1;
    const spreadSelf = "us" + pageNumber;
    const pageSelf = "up" + pageNumber;
    const spreadPath = "Spreads/Spread_" + spreadSelf + ".xml";
    const imagePath = "Links/page-" + pageNumber + ".png";
    spreadDescriptors.push({ spreadPath, pageSelf });
    entries.push({
      name: spreadPath,
      bytes: Buffer.from(buildIdmlSpreadXml(spreadSelf, pageSelf, pageNumber, width, height, imagePath, jpegBuffer.length), "utf8")
    });
    entries.push({
      name: imagePath,
      bytes: jpegBuffer
    });
  });

  entries.splice(2, 0, {
    name: "designmap.xml",
    bytes: Buffer.from(buildIdmlDesignmapXml(baseFiles["designmap.xml"] || "", spreadDescriptors), "utf8")
  });

  return createStoredZipBuffer(entries);
}

function buildInDesignPackageBuffer(jpegPages, pageSize, filenameBase) {
  const safeBase = safeFilename(filenameBase || "proposal");
  const folderName = safeBase + "-indesign-package";
  const idmlBuffer = buildInDesignIdmlBuffer(jpegPages, pageSize);
  const entries = [
    {
      name: folderName + "/" + safeBase + ".idml",
      bytes: idmlBuffer
    },
    {
      name: folderName + "/README.txt",
      bytes: Buffer.from([
        "InDesign package export",
        "",
        "Unzip this folder before opening the IDML file.",
        "Keep the Links folder beside the IDML file so InDesign can resolve the rendered proposal pages.",
        "",
        "Open: " + safeBase + ".idml"
      ].join("\r\n"), "utf8")
    }
  ];

  jpegPages.forEach((jpegBuffer, index) => {
    entries.push({
      name: folderName + "/Links/page-" + (index + 1) + ".png",
      bytes: jpegBuffer
    });
  });

  return createStoredZipBuffer(entries);
}

function buildIdmlDesignmapXml(template, spreadDescriptors, storyDescriptors) {
  let xml = template || "";
  xml = xml.replace(/\n\t<idPkg:Story src="Stories\/[^"]+"\/>/g, "");
  const refs = ['<idPkg:MasterSpread src="MasterSpreads/MasterSpread_uca.xml"/>']
    .concat(spreadDescriptors.map((descriptor) => '<idPkg:Spread src="' + descriptor.spreadPath + '"/>'))
    .concat((storyDescriptors || []).map((descriptor) => '<idPkg:Story src="Stories/Story_' + descriptor.storySelf + '.xml"/>'))
    .join("\n\t");
  const storyList = (storyDescriptors || []).map((descriptor) => descriptor.storySelf).join(" ");
  xml = xml.replace(/StoryList="[^"]*"/, 'StoryList="' + storyList + '"');
  xml = xml.replace(/\n\t<idPkg:MasterSpread src="MasterSpreads\/MasterSpread_uca\.xml"\/>[\s\S]*?(\n\t<Section Self=)/, "\n\t" + refs + "$1");
  if (spreadDescriptors.length) {
    xml = xml.replace(/(<Section Self="[^"]+" Length=")[^"]+(" Name="" ContinueNumbering="true" IncludeSectionPrefix="false" Marker="" PageStart=")[^"]+(" SectionPrefix="")/, "$1" + spreadDescriptors.length + "$2" + spreadDescriptors[0].pageSelf + "$3");
  }
  return xml;
}

function buildIdmlMasterSpreadXml(width, height) {
  const top = -height / 2;
  return [
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    '<idPkg:MasterSpread xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="7.5">',
    '\t<MasterSpread Self="uca" ItemTransform="1 0 0 1 0 0" OverriddenPageItemProps="" Name="A-Master" NamePrefix="A" BaseName="Master" ShowMasterItems="true" PageCount="1">',
    '\t\t<Properties><PageColor type="enumeration">UseMasterColor</PageColor></Properties>',
    '\t\t<Page Self="ucf" GeometricBounds="0 0 ' + height + " " + width + '" ItemTransform="1 0 0 1 0 ' + top + '" Name="A" AppliedTrapPreset="TrapPreset/$ID/kDefaultTrapStyleName" OverrideList="" AppliedMaster="n" MasterPageTransform="1 0 0 1 0 0" TabOrder="" GridStartingPoint="TopOutside" UseMasterGrid="true">',
    '\t\t\t<Properties><PageColor type="enumeration">UseMasterColor</PageColor></Properties>',
    '\t\t\t<MarginPreference ColumnCount="1" ColumnGutter="12" Top="0" Bottom="0" Left="0" Right="0" ColumnDirection="Horizontal" ColumnsPositions="0 ' + width + '"/>',
    '\t\t\t<GridDataInformation FontStyle="Regular" PointSize="12" CharacterAki="0" LineAki="9" HorizontalScale="100" VerticalScale="100" LineAlignment="LeftOrTopLineJustify" GridAlignment="AlignEmCenter" CharacterAlignment="AlignEmCenter"><Properties><AppliedFont type="string">Minion Pro</AppliedFont></Properties></GridDataInformation>',
    "\t\t</Page>",
    "\t</MasterSpread>",
    "</idPkg:MasterSpread>"
  ].join("\n");
}

function buildIdmlSpreadXml(spreadSelf, pageSelf, pageNumber, width, height, imagePath, imageSize) {
  const pageX = -width / 2;
  const pageY = -height / 2;
  const frameX = pageX + 5;
  const frameY = pageY + 5;
  const frameRight = width - 5;
  const frameBottom = height - 5;
  const rectangleSelf = "ur" + pageNumber;
  const imageSelf = "ui" + pageNumber;
  const linkSelf = "ul" + pageNumber;
  const linkPath = imagePath;
  const linkSize = "0~" + Math.max(0, Number(imageSize) || 0).toString(16);
  return [
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    '<idPkg:Spread xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="7.5">',
    '\t<Spread Self="' + spreadSelf + '" FlattenerOverride="Default" AllowPageShuffle="true" ItemTransform="1 0 0 1 0 0" ShowMasterItems="true" PageCount="1" BindingLocation="0" PageTransitionType="None" PageTransitionDirection="NotApplicable" PageTransitionDuration="Medium">',
    '\t\t<FlattenerPreference LineArtAndTextResolution="300" GradientAndMeshResolution="150" ClipComplexRegions="false" ConvertAllStrokesToOutlines="false" ConvertAllTextToOutlines="false"><Properties><RasterVectorBalance type="double">50</RasterVectorBalance></Properties></FlattenerPreference>',
    '\t\t<Page Self="' + pageSelf + '" GeometricBounds="0 0 ' + height + " " + width + '" ItemTransform="1 0 0 1 ' + pageX + " " + pageY + '" Name="' + pageNumber + '" AppliedTrapPreset="TrapPreset/$ID/kDefaultTrapStyleName" OverrideList="" AppliedMaster="n" MasterPageTransform="1 0 0 1 0 0" TabOrder="" GridStartingPoint="TopOutside" UseMasterGrid="false">',
    '\t\t\t<Properties><Descriptor type="list"><ListItem type="string"></ListItem><ListItem type="enumeration">Arabic</ListItem><ListItem type="boolean">true</ListItem><ListItem type="boolean">false</ListItem><ListItem type="long">' + pageNumber + '</ListItem><ListItem type="string"></ListItem></Descriptor><PageColor type="enumeration">UseMasterColor</PageColor></Properties>',
    '\t\t\t<MarginPreference ColumnCount="1" ColumnGutter="12" Top="0" Bottom="0" Left="0" Right="0" ColumnDirection="Horizontal" ColumnsPositions="0 ' + width + '"/>',
    '\t\t\t<GridDataInformation FontStyle="Regular" PointSize="12" CharacterAki="0" LineAki="9" HorizontalScale="100" VerticalScale="100" LineAlignment="LeftOrTopLineJustify" GridAlignment="AlignEmCenter" CharacterAlignment="AlignEmCenter"><Properties><AppliedFont type="string">Minion Pro</AppliedFont></Properties></GridDataInformation>',
    "\t\t</Page>",
    '\t\t<Rectangle Self="' + rectangleSelf + '" ContentType="GraphicType" StoryTitle="$ID/" ParentInterfaceChangeCount="" TargetInterfaceChangeCount="" LastUpdatedInterfaceChangeCount="" OverriddenPageItemProps="" HorizontalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" VerticalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" FlexItemWidthMode="FlexFixed" FlexItemHeightMode="FlexFixed" StrokeWeight="0" StrokeColor="Swatch/None" GradientFillStart="0 0" GradientFillLength="0" GradientFillAngle="0" GradientStrokeStart="0 0" GradientStrokeLength="0" GradientStrokeAngle="0" ItemLayer="ub3" Locked="false" LocalDisplaySetting="Default" GradientFillHiliteLength="0" GradientFillHiliteAngle="0" GradientStrokeHiliteLength="0" GradientStrokeHiliteAngle="0" AppliedObjectStyle="ObjectStyle/$ID/[Normal Graphics Frame]" Visible="true" Name="$ID/" ItemTransform="1 0 0 1 ' + frameX + " " + frameY + '">',
    "\t\t\t<Properties>",
    "\t\t\t\t<PathGeometry>",
    '\t\t\t\t\t<GeometryPathType PathOpen="false"><PathPointArray>' +
      '<PathPointType Anchor="-5 -5" LeftDirection="-5 -5" RightDirection="-5 -5"/>' +
      '<PathPointType Anchor="-5 ' + frameBottom + '" LeftDirection="-5 ' + frameBottom + '" RightDirection="-5 ' + frameBottom + '"/>' +
      '<PathPointType Anchor="' + frameRight + " " + frameBottom + '" LeftDirection="' + frameRight + " " + frameBottom + '" RightDirection="' + frameRight + " " + frameBottom + '"/>' +
      '<PathPointType Anchor="' + frameRight + ' -5" LeftDirection="' + frameRight + ' -5" RightDirection="' + frameRight + ' -5"/>' +
      "</PathPointArray></GeometryPathType>",
    "\t\t\t\t</PathGeometry>",
    "\t\t\t</Properties>",
    '\t\t\t<TextWrapPreference Inverse="false" ApplyToMasterPageOnly="false" TextWrapSide="BothSides" TextWrapMode="None"><Properties><TextWrapOffset Top="0" Left="0" Bottom="0" Right="0"/></Properties><ContourOption ContourType="SameAsClipping" IncludeInsideEdges="false" ContourPathName="$ID/"/></TextWrapPreference>',
    '\t\t\t<InCopyExportOption IncludeGraphicProxies="true" IncludeAllResources="false"/>',
    '\t\t\t<FrameFittingOption AutoFit="false" LeftCrop="0" TopCrop="0" RightCrop="0" BottomCrop="0" FittingOnEmptyFrame="ContentToFrame" FittingAlignment="CenterAnchor"/>',
    '\t\t\t<ObjectExportOption EpubType="$ID/" SizeType="DefaultSize" CustomSize="$ID/" PreserveAppearanceFromLayout="PreserveAppearanceDefault" EpubAriaRole="$ID/" EpubAriaLabel="$ID/" EpubAriaLabelSourceType="AutomaticARIALabel" AltTextSourceType="SourceXMLStructure" ActualTextSourceType="SourceXMLStructure" CustomAltText="$ID/" CustomActualText="$ID/" ApplyTagType="TagFromStructure" ImageConversionType="JPEG" ImageExportResolution="Ppi300" GIFOptionsPalette="AdaptivePalette" GIFOptionsInterlaced="true" JPEGOptionsQuality="High" JPEGOptionsFormat="BaselineEncoding" ImageAlignment="AlignLeft" ImageSpaceBefore="0" ImageSpaceAfter="0" UseImagePageBreak="false" ImagePageBreak="PageBreakBefore" CustomImageAlignment="false" SpaceUnit="CssPixel" CustomLayout="false" CustomLayoutType="AlignmentAndSpacing"><Properties><AltMetadataProperty NamespacePrefix="$ID/" PropertyPath="$ID/"/><ActualMetadataProperty NamespacePrefix="$ID/" PropertyPath="$ID/"/></Properties></ObjectExportOption>',
    '\t\t\t<Image Self="' + imageSelf + '" Space="$ID/#Links_RGB" ActualPpi="96 96" EffectivePpi="96 96" ImageRenderingIntent="UseColorSettings" OverriddenPageItemProps="" LocalDisplaySetting="Default" ImageTypeName="$ID/Portable Network Graphics (PNG)" AppliedObjectStyle="ObjectStyle/$ID/[None]" ItemTransform="1 0 0 1 -5 -5" ParentInterfaceChangeCount="" TargetInterfaceChangeCount="" LastUpdatedInterfaceChangeCount="" HorizontalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" VerticalLayoutConstraints="FlexibleDimension FixedDimension FlexibleDimension" FlexItemWidthMode="FlexFixed" FlexItemHeightMode="FlexFixed" GradientFillStart="0 0" GradientFillLength="0" GradientFillAngle="0" GradientFillHiliteLength="0" GradientFillHiliteAngle="0" Visible="true" Name="$ID/">',
    '\t\t\t\t<Properties><Profile type="string">$ID/None</Profile><GraphicBounds Left="0" Top="0" Right="' + width + '" Bottom="' + height + '"/></Properties>',
    '\t\t\t\t<TextWrapPreference Inverse="false" ApplyToMasterPageOnly="false" TextWrapSide="BothSides" TextWrapMode="None"><Properties><TextWrapOffset Top="0" Left="0" Bottom="0" Right="0"/></Properties><ContourOption ContourType="SameAsClipping" IncludeInsideEdges="false" ContourPathName="$ID/"/></TextWrapPreference>',
    '\t\t\t\t<Link Self="' + linkSelf + '" AssetURL="$ID/" AssetID="$ID/" RenditionData="Actual" LinkResourceURI="file:' + linkPath + '" PDFIdentifier="0" LinkResourceFormat="$ID/Portable Network Graphics (PNG)" StoredState="Normal" LinkClassID="35906" LinkClientID="257" LinkResourceModified="false" LinkObjectModified="false" ShowInUI="true" CanEmbed="true" CanUnembed="true" CanPackage="true" ImportPolicy="NoAutoImport" ExportPolicy="NoAutoExport" LinkResourceSize="' + linkSize + '"/>',
    '\t\t\t\t<ClippingPathSettings ClippingType="None" InvertPath="false" IncludeInsideEdges="false" RestrictToFrame="false" UseHighResolutionImage="true" Threshold="25" Tolerance="2" InsetFrame="0" AppliedPathName="$ID/" Index="-1"/>',
    '\t\t\t\t<ImageIOPreference ApplyPhotoshopClippingPath="true" AllowAutoEmbedding="true" AlphaChannelName="$ID/"/>',
    "\t\t\t</Image>",
    "\t\t</Rectangle>",
    "\t</Spread>",
    "</idPkg:Spread>"
  ].join("\n");
}

function createStoredZipBuffer(entries) {
  const timestamp = new Date();
  const date = dosDate(timestamp);
  const time = dosTime(timestamp);
  const localChunks = [];
  const centralChunks = [];
  let offset = 0;

  entries.forEach((entry) => {
    const nameBytes = Buffer.from(entry.name, "utf8");
    const dataBytes = Buffer.isBuffer(entry.bytes) ? entry.bytes : Buffer.from(entry.bytes);
    const crc = crc32(dataBytes);

    const localHeader = Buffer.alloc(30 + nameBytes.length);
    writeUInt32LE(localHeader, 0, 0x04034b50);
    writeUInt16LE(localHeader, 4, 20);
    writeUInt16LE(localHeader, 6, 0);
    writeUInt16LE(localHeader, 8, 0);
    writeUInt16LE(localHeader, 10, time);
    writeUInt16LE(localHeader, 12, date);
    writeUInt32LE(localHeader, 14, crc);
    writeUInt32LE(localHeader, 18, dataBytes.length);
    writeUInt32LE(localHeader, 22, dataBytes.length);
    writeUInt16LE(localHeader, 26, nameBytes.length);
    writeUInt16LE(localHeader, 28, 0);
    nameBytes.copy(localHeader, 30);
    localChunks.push(localHeader, dataBytes);

    const centralHeader = Buffer.alloc(46 + nameBytes.length);
    writeUInt32LE(centralHeader, 0, 0x02014b50);
    writeUInt16LE(centralHeader, 4, 20);
    writeUInt16LE(centralHeader, 6, 20);
    writeUInt16LE(centralHeader, 8, 0);
    writeUInt16LE(centralHeader, 10, 0);
    writeUInt16LE(centralHeader, 12, time);
    writeUInt16LE(centralHeader, 14, date);
    writeUInt32LE(centralHeader, 16, crc);
    writeUInt32LE(centralHeader, 20, dataBytes.length);
    writeUInt32LE(centralHeader, 24, dataBytes.length);
    writeUInt16LE(centralHeader, 28, nameBytes.length);
    writeUInt16LE(centralHeader, 30, 0);
    writeUInt16LE(centralHeader, 32, 0);
    writeUInt16LE(centralHeader, 34, 0);
    writeUInt16LE(centralHeader, 36, 0);
    writeUInt32LE(centralHeader, 38, 0);
    writeUInt32LE(centralHeader, 42, offset);
    nameBytes.copy(centralHeader, 46);
    centralChunks.push(centralHeader);

    offset += localHeader.length + dataBytes.length;
  });

  const centralDirectory = Buffer.concat(centralChunks);
  const endRecord = Buffer.alloc(22);
  writeUInt32LE(endRecord, 0, 0x06054b50);
  writeUInt16LE(endRecord, 4, 0);
  writeUInt16LE(endRecord, 6, 0);
  writeUInt16LE(endRecord, 8, entries.length);
  writeUInt16LE(endRecord, 10, entries.length);
  writeUInt32LE(endRecord, 12, centralDirectory.length);
  writeUInt32LE(endRecord, 16, offset);
  writeUInt16LE(endRecord, 20, 0);

  return Buffer.concat(localChunks.concat([centralDirectory, endRecord]));
}

function writeUInt16LE(buffer, offset, value) {
  buffer.writeUInt16LE(value & 0xffff, offset);
}

function writeUInt32LE(buffer, offset, value) {
  buffer.writeUInt32LE(value >>> 0, offset);
}

function dosTime(date) {
  return (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
}

function dosDate(date) {
  return ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
}

function crc32(bytes) {
  if (!crc32.table) {
    crc32.table = [];
    for (let i = 0; i < 256; i += 1) {
      let c = i;
      for (let j = 0; j < 8; j += 1) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      crc32.table[i] = c >>> 0;
    }
  }
  let crc = 0xffffffff;
  for (let index = 0; index < bytes.length; index += 1) {
    crc = crc32.table[(crc ^ bytes[index]) & 255] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
  };
}

function readJsonBody(request, maxBytes = Infinity) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let bytes = 0;
    let tooLarge = false;
    request.on("data", (chunk) => {
      bytes += chunk.length;
      if (bytes > maxBytes) {
        tooLarge = true;
        return;
      }
      if (!tooLarge) chunks.push(chunk);
    });
    request.on("end", () => {
      if (tooLarge) {
        const error = new Error("Request exceeds the save limit.");
        error.status = 413;
        reject(error);
        return;
      }
      try {
        const text = Buffer.concat(chunks).toString("utf8").replace(/^\uFEFF/, "");
        resolve(text ? JSON.parse(text) : {});
      } catch (error) {
        error.status = 400;
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function captureScreenshot(command, args, screenshotPath) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { windowsHide: true });
    const startedAt = Date.now();
    const timeoutMs = 30000;
    let stdout = "";
    let stderr = "";
    let lastSize = -1;
    let stableTicks = 0;
    let settled = false;

    function cleanup() {
      clearInterval(interval);
      child.stdout.removeAllListeners();
      child.stderr.removeAllListeners();
      child.removeAllListeners();
    }

    function screenshotIsStable() {
      try {
        const stats = fs.statSync(screenshotPath);
        if (!stats.size) {
          return false;
        }
        if (stats.size === lastSize) {
          stableTicks += 1;
        } else {
          lastSize = stats.size;
          stableTicks = 0;
        }
        return stableTicks >= 2;
      } catch (error) {
        return false;
      }
    }

    function resolveWithScreenshot() {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      if (!child.killed) {
        child.kill();
      }
      resolve();
    }

    function rejectCapture(message) {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      if (!child.killed) {
        child.kill();
      }
      reject(new Error(message));
    }

    const interval = setInterval(() => {
      if (screenshotIsStable()) {
        resolveWithScreenshot();
        return;
      }
      if (Date.now() - startedAt > timeoutMs) {
        if (fs.existsSync(screenshotPath)) {
          resolveWithScreenshot();
          return;
        }
        rejectCapture((stderr || stdout || "Headless browser capture timed out.").trim());
      }
    }, 250);

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("error", (error) => {
      rejectCapture(error && error.message ? error.message : "Headless browser capture failed.");
    });
    child.on("exit", (code) => {
      if (settled) {
        return;
      }
      if (code === 0 || fs.existsSync(screenshotPath)) {
        resolveWithScreenshot();
        return;
      }
      rejectCapture((stderr || stdout || "Headless browser capture failed.").trim());
    });
  });
}

function escapeHtmlAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtml(value) {
  return escapeHtmlAttribute(value).replace(/'/g, "&#39;");
}

function safeFilename(value) {
  return String(value || "proposal").replace(/[^a-z0-9-_]+/gi, "-").replace(/^-+|-+$/g, "") || "proposal";
}

function removeScratchDirectory(directoryPath) {
  try {
    fs.rmSync(directoryPath, { recursive: true, force: true, maxRetries: 8, retryDelay: 250 });
  } catch (error) {
    console.warn("Could not completely remove temporary Proposal Bot export files:", directoryPath, error && error.message ? error.message : error);
  }
}

module.exports = {
  serveStaticFile,
  buildLayoutCaptureHtml,
  buildEditableInDesignPackageBufferFromLayout,
  buildEditableInDesignIdmlBuffer,
  buildIdmlStoryXml,
  detectChromiumExecutable,
  layoutExtractionScript,
  parseLayoutDump,
  prepareEditableNativeLayout,
  runProcess
};
