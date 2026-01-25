#!/bin/bash

echo "🚀 Setting up Product Coaching Platform..."
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup complete!"
    echo ""
    echo "To start the development server, run:"
    echo "  npm run dev"
    echo ""
    echo "Then open http://localhost:3000 in your browser"
else
    echo ""
    echo "❌ Installation failed. Please check the errors above."
    exit 1
fi
