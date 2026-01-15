import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent } from '@/components/ui/card'
import { radiusTokens } from '@/data/designTokens'
import { Copy } from 'lucide-react'

const meta: Meta = {
  title: 'Foundations/Border Radius',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Border radius values สำหรับ rounded corners ของ components',
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

// All Border Radius Values
export const BorderRadiusScale: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Border Radius Scale</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(radiusTokens).map(([key, token]) => (
            <Card key={key}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium mb-1">{token.name}</div>
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        {token.value} ({token.px})
                      </code>
                      <p className="text-xs text-muted-foreground mt-1">{token.usage}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(token.value)}
                      className="p-2 hover:bg-accent rounded transition-colors shrink-0"
                      title="Copy to clipboard"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div
                      style={{ borderRadius: token.value }}
                      className="w-20 h-20 bg-primary flex items-center justify-center text-primary-foreground text-xs font-medium"
                    >
                      Box
                    </div>
                    <div
                      style={{ borderRadius: token.value }}
                      className="w-20 h-20 bg-secondary border-2 border-border flex items-center justify-center text-xs font-medium"
                    >
                      Card
                    </div>
                  </div>
                  <div className="text-xs">
                    <strong>Tailwind:</strong>{' '}
                    <code className="bg-muted px-1.5 py-0.5 rounded">rounded-{key}</code>
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
