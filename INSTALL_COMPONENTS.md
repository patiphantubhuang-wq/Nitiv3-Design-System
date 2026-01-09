# 📦 คู่มือการติดตั้ง Shadcn UI Components

## สถานะการติดตั้ง

เนื่องจากมีปัญหา permission กับ npm cache ใน sandbox environment คุณต้องรันคำสั่งติดตั้ง components ใน Terminal โดยตรง

## ขั้นตอนการติดตั้ง

### 1. ติดตั้ง Components ทั้งหมด

รันคำสั่งนี้ใน Terminal:

```bash
cd "/Users/patiphantubhuang/Documents/NITI V3 AI Designsystem"
npx shadcn@latest add --all --yes --overwrite
```

หรือใช้ script ที่สร้างไว้:

```bash
./install-components.sh
```

### 2. Components ที่จะติดตั้ง

- accordion
- alert
- alert-dialog
- aspect-ratio
- avatar
- badge
- breadcrumb
- button (มีอยู่แล้ว)
- calendar
- card (มีอยู่แล้ว)
- carousel
- checkbox
- collapsible
- command
- context-menu
- dialog
- drawer
- dropdown-menu
- form
- hover-card
- input
- label
- menubar
- navigation-menu
- pagination
- popover
- progress
- radio-group
- resizable
- scroll-area
- select
- separator
- sheet
- skeleton
- slider
- sonner
- switch
- table
- tabs
- textarea
- toast
- toggle
- toggle-group
- tooltip

### 3. หลังติดตั้งเสร็จ

Components ทั้งหมดจะใช้ Design Tokens ที่กำหนดไว้แล้ว:
- ✅ Yellow Theme (Primary color)
- ✅ IBM Plex Sans Thai Looped font
- ✅ CSS Variables จาก `src/index.css`

### 4. ตรวจสอบ

หลังจากติดตั้งเสร็จ ให้ตรวจสอบว่า:
- Components อยู่ใน `src/components/ui/`
- ใช้ Tailwind classes ที่ถูกต้อง
- ใช้ CSS Variables จาก design tokens

## หมายเหตุ

- Components ที่ติดตั้งจะ overwrite components เดิม (button, card) แต่จะใช้ design tokens เดิม
- ทุก component จะใช้ `cn()` utility จาก `@/lib/utils`
- Font จะใช้ `font-sans` ซึ่งเป็น IBM Plex Sans Thai Looped
