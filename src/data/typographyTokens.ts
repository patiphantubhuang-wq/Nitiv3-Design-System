// Typography Tokens ที่ใช้ในระบบ
// แบ่งตาม Font Family และแสดง tokens ที่ใช้จริง

import { typographyTokens } from './designTokens'

export type TypographyToken = {
  name: string
  description?: string
  fontSize: string
  fontWeight: string
  lineHeight: string
  letterSpacing: string
  className: string
  example?: string
}

// Typography Tokens สำหรับ Font Sans (ใช้ในระบบหลัก)
export const sansTypographyTokens: TypographyToken[] = [
  {
    name: 'H1',
    description: 'Heading 1 - ใช้สำหรับหัวข้อหลัก',
    fontSize: 'text-6xl', // 3.75rem / 60px
    fontWeight: 'font-bold', // 700
    lineHeight: 'leading-tight', // 1.25
    letterSpacing: 'tracking-tight', // -0.025em
    className: 'text-6xl font-bold leading-tight tracking-tight',
    example: 'Heading 1',
  },
  {
    name: 'H2',
    description: 'Heading 2 - ใช้สำหรับหัวข้อรอง',
    fontSize: 'text-5xl', // 3rem / 48px
    fontWeight: 'font-bold', // 700
    lineHeight: 'leading-tight', // 1.25
    letterSpacing: 'tracking-tight', // -0.025em
    className: 'text-5xl font-bold leading-tight tracking-tight',
    example: 'Heading 2',
  },
  {
    name: 'H3',
    description: 'Heading 3 - ใช้สำหรับหัวข้อย่อย',
    fontSize: 'text-4xl', // 2.25rem / 36px
    fontWeight: 'font-bold', // 700
    lineHeight: 'leading-tight', // 1.25
    letterSpacing: 'tracking-tight', // -0.025em
    className: 'text-4xl font-bold leading-tight tracking-tight',
    example: 'Heading 3',
  },
  {
    name: 'H4',
    description: 'Heading 4',
    fontSize: 'text-3xl', // 1.875rem / 30px
    fontWeight: 'font-semibold', // 600
    lineHeight: 'leading-tight', // 1.25
    letterSpacing: 'tracking-tight', // -0.025em
    className: 'text-3xl font-semibold leading-tight tracking-tight',
    example: 'Heading 4',
  },
  {
    name: 'H5',
    description: 'Heading 5',
    fontSize: 'text-2xl', // 1.5rem / 24px
    fontWeight: 'font-semibold', // 600
    lineHeight: 'leading-tight', // 1.25
    letterSpacing: 'tracking-tight', // -0.025em
    className: 'text-2xl font-semibold leading-tight tracking-tight',
    example: 'Heading 5',
  },
  {
    name: 'H6',
    description: 'Heading 6',
    fontSize: 'text-xl', // 1.25rem / 20px
    fontWeight: 'font-semibold', // 600
    lineHeight: 'leading-snug', // 1.375
    letterSpacing: 'tracking-tight', // -0.025em
    className: 'text-xl font-semibold leading-snug tracking-tight',
    example: 'Heading 6',
  },
  {
    name: 'Body Large',
    description: 'Body text ขนาดใหญ่ - ใช้สำหรับ subheadings',
    fontSize: 'text-lg', // 1.125rem / 18px
    fontWeight: 'font-normal', // 400
    lineHeight: 'leading-normal', // 1.5
    letterSpacing: 'tracking-normal', // 0
    className: 'text-lg font-normal leading-normal tracking-normal',
    example: 'Body text ขนาดใหญ่ - The quick brown fox jumps over the lazy dog',
  },
  {
    name: 'Body',
    description: 'Body text หลัก - ใช้สำหรับข้อความทั่วไป',
    fontSize: 'text-base', // 1rem / 16px
    fontWeight: 'font-normal', // 400
    lineHeight: 'leading-normal', // 1.5
    letterSpacing: 'tracking-normal', // 0
    className: 'text-base font-normal leading-normal tracking-normal',
    example: 'Body text หลัก - The quick brown fox jumps over the lazy dog',
  },
  {
    name: 'Body Small',
    description: 'Body text ขนาดเล็ก - ใช้สำหรับ labels, descriptions',
    fontSize: 'text-sm', // 0.875rem / 14px
    fontWeight: 'font-normal', // 400
    lineHeight: 'leading-normal', // 1.5
    letterSpacing: 'tracking-normal', // 0
    className: 'text-sm font-normal leading-normal tracking-normal',
    example: 'Body text ขนาดเล็ก - The quick brown fox jumps over the lazy dog',
  },
  {
    name: 'Caption',
    description: 'Caption - ใช้สำหรับ labels เล็กๆ, captions',
    fontSize: 'text-xs', // 0.75rem / 12px
    fontWeight: 'font-normal', // 400
    lineHeight: 'leading-normal', // 1.5
    letterSpacing: 'tracking-normal', // 0
    className: 'text-xs font-normal leading-normal tracking-normal',
    example: 'Caption - The quick brown fox jumps over the lazy dog',
  },
  {
    name: 'Button',
    description: 'Button text - ใช้สำหรับข้อความในปุ่ม',
    fontSize: 'text-sm', // 0.875rem / 14px
    fontWeight: 'font-medium', // 500
    lineHeight: 'leading-normal', // 1.5 (default)
    letterSpacing: 'tracking-normal', // 0
    className: 'text-sm font-medium',
    example: 'Button Text',
  },
  {
    name: 'Label',
    description: 'Label - ใช้สำหรับ labels, field labels',
    fontSize: 'text-sm', // 0.875rem / 14px
    fontWeight: 'font-medium', // 500
    lineHeight: 'leading-snug', // 1.375
    letterSpacing: 'tracking-normal', // 0
    className: 'text-sm font-medium leading-snug',
    example: 'Label Text',
  },
]

