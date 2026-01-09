#!/bin/bash

# Script สำหรับ Push โค้ดขึ้น GitHub และ Deploy ด้วย Vercel CLI

set -e

echo "🚀 Starting deployment process..."

# ตรวจสอบว่า Git repository ถูก initialize แล้วหรือยัง
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Running git init..."
    git init
fi

# ตรวจสอบว่า remote origin มีอยู่แล้วหรือยัง
if ! git remote get-url origin &> /dev/null; then
    echo "📦 Adding remote origin..."
    git remote add origin https://github.com/patiphantubhuang-wq/Nitiv3-Design-System.git
fi

# Stage all changes
echo "📝 Staging changes..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update: NITI V3 AI Design System" || echo "No changes to commit"

# Push to GitHub
echo "📤 Pushing to GitHub..."
echo "⚠️  You may need to enter your GitHub credentials"
git push -u origin main || {
    echo "❌ Git push failed. Please run manually:"
    echo "   git push -u origin main"
    exit 1
}

echo "✅ Code pushed to GitHub successfully!"

# ตรวจสอบว่า Vercel CLI ติดตั้งแล้วหรือยัง
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
echo "⚠️  You may need to login to Vercel if not already logged in"
vercel --prod || {
    echo "❌ Vercel deployment failed. Please run manually:"
    echo "   vercel login"
    echo "   vercel --prod"
    exit 1
}

echo "✅ Deployment completed successfully!"
echo "🎉 Your Storybook is now live on Vercel!"
