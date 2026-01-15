// Primitive Colors จาก Tailwind CSS Standard Palette
// ใช้เป็นฐานสำหรับสร้าง Semantic Colors

export const primitiveColors = {
  red: {
    50: { name: "Red 50", value: "0 85.7% 97.3%", description: "Lightest red - สำหรับพื้นหลังอ่อน" },
    100: { name: "Red 100", value: "0 93.3% 94.1%", description: "Very light red" },
    200: { name: "Red 200", value: "0 96.3% 89.4%", description: "Light red" },
    300: { name: "Red 300", value: "0 94.6% 82.7%", description: "Lighter red" },
    400: { name: "Red 400", value: "0 91.7% 71.8%", description: "Medium-light red" },
    500: { name: "Red 500", value: "0 84.2% 60.2%", description: "Base red - ใช้เป็นสีหลัก" },
    600: { name: "Red 600", value: "0 72.2% 50.6%", description: "Medium red" },
    700: { name: "Red 700", value: "0 73.7% 41.8%", description: "Dark red - สำหรับข้อความ" },
    800: { name: "Red 800", value: "0 70% 35.3%", description: "Darker red" },
    900: { name: "Red 900", value: "0 62.8% 30.6%", description: "Darkest red" },
  },
  blue: {
    50: { name: "Blue 50", value: "213.8 100% 96.9%", description: "Lightest blue - สำหรับพื้นหลังอ่อน" },
    100: { name: "Blue 100", value: "214.3 94.6% 92.7%", description: "Very light blue" },
    200: { name: "Blue 200", value: "213.3 96.9% 87.3%", description: "Light blue" },
    300: { name: "Blue 300", value: "211.7 96.4% 78.4%", description: "Lighter blue" },
    400: { name: "Blue 400", value: "213.1 93.9% 67.8%", description: "Medium-light blue" },
    500: { name: "Blue 500", value: "217.2 91.2% 59.8%", description: "Base blue - ใช้เป็นสีหลัก" },
    600: { name: "Blue 600", value: "221.2 83.2% 53.3%", description: "Medium blue" },
    700: { name: "Blue 700", value: "224.3 76.3% 48%", description: "Dark blue - สำหรับข้อความ" },
    800: { name: "Blue 800", value: "225.9 70.7% 40.2%", description: "Darker blue" },
    900: { name: "Blue 900", value: "224.4 64.3% 32.9%", description: "Darkest blue" },
  },
  green: {
    50: { name: "Green 50", value: "138.5 76.5% 96.7%", description: "Lightest green - สำหรับพื้นหลังอ่อน" },
    100: { name: "Green 100", value: "140.6 84.2% 92.5%", description: "Very light green" },
    200: { name: "Green 200", value: "141 78.9% 85.1%", description: "Light green" },
    300: { name: "Green 300", value: "141.7 76.6% 73.1%", description: "Lighter green" },
    400: { name: "Green 400", value: "141.9 69.2% 58%", description: "Medium-light green" },
    500: { name: "Green 500", value: "142.1 70.6% 45.3%", description: "Base green - ใช้เป็นสีหลัก" },
    600: { name: "Green 600", value: "142.1 76.2% 36.3%", description: "Medium green" },
    700: { name: "Green 700", value: "142.4 71.8% 29.2%", description: "Dark green - สำหรับข้อความ" },
    800: { name: "Green 800", value: "142.8 64.2% 24.1%", description: "Darker green" },
    900: { name: "Green 900", value: "143.8 61.2% 20.2%", description: "Darkest green" },
  },
  yellow: {
    50: { name: "Yellow 50", value: "54.5 91.7% 95.3%", description: "Lightest yellow - สำหรับพื้นหลังอ่อน" },
    100: { name: "Yellow 100", value: "54.9 96.7% 88%", description: "Very light yellow" },
    200: { name: "Yellow 200", value: "52.8 98.3% 76.9%", description: "Light yellow" },
    300: { name: "Yellow 300", value: "50.4 97.8% 63.5%", description: "Lighter yellow" },
    400: { name: "Yellow 400", value: "47.9 95.8% 53.1%", description: "Medium-light yellow" },
    500: { name: "Yellow 500", value: "45.4 93.4% 47.5%", description: "Base yellow - ใช้เป็นสีหลัก" },
    600: { name: "Yellow 600", value: "40.6 96.1% 40.4%", description: "Medium yellow" },
    700: { name: "Yellow 700", value: "35.5 91.7% 32.9%", description: "Dark yellow - สำหรับข้อความ" },
    800: { name: "Yellow 800", value: "31.8 81% 28.8%", description: "Darker yellow" },
    900: { name: "Yellow 900", value: "28.4 72.5% 25.7%", description: "Darkest yellow" },
  },
  orange: {
    50: { name: "Orange 50", value: "33.3 100% 96.5%", description: "Lightest orange - สำหรับพื้นหลังอ่อน" },
    100: { name: "Orange 100", value: "34.3 100% 91.8%", description: "Very light orange" },
    200: { name: "Orange 200", value: "32.1 97.7% 83.1%", description: "Light orange" },
    300: { name: "Orange 300", value: "30.7 97.2% 72.4%", description: "Lighter orange" },
    400: { name: "Orange 400", value: "27 96% 61%", description: "Medium-light orange" },
    500: { name: "Orange 500", value: "24.6 95% 53.1%", description: "Base orange - ใช้เป็นสีหลัก" },
    600: { name: "Orange 600", value: "20.5 90.2% 48.2%", description: "Medium orange" },
    700: { name: "Orange 700", value: "17.5 88.3% 40.4%", description: "Dark orange - สำหรับข้อความ" },
    800: { name: "Orange 800", value: "15 79.1% 33.7%", description: "Darker orange" },
    900: { name: "Orange 900", value: "15.3 74.6% 27.8%", description: "Darkest orange" },
  },
  purple: {
    50: { name: "Purple 50", value: "270 100% 98%", description: "Lightest purple - สำหรับพื้นหลังอ่อน" },
    100: { name: "Purple 100", value: "268.7 100% 95.5%", description: "Very light purple" },
    200: { name: "Purple 200", value: "268.6 100% 91.8%", description: "Light purple" },
    300: { name: "Purple 300", value: "269.2 97.4% 85.1%", description: "Lighter purple" },
    400: { name: "Purple 400", value: "270 95.2% 75.3%", description: "Medium-light purple" },
    500: { name: "Purple 500", value: "270.7 91% 65.1%", description: "Base purple - ใช้เป็นสีหลัก" },
    600: { name: "Purple 600", value: "271.5 81.3% 55.9%", description: "Medium purple" },
    700: { name: "Purple 700", value: "272.1 71.7% 47.1%", description: "Dark purple - สำหรับข้อความ" },
    800: { name: "Purple 800", value: "272.9 67.2% 39.4%", description: "Darker purple" },
    900: { name: "Purple 900", value: "273.6 65.6% 32%", description: "Darkest purple" },
  },
  stone: {
    50: { name: "Stone 50", value: "60 9.1% 97.6%", description: "Lightest stone - สำหรับพื้นหลังอ่อน" },
    100: { name: "Stone 100", value: "60 5.9% 95.9%", description: "Very light stone" },
    200: { name: "Stone 200", value: "20 5.9% 90.8%", description: "Light stone - ใช้สำหรับ border, input" },
    300: { name: "Stone 300", value: "24 5.4% 83.9%", description: "Lighter stone" },
    400: { name: "Stone 400", value: "24 5.4% 64.9%", description: "Medium-light stone" },
    500: { name: "Stone 500", value: "24 5.4% 46.1%", description: "Base stone - ใช้เป็นสีหลัก" },
    600: { name: "Stone 600", value: "24 5.4% 34.1%", description: "Medium stone" },
    700: { name: "Stone 700", value: "24 5.4% 26.7%", description: "Dark stone - สำหรับข้อความ (muted-foreground)" },
    800: { name: "Stone 800", value: "24 5.4% 16.9%", description: "Darker stone" },
    900: { name: "Stone 900", value: "24 5.4% 11.2%", description: "Darkest stone - ใช้สำหรับ foreground, text" },
  },
  cyan: {
    50: { name: "Cyan 50", value: "183 100% 96%", description: "Lightest cyan - สำหรับพื้นหลังอ่อน" },
    100: { name: "Cyan 100", value: "185 96% 90%", description: "Very light cyan" },
    200: { name: "Cyan 200", value: "186 94% 82%", description: "Light cyan" },
    300: { name: "Cyan 300", value: "187 92% 69%", description: "Lighter cyan" },
    400: { name: "Cyan 400", value: "188 86% 53%", description: "Medium-light cyan" },
    500: { name: "Cyan 500", value: "189 94% 43%", description: "Base cyan - ใช้เป็นสีหลัก" },
    600: { name: "Cyan 600", value: "192 91% 36%", description: "Medium cyan" },
    700: { name: "Cyan 700", value: "193 82% 31%", description: "Dark cyan - สำหรับข้อความ" },
    800: { name: "Cyan 800", value: "194 70% 27%", description: "Darker cyan" },
    900: { name: "Cyan 900", value: "196 64% 24%", description: "Darkest cyan" },
  },
  white: {
    DEFAULT: { name: "White", value: "0 0% 100%", description: "Pure white - ใช้สำหรับ background, card, popover" },
  },
  slate: {
    50: { name: "Slate 50", value: "210 40% 98%", description: "Lightest slate - สำหรับพื้นหลังอ่อน" },
    100: { name: "Slate 100", value: "210 40% 96.1%", description: "Very light slate" },
    200: { name: "Slate 200", value: "214.3 31.8% 91.4%", description: "Light slate" },
    300: { name: "Slate 300", value: "212.7 26.8% 83.9%", description: "Lighter slate" },
    400: { name: "Slate 400", value: "215 20.2% 65.1%", description: "Medium-light slate" },
    500: { name: "Slate 500", value: "215.4 16.3% 46.9%", description: "Base slate - ใช้เป็นสีหลัก" },
    600: { name: "Slate 600", value: "215.3 19.3% 34.5%", description: "Medium slate" },
    700: { name: "Slate 700", value: "215.3 25% 26.7%", description: "Dark slate - สำหรับข้อความ" },
    800: { name: "Slate 800", value: "217.2 32.6% 17.5%", description: "Darker slate" },
    900: { name: "Slate 900", value: "222.2 47.4% 11.2%", description: "Darkest slate - ใช้สำหรับ foreground, text" },
  },
}

