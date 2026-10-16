param(
  [string]$Destination = '\\server2\administration\Dashboards\Proposal Bot'
)

$ErrorActionPreference = 'Stop'
$source = Split-Path -Parent $MyInvocation.MyCommand.Path
$target = Get-Item -LiteralPath $Destination -ErrorAction Stop
if (-not $target.PSIsContainer) {
  throw "The destination is not a folder: $Destination"
}

function Copy-FolderContents([string]$From, [string]$To) {
  New-Item -ItemType Directory -Path $To -Force | Out-Null
  foreach ($item in Get-ChildItem -LiteralPath $From -Force) {
    $itemTarget = Join-Path $To $item.Name
    if ($item.PSIsContainer) {
      Copy-FolderContents $item.FullName $itemTarget
    } else {
      Copy-Item -LiteralPath $item.FullName -Destination $itemTarget -Force
    }
  }
}

$files = @(
  'app.js', 'server.js', 'shared-drafts.js', 'indesign-template.js',
  'index.html', 'styles.css', 'version.json', 'MA Logo.jpg',
  'README.md', 'DEPLOYMENT_STATUS.md', 'Full Service Example.pdf', 'Dockerfile', 'compose.yaml',
  '.dockerignore', '.env.example', 'host-config.example.ps1', 'start-proposal-bot-host.ps1',
  'migrate-browser-drafts.ps1', 'publish-to-share.ps1'
)
foreach ($name in $files) {
  Copy-Item -LiteralPath (Join-Path $source $name) -Destination (Join-Path $target.FullName $name) -Force
}
foreach ($name in @('assets', 'Backups', 'InDesign Exports')) {
  Copy-FolderContents (Join-Path $source $name) (Join-Path $target.FullName $name)
}
New-Item -ItemType Directory -Path (Join-Path $target.FullName 'data') -Force | Out-Null

Write-Host "Published Proposal Bot to $($target.FullName)."
Write-Host 'The existing Project Images folder was left in place.'
Write-Host 'Stop and restart the single Proposal Bot host process to load updated server code.'
