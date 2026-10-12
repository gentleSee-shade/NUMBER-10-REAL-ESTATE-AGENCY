@echo off
cd /d "%~dp0"
npm start
if errorlevel 1 (
  echo.
  echo Could not start the local site. Make sure Node.js is installed and run npm install.
  pause
)
