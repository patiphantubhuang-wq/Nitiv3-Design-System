# 🚀 คู่มือการ Push และ Deploy

## ✅ Git Repository พร้อมแล้ว!

โค้ดถูก commit แล้วและ remote origin ถูกตั้งค่าไว้แล้ว

## 📤 ขั้นตอนการ Push ขึ้น GitHub

### วิธีที่ 1: ใช้ Terminal (แนะนำ)

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"

# Push ขึ้น GitHub (จะถาม username และ password/token)
git push -u origin main
```

**หมายเหตุ**: 
- ถ้าใช้ GitHub Personal Access Token แทน password:
  1. ไปที่ GitHub Settings → Developer settings → Personal access tokens
  2. สร้าง token ใหม่ (เลือก scope: `repo`)
  3. ใช้ token แทน password เมื่อ push

### วิธีที่ 2: ใช้ SSH (ถ้ามี SSH key setup)

```bash
# เปลี่ยน remote URL เป็น SSH
git remote set-url origin git@github.com:patiphantubhuang-wq/Nitiv3-Design-System.git

# Push
git push -u origin main
```

### วิธีที่ 3: ใช้ GitHub Desktop หรือ IDE

1. เปิด GitHub Desktop หรือ IDE (VS Code, etc.)
2. Push ผ่าน UI

---

## 🚀 ขั้นตอนการ Deploy ด้วย Vercel CLI

### 1. ติดตั้ง Vercel CLI (ถ้ายังไม่ได้ติดตั้ง)

```bash
npm install -g vercel
```

### 2. Login เข้า Vercel

```bash
vercel login
```

จะเปิด browser ให้ login เข้า Vercel account

### 3. Deploy to Production

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
vercel --prod
```

Vercel จะถามคำถาม:
- **Set up and deploy?** → `Y`
- **Which scope?** → เลือก account ของคุณ
- **Link to existing project?** → `N` (สำหรับครั้งแรก)
- **What's your project's name?** → `niti-v3-ai-designsystem` (หรือชื่อที่ต้องการ)
- **In which directory is your code located?** → `./`
- **Want to override the settings?** → `Y`
- **Which settings would you like to override?** → เลือก `Build Command`
- **What's your Build Command?** → `npm run build-storybook`
- **What's your Output Directory?** → `storybook-static`

### 4. ตรวจสอบ Deployment

หลังจาก deploy เสร็จ Vercel จะแสดง URL:
- **Production URL**: `https://your-project-name.vercel.app`
- **Preview URL**: สำหรับ preview deployments

---

## 🎯 วิธีที่เร็วที่สุด: ใช้ Script

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
./deploy.sh
```

Script จะ:
1. Push โค้ดขึ้น GitHub
2. Deploy ด้วย Vercel CLI

---

## 📋 สรุป Commands

```bash
# 1. Push ขึ้น GitHub
git push -u origin main

# 2. ติดตั้ง Vercel CLI (ครั้งแรกเท่านั้น)
npm install -g vercel

# 3. Login Vercel (ครั้งแรกเท่านั้น)
vercel login

# 4. Deploy
vercel --prod
```

---

## 🔐 GitHub Authentication

### ใช้ Personal Access Token (แนะนำ)

1. ไปที่: https://github.com/settings/tokens
2. คลิก "Generate new token (classic)"
3. เลือก scopes: `repo`
4. คัดลอก token
5. เมื่อ push, ใช้ token แทน password

### ใช้ GitHub CLI

```bash
# ติดตั้ง GitHub CLI
brew install gh

# Login
gh auth login

# Push
git push -u origin main
```

---

## ✅ ตรวจสอบหลัง Deploy

1. เปิด URL ที่ Vercel ให้มา
2. ตรวจสอบว่า Storybook แสดงผลถูกต้อง
3. ตรวจสอบว่า Design Tokens (Yellow Theme, IBM Plex Sans Thai Looped) ทำงานถูกต้อง
4. ตรวจสอบว่า Components ทั้งหมดแสดงผลถูกต้อง

---

## 🐛 Troubleshooting

### Git Push ล้มเหลว

```bash
# ตรวจสอบ remote
git remote -v

# ถ้า remote ไม่ถูกต้อง
git remote set-url origin https://github.com/patiphantubhuang-wq/Nitiv3-Design-System.git

# Push อีกครั้ง
git push -u origin main
```

### Vercel CLI ไม่พบ

```bash
# ติดตั้งใหม่
npm install -g vercel

# ตรวจสอบ version
vercel --version
```

### Build ล้มเหลวบน Vercel

1. ตรวจสอบ Build Logs ใน Vercel Dashboard
2. ตรวจสอบว่า `package.json` มี `build-storybook` script
3. ตรวจสอบว่า dependencies ติดตั้งครบ

---

**พร้อม Deploy แล้ว!** 🚀
