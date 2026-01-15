#!/bin/bash

# 🚀 Quick Deploy Script for Storybook
# สคริปต์นี้จะ build และ deploy Storybook ไปยัง Vercel

set -e

echo "🚀 Starting deployment process..."

# 1. Build Storybook
echo "📦 Building Storybook..."
npm run build-storybook

# 2. Check if build succeeded
if [ ! -d "storybook-static" ]; then
  echo "❌ Build failed! storybook-static directory not found."
  exit 1
fi

echo "✅ Build successful!"

# 3. Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo "📝 Check the URL above to access your Storybook"
echo ""
