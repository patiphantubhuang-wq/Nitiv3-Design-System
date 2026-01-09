import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { radiusTokens } from "@/data/designTokens"
import { Copy } from "lucide-react"

export function RadiusPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Border Radius</h1>
        <p className="text-muted-foreground mt-2">
          ระบบ Border Radius จาก Shadcn/ui สำหรับการกำหนดมุมโค้งขององค์ประกอบ
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(radiusTokens).map(([key, token]) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle className="text-lg">{token.name}</CardTitle>
              <CardDescription>{token.usage}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Value:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {token.value} {token.px !== "Full circle" && `(${token.px})`}
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
              <div className="pt-4 border-t space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-primary w-16 h-16"
                    style={{
                      borderRadius: token.value,
                    }}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-2">Square</p>
                    <div
                      className="bg-primary h-8 w-full"
                      style={{
                        borderRadius: token.value,
                      }}
                    />
                  </div>
                </div>
                {key === "full" && (
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-primary w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-2">Circle</p>
                      <div className="bg-primary h-8 w-32 rounded-full" />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Radius Comparison</CardTitle>
          <CardDescription>
            เปรียบเทียบ Border Radius ต่างๆ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(radiusTokens)
              .filter(([key]) => key !== "full")
              .map(([key, token]) => (
                <div key={key} className="text-center space-y-2">
                  <div
                    className="bg-primary w-20 h-20 mx-auto"
                    style={{
                      borderRadius: token.value,
                    }}
                  />
                  <p className="text-sm font-medium">{token.name}</p>
                  <p className="text-xs text-muted-foreground">{token.value}</p>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
