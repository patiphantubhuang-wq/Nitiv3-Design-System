#!/bin/bash
set -e
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
echo "🚀 Deploying NITI V3 AI Design System..."
echo ""
echo "📤 Step 1: Pushing to GitHub..."
git add . 2>/dev/null || true
git commit -m "Deploy: $(date +%Y-%m-%d)" 2>/dev/null || echo "No changes"
echo "⚠️  Please enter GitHub credentials when prompted"
git push -u origin main
echo ""
echo "🚀 Step 2: Deploying to Vercel..."
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel 2>/dev/null || sudo npm install -g vercel
fi
if ! vercel whoami &> /dev/null; then
    echo "Please login to Vercel..."
    vercel login
fi
vercel --prod --yes
echo ""
echo "✅ Deployment completed!"
