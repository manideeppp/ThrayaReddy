@echo off
REM Installation & Setup Script for Premium React Engagement Invitation
REM Run: setup.bat

echo 👰🤵 Premium React Engagement Invitation Setup
echo ================================================

REM Check if Node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install from https://nodejs.org
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo ✅ npm version: %NPM_VERSION%

echo.
echo 🧹 Cleaning old dependencies...
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul

echo.
echo 📦 Installing dependencies (this may take a few minutes)...
call npm install

echo.
echo ✅ Installation complete!

echo.
echo 🚀 Next steps:
echo 1. Start development server:     npm run dev
echo 2. Build for production:          npm run build
echo 3. Preview production build:      npm run preview

echo.
echo 📝 Customize your invitation:
echo   - Event date:      src/components/CountdownSection.tsx
echo   - Names:           Search for 'Bharath' and 'Thraya'
echo   - Colors:          tailwind.config.js
echo   - Photos:          assets/ folder
echo   - Music:           Add music.mp3 to assets/

echo.
echo 💡 Tips:
echo   - Hot reload is enabled (changes update automatically)
echo   - Check localhost:5173 in your browser
echo   - Read SETUP.md and README_REACT.md for more info

echo.
echo 🎉 Ready to create magic! Let's go!
