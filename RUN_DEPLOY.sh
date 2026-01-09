#!/bin/bash

# ⚡ Script สำหรับ Push และ Deploy อัตโนมัติ
# รันคำสั่งนี้: ./RUN_DEPLOY.sh

set -e

echo "🚀 NITI V3 AI Design System - Deployment Script"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# สีสำหรับ output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 1. Push ขึ้น GitHub
echo -e "${BLUE}📤 Step 1: Pushing to GitHub...${NC}"
echo ""

# Stage changes
git add .

# Commit if there are changes
if ! git diff --staged --quiet; then
    git commit -m "Update: NITI V3 AI Design System - $(date +%Y-%m-%d\ %H:%M:%S)" || true
fi

# Push
echo -e "${YELLOW}⚠️  Pushing to GitHub (you may need to enter GitHub credentials)...${NC}"
echo ""

if git push -u origin main; then
    echo -e "${GREEN}✅ Code pushed to GitHub successfully!${NC}"
else
    echo -e "${RED}❌ Git push failed.${NC}"
    echo ""
    echo "Please run manually:"
    echo "  git push -u origin main"
    echo ""
    echo "Or use Personal Access Token:"
    echo "  1. Go to: https://github.com/settings/tokens"
    echo "  2. Create new token (classic) with 'repo' scope"
    echo "  3. Use token as password when pushing"
    echo ""
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 2. Deploy ด้วย Vercel CLI
echo -e "${BLUE}🚀 Step 2: Deploying to Vercel...${NC}"
echo ""

# ตรวจสอบ Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠️  Vercel CLI not found. Installing...${NC}"
    echo ""
    echo "Please run: npm install -g vercel"
    echo "Or use: sudo npm install -g vercel (if permission denied)"
    echo ""
    read -p "Press Enter after installing Vercel CLI..."
fi

# ตรวจสอบ login
if ! vercel whoami &> /dev/null; then
    echo -e "${YELLOW}⚠️  Not logged in to Vercel. Please login...${NC}"
    vercel login
fi

echo ""
echo -e "${YELLOW}🚀 Deploying to Vercel Production...${NC}"
echo ""

# Deploy
if vercel --prod --yes; then
    echo ""
    echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
    echo ""
    echo -e "${GREEN}🎉 Your Storybook is now live on Vercel!${NC}"
else
    echo -e "${RED}❌ Vercel deployment failed.${NC}"
    echo ""
    echo "Please run manually:"
    echo "  vercel --prod"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
