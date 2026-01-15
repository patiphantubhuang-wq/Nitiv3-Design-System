// Design Tokens Data จาก Shadcn/ui
// แต่ละสีมี primitiveSource เพื่อเชื่อมโยงกับ Primitive Colors

export const colorTokens = {
  // Background tokens
  primary: {
    name: "Primary",
    description: "สีหลักของระบบ (Background)",
    value: "47.9 95.8% 53.1%",
    primitiveSource: "Yellow 400",
    usage: "ใช้สำหรับปุ่มหลัก, ลิงก์, และองค์ประกอบที่ต้องการเน้น",
    relatedForeground: "primary-foreground",
  },
  "primary-foreground": {
    name: "Primary Foreground",
    description: "สีข้อความที่ใช้บน Primary background",
    value: "28.4 72.5% 25.7%",
    primitiveSource: "Yellow 900",
    usage: "สีข้อความที่ใช้บนปุ่ม Primary หรือองค์ประกอบที่ใช้ Primary background",
    relatedBackground: "primary",
  },
  secondary: {
    name: "Secondary",
    description: "สีรอง (Background)",
    value: "60 5.9% 95.9%",
    primitiveSource: "Stone 100",
    usage: "ใช้สำหรับปุ่มรอง, background, และองค์ประกอบที่ไม่ต้องการเน้นมาก",
    relatedForeground: "secondary-foreground",
  },
  "secondary-foreground": {
    name: "Secondary Foreground",
    description: "สีข้อความที่ใช้บน Secondary background",
    value: "24 5.4% 11.2%",
    primitiveSource: "Stone 900",
    usage: "สีข้อความที่ใช้บนปุ่ม Secondary หรือองค์ประกอบที่ใช้ Secondary background",
    relatedBackground: "secondary",
  },
  destructive: {
    name: "Destructive",
    description: "สีสำหรับการกระทำที่ทำลายล้าง (Background)",
    value: "0 84.2% 60.2%",
    primitiveSource: "Red 500",
    usage: "ใช้สำหรับปุ่มลบ, แจ้งเตือนข้อผิดพลาด, และการกระทำที่อันตราย",
    relatedForeground: "destructive-foreground",
  },
  "destructive-foreground": {
    name: "Destructive Foreground",
    description: "สีข้อความที่ใช้บน Destructive background",
    value: "0 0% 98%",
    primitiveSource: "White",
    usage: "สีข้อความที่ใช้บนปุ่ม Destructive หรือองค์ประกอบที่ใช้ Destructive background",
    relatedBackground: "destructive",
  },
  background: {
    name: "Background",
    description: "สีพื้นหลังหลัก",
    value: "0 0% 100%",
    primitiveSource: "White",
    usage: "สีพื้นหลังของหน้าเว็บ (ใช้ร่วมกับ --foreground สำหรับข้อความ)",
    relatedForeground: "foreground",
  },
  foreground: {
    name: "Foreground",
    description: "สีข้อความหลัก",
    value: "24 5.4% 11.2%",
    primitiveSource: "Stone 900",
    usage: "สีข้อความหลักที่ใช้บน background (ใช้ร่วมกับ --background)",
    relatedBackground: "background",
  },
  muted: {
    name: "Muted",
    description: "สีที่ลดความเข้ม (Background)",
    value: "60 5.9% 95.9%",
    primitiveSource: "Stone 100",
    usage: "ใช้สำหรับ background ที่ไม่ต้องการเน้น, placeholder text",
    relatedForeground: "muted-foreground",
  },
  "muted-foreground": {
    name: "Muted Foreground",
    description: "สีข้อความที่ใช้บน Muted background",
    value: "25 5.3% 44.7%",
    primitiveSource: "Stone 700",
    usage: "สีข้อความที่ใช้บน Muted background (เช่น placeholder text)",
    relatedBackground: "muted",
  },
  accent: {
    name: "Accent",
    description: "สีเน้น (Background)",
    value: "60 5.9% 95.9%",
    primitiveSource: "Stone 100",
    usage: "ใช้สำหรับ hover states, focus states, และการเน้น",
    relatedForeground: "accent-foreground",
  },
  "accent-foreground": {
    name: "Accent Foreground",
    description: "สีข้อความที่ใช้บน Accent background",
    value: "24 5.4% 11.2%",
    primitiveSource: "Stone 900",
    usage: "สีข้อความที่ใช้บน Accent background (เช่น hover states)",
    relatedBackground: "accent",
  },
  card: {
    name: "Card",
    description: "สีพื้นหลังของ Card component",
    value: "0 0% 100%",
    primitiveSource: "White",
    usage: "ใช้สำหรับพื้นหลังของ Card component",
    relatedForeground: "card-foreground",
  },
  "card-foreground": {
    name: "Card Foreground",
    description: "สีข้อความที่ใช้บน Card background",
    value: "24 5.4% 11.2%",
    primitiveSource: "Stone 900",
    usage: "สีข้อความที่ใช้บน Card component",
    relatedBackground: "card",
  },
  popover: {
    name: "Popover",
    description: "สีพื้นหลังของ Popover component",
    value: "0 0% 100%",
    primitiveSource: "White",
    usage: "ใช้สำหรับพื้นหลังของ Popover, DropdownMenu, HoverCard และ components ที่คล้ายกัน",
    relatedForeground: "popover-foreground",
  },
  "popover-foreground": {
    name: "Popover Foreground",
    description: "สีข้อความที่ใช้บน Popover background",
    value: "24 5.4% 11.2%",
    primitiveSource: "Stone 900",
    usage: "สีข้อความที่ใช้บน Popover, DropdownMenu, HoverCard",
    relatedBackground: "popover",
  },
  border: {
    name: "Border",
    description: "สีเส้นขอบ",
    value: "20 5.9% 90%",
    primitiveSource: "Stone 200",
    usage: "ใช้สำหรับเส้นขอบของ input, card, และองค์ประกอบอื่นๆ",
  },
  input: {
    name: "Input",
    description: "สีของ input field",
    value: "20 5.9% 90%",
    primitiveSource: "Stone 200",
    usage: "ใช้สำหรับเส้นขอบของ input fields",
  },
  ring: {
    name: "Ring",
    description: "สีของ focus ring (Yellow Theme)",
    value: "47.9 95.8% 53.1%",
    primitiveSource: "Yellow 400",
    usage: "ใช้สำหรับ focus ring เมื่อ focus ที่ input หรือ button",
  },
}

