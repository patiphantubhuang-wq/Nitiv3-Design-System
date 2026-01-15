# 🔧 แก้ไขปัญหา Storybook Deployment บน Vercel

## ปัญหาที่พบ
- URL routing ไม่ทำงาน (404 เมื่อเข้าถึง path โดยตรง)
- Storybook ไม่แสดงผลถูกต้อง

## ✅ สิ่งที่แก้ไขแล้ว

### 1. แก้ไข `vercel.json`
- ✅ ปรับ rewrites ให้ exclude static files และ assets
- ✅ เพิ่ม headers สำหรับ static assets
- ✅ เพิ่ม `cleanUrls: false` และ `trailingSlash: false`

### 2. แก้ไข `.storybook/main.js`
- ✅ เพิ่ม `buildStoriesJson: true`

## 🚀 ขั้นตอน Deploy ใหม่

### วิธีที่ 1: Re-deploy ผ่าน Vercel Dashboard (แนะนำ)

1. ไปที่: https://vercel.com/dashboard
2. เลือก Project: `niti-design-system`
3. ไปที่ **Deployments** tab
4. คลิก **⋯** (three dots) บน deployment ล่าสุด
5. เลือก **Redeploy**

### วิธีที่ 2: Re-deploy ผ่าน CLI

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"

# Build และ Deploy
npm run build-storybook
vercel --prod
```

### วิธีที่ 3: Push ใหม่ (ถ้าเชื่อมต่อ GitHub)

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"

git add vercel.json .storybook/main.js
git commit -m "Fix Storybook routing for Vercel"
git push origin main
```

## 🔍 ตรวจสอบหลัง Deploy

1. เปิด URL: `https://niti-design-system-f54bb048j-parks-projects-d043e177.vercel.app`
2. ตรวจสอบ:
   - ✅ หน้าแรกแสดงผล
   - ✅ Navigation ทำงาน
   - ✅ URL routing ทำงาน (เช่น `/docs/primitives-badge--docs`)
   - ✅ Theme switching ทำงาน
   - ✅ Components แสดงผล

## 🐛 ถ้ายังมีปัญหา

### ตรวจสอบ Build Logs
1. Vercel Dashboard → Deployments → เลือก deployment
2. ดู **Build Logs** ว่ามี error หรือไม่

### ตรวจสอบ Browser Console
1. เปิด Browser DevTools (F12)
2. ดู **Console** tab - ตรวจสอบ errors
3. ดู **Network** tab - ตรวจสอบ 404 requests

### ลอง Clear Cache
1. Hard refresh: `Cmd+Shift+R` (Mac) หรือ `Ctrl+Shift+R` (Windows)
2. หรือ Clear browser cache

### ตรวจสอบ Static Files
1. เปิด: `https://your-project.vercel.app/static/...` (ลองดู static files)
2. ถ้า static files ไม่โหลด → ปัญหาอาจอยู่ที่ rewrites

## 📝 Alternative: ใช้ Netlify (ถ้า Vercel ยังมีปัญหา)

### สร้าง `netlify.toml`:

```toml
[build]
  command = "npm run build-storybook"
  publish = "storybook-static"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy:
1. ไปที่: https://app.netlify.com
2. Drag & drop folder `storybook-static` (หลัง build)
3. หรือเชื่อมต่อ GitHub repository

---

**หลังจากแก้ไขแล้ว ให้ re-deploy ใหม่เพื่อให้การเปลี่ยนแปลงมีผล**