// Semantic Status Colors (Custom Colors) - สร้างจาก Primitive Colors
export const statusColors = {
  "status-success": {
    name: "Status Success",
    description: "สีสำหรับสถานะสำเร็จ",
    value: primitiveColors.green[50].value, // พื้นหลังอ่อน
    foreground: primitiveColors.green[700].value, // ข้อความเข้ม
    primitiveSource: "Green 50 (background) + Green 700 (text)",
    usage: "ใช้สำหรับ Badge Status ที่แสดงสถานะสำเร็จ",
    isCustom: true,
  },
  "status-warning": {
    name: "Status Warning",
    description: "สีสำหรับสถานะเตือน",
    value: primitiveColors.orange[50].value, // พื้นหลังอ่อน
    foreground: primitiveColors.orange[700].value, // ข้อความเข้ม
    primitiveSource: "Orange 50 (background) + Orange 700 (text)",
    usage: "ใช้สำหรับ Badge Status ที่แสดงสถานะเตือน",
    isCustom: true,
  },
  "status-error": {
    name: "Status Error",
    description: "สีสำหรับสถานะข้อผิดพลาด",
    value: primitiveColors.red[50].value, // พื้นหลังอ่อน
    foreground: primitiveColors.red[700].value, // ข้อความเข้ม
    primitiveSource: "Red 50 (background) + Red 700 (text)",
    usage: "ใช้สำหรับ Badge Status ที่แสดงสถานะข้อผิดพลาด (เช่น 'รอจ่าย')",
    isCustom: true,
  },
  "status-info": {
    name: "Status Info",
    description: "สีสำหรับสถานะข้อมูล",
    value: primitiveColors.blue[50].value, // พื้นหลังอ่อน
    foreground: primitiveColors.blue[700].value, // ข้อความเข้ม
    primitiveSource: "Blue 50 (background) + Blue 700 (text)",
    usage: "ใช้สำหรับ Badge Status ที่แสดงสถานะข้อมูล",
    isCustom: true,
  },
  "status-pending": {
    name: "Status Pending",
    description: "สีสำหรับสถานะรอดำเนินการ",
    value: primitiveColors.yellow[50].value, // พื้นหลังอ่อน
    foreground: primitiveColors.yellow[700].value, // ข้อความเข้ม
    primitiveSource: "Yellow 50 (background) + Yellow 700 (text)",
    usage: "ใช้สำหรับ Badge Status ที่แสดงสถานะรอดำเนินการ (เช่น 'รอจ่าย')",
    isCustom: true,
  },
}
