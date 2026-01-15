# 🚀 ขั้นตอน Re-deploy Storybook

## ✅ สิ่งที่แก้ไขแล้ว

1. **`vercel.json`** - ปรับ rewrites ให้รองรับ Storybook routing
2. **`.storybook/main.js`** - เพิ่ม `buildStoriesJson: true`

## 📋 ขั้นตอน Re-deploy

### วิธีที่ 1: ผ่าน Vercel Dashboard (แนะนำ - ง่ายที่สุด)

1. เปิด: https://vercel.com/dashboard
2. เลือก Project: `niti-design-system`
3. ไปที่ **Deployments** tab
4. คลิก **⋯** (three dots) บน deployment ล่าสุด
5. เลือก **Redeploy**
6. รอให้ deploy เสร็จ (ประมาณ 1-2 นาที)

### วิธีที่ 2: ผ่าน Vercel CLI

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
vercel --prod
```

### วิธีที่ 3: Push ใหม่ (ถ้าเชื่อมต่อ GitHub)

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"

# Commit การเปลี่ยนแปลง
git add vercel.json .storybook/main.js
git commit -m "Fix Storybook routing for Vercel deployment"
git push origin main

# Vercel จะ deploy อัตโนมัติ (ถ้าเชื่อมต่อ GitHub)
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

### 1. Clear Browser Cache
- Hard refresh: `Cmd+Shift+R` (Mac) หรือ `Ctrl+Shift+R` (Windows)
- หรือ Clear browser cache

### 2. ตรวจสอบ Build Logs
- Vercel Dashboard → Deployments → เลือก deployment
- ดู **Build Logs** ว่ามี error หรือไม่

### 3. ตรวจสอบ Browser Console
- เปิด Browser DevTools (F12)
- ดู **Console** tab - ตรวจสอบ errors
- ดู **Network** tab - ตรวจสอบ 404 requests

### 4. ตรวจสอบ Static Files
ลองเปิด:
- `https://your-project.vercel.app/index.html`
- `https://your-project.vercel.app/iframe.html`
- `https://your-project.vercel.app/assets/...` (ลองดู static files)

---

**หลังจาก re-deploy แล้ว ให้ลองเปิด URL อีกครั้ง**
