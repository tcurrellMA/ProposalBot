param(
  [string]$SharedRoot = '\\server2\administration\Dashboards\Proposal Bot',
  [int]$Port = 4181,
  [string]$ListenHost = '127.0.0.1'
)

$ErrorActionPreference = 'Stop'

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  throw 'Node.js 22 or newer must be installed on this host.'
}
$nodeMajor = [int]((node --version) -replace '^v(\d+).*$', '$1')
if ($nodeMajor -lt 22) {
  throw 'Node.js 22 or newer must be installed on this host.'
}

$required = @(
  'MICROSOFT_TENANT_ID',
  'MICROSOFT_CLIENT_ID',
  'MICROSOFT_CLIENT_SECRET',
  'MICROSOFT_REDIRECT_URI',
  'PROPOSAL_BOT_ALLOWED_EMAILS'
)
foreach ($name in $required) {
  if (-not [Environment]::GetEnvironmentVariable($name)) {
    throw "$name must be configured in the host service account's environment."
  }
  if ([Environment]::GetEnvironmentVariable($name).Contains('<')) {
    throw "$name still contains a placeholder value."
  }
}
if (-not $env:MICROSOFT_REDIRECT_URI.StartsWith('https://', [StringComparison]::OrdinalIgnoreCase)) {
  throw 'MICROSOFT_REDIRECT_URI must use the public HTTPS address.'
}

$app = Join-Path $SharedRoot 'server.js'
$data = Join-Path $SharedRoot 'data'
$images = Join-Path $SharedRoot 'Project Images'
foreach ($folder in @($data, $images)) {
  if (-not (Test-Path -LiteralPath $folder -PathType Container)) {
    throw "Required shared folder is unavailable: $folder"
  }
}
if (-not (Test-Path -LiteralPath $app -PathType Leaf)) {
  throw "Proposal Bot is missing from $SharedRoot."
}
$probe = Join-Path $data ('.write-check-' + [guid]::NewGuid().ToString('N'))
try {
  [System.IO.File]::WriteAllText($probe, 'ok')
  Remove-Item -LiteralPath $probe -Force
} catch {
  throw "The service account cannot write to the shared data folder: $data"
}

$env:HOST = $ListenHost
$env:PORT = [string]$Port
$env:PROPOSAL_BOT_AUTH_REQUIRED = 'true'
$env:PROPOSAL_BOT_DATA_DIR = $data
$env:PROPOSAL_BOT_PROJECT_IMAGES_DIR = $images
$env:NODE_ENV = 'production'

Write-Host "Starting Proposal Bot from $SharedRoot on port $Port"
& node $app
exit $LASTEXITCODE
