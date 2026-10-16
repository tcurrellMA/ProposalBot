# Copy this example to C:\ProgramData\ProposalBot\host-config.ps1 on server2.
# Restrict that private file to the Proposal Bot service account and IT admins.
# Never place the completed file in the shared Proposal Bot folder.

$env:MICROSOFT_TENANT_ID = '<tenant-id>'
$env:MICROSOFT_CLIENT_ID = '<client-id>'
$env:MICROSOFT_CLIENT_SECRET = '<client-secret>'
$env:MICROSOFT_REDIRECT_URI = 'https://<office-hostname>/auth/microsoft/callback'
$env:PROPOSAL_BOT_ALLOWED_EMAILS = 'person.one@your-company.com,person.two@your-company.com'

& '\\server2\administration\Dashboards\Proposal Bot\start-proposal-bot-host.ps1'
