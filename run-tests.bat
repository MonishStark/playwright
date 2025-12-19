@echo off
echo ================================
echo I Got Mind – QA Automation Suite
echo ================================

echo Installing dependencies...
call npm install 

echo Installing Playwright browsers...
call npx playwright install 

echo Running tests...
call npm run update-snapshots

echo Opening report...
call npx playwright show-report

pause
