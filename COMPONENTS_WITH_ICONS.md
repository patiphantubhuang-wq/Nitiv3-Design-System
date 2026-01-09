# 🎨 Components ที่รองรับ Icons

## สรุป Components ที่สามารถใส่ Icon ได้

### ✅ Components ที่รองรับ Icon ทั้งนำหน้าและตามหลัง:

#### 1. **Button** ✅
- **Icon นำหน้า**: ใส่ icon ก่อน text
- **Icon ตามหลัง**: ใส่ icon หลัง text
- **Icon Only**: ใช้ `size="icon"` สำหรับปุ่มที่มีแค่ icon
- **ตัวอย่าง**: `<Button><Download /> Download</Button>`

#### 2. **Badge** ✅
- **Icon นำหน้า**: ใส่ icon ก่อน text
- **ตัวอย่าง**: `<Badge><CheckCircle2 /> Success</Badge>`

#### 3. **Alert** ✅
- **Icon นำหน้า**: ใส่ icon ก่อน AlertTitle (absolute positioning)
- **ตัวอย่าง**: `<Alert><AlertCircle /> <AlertTitle>...</AlertTitle></Alert>`

#### 4. **Input** ✅
- **Icon นำหน้า**: ใช้ wrapper div และ absolute positioning
- **ตัวอย่าง**: `<div className="relative"><Search className="absolute left-3" /><Input className="pl-9" /></div>`

#### 5. **Select** ✅
- **Icon ตามหลัง**: มี ChevronDown icon อัตโนมัติ
- **Icon ใน Items**: สามารถใส่ icon ใน SelectItem ได้
- **Icon ใน Trigger**: สามารถใส่ icon ใน SelectTrigger ได้

#### 6. **Breadcrumb** ✅
- **Icon ใน Links**: สามารถใส่ icon ใน BreadcrumbLink ได้
- **Icon ใน Separator**: มี ChevronRight icon อัตโนมัติ
- **ตัวอย่าง**: `<BreadcrumbLink><Home /> Home</BreadcrumbLink>`

#### 7. **Pagination** ✅
- **Icon ใน Previous/Next**: มี ChevronLeft/ChevronRight icons
- **ตัวอย่าง**: `<PaginationPrevious><ChevronLeft /> Previous</PaginationPrevious>`

#### 8. **Command** ✅
- **Icon นำหน้า**: มี Search icon ใน CommandInput อัตโนมัติ
- **Icon ใน Items**: สามารถใส่ icon ใน CommandItem ได้

### ⚠️ Components ที่รองรับ Icon แบบจำกัด:

#### 9. **Accordion**
- **Icon ตามหลัง**: มี ChevronDown icon อัตโนมัติใน AccordionTrigger

#### 10. **Checkbox**
- **Icon ภายใน**: มี Check icon อัตโนมัติเมื่อ checked

#### 11. **Radio Group**
- **Icon ภายใน**: มี Circle icon อัตโนมัติเมื่อ selected

#### 12. **Switch**
- **Icon ภายใน**: มี Thumb (indicator) อัตโนมัติ

#### 13. **Select**
- **Icon ตามหลัง**: มี ChevronDown icon อัตโนมัติ

### 📝 วิธีใช้งาน Icons ใน Components:

#### Button:
```tsx
// Icon นำหน้า
<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>

// Icon ตามหลัง
<Button>
  Send
  <Send className="ml-2 h-4 w-4" />
</Button>

// Icon ทั้งสองข้าง
<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
  <Upload className="ml-2 h-4 w-4" />
</Button>

// Icon Only
<Button size="icon">
  <Search className="h-4 w-4" />
</Button>
```

#### Badge:
```tsx
<Badge>
  <CheckCircle2 className="mr-1 h-3 w-3" />
  Success
</Badge>
```

#### Input:
```tsx
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input className="pl-9" placeholder="Search..." />
</div>
```

#### Alert:
```tsx
<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

## 🎯 Stories ที่อัปเดตแล้ว:

- ✅ **Button** - มี stories: WithIcon, IconOnly
- ✅ **Badge** - มี story: WithIcon
- ✅ **Input** - มี story: WithIcon
- ✅ **Alert** - มี story: WithIcon (มีอยู่แล้ว)
- ✅ **Select** - มี story: WithIcon
- ✅ **Breadcrumb** - มี story: WithIcons

## 📚 Icons ที่ใช้:

ใช้ **Lucide React** icons:
- `Download`, `Upload`, `Search`, `Settings`, `Mail`, `Send`
- `CheckCircle2`, `X`, `AlertCircle`, `Info`
- `User`, `Lock`, `Home`, `FileText`
- `ChevronLeft`, `ChevronRight`, `ChevronDown`, `ChevronUp`

---

**หมายเหตุ**: Components ที่รองรับ icon จะใช้ `gap-2` หรือ `gap-1.5` สำหรับ spacing ระหว่าง icon และ text โดยอัตโนมัติ
