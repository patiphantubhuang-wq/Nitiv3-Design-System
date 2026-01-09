import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { shadowTokens } from "@/data/designTokens"
import { Copy } from "lucide-react"

export function ShadowsPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Shadows</h1>
        <p className="text-muted-foreground mt-2">
          ระบบ Shadows จาก Shadcn/ui สำหรับสร้าง elevation และ depth
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(shadowTokens).map(([key, token]) => (
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
                    <code className="text-xs bg-muted px-2 py-1 rounded max-w-[200px] truncate">
                      {token.value}
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
                <div
                  className="bg-card border rounded-lg p-6 h-32 flex items-center justify-center"
                  style={{
                    boxShadow: token.value,
                  }}
                >
                  <p className="text-sm text-muted-foreground">
                    {token.name} Shadow Preview
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Shadow Elevation Scale</CardTitle>
          <CardDescription>
            ตัวอย่าง Shadow แต่ละระดับเรียงตาม elevation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(shadowTokens)
              .filter(([key]) => key !== "inner" && key !== "none")
              .map(([key, token]) => (
                <div key={key} className="text-center space-y-4">
                  <div
                    className="bg-card border rounded-lg p-8 h-40 flex items-center justify-center"
                    style={{
                      boxShadow: token.value,
                    }}
                  >
                    <p className="text-sm font-medium">{token.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{token.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {token.usage}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
