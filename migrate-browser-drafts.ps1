param(
  [string]$SharedRoot = '\\server2\administration\Dashboards\Proposal Bot'
)

$ErrorActionPreference = 'Stop'
$app = Join-Path $SharedRoot 'server.js'
$data = Join-Path $SharedRoot 'data'
$images = Join-Path $SharedRoot 'Project Images'
foreach ($item in @($app, $data, $images)) {
  if (-not (Test-Path -LiteralPath $item)) {
    throw "Required shared path is unavailable: $item"
  }
}
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  throw 'Node.js 22 or newer must be installed on this computer.'
}

$env:HOST = '127.0.0.1'
$env:PORT = '4181'
$env:PROPOSAL_BOT_AUTH_REQUIRED = 'false'
$env:PROPOSAL_BOT_DATA_DIR = $data
$env:PROPOSAL_BOT_PROJECT_IMAGES_DIR = $images

Write-Host 'Proposal Bot is ready for one-time browser migration at http://127.0.0.1:4181/'
Write-Host 'Open that exact address in the browser that contains your old saved projects.'
Write-Host 'When the project list shows all drafts and says Saved to shared folder, close this window.'
& node $app
exit $LASTEXITCODE
