# 🔧 แก้ไข Dependency Error

## ปัญหาที่พบ:

**ERESOLVE dependency conflict** - Storybook packages มี version mismatch:
- `@storybook/react@8.6.15` ต้องการ `@storybook/test@8.6.15`
- แต่มี `@storybook/test@8.6.14` อยู่แล้ว

## ✅ วิธีแก้ไข:

### ขั้นตอนที่ 1: แก้ไข Dependency Conflict

รันคำสั่งนี้ใน Terminal:

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
npm install @storybook/test@8.6.15 --legacy-peer-deps --save-dev
```

หรือใช้ script ที่สร้างไว้:

```bash
./install-with-fix.sh
```

### ขั้นตอนที่ 2: ติดตั้ง Components ด้วย --legacy-peer-deps

**วิธีที่ 1: ใช้ script (แนะนำ)**
```bash
./install-with-fix.sh
```

**วิธีที่ 2: ใช้คำสั่ง shadcn โดยตรง**
```bash
# ติดตั้ง components ทีละกลุ่มเพื่อหลีกเลี่ยง error
npx shadcn@latest add accordion alert alert-dialog avatar badge breadcrumb --yes --overwrite

# ถ้ายังมี error ให้ใช้ npm install ก่อน
npm install --legacy-peer-deps
```

**วิธีที่ 3: ติดตั้งทีละกลุ่ม (ถ้ายังมีปัญหา)**

```bash
# Group 1: Basic components
npm install --legacy-peer-deps
npx shadcn@latest add accordion alert alert-dialog avatar badge breadcrumb --yes --overwrite

# Group 2: Form components  
npm install --legacy-peer-deps
npx shadcn@latest add checkbox input label radio-group select textarea switch --yes --overwrite

# Group 3: Navigation
npm install --legacy-peer-deps
npx shadcn@latest add navigation-menu menubar pagination tabs --yes --overwrite

# Group 4: Overlay components
npm install --legacy-peer-deps
npx shadcn@latest add dialog drawer popover sheet tooltip hover-card --yes --overwrite

# Group 5: Data display
npm install --legacy-peer-deps
npx shadcn@latest add table calendar carousel progress skeleton --yes --overwrite

# Group 6: Feedback
npm install --legacy-peer-deps
npx shadcn@latest add toast sonner --yes --overwrite

# Group 7: Layout
npm install --legacy-peer-deps
npx shadcn@latest add separator scroll-area resizable aspect-ratio --yes --overwrite

# Group 8: Advanced
npm install --legacy-peer-deps
npx shadcn@latest add command collapsible context-menu dropdown-menu form --yes --overwrite

# Group 9: Remaining
npm install --legacy-peer-deps
npx shadcn@latest add slider toggle toggle-group --yes --overwrite
```

## 📝 หมายเหตุ:

- `--legacy-peer-deps` จะ bypass dependency conflicts
- Components ที่ติดตั้งจะใช้ Design Tokens ที่กำหนดไว้แล้ว
- หลังติดตั้งเสร็จ ให้ตรวจสอบ components ใน `src/components/ui/`
