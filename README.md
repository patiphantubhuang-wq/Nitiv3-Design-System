# NITI V3 AI Design System

Design System ที่ใช้ Storybook สำหรับแสดง Components และ Design Tokens

## 🚀 Quick Start

### ติดตั้ง Dependencies

```bash
npm install
```

### รัน Storybook

```bash
npm run storybook
```

Storybook จะเปิดที่: **http://localhost:6006**

### Build Storybook สำหรับ Production

```bash
npm run build-storybook
```

ไฟล์ที่ build จะอยู่ในโฟลเดอร์ `storybook-static/`

## 📁 โครงสร้างโปรเจค

```
src/
├── components/
│   └── ui/              # UI Components
│       ├── button.tsx
│       ├── button.stories.tsx
│       ├── card.tsx
│       └── card.stories.tsx
├── pages/               # Page Components (ใช้ใน Stories)
│   ├── ColorsPage.tsx
│   ├── TypographyPage.tsx
│   ├── SpacingPage.tsx
│   ├── RadiusPage.tsx
│   └── ShadowsPage.tsx
├── stories/             # Storybook Stories
│   └── DesignTokens/
│       ├── Colors.stories.tsx
│       ├── Typography.stories.tsx
│       ├── Spacing.stories.tsx
│       ├── Radius.stories.tsx
│       └── Shadows.stories.tsx
├── data/                # Design Tokens Data
│   └── designTokens.ts
├── lib/                 # Utilities
│   └── utils.ts
└── index.css            # Global Styles

.storybook/
├── main.cjs             # Storybook Configuration
├── preview.ts            # Preview Configuration
└── tsconfig.json        # TypeScript Config
```

## 📚 Stories

### Components/UI
- **Button** - ทุก variants (default, secondary, outline, ghost) และ sizes
- **Card** - ตัวอย่างการใช้งาน Card component

### Design Tokens
- **Colors** - ระบบสีทั้งหมด (Primary, Secondary, Background, etc.)
- **Typography** - Font Families, Sizes, Weights, Line Heights, Letter Spacing
- **Spacing** - Spacing scale สำหรับ padding, margin
- **Border Radius** - Border radius values
- **Shadows** - Box shadow values

## 🛠️ Tech Stack

- **React** - UI Library
- **TypeScript** - Type Safety
- **Storybook** - Component Documentation & Testing
- **Tailwind CSS** - Utility-first CSS Framework
- **Vite** - Build Tool (ใช้โดย Storybook)

## 📝 การเพิ่ม Component ใหม่

1. สร้าง component ใน `src/components/ui/`
2. สร้าง story file `componentName.stories.tsx` ในโฟลเดอร์เดียวกัน
3. Storybook จะ detect และแสดง story อัตโนมัติ

## 🎨 Design Tokens

Design Tokens ถูกกำหนดใน `src/data/designTokens.ts` และใช้ CSS Variables สำหรับ theming

## 🚀 Deploy ขึ้น Vercel

### วิธีที่ 1: Deploy ผ่าน Vercel Dashboard (แนะนำ)

1. **Push โค้ดขึ้น Git Repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **ไปที่ [Vercel Dashboard](https://vercel.com/dashboard)**
   - คลิก "Add New Project"
   - Import Git Repository
   - Vercel จะ detect `vercel.json` อัตโนมัติ
   - คลิก "Deploy"

3. **รอให้ Deploy เสร็จ** (ประมาณ 2-5 นาที)

### วิธีที่ 2: Deploy ผ่าน Vercel CLI

```bash
# ติดตั้ง Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Configuration

- **Build Command**: `npm run build-storybook`
- **Output Directory**: `storybook-static`
- **Framework**: Static Site (configured in `vercel.json`)

ดูรายละเอียดเพิ่มเติมได้ที่: [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)

## 📖 Documentation

ดู documentation เพิ่มเติมได้ใน Storybook UI เมื่อรัน `npm run storybook`
