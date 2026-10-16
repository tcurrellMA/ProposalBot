@echo off
setlocal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-proposal-bot-local.ps1"
if errorlevel 1 pause
