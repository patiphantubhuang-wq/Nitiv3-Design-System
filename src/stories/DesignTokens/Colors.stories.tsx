import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { colorTokens } from '@/data/designTokens'
import { Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

const meta: Meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ระบบสีจาก Shadcn/ui ที่ใช้ CSS Variables และ HSL color space สำหรับ Yellow Theme',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Helper component สำหรับแสดง Color Token
function ColorTokenCard({ tokenKey, token }: { tokenKey: string; token: any }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl">{token.name}</CardTitle>
            <CardDescription className="mt-1">{token.description}</CardDescription>
          </div>
          <div
            className={cn('h-16 w-16 rounded-lg border-2 border-border shrink-0', {
              'bg-primary': tokenKey === 'primary',
              'bg-secondary': tokenKey === 'secondary',
              'bg-destructive': tokenKey === 'destructive',
              'bg-background': tokenKey === 'background',
              'bg-foreground': tokenKey === 'foreground',
              'bg-muted': tokenKey === 'muted',
              'bg-accent': tokenKey === 'accent',
              'bg-card': tokenKey === 'card',
              'bg-popover': tokenKey === 'popover',
              'bg-border': tokenKey === 'border',
              'bg-input': tokenKey === 'input',
              'bg-ring': tokenKey === 'ring',
            })}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Value:</span>
            <div className="flex items-center gap-2">
              <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                hsl({token.value})
              </code>
              <button
                onClick={() => copyToClipboard(`hsl(${token.value})`)}
                className="p-1 hover:bg-accent rounded transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          {'foreground' in token && token.foreground && (
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Foreground:</span>
              <div className="flex items-center gap-2">
                <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                  hsl({token.foreground})
                </code>
                <button
                  onClick={() => copyToClipboard(`hsl(${token.foreground})`)}
                  className="p-1 hover:bg-accent rounded transition-colors"
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="pt-3 border-t">
          <p className="text-sm text-muted-foreground leading-relaxed">{token.usage}</p>
        </div>

        <div className="pt-2 space-y-2">
          <div className="text-xs space-y-1">
            <div>
              <strong className="text-foreground">CSS Variable:</strong>{' '}
              <code className="bg-muted px-1.5 py-0.5 rounded">--{tokenKey}</code>
            </div>
            {'foreground' in token && token.foreground && (
              <div>
                <strong className="text-foreground">Foreground Variable:</strong>{' '}
                <code className="bg-muted px-1.5 py-0.5 rounded">--{tokenKey}-foreground</code>
              </div>
            )}
            <div>
              <strong className="text-foreground">Tailwind Class:</strong>{' '}
              <code className="bg-muted px-1.5 py-0.5 rounded">bg-{tokenKey}</code>
              {'foreground' in token && token.foreground && (
                <>
                  {' '}
                  <code className="bg-muted px-1.5 py-0.5 rounded">text-{tokenKey}-foreground</code>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Individual Color Stories
export const Primary: Story = {
  render: () => <ColorTokenCard tokenKey="primary" token={colorTokens.primary} />,
}

export const Secondary: Story = {
  render: () => <ColorTokenCard tokenKey="secondary" token={colorTokens.secondary} />,
}

export const Destructive: Story = {
  render: () => <ColorTokenCard tokenKey="destructive" token={colorTokens.destructive} />,
}

export const Background: Story = {
  render: () => <ColorTokenCard tokenKey="background" token={colorTokens.background} />,
}

export const Foreground: Story = {
  render: () => <ColorTokenCard tokenKey="foreground" token={colorTokens.foreground} />,
}

export const Muted: Story = {
  render: () => <ColorTokenCard tokenKey="muted" token={colorTokens.muted} />,
}

export const Accent: Story = {
  render: () => <ColorTokenCard tokenKey="accent" token={colorTokens.accent} />,
}

export const CardColor: Story = {
  render: () => <ColorTokenCard tokenKey="card" token={colorTokens.card} />,
}

export const Popover: Story = {
  render: () => <ColorTokenCard tokenKey="popover" token={colorTokens.popover} />,
}

export const Border: Story = {
  render: () => <ColorTokenCard tokenKey="border" token={colorTokens.border} />,
}

export const Input: Story = {
  render: () => <ColorTokenCard tokenKey="input" token={colorTokens.input} />,
}

export const Ring: Story = {
  render: () => <ColorTokenCard tokenKey="ring" token={colorTokens.ring} />,
}

// All Colors Overview
export const AllColors: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(colorTokens).map(([key, token]) => (
        <ColorTokenCard key={key} tokenKey={key} token={token} />
      ))}
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}