// Chart Colors - สีสำหรับ Chart Component (ตามมาตรฐาน Shadcn)
export const chartColors = {
  "chart-1": {
    name: "Chart 1",
    description: "สีสำหรับ Chart ข้อมูลชุดที่ 1 (Yellow Theme)",
    value: "47.9 95.8% 53.1%",
    primitiveSource: "Yellow 400",
    usage: "ใช้สำหรับแสดงข้อมูลชุดแรกใน Chart",
    isCustom: false,
  },
  "chart-2": {
    name: "Chart 2",
    description: "สีสำหรับ Chart ข้อมูลชุดที่ 2",
    value: "50.4 97.8% 63.5%",
    primitiveSource: "Yellow 300",
    usage: "ใช้สำหรับแสดงข้อมูลชุดที่สองใน Chart (ใช้ primitive ตรงๆ ตาม theme files)",
    isCustom: false,
  },
  "chart-3": {
    name: "Chart 3",
    description: "สีสำหรับ Chart ข้อมูลชุดที่ 3",
    value: "27 96% 61%",
    primitiveSource: "Orange 400",
    usage: "ใช้สำหรับแสดงข้อมูลชุดที่สามใน Chart (ใช้ primitive ตรงๆ ตาม theme files)",
    isCustom: false,
  },
  "chart-4": {
    name: "Chart 4",
    description: "สีสำหรับ Chart ข้อมูลชุดที่ 4",
    value: "24.6 95% 53.1%",
    primitiveSource: "Orange 500",
    usage: "ใช้สำหรับแสดงข้อมูลชุดที่สี่ใน Chart (ใช้ primitive ตรงๆ ตาม theme files)",
    isCustom: false,
  },
  "chart-5": {
    name: "Chart 5",
    description: "สีสำหรับ Chart ข้อมูลชุดที่ 5",
    value: "192 91% 36%",
    primitiveSource: "Cyan 600",
    usage: "ใช้สำหรับแสดงข้อมูลชุดที่ห้าใน Chart (ใช้ primitive ตรงๆ ตาม theme files)",
    isCustom: false,
  },
}

