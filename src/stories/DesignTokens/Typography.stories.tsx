import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { typographyTokens } from '@/data/designTokens'
import { Copy } from 'lucide-react'

const meta: Meta = {
  title: 'Design Tokens/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ระบบ Typography จาก Shadcn/ui รวมถึง Font Families, Sizes, Weights, Line Heights และ Letter Spacing',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}

// Font Families
export const FontFamilySans: Story = {
  render: () => {
    const token = typographyTokens.fontFamilies.sans
    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl">{token.name}</CardTitle>
          <CardDescription>{token.usage}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <code className="text-sm bg-muted px-3 py-2 rounded font-mono flex-1 mr-2">
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
          <div className="mt-4 p-6 border rounded-lg" style={{ fontFamily: token.value }}>
            <p className="text-xl mb-2">The quick brown fox jumps over the lazy dog</p>
            <p className="text-xl mb-2">สวัสดีครับ นี่คือตัวอย่างข้อความภาษาไทย</p>
            <p className="text-sm text-muted-foreground">0123456789 !@#$%^&*()</p>
          </div>
          <div className="pt-2 text-xs">
            <strong>Tailwind Class:</strong> <code className="bg-muted px-1.5 py-0.5 rounded">font-sans</code>
          </div>
        </CardContent>
      </Card>
    )
  },
}

export const FontFamilySerif: Story = {
  render: () => {
    const token = typographyTokens.fontFamilies.serif
    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl">{token.name}</CardTitle>
          <CardDescription>{token.usage}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <code className="text-sm bg-muted px-3 py-2 rounded font-mono flex-1 mr-2">
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
          <div className="mt-4 p-6 border rounded-lg" style={{ fontFamily: token.value }}>
            <p className="text-xl mb-2">The quick brown fox jumps over the lazy dog</p>
            <p className="text-sm text-muted-foreground">0123456789 !@#$%^&*()</p>
          </div>
          <div className="pt-2 text-xs">
            <strong>Tailwind Class:</strong> <code className="bg-muted px-1.5 py-0.5 rounded">font-serif</code>
          </div>
        </CardContent>
      </Card>
    )
  },
}

export const FontFamilyMono: Story = {
  render: () => {
    const token = typographyTokens.fontFamilies.mono
    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl">{token.name}</CardTitle>
          <CardDescription>{token.usage}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <code className="text-sm bg-muted px-3 py-2 rounded font-mono flex-1 mr-2">
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
          <div className="mt-4 p-6 border rounded-lg" style={{ fontFamily: token.value }}>
            <p className="text-lg mb-2">const example = "Hello World"</p>
            <p className="text-sm text-muted-foreground">0123456789 !@#$%^&*()</p>
          </div>
          <div className="pt-2 text-xs">
            <strong>Tailwind Class:</strong> <code className="bg-muted px-1.5 py-0.5 rounded">font-mono</code>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// Font Sizes - แสดงตัวอย่างขนาดต่างๆ
export const FontSizes: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-3xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Font Sizes</h3>
        <div className="space-y-3">
          {Object.entries(typographyTokens.fontSizes).map(([key, token]) => (
            <Card key={key}>
              <CardContent className="pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{token.name}</span>
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        {token.value} ({token.px})
                      </code>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{token.usage}</p>
                    <div style={{ fontSize: token.value }} className="font-sans">
                      The quick brown fox jumps over the lazy dog
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(token.value)}
                    className="p-1 hover:bg-accent rounded transition-colors shrink-0"
                    title="Copy to clipboard"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-2 text-xs">
                  <strong>Tailwind:</strong> <code className="bg-muted px-1.5 py-0.5 rounded">text-{key}</code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

// Font Weights
export const FontWeights: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <h3 className="text-lg font-semibold">Font Weights</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {Object.entries(typographyTokens.fontWeights).map(([key, token]) => (
          <Card key={key}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-medium mb-1">{token.name}</div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{token.value}</code>
                  {'usage' in token && token.usage && (
                    <p className="text-xs text-muted-foreground mt-1">{token.usage}</p>
                  )}
                </div>
                <button
                  onClick={() => copyToClipboard(token.value)}
                  className="p-1 hover:bg-accent rounded transition-colors"
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div style={{ fontWeight: token.value }} className="text-lg mt-2">
                The quick brown fox
              </div>
              <div className="mt-2 text-xs">
                <strong>Tailwind:</strong> <code className="bg-muted px-1.5 py-0.5 rounded">font-{key}</code>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
}

// Line Heights
export const LineHeights: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <h3 className="text-lg font-semibold">Line Heights</h3>
      <div className="space-y-3">
        {Object.entries(typographyTokens.lineHeights).map(([key, token]) => (
          <Card key={key}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="font-medium mb-1">{token.name}</div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{token.value}</code>
                  <p className="text-xs text-muted-foreground mt-1">{token.usage}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(token.value)}
                  className="p-1 hover:bg-accent rounded transition-colors"
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div style={{ lineHeight: token.value }} className="text-base border-l-2 pl-3">
                <p>
                  This is an example of line height {token.name}. Notice how the spacing between lines
                  changes. This text demonstrates the visual effect of different line height values.
                </p>
              </div>
              <div className="mt-2 text-xs">
                <strong>Tailwind:</strong> <code className="bg-muted px-1.5 py-0.5 rounded">leading-{key}</code>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
}

// Letter Spacing
export const LetterSpacing: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <h3 className="text-lg font-semibold">Letter Spacing</h3>
      <div className="space-y-3">
        {Object.entries(typographyTokens.letterSpacing).map(([key, token]) => (
          <Card key={key}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="font-medium mb-1">{token.name}</div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{token.value}</code>
                </div>
                <button
                  onClick={() => copyToClipboard(token.value)}
                  className="p-1 hover:bg-accent rounded transition-colors"
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div style={{ letterSpacing: token.value }} className="text-xl font-medium">
                The Quick Brown Fox
              </div>
              <div className="mt-2 text-xs">
                <strong>Tailwind:</strong> <code className="bg-muted px-1.5 py-0.5 rounded">tracking-{key}</code>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
}
