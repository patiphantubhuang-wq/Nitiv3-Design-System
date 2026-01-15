# 🚀 คู่มือ Deploy Storybook (ฉบับย่อ)

## ✅ สิ่งที่ต้องมี
- ✅ Vercel CLI ติดตั้งแล้ว
- ✅ `vercel.json` ตั้งค่าไว้แล้ว
- ✅ `build-storybook` script พร้อมแล้ว

---

## 🎯 วิธีที่ 1: Deploy ด้วย Vercel CLI (แนะนำ - เร็วที่สุด)

### ขั้นตอน:

1. **Login Vercel (ถ้ายังไม่ได้ login)**
   ```bash
   vercel login
   ```

2. **Deploy to Production**
   ```bash
   cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
   vercel --prod
   ```

3. **ตอบคำถาม:**
   - **Set up and deploy?** → `Y`
   - **Which scope?** → เลือก account ของคุณ
   - **Link to existing project?** → `N` (ครั้งแรก) หรือ `Y` (ถ้าเคย deploy แล้ว)
   - **What's your project's name?** → `niti-design-system` (หรือชื่อที่ต้องการ)
   - **In which directory is your code located?** → `./`
   - **Want to override the settings?** → `N` (เพราะมี `vercel.json` อยู่แล้ว)

4. **รอให้ deploy เสร็จ** - Vercel จะแสดง URL ให้:
   ```
   ✅ Production: https://your-project-name.vercel.app
   ```

---

## 🌐 วิธีที่ 2: Deploy ผ่าน Vercel Dashboard (ง่ายกว่า - ไม่ต้องใช้ CLI)

### ขั้นตอน:

1. **Push โค้ดขึ้น GitHub ก่อน** (ถ้ายังไม่ได้ push)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **ไปที่ Vercel Dashboard:**
   - เปิด: https://vercel.com/new
   - Login ด้วย GitHub account

3. **Import Project:**
   - เลือก repository: `patiphantubhuang-wq/Nitiv3-Design-System`
   - Vercel จะ detect `vercel.json` อัตโนมัติ
   - คลิก **Deploy**

4. **รอให้ deploy เสร็จ** - จะได้ URL: `https://your-project-name.vercel.app`

---

## 🔄 วิธีที่ 3: Deploy อัตโนมัติ (แนะนำสำหรับอนาคต)

### Setup GitHub Integration:

1. ไปที่ Vercel Dashboard → Settings → Git
2. เชื่อมต่อ GitHub repository
3. ทุกครั้งที่ push ขึ้น GitHub → Vercel จะ deploy อัตโนมัติ

---

## 📝 สรุป Commands (วิธีที่ 1)

```bash
# 1. Login (ครั้งแรกเท่านั้น)
vercel login

# 2. Deploy
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
vercel --prod
```

---

## ✅ ตรวจสอบหลัง Deploy

1. เปิด URL ที่ Vercel ให้มา
2. ตรวจสอบว่า Storybook แสดงผลถูกต้อง
3. ตรวจสอบว่า Theme switching ทำงาน (Base/Juristic/Guard/Admin)
4. ตรวจสอบว่า Components ทั้งหมดแสดงผลถูกต้อง
5. แชร์ลิงค์ให้ทีม!

---

## 🔗 Alternative: Netlify (ถ้าไม่ใช้ Vercel)

### Setup Netlify:

1. **สร้าง `netlify.toml`:**
   ```toml
   [build]
     command = "npm run build-storybook"
     publish = "storybook-static"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy:**
   - ไปที่ https://app.netlify.com
   - Drag & drop folder `storybook-static` (หลัง build)
   - หรือเชื่อมต่อ GitHub repository

---

## 🎯 Quick Start (เร็วที่สุด)

```bash
# Build Storybook ก่อน
npm run build-storybook

# Deploy
vercel --prod
```

**เสร็จแล้ว!** 🎉