// Sidebar Colors - สีสำหรับ Sidebar Component (ตามมาตรฐาน Shadcn)
export const sidebarColors = {
  "sidebar": {
    name: "Sidebar",
    description: "สีพื้นหลังของ Sidebar",
    value: "60 9.1% 97.6%", // Light mode - Stone 50
    primitiveSource: "Stone 50",
    usage: "ใช้สำหรับพื้นหลังของ Sidebar component (bg-sidebar)",
    relatedForeground: "sidebar-foreground",
    isCustom: false,
  },
  "sidebar-foreground": {
    name: "Sidebar Foreground",
    description: "สีข้อความที่ใช้บน Sidebar background",
    value: "24 5.4% 26.7%", // Light mode - Stone 700
    primitiveSource: "Stone 700",
    usage: "สีข้อความที่ใช้บน Sidebar component",
    relatedBackground: "sidebar",
    isCustom: false,
  },
  "sidebar-primary": {
    name: "Sidebar Primary",
    description: "สีหลักของ Sidebar (Background)",
    value: "240 5.9% 10%", // Light mode
    primitiveSource: "Stone 900",
    usage: "ใช้สำหรับปุ่มหลักและองค์ประกอบที่ต้องการเน้นใน Sidebar (bg-sidebar-primary)",
    relatedForeground: "sidebar-primary-foreground",
    isCustom: false,
  },
  "sidebar-primary-foreground": {
    name: "Sidebar Primary Foreground",
    description: "สีข้อความที่ใช้บน Sidebar Primary background",
    value: "0 0% 98%", // Light mode
    primitiveSource: "White",
    usage: "สีข้อความที่ใช้บนปุ่มหลักใน Sidebar",
    relatedBackground: "sidebar-primary",
    isCustom: false,
  },
  "sidebar-accent": {
    name: "Sidebar Accent",
    description: "สีเน้นของ Sidebar (Background)",
    value: "240 4.8% 95.9%", // Light mode
    primitiveSource: "Stone 100",
    usage: "ใช้สำหรับ hover states, active states ใน Sidebar (bg-sidebar-accent)",
    relatedForeground: "sidebar-accent-foreground",
    isCustom: false,
  },
  "sidebar-accent-foreground": {
    name: "Sidebar Accent Foreground",
    description: "สีข้อความที่ใช้บน Sidebar Accent background",
    value: "240 5.9% 10%", // Light mode
    primitiveSource: "Stone 900",
    usage: "สีข้อความที่ใช้บน hover/active states ใน Sidebar",
    relatedBackground: "sidebar-accent",
    isCustom: false,
  },
  "sidebar-border": {
    name: "Sidebar Border",
    description: "สีเส้นขอบของ Sidebar",
    value: "20 5.9% 90.8%", // Light mode - Stone 200
    primitiveSource: "Stone 200",
    usage: "ใช้สำหรับเส้นขอบของ Sidebar และองค์ประกอบภายใน (border-sidebar-border)",
    isCustom: false,
  },
  "sidebar-ring": {
    name: "Sidebar Ring",
    description: "สีของ focus ring ใน Sidebar (Yellow Theme)",
    value: "47.9 95.8% 53.1%",
    primitiveSource: "Yellow 400",
    usage: "ใช้สำหรับ focus ring เมื่อ focus ที่ element ใน Sidebar (ring-sidebar-ring)",
    isCustom: false,
  },
}

export const typographyTokens = {
  fontFamilies: {
    sans: {
      name: "IBM Plex Sans Thai Looped",
      value: '"IBM Plex Sans Thai Looped", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      usage: "ใช้สำหรับข้อความทั่วไป รองรับทั้งภาษาไทยและภาษาอังกฤษ",
    },
    serif: {
      name: "Serif",
      value: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      usage: "ใช้สำหรับข้อความที่ต้องการความคลาสสิก",
    },
    mono: {
      name: "Monospace",
      value: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      usage: "ใช้สำหรับ code, numbers, และข้อความที่ต้องการความสม่ำเสมอ",
    },
  },
  fontSizes: {
    xs: { name: "Extra Small", value: "0.75rem", px: "12px", usage: "Caption, labels เล็กๆ" },
    sm: { name: "Small", value: "0.875rem", px: "14px", usage: "Body text เล็ก, labels" },
    base: { name: "Base", value: "1rem", px: "16px", usage: "Body text หลัก" },
    lg: { name: "Large", value: "1.125rem", px: "18px", usage: "Body text ใหญ่, subheadings" },
    xl: { name: "Extra Large", value: "1.25rem", px: "20px", usage: "H6, large body text" },
    "2xl": { name: "2X Large", value: "1.5rem", px: "24px", usage: "H5" },
    "3xl": { name: "3X Large", value: "1.875rem", px: "30px", usage: "H4" },
    "4xl": { name: "4X Large", value: "2.25rem", px: "36px", usage: "H3" },
    "5xl": { name: "5X Large", value: "3rem", px: "48px", usage: "H2" },
    "6xl": { name: "6X Large", value: "3.75rem", px: "60px", usage: "H1" },
  },
  fontWeights: {
    thin: { name: "Thin", value: "100" },
    extralight: { name: "Extra Light", value: "200" },
    light: { name: "Light", value: "300" },
    normal: { name: "Normal", value: "400", usage: "Body text" },
    medium: { name: "Medium", value: "500", usage: "Labels, buttons" },
    semibold: { name: "Semibold", value: "600", usage: "Headings, emphasis" },
    bold: { name: "Bold", value: "700", usage: "Strong emphasis" },
    extrabold: { name: "Extra Bold", value: "800" },
    black: { name: "Black", value: "900" },
  },
  lineHeights: {
    none: { name: "None", value: "1", usage: "Tight spacing" },
    tight: { name: "Tight", value: "1.25", usage: "Headings" },
    snug: { name: "Snug", value: "1.375", usage: "Subheadings" },
    normal: { name: "Normal", value: "1.5", usage: "Body text" },
    relaxed: { name: "Relaxed", value: "1.625", usage: "Comfortable reading" },
    loose: { name: "Loose", value: "2", usage: "Very spacious" },
  },
  letterSpacing: {
    tighter: { name: "Tighter", value: "-0.05em" },
    tight: { name: "Tight", value: "-0.025em" },
    normal: { name: "Normal", value: "0" },
    wide: { name: "Wide", value: "0.025em" },
    wider: { name: "Wider", value: "0.05em" },
    widest: { name: "Widest", value: "0.1em" },
  },
}

