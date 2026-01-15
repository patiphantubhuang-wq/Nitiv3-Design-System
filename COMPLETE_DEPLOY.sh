#!/bin/bash

# 🚀 Complete Deployment Script
# รันคำสั่งนี้: ./COMPLETE_DEPLOY.sh

set -e

cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 NITI V3 AI Design System - Complete Deployment"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 1: Push to GitHub
echo "📤 Step 1: Pushing to GitHub..."
echo ""

# Stage และ commit
git add . 2>/dev/null || true
if ! git diff --staged --quiet 2>/dev/null; then
    git commit -m "Deploy: $(date +%Y-%m-%d\ %H:%M:%S)" 2>/dev/null || true
fi

echo "⚠️  Pushing to GitHub (you will be asked for credentials)..."
echo "Username: patiphantubhuang-wq"
echo "Password: Use Personal Access Token (not your GitHub password)"
echo ""

if git push -u origin main; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
else
    echo ""
    echo "❌ Git push failed."
    echo ""
    echo "Please run manually:"
    echo "  git push -u origin main"
    echo ""
    echo "Or create Personal Access Token at:"
    echo "  https://github.com/settings/tokens"
    echo ""
    exit 1
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 2: Deploy to Vercel
echo "🚀 Step 2: Deploying to Vercel..."
echo ""

# ตรวจสอบ Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Vercel CLI not found. Installing..."
    echo "⚠️  You will be asked for your Mac password (sudo)"
    echo ""
    npm install -g vercel 2>/dev/null || sudo npm install -g vercel
    echo ""
fi

# ตรวจสอบ login
if ! vercel whoami &> /dev/null 2>&1; then
    echo "⚠️  Not logged in to Vercel. Please login..."
    echo "⚠️  This will open your browser"
    echo ""
    vercel login
    echo ""
fi

# Deploy
echo "🚀 Deploying to Vercel Production..."
echo ""

if vercel --prod --yes; then
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✅ Deployment completed successfully!"
    echo "🎉 Your Storybook is now live on Vercel!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
    echo ""
    echo "❌ Vercel deployment failed."
    echo ""
    echo "Please run manually:"
    echo "  vercel --prod"
    exit 1
fi
