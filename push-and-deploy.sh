#!/bin/bash

# Script สำหรับ Push และ Deploy อัตโนมัติ

set -e

echo "🚀 Starting deployment process..."
echo ""

# สีสำหรับ output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Push ขึ้น GitHub
echo -e "${YELLOW}📤 Step 1: Pushing to GitHub...${NC}"
echo ""

# ตรวจสอบว่า remote origin มีอยู่แล้วหรือยัง
if ! git remote get-url origin &> /dev/null; then
    echo "Adding remote origin..."
    git remote add origin https://github.com/patiphantubhuang-wq/Nitiv3-Design-System.git
fi

# Stage และ commit changes
echo "Staging changes..."
git add .

# ตรวจสอบว่ามี changes หรือไม่
if git diff --staged --quiet; then
    echo -e "${GREEN}✓ No changes to commit${NC}"
else
    echo "Committing changes..."
    git commit -m "Update: NITI V3 AI Design System - $(date +%Y-%m-%d)" || true
fi

# Push to GitHub
echo ""
echo -e "${YELLOW}⚠️  Pushing to GitHub (you may need to enter credentials)...${NC}"
echo ""

# ลอง push ด้วย HTTPS
if git push -u origin main 2>&1 | tee /tmp/git_push.log; then
    echo -e "${GREEN}✅ Code pushed to GitHub successfully!${NC}"
else
    echo -e "${RED}❌ Git push failed.${NC}"
    echo ""
    echo "Please run manually:"
    echo "  git push -u origin main"
    echo ""
    echo "Or use GitHub CLI:"
    echo "  gh auth login"
    echo "  git push -u origin main"
    echo ""
    read -p "Press Enter to continue with Vercel deployment anyway..."
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 2. ตรวจสอบ Vercel CLI
echo -e "${YELLOW}🚀 Step 2: Deploying to Vercel...${NC}"
echo ""

if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
else
    echo -e "${GREEN}✓ Vercel CLI found${NC}"
fi

# ตรวจสอบว่า login แล้วหรือยัง
echo ""
echo -e "${YELLOW}⚠️  Checking Vercel authentication...${NC}"

if vercel whoami &> /dev/null; then
    echo -e "${GREEN}✓ Already logged in to Vercel${NC}"
else
    echo -e "${YELLOW}⚠️  Not logged in. Please login:${NC}"
    echo "  vercel login"
    echo ""
    read -p "Press Enter to open Vercel login..."
    vercel login
fi

echo ""
echo -e "${YELLOW}🚀 Deploying to Vercel Production...${NC}"
echo ""

# Deploy to production
if vercel --prod --yes; then
    echo ""
    echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
    echo ""
    echo "Your Storybook is now live on Vercel!"
else
    echo -e "${RED}❌ Vercel deployment failed.${NC}"
    echo ""
    echo "Please run manually:"
    echo "  vercel --prod"
    exit 1
fi

echo ""
echo -e "${GREEN}🎉 All done!${NC}"
