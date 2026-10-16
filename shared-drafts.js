const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const MAX_DRAFT_BYTES = 100 * 1024 * 1024;
const ID_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/;

function createSharedDraftStore(directory) {
  const root = path.resolve(directory);
  const locks = new Map();

  function exclusive(id, work) {
    const previous = locks.get(id) || Promise.resolve();
    const current = previous.catch(() => {}).then(work);
    locks.set(id, current);
    current.finally(() => {
      if (locks.get(id) === current) locks.delete(id);
    }).catch(() => {});
    return current;
  }

  function fileFor(id) {
    if (!ID_PATTERN.test(String(id || ""))) {
      const error = new Error("Invalid project ID.");
      error.status = 400;
      throw error;
    }
    return path.join(root, id + ".json");
  }

  async function read(id) {
    let text;
    try {
      text = await fs.readFile(fileFor(id), "utf8");
    } catch (error) {
      if (error.code === "ENOENT") return null;
      throw error;
    }
    const draft = JSON.parse(text);
    return { draft, revision: crypto.createHash("sha256").update(text).digest("hex") };
  }

  async function list() {
    await fs.mkdir(root, { recursive: true });
    const names = (await fs.readdir(root)).filter((name) => name.endsWith(".json") && ID_PATTERN.test(name.slice(0, -5)));
    const drafts = {};
    const revisions = {};
    for (const name of names) {
      const id = name.slice(0, -5);
      const item = await read(id);
      if (item && item.draft && item.draft.meta && item.draft.meta.id === id) {
        drafts[id] = item.draft;
        revisions[id] = item.revision;
      }
    }
    return { drafts, revisions };
  }

  async function save(id, draft, expectedRevision) {
    fileFor(id);
    if (!draft || typeof draft !== "object" || Array.isArray(draft) || !draft.meta || draft.meta.id !== id) {
      const error = new Error("Project ID does not match the saved project.");
      error.status = 400;
      throw error;
    }
    if (typeof expectedRevision !== "string") {
      const error = new Error("A project revision is required.");
      error.status = 400;
      throw error;
    }
    const text = JSON.stringify(draft);
    if (Buffer.byteLength(text, "utf8") > MAX_DRAFT_BYTES) {
      const error = new Error("This project exceeds the 100 MB save limit.");
      error.status = 413;
      throw error;
    }
    return exclusive(id, async () => {
      await fs.mkdir(root, { recursive: true });
      const existing = await read(id);
      if ((existing ? existing.revision : "") !== expectedRevision) {
        const error = new Error("This project was changed by someone else. Reload it before saving again.");
        error.status = 409;
        throw error;
      }
      const target = fileFor(id);
      const temporary = path.join(root, "." + id + "." + crypto.randomUUID() + ".tmp");
      try {
        await fs.writeFile(temporary, text, { encoding: "utf8", flag: "wx", mode: 0o600 });
        await fs.rename(temporary, target);
      } finally {
        await fs.rm(temporary, { force: true });
      }
      return crypto.createHash("sha256").update(text).digest("hex");
    });
  }

  async function remove(id, expectedRevision) {
    return exclusive(id, async () => {
      const existing = await read(id);
      if (!existing) return false;
      if (existing.revision !== expectedRevision) {
        const error = new Error("This project was changed by someone else. Reload it before deleting.");
        error.status = 409;
        throw error;
      }
      await fs.unlink(fileFor(id));
      return true;
    });
  }

  return { root, list, read, save, remove };
}

module.exports = { createSharedDraftStore, MAX_DRAFT_BYTES };
