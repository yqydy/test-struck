#requires -Version 5.1
<#
.SYNOPSIS
  Install the ai-native-project-kit skill for DSH or the current project.

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
  # -> %USERPROFILE%\.dsh\skills\ai-native-project-kit

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1 -Project
  # -> <current directory>\.agents\skills\ai-native-project-kit
#>
param(
  [switch]$Project,
  [string]$TargetRoot,
  [switch]$Force
)

$ErrorActionPreference = 'Stop'

$repo = Split-Path -Parent $PSScriptRoot
$skillName = 'ai-native-project-kit'
$sourceSkill = Join-Path $repo 'SKILL.md'

if (-not (Test-Path -LiteralPath $sourceSkill)) {
  throw "找不到 SKILL.md：$sourceSkill"
}

if ($TargetRoot) {
  $root = $TargetRoot
} elseif ($Project) {
  $root = Join-Path (Get-Location) '.agents\skills'
} else {
  $dshHome = $env:DSH_HOME
  if (-not $dshHome) { $dshHome = Join-Path $HOME '.dsh' }
  $root = Join-Path $dshHome 'skills'
}

$target = Join-Path $root $skillName
New-Item -ItemType Directory -Force -Path $root | Out-Null

if (Test-Path -LiteralPath $target) {
  if (-not $Force) {
    $backup = "$target.bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
    Move-Item -LiteralPath $target -Destination $backup
    Write-Host "已备份旧版本：$backup" -ForegroundColor DarkYellow
  } else {
    Remove-Item -LiteralPath $target -Recurse -Force
  }
}

New-Item -ItemType Directory -Force -Path $target | Out-Null

$items = @('SKILL.md', 'README.md', 'LICENSE', 'NOTICE.md', 'knowledge', 'references', 'templates', 'examples', 'patterns', 'scripts', 'package.json')
foreach ($item in $items) {
  $source = Join-Path $repo $item
  if (Test-Path -LiteralPath $source) {
    Copy-Item -LiteralPath $source -Destination $target -Recurse -Force
  }
}

Write-Host ""
Write-Host "✓ 已安装：$skillName" -ForegroundColor Green
Write-Host "  目标：$target"
Write-Host ""
Write-Host "新开一个 DSH 会话即可使用；也可以直接说："
Write-Host "  「用 ai-native-project-kit 帮我做 …」"
Write-Host ""
Write-Host "校验源文件：node scripts/validate.mjs"
