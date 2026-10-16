# Proposal Bot: local development and office setup

## Development location and GitHub workflow

The current development folder is `C:\Users\tcurrell\Documents\New project 2\Proposal Bot`.
Startup resolves files relative to the launcher, so the folder can be moved again.

1. Double-click `start-proposal-bot.bat`, or run `powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\start-proposal-bot-local.ps1`.
2. Open `http://127.0.0.1:4181/` and test the changes. Keep the server window running; press Ctrl+C to stop. Refresh after frontend edits and restart after server edits.
3. When ready, tell Codex **"Push to github"** to commit and push all pending project changes, including new and deleted files, after relevant checks. Credentials, generated files, and project data are excluded. Changes are not pushed automatically.

The preview binds to this computer only and saves test projects in `.local-data`, separate from office projects. Its image library is `\\server2\administration\Dashboards\Proposal Bot\Project Images`. Add JPG or PNG files to the appropriate category subfolder there and refresh the app. The launcher requires access to the office share and reports an error if it is unavailable. Run `node --test tests/shared-drafts.test.js tests/project-images.test.js` for automated checks. The GitHub remote is `https://github.com/tcurrellMA/ProposalBot.git` on branch `main`. The repository was empty when connected; the first requested push will create its initial commit.

Main is `https://proposals.munozalbin.com/`. It must mount this same server2 image folder read-only at `/app/Project Images` in its container. A Linux Docker host must access the Windows share through an SMB/CIFS mount; a Windows UNC path alone is not a Linux host folder. Main's current storage mapping still needs verification and updating once a working Portainer API key is available. Keep Main's existing project-data mount and sign-in settings unchanged.

The office instructions below describe the previous `server2` setup. Confirm the new production destination before publishing or changing those settings.

Proposal Bot does not depend on Project Hub. Its office files are stored at:

`\\server2\administration\Dashboards\Proposal Bot`

See `DEPLOYMENT_STATUS.md` in that folder for the current migration results and the exact steps still needed on `server2`.

The share holds the app files, `Project Images`, `Backups`, `InDesign Exports`, and `data`. The `data` folder is the live saved-project store. Each project is a JSON file containing its uploaded images. Everyone uses **one** Proposal Bot server process on `server2`; they open the app through a browser, not by double-clicking the files on the share. Staff do not need direct write access to `data`.

## Put files on the share

From the development folder, run `publish-to-share.ps1`. It copies the app, assets, backups, and prior InDesign exports into the requested share and creates `data`. It leaves the existing `Project Images` folder in place. The script never copies secrets or temporary files. Stop Proposal Bot on `server2` before publishing an update, then restart it after the copy.

## One-time move of old browser drafts

Do this **before** starting the office service. Stop any older local Proposal Bot process, then run `migrate-browser-drafts.ps1` on the computer and browser that hold the old drafts. Open the exact old address, `http://127.0.0.1:4181/`, in that browser. The updated app copies its old browser drafts and IndexedDB images directly into the shared `data` folder. Check that the Drafts list includes the expected projects and the status says **Saved to shared folder**, then close the migration window.

Browser storage is tied to the exact site address and browser profile. Repeat the one-time migration on another computer only if it has additional drafts; the migration skips project IDs already on the share. Existing JSON backup files are also copied to `Backups`, but older backups may omit images that lived only in a browser. Those backups are archives, not the live project store.

## Run the office service on server2

IT needs to configure `server2` as the single always-on host:

1. Install Node.js 22 or newer. Chrome is also needed if staff use the InDesign export.
2. Run the process under a service account with read access to the app and `Project Images`, and read/write access to `data`. Grant staff access to the web app through sign-in; avoid broad direct write access to the project files.
3. Configure these environment variables for the service account: `MICROSOFT_TENANT_ID`, `MICROSOFT_CLIENT_ID`, `MICROSOFT_CLIENT_SECRET`, `MICROSOFT_REDIRECT_URI`, and `PROPOSAL_BOT_ALLOWED_EMAILS`. Use a dedicated Microsoft Entra app registration if one does not already exist for Proposal Bot. Register the final callback as `https://<office-hostname>/auth/microsoft/callback`; the value of `MICROSOFT_REDIRECT_URI` must match it exactly. Copy `host-config.example.ps1` to a private local path such as `C:\ProgramData\ProposalBot\host-config.ps1`, fill in its values, and restrict that file to the service account and IT admins. Do not put the completed file on the share.
4. Publish the service through an HTTPS endpoint (for example, an IIS reverse proxy on `server2`) that forwards to `http://127.0.0.1:4181`. If the proxy runs on `server2`, IT may bind the Node process to loopback instead of all interfaces. The browser-facing URL must use HTTPS for Microsoft sign-in.
5. Have the service account run the private `host-config.ps1` at startup using a managed Windows service or scheduled task with automatic restart. The task command can be `powershell.exe -NoProfile -File "C:\ProgramData\ProposalBot\host-config.ps1"`. This wrapper invokes `start-proposal-bot-host.ps1`, which reads the app and project files from the share, requires sign-in settings, and starts the Node process. Only one host process should use `data` at a time.

The health check is `/api/health`. The Drafts **Refresh** button loads coworkers' newly saved projects, and the list also refreshes when the browser regains focus. If two people edit the same project, the later save is rejected rather than silently overwriting the first. Back up `data` regularly. Personal template and preset preferences still live in each person's browser; saved project records do not.

The current per-project save limit is 100 MB. The largest migrated project is about 47 MB; watch the folder's available space as more images are added.

## Local development

Run `start-proposal-bot-local.ps1` or double-click `start-proposal-bot.bat`. Open `http://127.0.0.1:4181/`. The launcher uses `.local-data` for test projects and `\\server2\administration\Dashboards\Proposal Bot\Project Images` for the image library. For a deliberate alternate library, pass `-ImagesDirectory 'C:\path\to\images'`. Direct `node server.js` startup uses the `data` and `Project Images` folders beside the server unless environment variables override them. Do not run multiple copies against the office `data` folder.

The optional `Dockerfile` and `compose.yaml` can host a separate Proposal Bot service on another machine. Their bind mounts must point to folders that machine can access. They do not require Project Hub.
