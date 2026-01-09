import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent } from '@/components/ui/card'
import { spacingTokens } from '@/data/designTokens'
import { Copy } from 'lucide-react'

const meta: Meta = {
  title: 'Design Tokens/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Spacing scale สำหรับ padding, margin และ gap ใช้หน่วย rem และ px',
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

// Individual spacing tokens
export const Spacing0: Story = {
  render: () => {
    const token = spacingTokens['0']
    return (
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{token.name}</div>
                <code className="text-xs bg-muted px-2 py-1 rounded mt-1">
                  {token.value} ({token.px})
                </code>
                <p className="text-xs text-muted-foreground mt-1">{token.usage}</p>
              </div>
              <button
                onClick={() => copyToClipboard(token.value)}
                className="p-2 hover:bg-accent rounded transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <div className="bg-muted p-4 rounded">
              <div style={{ width: token.value, height: token.value }} className="bg-primary mx-auto" />
            </div>
            <div className="text-xs">
              <strong>Tailwind:</strong> <code className="bg-muted px-1.5 py-0.5 rounded">p-0</code>,{' '}
              <code className="bg-muted px-1.5 py-0.5 rounded">m-0</code>,{' '}
              <code className="bg-muted px-1.5 py-0.5 rounded">gap-0</code>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// All Spacing Scale
export const SpacingScale: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Spacing Scale</h3>
        <div className="space-y-4">
          {Object.entries(spacingTokens).map(([key, token]) => (
            <Card key={key}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-medium min-w-[60px]">{token.name}</span>
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        {token.value} ({token.px})
                      </code>
                      <span className="text-xs text-muted-foreground">{token.usage}</span>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <div
                        style={{ width: token.value, height: '20px' }}
                        className="bg-primary rounded"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(token.value)}
                    className="p-2 hover:bg-accent rounded transition-colors shrink-0"
                    title="Copy to clipboard"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 text-xs">
                  <strong>Tailwind:</strong>{' '}
                  <code className="bg-muted px-1.5 py-0.5 rounded">p-{key}</code>,{' '}
                  <code className="bg-muted px-1.5 py-0.5 rounded">m-{key}</code>,{' '}
                  <code className="bg-muted px-1.5 py-0.5 rounded">gap-{key}</code>
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
