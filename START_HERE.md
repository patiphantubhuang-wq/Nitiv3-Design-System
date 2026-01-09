# 🚀 เริ่มต้น Deploy ที่นี่!

## ✅ โค้ดพร้อมแล้ว!

Git repository ถูก setup แล้วและพร้อม push ขึ้น GitHub

## ⚡ วิธีที่เร็วที่สุด

### รัน Script อัตโนมัติ:

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
./RUN_DEPLOY.sh
```

Script จะ:
1. ✅ Push โค้ดขึ้น GitHub (จะถาม credentials)
2. ✅ Deploy ด้วย Vercel CLI (จะถาม login ถ้ายังไม่ได้ login)

---

## 📋 ขั้นตอนแบบ Manual

### 1. Push ขึ้น GitHub

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
git push -u origin main
```

**ถ้าถาม credentials:**
- **Username**: `patiphantubhuang-wq`
- **Password**: ใช้ **Personal Access Token** (ไม่ใช่ password)
  - ไปที่: https://github.com/settings/tokens
  - สร้าง token ใหม่ (เลือก scope: `repo`)
  - ใช้ token แทน password

### 2. ติดตั้ง Vercel CLI (ครั้งแรกเท่านั้น)

```bash
npm install -g vercel
# หรือถ้า permission denied:
sudo npm install -g vercel
```

### 3. Login Vercel (ครั้งแรกเท่านั้น)

```bash
vercel login
```

จะเปิด browser ให้ login

### 4. Deploy

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
vercel --prod
```

---

## 🎯 คำสั่งทั้งหมด (Copy & Paste)

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
2. เปิด URL เพื่อตรวจสอบ Storybook
3. ตรวจสอบ Design Tokens (Yellow Theme, IBM Plex Sans Thai Looped)

---

**พร้อม Deploy แล้ว!** 🚀
