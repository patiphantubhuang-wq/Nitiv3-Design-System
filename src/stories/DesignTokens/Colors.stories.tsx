import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { colorTokens, sidebarColors, chartColors } from '@/data/designTokens'
import { statusColors, primitiveColors } from '@/data/primitiveColors'
import { Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

// Helper function to convert HSL to RGB
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100
  l /= 100
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let r = 0, g = 0, b = 0

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x
  }
  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  return [r, g, b]
}

// Helper function to convert HSL to HEX
function hslToHex(hsl: string): string {
  const parseHsl = (hsl: string): [number, number, number] => {
    const parts = hsl.trim().split(/\s+/)
    return [parseFloat(parts[0]), parseFloat(parts[1]), parseFloat(parts[2])]
  }

  const [h, s, l] = parseHsl(hsl)
  const [r, g, b] = hslToRgb(h, s, l)
  
  const toHex = (n: number) => {
    const hex = n.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
}

// Helper function to calculate relative luminance
function getLuminance(rgb: [number, number, number]): number {
  const [r, g, b] = rgb.map(val => {
    val = val / 255
    return val <= 0.04045 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

// Helper function to calculate WCAG contrast ratio
function getContrastRatio(hsl1: string, hsl2: string): number {
  const parseHsl = (hsl: string): [number, number, number] => {
    const parts = hsl.trim().split(/\s+/)
    return [parseFloat(parts[0]), parseFloat(parts[1]), parseFloat(parts[2])]
  }

  const [h1, s1, l1] = parseHsl(hsl1)
  const [h2, s2, l2] = parseHsl(hsl2)

  const rgb1 = hslToRgb(h1, s1, l1)
  const rgb2 = hslToRgb(h2, s2, l2)

  const lum1 = getLuminance(rgb1)
  const lum2 = getLuminance(rgb2)

  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)

  return (lighter + 0.05) / (darker + 0.05)
}

// Helper function to get WCAG compliance level
function getWCAGLevel(ratio: number): { level: string; pass: boolean; description: string } {
  if (ratio >= 7) {
    return { level: 'AAA', pass: true, description: 'WCAG AAA (Excellent)' }
  } else if (ratio >= 4.5) {
    return { level: 'AA', pass: true, description: 'WCAG AA (Good)' }
  } else if (ratio >= 3) {
    return { level: 'AA Large', pass: true, description: 'WCAG AA Large Text Only' }
  } else {
    return { level: 'Fail', pass: false, description: 'Does not meet WCAG standards' }
  }
}

// Helper function to find primitive source from HSL value
function findPrimitiveSource(hslValue: string): string {
  if (!hslValue) return ''
  
  // Normalize HSL value (trim whitespace)
  const normalizedValue = hslValue.trim()
  
  // Compare with all primitive colors
  for (const [colorName, colorScale] of Object.entries(primitiveColors)) {
    if (colorName === 'white') {
      // Special case for white
      if (colorScale.DEFAULT && colorScale.DEFAULT.value === normalizedValue) {
        return 'White'
      }
      continue
    }
    
    // Check each shade
    for (const [shade, colorData] of Object.entries(colorScale as any)) {
      const primitiveValue = (colorData as any).value
      if (primitiveValue === normalizedValue) {
        // Capitalize first letter
        const colorNameCapitalized = colorName.charAt(0).toUpperCase() + colorName.slice(1)
        return `${colorNameCapitalized} ${shade}`
      }
    }
  }
  
  return ''
}

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ระบบสีที่ใช้ใน Design System รวมถึง Semantic Colors (จาก Shadcn/ui) และ Primitive Colors (จาก Tailwind CSS)',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

function readCssVarValue(varName: string, fallback?: string): string {
  if (typeof window === 'undefined') {
    return fallback || ''
  }

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim()

  return value || fallback || ''
}

function useCssVarValue(varName: string, fallback?: string): string {
  const [value, setValue] = React.useState(() => readCssVarValue(varName, fallback))

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const update = () => setValue(readCssVarValue(varName, fallback))
    update()

    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class'],
    })

    return () => observer.disconnect()
  }, [varName, fallback])

  return value
}

