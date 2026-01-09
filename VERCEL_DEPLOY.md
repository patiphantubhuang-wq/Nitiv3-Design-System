# 🚀 คู่มือการ Deploy Storybook ขึ้น Vercel

## 📋 วิธีที่ 1: Deploy ผ่าน Vercel Dashboard (แนะนำ)

### ขั้นตอนที่ 1: เตรียม Repository

1. **Push โค้ดขึ้น GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Storybook Design System"
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

### ขั้นตอนที่ 2: Deploy บน Vercel

1. **ไปที่ [Vercel Dashboard](https://vercel.com/dashboard)**
2. **คลิก "Add New Project"**
3. **Import Git Repository** ที่ต้องการ deploy
4. **ตั้งค่า Project:**
   - **Framework Preset**: Other
   - **Root Directory**: `./` (root)
   - **Build Command**: `npm run build-storybook`
   - **Output Directory**: `storybook-static`
   - **Install Command**: `npm install`

5. **คลิก "Deploy"**

### ขั้นตอนที่ 3: ตรวจสอบ

- Vercel จะ build และ deploy อัตโนมัติ
- รอให้ build เสร็จ (ประมาณ 2-5 นาที)
- จะได้ URL สำหรับเข้าถึง Storybook

---

## 📋 วิธีที่ 2: Deploy ผ่าน Vercel CLI

### ขั้นตอนที่ 1: ติดตั้ง Vercel CLI

```bash
npm i -g vercel
```

### ขั้นตอนที่ 2: Login

```bash
vercel login
```

### ขั้นตอนที่ 3: Deploy

```bash
# Deploy to production
vercel --prod

# หรือ deploy to preview
vercel
```

### ขั้นตอนที่ 4: ตั้งค่า Build Command

Vercel จะถามคำถาม:
- **What's your project's name?** → `niti-v3-ai-designsystem` (หรือชื่อที่ต้องการ)
- **In which directory is your code located?** → `./`
- **Want to override the settings?** → `Y`
- **Which settings would you like to override?** → เลือก `Build Command`
- **What's your Build Command?** → `npm run build-storybook`
- **What's your Output Directory?** → `storybook-static`

---

## 📋 วิธีที่ 3: Deploy อัตโนมัติผ่าน Git (แนะนำที่สุด)

### ขั้นตอนที่ 1: Push โค้ดขึ้น Git

```bash
git add .
git commit -m "Add Vercel configuration"
git push
```

### ขั้นตอนที่ 2: เชื่อมต่อกับ Vercel

1. ไปที่ [Vercel Dashboard](https://vercel.com/dashboard)
2. คลิก "Add New Project"
3. Import Git Repository
4. Vercel จะ detect `vercel.json` อัตโนมัติ
5. คลิก "Deploy"

### ขั้นตอนที่ 3: Auto Deploy

- ทุกครั้งที่ push code ขึ้น Git, Vercel จะ build และ deploy อัตโนมัติ
- สามารถตั้งค่า Preview Deployments สำหรับ Pull Requests ได้

---

## ⚙️ Configuration Files

### `vercel.json`

ไฟล์นี้ถูกสร้างไว้แล้วและกำหนด:
- **Build Command**: `npm run build-storybook`
- **Output Directory**: `storybook-static`
- **Rewrites**: สำหรับ SPA routing

### `.vercelignore`

ไฟล์นี้จะบอก Vercel ว่าไฟล์ไหนไม่ต้อง upload:
- `node_modules`
- `src` (source files)
- `storybook-static` (จะ build ใหม่บน Vercel)

---

## 🔧 Environment Variables (ถ้าจำเป็น)

ถ้ามี Environment Variables ที่ต้องใช้:

1. ไปที่ Vercel Dashboard
2. เลือก Project
3. ไปที่ Settings → Environment Variables
4. เพิ่ม variables ที่ต้องการ

---

## 📝 หมายเหตุ

1. **Build Time**: การ build Storybook อาจใช้เวลา 2-5 นาที
2. **File Size**: Storybook build อาจมีขนาดใหญ่ (~1-2 MB)
3. **Auto Deploy**: ทุกครั้งที่ push code ขึ้น Git, Vercel จะ deploy อัตโนมัติ
4. **Preview Deployments**: Pull Requests จะได้ preview URL อัตโนมัติ

---

## 🎯 ขั้นตอนสรุป (เร็วที่สุด)

1. **Push code ขึ้น Git**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push
   ```

2. **ไปที่ Vercel Dashboard**
   - https://vercel.com/dashboard
   - คลิก "Add New Project"
   - Import Git Repository
   - คลิก "Deploy"

3. **รอให้ Deploy เสร็จ**
   - จะได้ URL สำหรับเข้าถึง Storybook

---

## ✅ ตรวจสอบหลัง Deploy

1. เปิด URL ที่ Vercel ให้มา
2. ตรวจสอบว่า Storybook แสดงผลถูกต้อง
3. ตรวจสอบว่า Design Tokens (Yellow Theme, IBM Plex Sans Thai Looped) ทำงานถูกต้อง
4. ตรวจสอบว่า Components ทั้งหมดแสดงผลถูกต้อง

---

## 🐛 Troubleshooting

### Build ล้มเหลว

1. ตรวจสอบว่า `package.json` มี `build-storybook` script
2. ตรวจสอบว่า dependencies ติดตั้งครบ
3. ดู Build Logs ใน Vercel Dashboard

### 404 Error

1. ตรวจสอบว่า `vercel.json` มี `rewrites` สำหรับ SPA routing
2. ตรวจสอบว่า `outputDirectory` ถูกต้อง (`storybook-static`)

### Assets ไม่โหลด

1. ตรวจสอบว่า paths ใน Storybook build ถูกต้อง
2. ตรวจสอบว่า `base` path ใน Storybook config ถูกต้อง

---

**พร้อม Deploy แล้ว!** 🚀