export const spacingTokens = {
  "0": { name: "0", value: "0", px: "0px", usage: "No spacing" },
  "1": { name: "1", value: "0.25rem", px: "4px", usage: "Tight spacing" },
  "2": { name: "2", value: "0.5rem", px: "8px", usage: "Small spacing" },
  "3": { name: "3", value: "0.75rem", px: "12px", usage: "Medium-small spacing" },
  "4": { name: "4", value: "1rem", px: "16px", usage: "Base spacing" },
  "5": { name: "5", value: "1.25rem", px: "20px", usage: "Medium spacing" },
  "6": { name: "6", value: "1.5rem", px: "24px", usage: "Large spacing" },
  "8": { name: "8", value: "2rem", px: "32px", usage: "Extra large spacing" },
  "10": { name: "10", value: "2.5rem", px: "40px", usage: "2X large spacing" },
  "12": { name: "12", value: "3rem", px: "48px", usage: "3X large spacing" },
  "16": { name: "16", value: "4rem", px: "64px", usage: "4X large spacing" },
  "20": { name: "20", value: "5rem", px: "80px", usage: "5X large spacing" },
  "24": { name: "24", value: "6rem", px: "96px", usage: "6X large spacing" },
  "32": { name: "32", value: "8rem", px: "128px", usage: "8X large spacing" },
}

export const radiusTokens = {
  none: { name: "None", value: "0", px: "0px", usage: "No border radius" },
  sm: { name: "Small", value: "0.125rem", px: "2px", usage: "Small rounded corners" },
  md: { name: "Medium", value: "0.375rem", px: "6px", usage: "Medium rounded corners" },
  default: { name: "Default", value: "0.5rem", px: "8px", usage: "Default rounded corners" },
  lg: { name: "Large", value: "0.5rem", px: "8px", usage: "Large rounded corners" },
  xl: { name: "Extra Large", value: "0.75rem", px: "12px", usage: "Extra large rounded corners" },
  "2xl": { name: "2X Large", value: "1rem", px: "16px", usage: "2X large rounded corners" },
  "3xl": { name: "3X Large", value: "1.5rem", px: "24px", usage: "3X large rounded corners" },
  full: { name: "Full", value: "9999px", px: "Full circle", usage: "Fully rounded (pills, circles)" },
}

export const shadowTokens = {
  sm: {
    name: "Small",
    value: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    usage: "Subtle elevation",
  },
  default: {
    name: "Default",
    value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    usage: "Default elevation",
  },
  md: {
    name: "Medium",
    value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    usage: "Medium elevation",
  },
  lg: {
    name: "Large",
    value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    usage: "Large elevation",
  },
  xl: {
    name: "Extra Large",
    value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    usage: "Extra large elevation",
  },
  "2xl": {
    name: "2X Large",
    value: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    usage: "Maximum elevation",
  },
  inner: {
    name: "Inner",
    value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    usage: "Inset shadow",
  },
  none: {
    name: "None",
    value: "0 0 #0000",
    usage: "No shadow",
  },
}

export type TokenCategory = "colors" | "typography" | "spacing" | "radius" | "shadows"
