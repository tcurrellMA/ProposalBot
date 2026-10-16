param(
  [int]$Port = 4181,
  [string]$ImagesDirectory = '\\server2\administration\Dashboards\Proposal Bot\Project Images'
)

$ErrorActionPreference = 'Stop'
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  throw 'Install Node.js 22 or newer to run the local preview.'
}
$nodeMajor = [int]((node --version) -replace '^v(\d+).*$', '$1')
if ($nodeMajor -lt 22) { throw 'Node.js 22 or newer is required.' }
if (-not (Test-Path -LiteralPath $ImagesDirectory -PathType Container)) {
  throw "Project image folder is unavailable: $ImagesDirectory. Connect to the office network or VPN and retry."
}
$ImagesDirectory = (Get-Item -LiteralPath $ImagesDirectory).FullName

$previewUrl = "http://127.0.0.1:$Port/"
$listener = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
if ($listener) {
  $health = $null
  try {
    $health = Invoke-RestMethod ($previewUrl + 'api/health') -TimeoutSec 3
  } catch {
    # Report the occupied port without stopping an unrelated process.
  }
  if ($health -and $health.ok -and $health.service -eq 'Proposal Bot' -and
      $health.sharedDraftsDirectory -eq (Join-Path $PSScriptRoot '.local-data') -and
      $health.projectImagesDirectory -eq $ImagesDirectory -and
      $health.authRequired -eq $false) {
    Write-Host "Local preview is already running: $previewUrl"
    exit 0
  }
  throw "Port $Port is occupied by another service or an unresponsive preview. Use -Port 4182 for another preview, or stop the old preview and retry."
}

$settings = @{
  HOST = '127.0.0.1'
  PORT = [string]$Port
  NODE_ENV = 'development'
  PROPOSAL_BOT_AUTH_REQUIRED = 'false'
  PROPOSAL_BOT_DATA_DIR = (Join-Path $PSScriptRoot '.local-data')
  PROPOSAL_BOT_PROJECT_IMAGES_DIR = $ImagesDirectory
}
$previous = @{}
try {
  foreach ($name in $settings.Keys) {
    $previous[$name] = [Environment]::GetEnvironmentVariable($name, 'Process')
    [Environment]::SetEnvironmentVariable($name, $settings[$name], 'Process')
  }
  Write-Host "Local preview: http://127.0.0.1:$Port/"
  Write-Host "Project images: $ImagesDirectory"
  Write-Host 'Press Ctrl+C to stop. Test projects are saved in .local-data.'
  & node (Join-Path $PSScriptRoot 'server.js')
  $result = $LASTEXITCODE
} finally {
  foreach ($name in $previous.Keys) {
    [Environment]::SetEnvironmentVariable($name, $previous[$name], 'Process')
  }
}
exit $result
