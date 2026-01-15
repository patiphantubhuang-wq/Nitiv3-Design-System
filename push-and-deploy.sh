#!/bin/bash

# 📤 Push to GitHub and Deploy Script
# สคริปต์นี้จะ push โค้ดขึ้น GitHub และ Vercel จะ deploy อัตโนมัติ

set -e

echo "📤 Starting push to GitHub..."

# 1. Add all files
echo "📦 Adding files..."
git add .

# 2. Check if there are changes to commit
if git diff --staged --quiet; then
  echo "ℹ️  No changes to commit."
  exit 0
fi

# 3. Commit
echo "💾 Committing changes..."
git commit -m "Fix Storybook routing and update design tokens for Vercel deployment"

# 4. Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Push successful!"
echo ""
echo "📝 Next steps:"
echo "1. ตรวจสอบ Vercel Dashboard: https://vercel.com/dashboard"
echo "2. ถ้ายังไม่ได้เชื่อมต่อ GitHub:"
echo "   - ไปที่ Vercel Dashboard → Add New → Project"
echo "   - Import repository: patiphantubhuang-wq/Nitiv3-Design-System"
echo "   - ตั้งค่า Build Command: npm run build-storybook"
echo "   - ตั้งค่า Output Directory: storybook-static"
echo "3. รอให้ Vercel deploy อัตโนมัติ (ประมาณ 1-2 นาที)"
echo ""
