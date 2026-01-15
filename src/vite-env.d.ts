/// <reference types="vite/client" />

/**
 * Type declarations for Vite-specific imports
 * 
 * Vite รองรับ `?inline` suffix สำหรับ import CSS เป็น string
 * ใช้สำหรับ dynamic theme loading ใน multi-product architecture
 */

// CSS modules with ?inline suffix (returns CSS content as string)
declare module '*.css?inline' {
  const content: string
  export default content
}
