# 🚀 Quick Install Guide

## ปัญหาที่พบ:
1. รันคำสั่งผิด directory (npm หา package.json ใน home directory)
2. Permission error กับ .Trash directory

## ✅ วิธีแก้ไข (ทำตามขั้นตอนนี้):

### ขั้นตอนที่ 1: เปิด Terminal และเปลี่ยนไปที่ Project Directory

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
```

### ขั้นตอนที่ 2: ตรวจสอบว่าอยู่ใน directory ที่ถูกต้อง

```bash
pwd
# ควรแสดง: /Users/patiphantubhuang/Documents/NITI V3 AI Designsystem

ls package.json
# ควรแสดง: package.json
```

### ขั้นตอนที่ 3: ติดตั้ง Components (เลือกวิธีใดวิธีหนึ่ง)

**วิธีที่ 1: ใช้ script ที่แก้ไขแล้ว (แนะนำ)**
```bash
./install-components-fixed.sh
```

**วิธีที่ 2: ใช้คำสั่ง shadcn โดยตรง**
```bash
npx shadcn@latest add --all --yes --overwrite
```

**วิธีที่ 3: ติดตั้งทีละกลุ่ม (ถ้ายังมีปัญหา)**

```bash
# Group 1: Basic components
npx shadcn@latest add accordion alert alert-dialog avatar badge breadcrumb --yes --overwrite

# Group 2: Form components  
npx shadcn@latest add checkbox input label radio-group select textarea switch --yes --overwrite

# Group 3: Navigation
npx shadcn@latest add navigation-menu menubar pagination tabs --yes --overwrite

# Group 4: Overlay components
npx shadcn@latest add dialog drawer popover sheet tooltip hover-card --yes --overwrite

# Group 5: Data display
npx shadcn@latest add table calendar carousel progress skeleton --yes --overwrite

# Group 6: Feedback
npx shadcn@latest add toast sonner --yes --overwrite

# Group 7: Layout
npx shadcn@latest add separator scroll-area resizable aspect-ratio --yes --overwrite

# Group 8: Advanced
npx shadcn@latest add command collapsible context-menu dropdown-menu form --yes --overwrite

# Group 9: Remaining
npx shadcn@latest add slider toggle toggle-group --yes --overwrite
```

### ถ้ายังมีปัญหา Permission:

```bash
# แก้ไข permission ของ npm cache
sudo chown -R $(whoami) ~/.npm

# หรือใช้ cache ที่อื่น
npm config set cache /tmp/.npm-cache
```

## ✅ หลังติดตั้งเสร็จ:

1. ตรวจสอบ components ใน `src/components/ui/`
2. Components ทั้งหมดจะใช้ Design Tokens ที่กำหนดไว้แล้ว:
   - ✅ Yellow Theme (Primary color)
   - ✅ IBM Plex Sans Thai Looped font
   - ✅ CSS Variables จาก `src/index.css`

## 📝 หมายเหตุ:

- Components ที่ติดตั้งจะ overwrite `button` และ `card` ที่มีอยู่ แต่จะใช้ design tokens เดิม
- ทุก component จะใช้ `font-sans` ซึ่งเป็น IBM Plex Sans Thai Looped
- Colors จะใช้ Yellow Theme ที่กำหนดไว้แล้ว
