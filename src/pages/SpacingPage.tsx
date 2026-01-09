import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { spacingTokens } from "@/data/designTokens"
import { Copy } from "lucide-react"

export function SpacingPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Spacing</h1>
        <p className="text-muted-foreground mt-2">
          ระบบ Spacing จาก Shadcn/ui ที่ใช้ 8-point grid system
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(spacingTokens).map(([key, token]) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle className="text-lg">Spacing {token.name}</CardTitle>
              <CardDescription>{token.usage}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Value:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {token.value} ({token.px})
                    </code>
                    <button
                      onClick={() => copyToClipboard(token.value)}
                      className="p-1 hover:bg-accent rounded"
                    >
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center gap-2">
                  <div
                    className="bg-primary rounded"
                    style={{
                      width: token.value,
                      height: token.value,
                    }}
                  />
                  <div className="flex-1">
                    <div
                      className="bg-muted h-4 rounded"
                      style={{
                        width: token.value,
                      }}
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Visual representation
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Spacing Scale Visualization</CardTitle>
          <CardDescription>
            ตัวอย่างการใช้งาน Spacing ในรูปแบบต่างๆ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(spacingTokens)
              .filter(([key]) => parseInt(key) <= 8)
              .map(([key, token]) => (
                <div key={key} className="flex items-center gap-4">
                  <div className="w-20 text-sm font-medium">{token.name}</div>
                  <div className="flex-1">
                    <div
                      className="bg-primary h-8 rounded"
                      style={{
                        width: token.value,
                      }}
                    />
                  </div>
                  <div className="w-24 text-xs text-muted-foreground text-right">
                    {token.value}
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
