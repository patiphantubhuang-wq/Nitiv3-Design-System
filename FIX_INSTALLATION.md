# 🔧 แก้ไขปัญหา Installation

## ปัญหาที่พบ:

1. **รันคำสั่งผิด directory** - npm หา package.json ใน home directory แทน project directory
2. **Permission error** - ไม่สามารถเข้าถึง .Trash directory

## วิธีแก้ไข:

### ขั้นตอนที่ 1: เปลี่ยนไปที่ Project Directory

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

### ขั้นตอนที่ 3: ติดตั้ง Components

**วิธีที่ 1: ใช้ script ที่สร้างไว้**
```bash
./install-all-components.sh
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

# Group 3: Navigation components
npx shadcn@latest add navigation-menu menubar breadcrumb pagination tabs --yes --overwrite

# Group 4: Overlay components
npx shadcn@latest add dialog drawer popover sheet tooltip hover-card --yes --overwrite

# Group 5: Data display
npx shadcn@latest add table calendar carousel progress skeleton --yes --overwrite

# Group 6: Feedback components
npx shadcn@latest add toast sonner alert alert-dialog --yes --overwrite

# Group 7: Layout components
npx shadcn@latest add separator scroll-area resizable aspect-ratio --yes --overwrite

# Group 8: Advanced components
npx shadcn@latest add command collapsible context-menu dropdown-menu form --yes --overwrite

# Group 9: Remaining components
npx shadcn@latest add slider toggle toggle-group --yes --overwrite
```

### ถ้ายังมีปัญหา Permission

```bash
# ลองใช้ sudo (ถ้าจำเป็น)
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) ~/.Trash

# หรือใช้ npm cache ที่อื่น
npm install --cache /tmp/.npm-cache
```

## หลังติดตั้งเสร็จ:

1. ตรวจสอบว่า components อยู่ใน `src/components/ui/`
2. ตรวจสอบว่า components ใช้ design tokens ที่ถูกต้อง
3. สร้าง stories สำหรับ components ใหม่
