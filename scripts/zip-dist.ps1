# Zip the contents of dist/ into the given file, with forward-slash paths and dotfiles included.
param([Parameter(Mandatory = $true)][string]$Out)

Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem
$src = (Resolve-Path (Join-Path $PSScriptRoot '..\dist')).Path
if (Test-Path $Out) { Remove-Item $Out }
$zip = [System.IO.Compression.ZipFile]::Open($Out, 'Create')
try {
  Get-ChildItem -Path $src -Recurse -File -Force | ForEach-Object {
    $rel = $_.FullName.Substring($src.Length + 1).Replace('\', '/')
    [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_.FullName, $rel, 'Optimal')
  }
} finally {
  $zip.Dispose()
}
