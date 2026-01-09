#!/bin/bash

# ⚡ COPY & PASTE คำสั่งนี้ใน Terminal แล้วกด Enter

cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"

echo "🚀 Starting deployment..."
echo ""

# Step 1: Push to GitHub
echo "📤 Step 1: Pushing to GitHub..."
echo "⚠️  You will be asked for GitHub credentials"
echo ""

# Stage และ commit
git add .
git commit -m "Update: Ready for deployment" 2>/dev/null || echo "No changes to commit"

# Push
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Pushed to GitHub successfully!"
    echo ""
    
    # Step 2: Deploy to Vercel
    echo "🚀 Step 2: Deploying to Vercel..."
    echo ""
    
    # ตรวจสอบ Vercel CLI
    if ! command -v vercel &> /dev/null; then
        echo "⚠️  Installing Vercel CLI..."
        npm install -g vercel || sudo npm install -g vercel
    fi
    
    # ตรวจสอบ login
    if ! vercel whoami &> /dev/null; then
        echo "⚠️  Please login to Vercel..."
        vercel login
    fi
    
    # Deploy
    echo ""
    echo "🚀 Deploying to production..."
    vercel --prod --yes
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Deployment completed!"
        echo "🎉 Your Storybook is now live!"
    else
        echo ""
        echo "❌ Deployment failed. Please run manually:"
        echo "   vercel --prod"
    fi
else
    echo ""
    echo "❌ Git push failed."
    echo ""
    echo "Please run manually:"
    echo "   git push -u origin main"
    echo ""
    echo "Or use GitHub Personal Access Token:"
    echo "   1. Go to: https://github.com/settings/tokens"
    echo "   2. Create new token (classic) with 'repo' scope"
    echo "   3. Use token as password when pushing"
fi