// Helper component สำหรับแสดง Color Token (แบบเดียวกับ Custom Status Colors)
function ColorTokenCard({ tokenKey, token }: { tokenKey: string; token: any }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  // ตรวจสอบว่าเป็น foreground token หรือไม่
  const isForegroundToken = tokenKey.endsWith('-foreground')
  
  // ถ้าเป็น foreground token ให้ดึง background ที่เกี่ยวข้อง
  // ตรวจสอบจาก colorTokens, sidebarColors, หรือ chartColors
  const relatedBackgroundKey = token.relatedBackground
  let relatedBackgroundValue = ''
  
  if (relatedBackgroundKey) {
    // ลองหาใน colorTokens ก่อน
    const colorToken = colorTokens[relatedBackgroundKey as keyof typeof colorTokens]
    if (colorToken) {
      relatedBackgroundValue = useCssVarValue(`--${relatedBackgroundKey}`, colorToken.value || '')
    } else {
      // ลองหาใน sidebarColors
      const sidebarColor = sidebarColors[relatedBackgroundKey as keyof typeof sidebarColors]
      if (sidebarColor) {
        relatedBackgroundValue = useCssVarValue(`--${relatedBackgroundKey}`, sidebarColor.value || '')
      }
    }
  }
  
  const value = useCssVarValue(`--${tokenKey}`, token.value)
  
  // หา primitive source จาก theme ที่เลือก (dynamic)
  const dynamicPrimitiveSource = findPrimitiveSource(value)
  const displayPrimitiveSource = dynamicPrimitiveSource || token.primitiveSource || ''

  // Calculate contrast ratio ถ้าเป็น foreground token และมี related background
  let contrastRatio = 0
  let wcagLevel = null
  if (isForegroundToken && relatedBackgroundValue) {
    contrastRatio = getContrastRatio(relatedBackgroundValue, value)
    wcagLevel = getWCAGLevel(contrastRatio)
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <CardTitle className="text-base">{token.name}</CardTitle>
              {token.isCustom && (
                <span className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
                  Custom
                </span>
              )}
            </div>
            <CardDescription className="text-xs mt-0.5">
              {token.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        {/* Value Color Info */}
        <div className="space-y-1.5">
          <div className="text-xs font-semibold text-foreground">
            {isForegroundToken ? 'Foreground (Text)' : 'Value (Background)'}
          </div>
          <div className="flex items-center gap-2">
            {/* ถ้าเป็น foreground token ให้แสดง background ที่เกี่ยวข้องด้วย */}
            <div
              style={{ 
                backgroundColor: isForegroundToken && relatedBackgroundValue 
                  ? `hsl(${relatedBackgroundValue})` 
                  : `hsl(${value})`,
                color: isForegroundToken ? `hsl(${value})` : undefined
              }}
              className={cn(
                "h-16 w-16 rounded-lg border-2 border-border shrink-0",
                isForegroundToken && "flex items-center justify-center"
              )}
            >
              {isForegroundToken && (
                <span className="text-xs font-bold">Aa</span>
              )}
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">HSL:</span>
                <div className="flex items-center gap-1">
                  <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                    {value}
                  </code>
                  <button
                    onClick={() => copyToClipboard(`hsl(${value})`)}
                    className="p-0.5 hover:bg-accent rounded transition-colors"
                    title="Copy HSL"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">HEX:</span>
                <div className="flex items-center gap-1">
                  <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                    {hslToHex(value)}
                  </code>
                  <button
                    onClick={() => copyToClipboard(hslToHex(value))}
                    className="p-0.5 hover:bg-accent rounded transition-colors"
                    title="Copy HEX"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">CSS:</span>
                <div className="flex items-center gap-1">
                  <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                    --{tokenKey}
                  </code>
                  <button
                    onClick={() => copyToClipboard(`--${tokenKey}`)}
                    className="p-0.5 hover:bg-accent rounded transition-colors"
                    title="Copy CSS Variable"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">Class:</span>
                <div className="flex items-center gap-1">
                  <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                    bg-{tokenKey}
                  </code>
                  <button
                    onClick={() => copyToClipboard(`bg-${tokenKey}`)}
                    className="p-0.5 hover:bg-accent rounded transition-colors"
                    title="Copy Class"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Background Info (สำหรับ foreground tokens) */}
        {isForegroundToken && relatedBackgroundValue && (
          <div className="border-t pt-3 space-y-1.5">
            <div className="text-xs font-semibold text-foreground">Related Background</div>
            <div className="flex items-center gap-2">
              <div
                style={{ backgroundColor: `hsl(${relatedBackgroundValue})` }}
                className="h-12 w-12 rounded-lg border-2 border-border shrink-0"
              />
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-muted-foreground">CSS:</span>
                  <div className="flex items-center gap-1">
                    <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                      --{relatedBackgroundKey}
                    </code>
                    <button
                      onClick={() => copyToClipboard(`--${relatedBackgroundKey}`)}
                      className="p-0.5 hover:bg-accent rounded transition-colors"
                      title="Copy CSS Variable"
                    >
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-muted-foreground">Class:</span>
                  <div className="flex items-center gap-1">
                    <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                      bg-{relatedBackgroundKey}
                    </code>
                    <button
                      onClick={() => copyToClipboard(`bg-${relatedBackgroundKey}`)}
                      className="p-0.5 hover:bg-accent rounded transition-colors"
                      title="Copy Class"
                    >
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* WCAG Contrast Ratio (สำหรับ foreground tokens) */}
        {isForegroundToken && wcagLevel && (
          <div className="border-t pt-3 space-y-1.5">
            <div className="text-xs font-semibold text-foreground">WCAG Contrast</div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">Contrast Ratio:</span>
                <span className={cn('text-xs font-semibold', {
                  'text-status-success-foreground': wcagLevel.pass,
                  'text-status-error-foreground': !wcagLevel.pass,
                })}>
                  {contrastRatio.toFixed(2)}:1
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">WCAG Level:</span>
                <span className={cn('text-[10px] px-1.5 py-0.5 rounded font-medium', {
                  'bg-status-success text-status-success-foreground': wcagLevel.level === 'AAA',
                  'bg-status-info text-status-info-foreground': wcagLevel.level === 'AA',
                  'bg-status-warning text-status-warning-foreground': wcagLevel.level === 'AA Large',
                  'bg-status-error text-status-error-foreground': !wcagLevel.pass,
                })}>
                  {wcagLevel.level}
                </span>
              </div>
              <div className="text-[10px] text-muted-foreground">
                {wcagLevel.description}
              </div>
            </div>
          </div>
        )}

        {/* Description and Primitive Source */}
        <div className="pt-2 border-t space-y-1.5">
          <p className="text-xs text-muted-foreground leading-relaxed">{token.usage}</p>
          {displayPrimitiveSource && (
            <div className="space-y-1">
              <div className="text-[10px] font-semibold text-foreground">Primitive Source:</div>
              <div className="text-[10px] text-muted-foreground bg-muted/50 p-1.5 rounded">
                {displayPrimitiveSource}
                {dynamicPrimitiveSource && (
                  <span className="text-[9px] text-muted-foreground/70 block mt-0.5">
                    (อัปเดตตาม theme ที่เลือก)
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Helper component สำหรับแสดง Custom Status Color Token (Compact Layout)
function StatusColorTokenCard({ tokenKey, token }: { tokenKey: string; token: any }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const statusKey = tokenKey.replace('status-', '')
  const hasForeground = 'foreground' in token && token.foreground
  const bgClass = `bg-status-${statusKey}`
  const textClass = `text-status-${statusKey}-foreground`
  const value = useCssVarValue(`--${tokenKey}`, token.value)
  const foreground = hasForeground
    ? useCssVarValue(`--${tokenKey}-foreground`, token.foreground)
    : ''

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <CardTitle className="text-base">{token.name}</CardTitle>
              <span className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
                Custom
              </span>
            </div>
            <CardDescription className="text-xs mt-0.5">
              {token.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        {/* Value Color */}
        <div className="space-y-1.5">
          <div className="text-xs font-semibold text-foreground">Value (Background)</div>
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: `hsl(${value})` }}
              className="h-16 w-16 rounded-lg border-2 border-border shrink-0"
            />
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">HSL:</span>
                <div className="flex items-center gap-1">
                  <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                    {value}
                  </code>
                  <button
                    onClick={() => copyToClipboard(`hsl(${value})`)}
                    className="p-0.5 hover:bg-accent rounded transition-colors"
                    title="Copy HSL"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">HEX:</span>
                <div className="flex items-center gap-1">
                  <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                    {hslToHex(value)}
                  </code>
                  <button
                    onClick={() => copyToClipboard(hslToHex(value))}
                    className="p-0.5 hover:bg-accent rounded transition-colors"
                    title="Copy HEX"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">CSS:</span>
                <div className="flex items-center gap-1">
                  <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                    --{tokenKey}
                  </code>
                  <button
                    onClick={() => copyToClipboard(`--${tokenKey}`)}
                    className="p-0.5 hover:bg-accent rounded transition-colors"
                    title="Copy CSS Variable"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">Class:</span>
                <div className="flex items-center gap-1">
                  <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                    {bgClass}
                  </code>
                  <button
                    onClick={() => copyToClipboard(bgClass)}
                    className="p-0.5 hover:bg-accent rounded transition-colors"
                    title="Copy Class"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Foreground Color */}
        {hasForeground && (
          <>
            <div className="border-t pt-3 space-y-1.5">
              <div className="text-xs font-semibold text-foreground">Foreground (Text)</div>
              <div className="flex items-center gap-2">
                <div
                  style={{ backgroundColor: `hsl(${value})`, color: `hsl(${foreground})` }}
                  className="h-16 w-16 rounded-lg border-2 border-border shrink-0 flex items-center justify-center"
                >
                  <span className="text-xs font-bold">
                    Aa
                  </span>
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground">HSL:</span>
                    <div className="flex items-center gap-1">
                      <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                        {foreground}
                      </code>
                      <button
                        onClick={() => copyToClipboard(`hsl(${foreground})`)}
                        className="p-0.5 hover:bg-accent rounded transition-colors"
                        title="Copy HSL"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground">HEX:</span>
                    <div className="flex items-center gap-1">
                      <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                        {hslToHex(foreground)}
                      </code>
                      <button
                        onClick={() => copyToClipboard(hslToHex(foreground))}
                        className="p-0.5 hover:bg-accent rounded transition-colors"
                        title="Copy HEX"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground">CSS:</span>
                    <div className="flex items-center gap-1">
                      <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                        --{tokenKey}-foreground
                      </code>
                      <button
                        onClick={() => copyToClipboard(`--${tokenKey}-foreground`)}
                        className="p-0.5 hover:bg-accent rounded transition-colors"
                        title="Copy CSS Variable"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground">Class:</span>
                    <div className="flex items-center gap-1">
                      <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                        {textClass}
                      </code>
                      <button
                        onClick={() => copyToClipboard(textClass)}
                        className="p-0.5 hover:bg-accent rounded transition-colors"
                        title="Copy Class"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WCAG Contrast Ratio */}
            {(() => {
              const contrastRatio = getContrastRatio(value, foreground)
              const wcagLevel = getWCAGLevel(contrastRatio)
              return (
                <div className="border-t pt-3 space-y-1.5">
                  <div className="text-xs font-semibold text-foreground">WCAG Contrast</div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-muted-foreground">Contrast Ratio:</span>
                      <span className={cn('text-xs font-semibold', {
                        'text-status-success-foreground': wcagLevel.pass,
                        'text-status-error-foreground': !wcagLevel.pass,
                      })}>
                        {contrastRatio.toFixed(2)}:1
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-muted-foreground">WCAG Level:</span>
                      <span className={cn('text-[10px] px-1.5 py-0.5 rounded font-medium', {
                        'bg-status-success text-status-success-foreground': wcagLevel.level === 'AAA',
                        'bg-status-info text-status-info-foreground': wcagLevel.level === 'AA',
                        'bg-status-warning text-status-warning-foreground': wcagLevel.level === 'AA Large',
                        'bg-status-error text-status-error-foreground': !wcagLevel.pass,
                      })}>
                        {wcagLevel.level}
                      </span>
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {wcagLevel.description}
                    </div>
                  </div>
                </div>
              )
            })()}
          </>
        )}

        {/* Description and Primitive Source */}
        <div className="pt-2 border-t space-y-1.5">
          <p className="text-xs text-muted-foreground leading-relaxed">{token.usage}</p>
          {token.primitiveSource && (
            <div className="space-y-1">
              <div className="text-[10px] font-semibold text-foreground">Primitive Source:</div>
              <div className="text-[10px] text-muted-foreground bg-muted/50 p-1.5 rounded">
                {token.primitiveSource}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Helper component สำหรับแสดง Primitive Color Scale (Compact Layout)
function PrimitiveColorScale({ colorName, colorScale }: { colorName: string; colorScale: any }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-base capitalize">{colorName} Scale</CardTitle>
        <CardDescription className="text-xs">
          Primitive Color Palette สำหรับ {colorName} จาก Tailwind CSS Standard
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {Object.entries(colorScale).map(([shade, colorData]: [string, any]) => {
            const hslValue = `hsl(${colorData.value})`
            return (
              <div key={shade} className="space-y-1">
                <div
                  className="h-16 w-full rounded border border-border cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: hslValue }}
                  title={`${colorName}-${shade}: ${hslValue}`}
                  onClick={() => copyToClipboard(hslValue)}
                />
                <div className="text-xs text-center space-y-0.5">
                  <div className="font-semibold">{shade}</div>
                  <code className="text-[9px] text-muted-foreground block truncate px-0.5">
                    {hslValue.replace(/hsl\(|\)/g, '')}
                  </code>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

// ========== Stories ==========

// 1. Overview/Documentation
export const Overview: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-3">Color System Overview</h2>
        <p className="text-muted-foreground mb-4">
          ระบบสีที่ใช้ใน Design System ประกอบด้วย 2 ประเภทหลัก:
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Semantic Colors</CardTitle>
            <CardDescription>
              สีที่มีความหมายและใช้งานในระบบ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold mb-2">Shadcn Colors</h4>
              <p className="text-xs text-muted-foreground mb-2">
                สีจาก Shadcn/ui framework ที่ใช้ CSS Variables และ HSL color space
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>จำนวน:</strong> {Object.keys(colorTokens).length} สี
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Custom Status Colors</h4>
              <p className="text-xs text-muted-foreground mb-2">
                สีสถานะที่สร้างจาก Primitive Colors สำหรับ Badge Status (พื้นหลังอ่อน)
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>จำนวน:</strong> {Object.keys(statusColors).length} สี
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">
                <strong>หมายเหตุ:</strong> สีเหล่านี้ไม่ได้มาจาก Shadcn โดยตรง แต่สร้างจาก Tailwind CSS Primitive Colors
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Chart Colors</h4>
              <p className="text-xs text-muted-foreground mb-2">
                สีสำหรับ Chart Component
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>จำนวน:</strong> {Object.keys(chartColors).length} สี
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">
                <strong>หมายเหตุ:</strong> สีเหล่านี้เป็นสีมาตรฐาน Shadcn สำหรับใช้ใน Chart components
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Sidebar Colors</h4>
              <p className="text-xs text-muted-foreground mb-2">
                สีสำหรับ Sidebar Component โดยเฉพาะ
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>จำนวน:</strong> {Object.keys(sidebarColors).length} สี
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">
                <strong>หมายเหตุ:</strong> สีเหล่านี้เป็นสีมาตรฐาน Shadcn สำหรับ Sidebar Component
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Primitive Colors</CardTitle>
            <CardDescription>
              สีพื้นฐานจาก Tailwind CSS Standard Palette
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold mb-2">Color Scales</h4>
              <p className="text-xs text-muted-foreground mb-2">
                แต่ละสีมี scale จาก 50 (อ่อนสุด) ถึง 900 (เข้มสุด)
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>จำนวน:</strong> {Object.keys(primitiveColors).length} สี × 10 shades = {Object.keys(primitiveColors).length * 10} ค่าสี
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Usage</h4>
              <p className="text-xs text-muted-foreground">
                ใช้เป็นฐานสำหรับสร้าง Semantic Colors และ Custom Colors ในระบบ
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Color Format</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            ระบบใช้ HSL (Hue, Saturation, Lightness) color space และ CSS Variables สำหรับ theming
          </p>
          <div className="text-xs space-y-2">
            <div>
              <strong>Format:</strong> <code className="bg-muted px-1.5 py-0.5 rounded">hsl(H S% L%)</code>
            </div>
            <div>
              <strong>CSS Variable:</strong> <code className="bg-muted px-1.5 py-0.5 rounded">--color-name</code>
            </div>
            <div>
              <strong>Tailwind Class:</strong> <code className="bg-muted px-1.5 py-0.5 rounded">bg-color-name</code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

// 2. Semantic Colors (รวม Shadcn Colors + Custom Status Colors)
export const SemanticColors: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Shadcn Colors Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Shadcn Colors</h2>
          <p className="text-sm text-muted-foreground">
            สีจาก Shadcn/ui framework (แสดงผลตาม theme ที่เลือก) จำนวน {Object.keys(colorTokens).length} tokens
            <span className="text-xs block mt-1">
              (Background และ Foreground tokens แยกกัน - แต่ละ token มีหน้าที่ชัดเจน)
            </span>
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(colorTokens).map(([key, token]) => (
            <ColorTokenCard key={key} tokenKey={key} token={token} />
          ))}
        </div>
      </div>

      {/* Custom Status Colors Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Custom Status Colors</h2>
          <p className="text-sm text-muted-foreground">
            สีสถานะที่สร้างจาก Primitive Colors สำหรับ Badge Status (พื้นหลังอ่อน) - จำนวน {Object.keys(statusColors).length} สี
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>หมายเหตุ:</strong> สีเหล่านี้ไม่ได้มาจาก Shadcn โดยตรง แต่สร้างจาก Tailwind CSS Primitive Colors
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(statusColors).map(([key, token]) => (
            <StatusColorTokenCard key={key} tokenKey={key} token={token} />
          ))}
        </div>
      </div>

      {/* Chart Colors Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Chart Colors</h2>
          <p className="text-sm text-muted-foreground">
            สีสำหรับ Chart Component (แสดงผลตาม theme ที่เลือก) จำนวน {Object.keys(chartColors).length} สี
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>หมายเหตุ:</strong> สีเหล่านี้เป็นสีมาตรฐาน Shadcn สำหรับใช้ใน Chart components
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(chartColors).map(([key, token]) => (
            <ColorTokenCard key={key} tokenKey={key} token={token} />
          ))}
        </div>
      </div>

      {/* Sidebar Colors Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Sidebar Colors</h2>
          <p className="text-sm text-muted-foreground">
            สีสำหรับ Sidebar Component (แสดงผลตาม theme ที่เลือก) จำนวน {Object.keys(sidebarColors).length} สี
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>หมายเหตุ:</strong> สีเหล่านี้เป็นสีมาตรฐาน Shadcn สำหรับ Sidebar Component
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(sidebarColors).map(([key, token]) => (
            <ColorTokenCard key={key} tokenKey={key} token={token} />
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

// 3. Primitive Colors (รวมทุกสีในหน้าเดียว)
export const PrimitiveColors: Story = {
  render: () => {
    // Filter out 'white' from primitive colors as it has different structure (single color, not scale)
    const colorScaleKeys = (Object.keys(primitiveColors) as Array<keyof typeof primitiveColors>).filter(
      (key) => key !== 'white'
    )
    
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Primitive Colors</h2>
          <p className="text-muted-foreground mb-1">
            สีพื้นฐานจาก Tailwind CSS Standard Palette
          </p>
          <p className="text-sm text-muted-foreground">
            จำนวน {colorScaleKeys.length} สี scales (แต่ละสีมี 10 shades: 50-900) + White (single color)
          </p>
        </div>
        <div className="space-y-6">
          {colorScaleKeys.map((colorName) => (
            <PrimitiveColorScale
              key={colorName}
              colorName={colorName}
              colorScale={primitiveColors[colorName]}
            />
          ))}
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
  },
}
