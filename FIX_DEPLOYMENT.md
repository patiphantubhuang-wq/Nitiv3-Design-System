# 🔧 แก้ไขปัญหา Deployment

## ปัญหาที่พบ
- URL routing ไม่ทำงาน (404 เมื่อเข้าถึง path โดยตรง)
- Storybook ไม่แสดงผลถูกต้อง

## สิ่งที่แก้ไข

### 1. แก้ไข `vercel.json`
- ปรับ rewrites ให้รองรับ Storybook routing
- เพิ่ม headers สำหรับ static assets

### 2. แก้ไข `.storybook/main.js`
- เพิ่ม `buildStoriesJson: true` เพื่อให้ Storybook สร้าง stories.json

## ขั้นตอน Deploy ใหม่

### วิธีที่ 1: Re-deploy ผ่าน Vercel Dashboard
1. ไปที่ Vercel Dashboard → Project
2. คลิก **Redeploy** หรือ **Deployments** → **Redeploy**

### วิธีที่ 2: Re-deploy ผ่าน CLI
```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
vercel --prod
```

### วิธีที่ 3: Push ใหม่ (ถ้าเชื่อมต่อ GitHub)
```bash
git add vercel.json .storybook/main.js
git commit -m "Fix Storybook routing for Vercel deployment"
git push origin main
```

## ตรวจสอบหลัง Deploy

1. เปิด URL: `https://your-project.vercel.app`
2. ตรวจสอบว่า:
   - ✅ หน้าแรกแสดงผลถูกต้อง
   - ✅ Navigation ทำงาน
   - ✅ URL routing ทำงาน (เช่น `/docs/primitives-badge--docs`)
   - ✅ Theme switching ทำงาน
   - ✅ Components แสดงผลถูกต้อง

## ถ้ายังมีปัญหา

### ตรวจสอบ Build Logs
1. ไปที่ Vercel Dashboard → Deployments
2. ดู Build Logs ว่ามี error หรือไม่

### ตรวจสอบ Console
1. เปิด Browser DevTools (F12)
2. ดู Console และ Network tabs
3. ตรวจสอบว่ามี 404 errors หรือไม่

### ลอง Clear Cache
1. Hard refresh: `Cmd+Shift+R` (Mac) หรือ `Ctrl+Shift+R` (Windows)
2. หรือ Clear browser cache

---

**หลังจากแก้ไขแล้ว ให้ re-deploy ใหม่เพื่อให้การเปลี่ยนแปลงมีผล**
