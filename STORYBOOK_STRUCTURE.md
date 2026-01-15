# 📚 Storybook Structure - Atomic Design

โครงสร้าง Storybook ถูกจัดตาม **Atomic Design Methodology** เพื่อให้ง่ายต่อการค้นหาและใช้งาน components

## 🏗️ โครงสร้างหลัก

```
Storybook
├── Foundations/          # Design Tokens และพื้นฐาน
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Border Radius
│   └── Shadows
│
├── Atoms/               # Components พื้นฐานที่สุด
│   ├── Button
│   ├── Input
│   ├── Label
│   ├── Badge
│   └── ...
│
├── Molecules/           # Components ที่ประกอบจาก Atoms
│   ├── Card
│   ├── Alert
│   ├── Form Field
│   ├── Button Group
│   └── ...
│
└── Organisms/           # Components ที่ซับซ้อนที่สุด
    ├── Form
    ├── Data Table
    ├── Dialog
    ├── Navigation Menu
    └── ...
```

## 📋 การจัดหมวดหมู่

### Foundations (5 items)
Design Tokens และพื้นฐานของ Design System
- **Colors** - ระบบสีทั้งหมด
- **Typography** - Font Families, Sizes, Weights
- **Spacing** - Spacing scale
- **Border Radius** - Border radius values
- **Shadows** - Box shadow values

### Atoms (17 components)
Components พื้นฐานที่เล็กที่สุด ไม่สามารถแยกย่อยได้อีก
- Button, Input, Label, Badge, Avatar, Separator
- Skeleton, Spinner, Kbd, Progress, Switch, Checkbox
- Radio Group, Toggle, Textarea, Slider, Aspect Ratio

### Molecules (16 components)
Components ที่ประกอบจาก Atoms หลายตัว
- Button Group, Input Group, Input OTP, Alert, Card
- Empty, Field, Item, Tooltip, Hover Card, Breadcrumb
- Pagination, Tabs, Accordion, Collapsible, Toggle Group

### Organisms (25 components)
Components ที่ซับซ้อน ประกอบจาก Molecules และ Atoms
- Form, Data Table, Table, Navigation Menu, Menubar
- Sidebar, Command, Combobox, Date Picker, Calendar
- Dialog, Alert Dialog, Drawer, Sheet, Popover
- Dropdown Menu, Context Menu, Select, Toast, Toaster
- Sonner, Resizable, Scroll Area, Carousel, Chart

## 🎯 ประโยชน์ของโครงสร้างนี้

1. **ง่ายต่อการค้นหา** - Developer รู้ว่าต้องหา component อยู่หมวดไหน
2. **เข้าใจความซับซ้อน** - รู้ว่า component ไหนใช้สำหรับอะไร
3. **Scalable** - เพิ่ม components ใหม่ได้ง่าย
4. **เป็นมาตรฐาน** - ตาม Atomic Design Methodology
5. **เหมือนกับ Grafana UI** - โครงสร้างที่ได้รับการยอมรับ

## 📝 วิธีการเพิ่ม Component ใหม่

1. **กำหนดหมวดหมู่** - ดูว่าเป็น Atoms, Molecules, หรือ Organisms
2. **เพิ่มในไฟล์** - สร้าง `componentName.stories.tsx`
3. **ตั้ง title** - ใช้รูปแบบ `'Atoms/ComponentName'`, `'Molecules/ComponentName'`, หรือ `'Organisms/ComponentName'`
4. **Build และตรวจสอบ** - รัน `npm run build-storybook` เพื่อตรวจสอบ

## 🔍 ตัวอย่างการใช้งาน

### Atom Component
```typescript
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  // ...
}
```

### Molecule Component
```typescript
const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  // ...
}
```

### Organism Component
```typescript
const meta: Meta<typeof Form> = {
  title: 'Organisms/Form',
  component: Form,
  // ...
}
```

## 📚 อ้างอิง

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [Grafana UI Structure](https://developers.grafana.com/ui/latest/)