// Typography Tokens สำหรับ Font Serif (ใช้เมื่อต้องการความคลาสสิก)
export const serifTypographyTokens: TypographyToken[] = [
  {
    name: 'H1',
    description: 'Heading 1 - ใช้สำหรับหัวข้อหลัก',
    fontSize: 'text-6xl',
    fontWeight: 'font-bold',
    lineHeight: 'leading-tight',
    letterSpacing: 'tracking-tight',
    className: 'text-6xl font-bold leading-tight tracking-tight',
    example: 'Heading 1',
  },
  {
    name: 'H2',
    description: 'Heading 2 - ใช้สำหรับหัวข้อรอง',
    fontSize: 'text-5xl',
    fontWeight: 'font-bold',
    lineHeight: 'leading-tight',
    letterSpacing: 'tracking-tight',
    className: 'text-5xl font-bold leading-tight tracking-tight',
    example: 'Heading 2',
  },
  {
    name: 'Body',
    description: 'Body text หลัก',
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    lineHeight: 'leading-normal',
    letterSpacing: 'tracking-normal',
    className: 'text-base font-normal leading-normal tracking-normal',
    example: 'Body text - The quick brown fox jumps over the lazy dog',
  },
]

// Typography Tokens สำหรับ Font Mono (ใช้สำหรับ code, numbers)
export const monoTypographyTokens: TypographyToken[] = [
  {
    name: 'Code',
    description: 'Code text - ใช้สำหรับแสดง code',
    fontSize: 'text-sm', // 0.875rem / 14px
    fontWeight: 'font-normal', // 400
    lineHeight: 'leading-normal', // 1.5
    letterSpacing: 'tracking-normal', // 0
    className: 'text-sm font-normal leading-normal tracking-normal',
    example: 'const example = "Hello World"',
  },
  {
    name: 'Code Large',
    description: 'Code text ขนาดใหญ่',
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    lineHeight: 'leading-normal',
    letterSpacing: 'tracking-normal',
    className: 'text-base font-normal leading-normal tracking-normal',
    example: 'const example = "Hello World"',
  },
]

// Helper function to get font family class
export function getFontFamilyClass(family: 'sans' | 'serif' | 'mono'): string {
  return `font-${family}`
}

// Helper function to get size value from class
export function getSizeValue(sizeClass: string): string {
  const sizeMap: Record<string, string> = {
    'text-xs': '0.75rem (12px)',
    'text-sm': '0.875rem (14px)',
    'text-base': '1rem (16px)',
    'text-lg': '1.125rem (18px)',
    'text-xl': '1.25rem (20px)',
    'text-2xl': '1.5rem (24px)',
    'text-3xl': '1.875rem (30px)',
    'text-4xl': '2.25rem (36px)',
    'text-5xl': '3rem (48px)',
    'text-6xl': '3.75rem (60px)',
  }
  return sizeMap[sizeClass] || sizeClass
}

// Helper function to get weight value from class
export function getWeightValue(weightClass: string): string {
  const weightMap: Record<string, string> = {
    'font-thin': '100',
    'font-extralight': '200',
    'font-light': '300',
    'font-normal': '400',
    'font-medium': '500',
    'font-semibold': '600',
    'font-bold': '700',
    'font-extrabold': '800',
    'font-black': '900',
  }
  return weightMap[weightClass] || weightClass
}

// Helper function to get line height value from class
export function getLineHeightValue(lineHeightClass: string): string {
  const lineHeightMap: Record<string, string> = {
    'leading-none': '1',
    'leading-tight': '1.25',
    'leading-snug': '1.375',
    'leading-normal': '1.5',
    'leading-relaxed': '1.625',
    'leading-loose': '2',
  }
  return lineHeightMap[lineHeightClass] || lineHeightClass
}

// Helper function to get letter spacing value from class
export function getLetterSpacingValue(letterSpacingClass: string): string {
  const letterSpacingMap: Record<string, string> = {
    'tracking-tighter': '-0.05em',
    'tracking-tight': '-0.025em',
    'tracking-normal': '0',
    'tracking-wide': '0.025em',
    'tracking-wider': '0.05em',
    'tracking-widest': '0.1em',
  }
  return letterSpacingMap[letterSpacingClass] || letterSpacingClass
}
