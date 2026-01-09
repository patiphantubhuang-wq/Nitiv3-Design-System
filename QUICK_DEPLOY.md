# ⚡ Quick Deploy Guide

## ✅ Git Repository พร้อมแล้ว!

โค้ดถูก commit และ remote origin ตั้งค่าไว้แล้ว

## 🚀 ขั้นตอนการ Push และ Deploy

### 1. Push ขึ้น GitHub

รันคำสั่งนี้ใน Terminal:

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
git push -u origin main
```

**หมายเหตุ**: จะถาม username และ password/token
- ถ้าใช้ **Personal Access Token**: ไปที่ https://github.com/settings/tokens สร้าง token ใหม่ (เลือก scope: `repo`)

### 2. Deploy ด้วย Vercel CLI

```bash
# ติดตั้ง Vercel CLI (ครั้งแรกเท่านั้น)
npm install -g vercel

# Login (ครั้งแรกเท่านั้น)
vercel login

# Deploy
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
vercel --prod
```

### หรือใช้ Script อัตโนมัติ

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
./deploy.sh
```

---

## 📋 คำสั่งทั้งหมด (Copy & Paste)

```bash
# 1. Push ขึ้น GitHub
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
git push -u origin main

# 2. ติดตั้ง Vercel CLI (ครั้งแรกเท่านั้น)
npm install -g vercel

# 3. Login Vercel (ครั้งแรกเท่านั้น)
vercel login

# 4. Deploy
vercel --prod
```

---

## ✅ ตรวจสอบหลัง Deploy

1. Vercel จะแสดง URL หลังจาก deploy เสร็จ
2. เปิด URL เพื่อตรวจสอบว่า Storybook แสดงผลถูกต้อง

---

**พร้อม Deploy แล้ว!** 🚀
