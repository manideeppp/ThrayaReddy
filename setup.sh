#!/bin/bash

# Installation & Setup Script for Premium React Engagement Invitation
# Run: bash setup.sh

echo "👰🤵 Premium React Engagement Invitation Setup"
echo "================================================"

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"

# Clean install
echo ""
echo "🧹 Cleaning old dependencies..."
rm -rf node_modules package-lock.json

echo ""
echo "📦 Installing dependencies (this may take a few minutes)..."
npm install

echo ""
echo "✅ Installation complete!"

echo ""
echo "🚀 Next steps:"
echo "1. Start development server:     npm run dev"
echo "2. Build for production:          npm run build"
echo "3. Preview production build:      npm run preview"

echo ""
echo "📝 Customize your invitation:"
echo "  - Event date:      src/components/CountdownSection.tsx"
echo "  - Names:           Search for 'Bharath' and 'Thraya'"
echo "  - Colors:          tailwind.config.js"
echo "  - Photos:          assets/ folder"
echo "  - Music:           Add music.mp3 to assets/"

echo ""
echo "💡 Tips:"
echo "  - Hot reload is enabled (changes update automatically)"
echo "  - Check localhost:5173 in your browser"
echo "  - Read SETUP.md and README_REACT.md for more info"

echo ""
echo "🎉 Ready to create magic! Let's go!"
