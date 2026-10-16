# Proposal Bot handoff — September 29, 2026

## Completed

- Proposal Bot is independent of Project Hub.
- App files, assets, five older JSON backups, and 18 InDesign exports were copied to `\\server2\administration\Dashboards\Proposal Bot`.
- The existing `Project Images` folder on the share matches the local 379-file library by relative path and file size.
- Seven drafts from the original Chrome profile were migrated into `data`. Every stored photo, team photo, logo, signature, and attachment image referenced by those drafts was present after migration.
- A separate archive of the seven complete project files is in `Backups\shared-projects-2026-09-29T09-25-08.zip`.
- The migration server on the user's computer was stopped after verification, so there is no second writer using `data`.

## IT setup remaining on server2

1. Install Node.js 22 or newer; install Chrome if the InDesign export will be used.
2. Choose a service account with read access to this folder and `Project Images`, and read/write access to `data`.
3. Create a dedicated Microsoft Entra web app registration for Proposal Bot. Configure the final HTTPS callback URL and approved employee email list.
4. Copy `host-config.example.ps1` to a private path on `server2` such as `C:\ProgramData\ProposalBot\host-config.ps1`, fill in its values, and restrict its ACL to IT and the service account. Never put the completed configuration or client secret in this share.
5. Provide an HTTPS address for coworkers, with a local reverse proxy from that address to `http://127.0.0.1:4181` on `server2`.
6. Run the private configuration script as a managed Windows service or startup scheduled task with automatic restart. The wrapper calls `start-proposal-bot-host.ps1` from this share. Run only one Proposal Bot host process against `data`.
7. Verify `/api/health`, sign in as an approved user, confirm that seven drafts appear, and save/reload a test project.

The agent could write to the share but could not administer `server2`: remote PowerShell and remote Task Scheduler both returned access denied. Port 4181 on `server2` was closed when checked. An authorized server administrator must finish the host and sign-in configuration.
