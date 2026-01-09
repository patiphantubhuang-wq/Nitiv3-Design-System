import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { typographyTokens } from "@/data/designTokens"
import { Copy } from "lucide-react"

export function TypographyPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Typography</h1>
        <p className="text-muted-foreground mt-2">
          ระบบ Typography จาก Shadcn/ui รวมถึง Font Families, Sizes, Weights, Line Heights และ Letter Spacing
        </p>
      </div>

      {/* Font Families */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Font Families</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(typographyTokens.fontFamilies).map(([key, token]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="text-lg">{token.name}</CardTitle>
                <CardDescription>{token.usage}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <code className="text-xs bg-muted px-2 py-1 rounded flex-1 mr-2 truncate">
                    {token.value}
                  </code>
                  <button
                    onClick={() => copyToClipboard(token.value)}
                    className="p-1 hover:bg-accent rounded"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
                <div
                  className="mt-4 p-4 border rounded"
                  style={{ fontFamily: token.value }}
                >
                  <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
                  <p className="text-lg mt-2">สวัสดีครับ นี่คือตัวอย่างข้อความภาษาไทย</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    0123456789 !@#$%^&*()
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Font Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Font Sizes</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(typographyTokens.fontSizes).map(([key, token]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="text-lg">{token.name}</CardTitle>
                <CardDescription>{token.usage}</CardDescription>
              </CardHeader>
              <CardContent>
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
                  <div className="pt-2 border-t">
                    <div className="text-xs text-muted-foreground space-y-1.5">
                      <div>
                        <strong className="text-foreground">Usage:</strong>
                        <p className="mt-0.5">{token.usage}</p>
                      </div>
                      <div className="pt-1 border-t border-border/50">
                        <p className="text-[11px] font-medium text-foreground mb-1">ตัวอย่างการใช้งาน:</p>
                        <code className="block bg-muted p-2 rounded text-[11px] font-mono">
                          {`<p className="text-${key}">`}
                          <br />
                          {`  Text Content`}
                          <br />
                          {`</p>`}
                        </code>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t space-y-2">
                    <p style={{ fontSize: token.value }} className="font-medium">
                      Sample Text ({token.name})
                    </p>
                    <p style={{ fontSize: token.value }} className="font-medium">
                      ตัวอย่างข้อความ ({token.name})
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Font Weights</h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {Object.entries(typographyTokens.fontWeights).map(([key, token]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="text-lg">{token.name}</CardTitle>
                {"usage" in token && token.usage && (
                  <CardDescription>{token.usage}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Value:</span>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-muted px-2 py-1 rounded">
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
                  <div className="pt-4 border-t space-y-2">
                    <p style={{ fontWeight: token.value }} className="text-lg">
                      Sample Text
                    </p>
                    <p style={{ fontWeight: token.value }} className="text-lg">
                      ตัวอย่างข้อความ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Line Heights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Line Heights</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(typographyTokens.lineHeights).map(([key, token]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="text-lg">{token.name}</CardTitle>
                <CardDescription>{token.usage}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Value:</span>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-muted px-2 py-1 rounded">
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
                  <div className="pt-4 border-t space-y-3">
                    <p style={{ lineHeight: token.value }} className="text-base">
                      This is a sample paragraph with {token.name} line height.
                      It demonstrates how the text spacing looks with this
                      particular line height value.
                    </p>
                    <p style={{ lineHeight: token.value }} className="text-base">
                      นี่คือตัวอย่างย่อหน้าที่ใช้ {token.name} line height
                      เพื่อแสดงให้เห็นว่าการเว้นระยะห่างของข้อความจะเป็นอย่างไร
                      เมื่อใช้ค่า line height นี้
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Letter Spacing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Letter Spacing</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(typographyTokens.letterSpacing).map(([key, token]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="text-lg">{token.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Value:</span>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-muted px-2 py-1 rounded">
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
                  <div className="pt-4 border-t space-y-2">
                    <p style={{ letterSpacing: token.value }} className="text-lg">
                      Sample Text
                    </p>
                    <p style={{ letterSpacing: token.value }} className="text-lg">
                      ตัวอย่างข้อความ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
