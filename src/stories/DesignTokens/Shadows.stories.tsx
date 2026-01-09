import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent } from '@/components/ui/card'
import { shadowTokens } from '@/data/designTokens'
import { Copy } from 'lucide-react'

const meta: Meta = {
  title: 'Design Tokens/Shadows',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Box shadow values สำหรับ elevation และ depth ของ components',
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

// All Shadow Values
export const ShadowScale: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Shadow Scale</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(shadowTokens).map(([key, token]) => (
            <Card key={key}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium mb-1">{token.name}</div>
                      <p className="text-xs text-muted-foreground">{token.usage}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(token.value)}
                      className="p-2 hover:bg-accent rounded transition-colors shrink-0"
                      title="Copy to clipboard"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="bg-background p-6 rounded-lg">
                    <div
                      style={{ boxShadow: token.value }}
                      className="w-full h-24 bg-card border rounded-lg flex items-center justify-center text-sm"
                    >
                      {token.name} Shadow
                    </div>
                  </div>
                  <div className="space-y-1">
                    <code className="text-xs bg-muted px-2 py-1 rounded block font-mono break-all">
                      {token.value}
                    </code>
                  </div>
                  <div className="text-xs">
                    <strong>Tailwind:</strong>{' '}
                    <code className="bg-muted px-1.5 py-0.5 rounded">shadow-{key}</code>
                  </div>
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
