# Main deployment

Storage and settings verified October 19, 2026.

- URL: https://proposals.munozalbin.com/
- Docker host: `ma-docker`, `192.168.0.120`
- Portainer stack: `proposal_bot`, ID `2`, endpoint `3`
- Container: `proposal-bot`
- Host endpoint: `127.0.0.1:4181`; container port: `4181`
- Release image: `ghcr.io/tcurrellma/proposalbot`, built by `.github/workflows/container.yml`. Deploy the successful build using its immutable `sha-<commit>` tag.
- Stack configuration: `compose.main.yaml`, managed in Portainer. GitHub builds the container image; deployment to the existing stack is a separate step after a successful build. Preserve the existing Portainer environment variables when updating it.

## Shared image library

Both Local and Main read `\\server2\administration\Dashboards\Proposal Bot\Project Images`.

Main uses the external local-driver Docker volume `proposal-bot-shared-images`, backed by SMB/CIFS on `192.168.0.14` (`server2`). Its container mount is read-only at `/app/Project Images`, with volume subpath `Dashboards/Proposal Bot/Project Images`. The volume's connection credentials are private Docker configuration; never export its complete options into Git or logs. The account details are also in the excluded private notes file, not this document.

Add JPG or PNG files within the existing category folders on server2, then refresh the dashboard. No image copy or app rebuild is required. Both environments listed 359 supported images with matching aggregate size, and Main's image-serving code returned the correct bytes for samples from every category. The remaining files in the 379-file share include formats not offered by the browser image library.

Local uses the UNC path directly through `start-proposal-bot-local.ps1` and keeps test projects in `.local-data`. Main's writable saved-project mount remains `/opt/proposal-bot/data` to `/app/data`; its sign-in settings and other environment variables were preserved. The previous host image folder `/opt/proposal-bot/Project Images` was left in place.

## Future deployments

Preserve the external shared-image volume and subpath when updating Main. Do not restore the old image bind mount or overwrite the shared library with a local copy. `compose.yaml` remains an optional generic bind-mount deployment; `compose.main.yaml` records the actual Main storage setup. The GitHub remote does not automatically deploy this Portainer stack. On an explicit push request, wait for the container workflow to succeed, update only the application image in the existing stack, and verify the live release and saved projects.
