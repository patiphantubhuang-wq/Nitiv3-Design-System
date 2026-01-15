# 📤 คู่มือ Push ขึ้น GitHub และ Deploy อัตโนมัติ

## ✅ สิ่งที่ต้องมี
- ✅ Git remote ตั้งค่าไว้แล้ว: `https://github.com/patiphantubhuang-wq/Nitiv3-Design-System.git`
- ✅ มีการแก้ไขไฟล์ที่ต้อง commit

---

## 🚀 ขั้นตอน Push ขึ้น GitHub

### วิธีที่ 1: ใช้ Terminal (แนะนำ)

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"

# 1. Add ไฟล์ทั้งหมด
git add .

# 2. Commit
git commit -m "Fix Storybook routing and update design tokens"

# 3. Push ขึ้น GitHub
git push origin main
```

**หมายเหตุ**: ถ้า push ครั้งแรก อาจต้องใส่ username และ password/token

### วิธีที่ 2: ใช้ Script

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
./push-and-deploy.sh
```

---

## 🔗 เชื่อมต่อ Vercel กับ GitHub (ถ้ายังไม่ได้เชื่อมต่อ)

### ขั้นตอน:

1. **ไปที่ Vercel Dashboard:**
   - เปิด: https://vercel.com/dashboard

2. **Import Project:**
   - คลิก **Add New...** → **Project**
   - เลือก **Import Git Repository**
   - เลือก repository: `patiphantubhuang-wq/Nitiv3-Design-System`
   - คลิก **Import**

3. **ตั้งค่า Project:**
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: `npm run build-storybook`
   - **Output Directory**: `storybook-static`
   - **Install Command**: `npm install --legacy-peer-deps`
   - คลิก **Deploy**

4. **ตั้งค่า Environment Variables (ถ้ามี):**
   - ไปที่ Settings → Environment Variables
   - เพิ่ม variables ที่จำเป็น

---

## ✅ หลัง Push สำเร็จ

1. **Vercel จะ Deploy อัตโนมัติ** (ถ้าเชื่อมต่อ GitHub แล้ว)
   - ไปที่ Vercel Dashboard → Deployments
   - จะเห็น deployment ใหม่กำลัง build

2. **ตรวจสอบ Deployment:**
   - รอให้ build เสร็จ (ประมาณ 1-2 นาที)
   - เปิด URL ที่ Vercel ให้มา
   - ตรวจสอบว่า Storybook แสดงผลถูกต้อง

---

## 🔄 Deploy อัตโนมัติในอนาคต

หลังจากเชื่อมต่อ Vercel กับ GitHub แล้ว:
- **ทุกครั้งที่ push ขึ้น `main` branch** → Vercel จะ deploy อัตโนมัติ
- **ทุกครั้งที่ push ขึ้น branch อื่น** → Vercel จะสร้าง Preview Deployment

---

## 🔐 GitHub Authentication

### ใช้ Personal Access Token (แนะนำ)

1. ไปที่: https://github.com/settings/tokens
2. คลิก **Generate new token (classic)**
3. เลือก scopes: `repo`
4. คัดลอก token
5. เมื่อ push, ใช้ token แทน password

### ใช้ GitHub CLI

```bash
# ติดตั้ง GitHub CLI
brew install gh

# Login
gh auth login

# Push (ไม่ต้องใส่ username/password)
git push origin main
```

---

## 📝 สรุป Commands

```bash
# 1. Add ไฟล์
git add .

# 2. Commit
git commit -m "Fix Storybook routing and update design tokens"

# 3. Push
git push origin main
```

---

**หลังจาก push แล้ว Vercel จะ deploy อัตโนมัติ (ถ้าเชื่อมต่อ GitHub แล้ว)**
