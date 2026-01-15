import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { typographyTokens } from '@/data/designTokens'
import { 
  sansTypographyTokens, 
  serifTypographyTokens, 
  monoTypographyTokens,
  getFontFamilyClass,
  getSizeValue,
  getWeightValue,
  getLineHeightValue,
  getLetterSpacingValue,
  type TypographyToken,
} from '@/data/typographyTokens'
import { Copy } from 'lucide-react'

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ระบบ Typography ที่ใช้ในระบบ แบ่งตาม Font Family และแสดง Typography tokens ที่ใช้จริงในแต่ละ Family',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Typography Token Card Component
function TypographyTokenCard({ 
  token, 
  fontFamily 
}: { 
  token: TypographyToken
  fontFamily: 'sans' | 'serif' | 'mono'
}) {
  const fontFamilyClass = getFontFamilyClass(fontFamily)
  const sizeValue = getSizeValue(token.fontSize)
  const weightValue = getWeightValue(token.fontWeight)
  const lineHeightValue = getLineHeightValue(token.lineHeight)
  const letterSpacingValue = getLetterSpacingValue(token.letterSpacing)
  const fullClassName = `${fontFamilyClass} ${token.className}`

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg">{token.name}</CardTitle>
            {token.description && (
              <CardDescription className="mt-1">{token.description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Preview */}
        <div className="p-4 border rounded-lg bg-background">
          <div className={fullClassName}>
            {token.example || 'The quick brown fox jumps over the lazy dog'}
          </div>
        </div>

        {/* Typography Properties */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground">Size:</span>
            <div className="flex items-center gap-1">
              <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                {sizeValue}
              </code>
              <button
                onClick={() => copyToClipboard(token.fontSize)}
                className="p-0.5 hover:bg-accent rounded transition-colors"
                title="Copy Size Class"
              >
                <Copy className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground">Weight:</span>
            <div className="flex items-center gap-1">
              <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                {weightValue}
              </code>
              <button
                onClick={() => copyToClipboard(token.fontWeight)}
                className="p-0.5 hover:bg-accent rounded transition-colors"
                title="Copy Weight Class"
              >
                <Copy className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground">Line Height:</span>
            <div className="flex items-center gap-1">
              <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                {lineHeightValue}
              </code>
              <button
                onClick={() => copyToClipboard(token.lineHeight)}
                className="p-0.5 hover:bg-accent rounded transition-colors"
                title="Copy Line Height Class"
              >
                <Copy className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground">Letter Spacing:</span>
            <div className="flex items-center gap-1">
              <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">
                {letterSpacingValue}
              </code>
              <button
                onClick={() => copyToClipboard(token.letterSpacing)}
                className="p-0.5 hover:bg-accent rounded transition-colors"
                title="Copy Letter Spacing Class"
              >
                <Copy className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Code / Class Name */}
        <div className="pt-2 border-t">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-foreground">Class:</span>
            <div className="flex items-center gap-1 flex-1 min-w-0">
              <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono flex-1 truncate">
                {fullClassName}
              </code>
              <button
                onClick={() => copyToClipboard(fullClassName)}
                className="p-0.5 hover:bg-accent rounded transition-colors shrink-0"
                title="Copy Full Class"
              >
                <Copy className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Typography Primitive Tokens (FontSizes, FontWeights, LineHeights, LetterSpacing)
export const TypographyPrimitives: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-6xl">
      {/* Font Sizes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Font Sizes</CardTitle>
          <CardDescription>ขนาดตัวอักษรทั้งหมดที่ใช้ในระบบ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(typographyTokens.fontSizes).map(([key, token]) => (
              <div key={key} className="flex items-center justify-between gap-2 p-3 border rounded-lg">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{token.name}</span>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                      {token.value} ({token.px})
                    </code>
                  </div>
                  {token.usage && (
                    <p className="text-xs text-muted-foreground">{token.usage}</p>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                    text-{key}
                  </code>
                  <button
                    onClick={() => copyToClipboard(`text-${key}`)}
                    className="p-1 hover:bg-accent rounded transition-colors"
                    title="Copy Class"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Font Weights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Font Weights</CardTitle>
          <CardDescription>น้ำหนักตัวอักษรทั้งหมดที่ใช้ในระบบ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(typographyTokens.fontWeights).map(([key, token]) => (
              <div key={key} className="flex items-center justify-between gap-2 p-3 border rounded-lg">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{token.name}</span>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                      {token.value}
                    </code>
                  </div>
                  {'usage' in token && token.usage && (
                    <p className="text-xs text-muted-foreground">{token.usage}</p>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                    font-{key}
                  </code>
                  <button
                    onClick={() => copyToClipboard(`font-${key}`)}
                    className="p-1 hover:bg-accent rounded transition-colors"
                    title="Copy Class"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Line Heights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Line Heights</CardTitle>
          <CardDescription>ระยะห่างระหว่างบรรทัดทั้งหมดที่ใช้ในระบบ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(typographyTokens.lineHeights).map(([key, token]) => (
              <div key={key} className="flex items-center justify-between gap-2 p-3 border rounded-lg">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{token.name}</span>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                      {token.value}
                    </code>
                  </div>
                  {token.usage && (
                    <p className="text-xs text-muted-foreground">{token.usage}</p>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                    leading-{key}
                  </code>
                  <button
                    onClick={() => copyToClipboard(`leading-${key}`)}
                    className="p-1 hover:bg-accent rounded transition-colors"
                    title="Copy Class"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Letter Spacing */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Letter Spacing</CardTitle>
          <CardDescription>ระยะห่างระหว่างตัวอักษรทั้งหมดที่ใช้ในระบบ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(typographyTokens.letterSpacing).map(([key, token]) => (
              <div key={key} className="flex items-center justify-between gap-2 p-3 border rounded-lg">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{token.name}</span>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                      {token.value}
                    </code>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                    tracking-{key}
                  </code>
                  <button
                    onClick={() => copyToClipboard(`tracking-${key}`)}
                    className="p-1 hover:bg-accent rounded transition-colors"
                    title="Copy Class"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

// Font Family Sans Story
export const FontFamilySans: Story = {
  render: () => {
    const token = typographyTokens.fontFamilies.sans
    return (
      <div className="space-y-6 w-full max-w-6xl">
        {/* Family Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{token.name}</CardTitle>
            <CardDescription>{token.usage}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between gap-2">
              <code className="text-sm bg-muted px-3 py-2 rounded font-mono flex-1">
                {token.value}
              </code>
              <button
                onClick={() => copyToClipboard(token.value)}
                className="p-2 hover:bg-accent rounded transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 text-xs">
              <strong>Tailwind Class:</strong>{' '}
              <code className="bg-muted px-1.5 py-0.5 rounded">font-sans</code>
            </div>
          </CardContent>
        </Card>

        {/* Typography Tokens */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Typography Tokens</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sansTypographyTokens.map((typographyToken) => (
              <TypographyTokenCard
                key={typographyToken.name}
                token={typographyToken}
                fontFamily="sans"
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
  },
}

// Font Family Serif Story
export const FontFamilySerif: Story = {
  render: () => {
    const token = typographyTokens.fontFamilies.serif
    return (
      <div className="space-y-6 w-full max-w-6xl">
        {/* Family Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{token.name}</CardTitle>
            <CardDescription>{token.usage}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between gap-2">
              <code className="text-sm bg-muted px-3 py-2 rounded font-mono flex-1">
                {token.value}
              </code>
              <button
                onClick={() => copyToClipboard(token.value)}
                className="p-2 hover:bg-accent rounded transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 text-xs">
              <strong>Tailwind Class:</strong>{' '}
              <code className="bg-muted px-1.5 py-0.5 rounded">font-serif</code>
            </div>
          </CardContent>
        </Card>

        {/* Typography Tokens */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Typography Tokens</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serifTypographyTokens.map((typographyToken) => (
              <TypographyTokenCard
                key={typographyToken.name}
                token={typographyToken}
                fontFamily="serif"
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
  },
}

// Font Family Mono Story
export const FontFamilyMono: Story = {
  render: () => {
    const token = typographyTokens.fontFamilies.mono
    return (
      <div className="space-y-6 w-full max-w-6xl">
        {/* Family Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{token.name}</CardTitle>
            <CardDescription>{token.usage}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between gap-2">
              <code className="text-sm bg-muted px-3 py-2 rounded font-mono flex-1">
                {token.value}
              </code>
              <button
                onClick={() => copyToClipboard(token.value)}
                className="p-2 hover:bg-accent rounded transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 text-xs">
              <strong>Tailwind Class:</strong>{' '}
              <code className="bg-muted px-1.5 py-0.5 rounded">font-mono</code>
            </div>
          </CardContent>
        </Card>

        {/* Typography Tokens */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Typography Tokens</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {monoTypographyTokens.map((typographyToken) => (
              <TypographyTokenCard
                key={typographyToken.name}
                token={typographyToken}
                fontFamily="mono"
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
  },
}
