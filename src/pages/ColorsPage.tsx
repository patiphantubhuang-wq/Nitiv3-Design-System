import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { colorTokens } from "@/data/designTokens"
import { Copy } from "lucide-react"
import { cn } from "@/lib/utils"

export function ColorsPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Colors</h1>
        <p className="text-muted-foreground mt-2">
          ระบบสีจาก Shadcn/ui ที่ใช้ CSS Variables และ HSL color space
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(colorTokens).map(([key, token]) => (
          <Card key={key}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{token.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {token.description}
                  </CardDescription>
                </div>
                <div
                  className={cn(
                    "h-12 w-12 rounded-md border-2 border-border",
                    {
                      "bg-primary": key === "primary",
                      "bg-secondary": key === "secondary",
                      "bg-destructive": key === "destructive",
                      "bg-background": key === "background",
                      "bg-foreground": key === "foreground",
                      "bg-muted": key === "muted",
                      "bg-accent": key === "accent",
                      "bg-card": key === "card",
                      "bg-popover": key === "popover",
                      "bg-border": key === "border",
                      "bg-input": key === "input",
                      "bg-ring": key === "ring",
                    }
                  )}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Value:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      hsl({token.value})
                    </code>
                    <button
                      onClick={() => copyToClipboard(`hsl(${token.value})`)}
                      className="p-1 hover:bg-accent rounded"
                    >
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                </div>
                {"foreground" in token && token.foreground && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Foreground:</span>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        hsl({token.foreground})
                      </code>
                      <button
                        onClick={() =>
                          copyToClipboard(`hsl(${token.foreground})`)
                        }
                        className="p-1 hover:bg-accent rounded"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="pt-2 border-t">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Usage:</strong> {token.usage}
                  </p>
                  {"foreground" in token && token.foreground ? (
                    <div className="text-xs text-muted-foreground space-y-1.5 pt-2">
                      <div>
                        <strong className="text-foreground">Value (--{key}):</strong>
                        <p className="mt-0.5">
                          ใช้สำหรับ <code className="bg-muted px-1 py-0.5 rounded text-[11px]">background-color</code> ขององค์ประกอบ เช่น ปุ่ม, badge, หรือพื้นหลังที่ต้องการเน้น
                        </p>
                        <p className="mt-1 text-[11px] opacity-80">
                          ตัวอย่าง: <code className="bg-muted px-1 py-0.5 rounded">bg-primary</code> → <code className="bg-muted px-1 py-0.5 rounded">background-color: hsl(var(--primary))</code>
                        </p>
                      </div>
                      <div>
                        <strong className="text-foreground">Foreground (--{key}-foreground):</strong>
                        <p className="mt-0.5">
                          ใช้สำหรับ <code className="bg-muted px-1 py-0.5 rounded text-[11px]">color</code> ของข้อความที่อยู่บนพื้นหลังสี Value เพื่อให้มี contrast ที่เพียงพอและอ่านง่าย
                        </p>
                        <p className="mt-1 text-[11px] opacity-80">
                          ตัวอย่าง: <code className="bg-muted px-1 py-0.5 rounded">text-primary-foreground</code> → <code className="bg-muted px-1 py-0.5 rounded">color: hsl(var(--primary-foreground))</code>
                        </p>
                      </div>
                      <div className="pt-1 border-t border-border/50">
                        <p className="text-[11px] font-medium text-foreground mb-1">การใช้งานร่วมกัน:</p>
                        <code className="block bg-muted p-2 rounded text-[11px] font-mono">
                          {`<button className="bg-${key} text-${key}-foreground">`}
                          <br />
                          {`  Button Text`}
                          <br />
                          {`</button>`}
                        </code>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-muted-foreground space-y-1.5 pt-2">
                      <div>
                        <strong className="text-foreground">Value (--{key}):</strong>
                        <p className="mt-0.5">
                          {key === "border" && (
                            <>
                              ใช้สำหรับ <code className="bg-muted px-1 py-0.5 rounded text-[11px]">border-color</code> ขององค์ประกอบ เช่น input fields, cards, dividers, หรือเส้นขอบอื่นๆ
                              <p className="mt-1 text-[11px] opacity-80">
                                ตัวอย่าง: <code className="bg-muted px-1 py-0.5 rounded">border-border</code> → <code className="bg-muted px-1 py-0.5 rounded">border-color: hsl(var(--border))</code>
                              </p>
                              <div className="pt-1 border-t border-border/50 mt-2">
                                <p className="text-[11px] font-medium text-foreground mb-1">การใช้งาน:</p>
                                <code className="block bg-muted p-2 rounded text-[11px] font-mono">
                                  {`<div className="border border-border">`}
                                  <br />
                                  {`  Content`}
                                  <br />
                                  {`</div>`}
                                </code>
                              </div>
                            </>
                          )}
                          {key === "input" && (
                            <>
                              ใช้สำหรับ <code className="bg-muted px-1 py-0.5 rounded text-[11px]">border-color</code> ของ input elements เช่น Input, Select, Textarea เมื่ออยู่ในสถานะปกติ
                              <p className="mt-1 text-[11px] opacity-80">
                                ตัวอย่าง: <code className="bg-muted px-1 py-0.5 rounded">border-input</code> → <code className="bg-muted px-1 py-0.5 rounded">border-color: hsl(var(--input))</code>
                              </p>
                              <div className="pt-1 border-t border-border/50 mt-2">
                                <p className="text-[11px] font-medium text-foreground mb-1">การใช้งาน:</p>
                                <code className="block bg-muted p-2 rounded text-[11px] font-mono">
                                  {`<input className="border border-input" />`}
                                  <br />
                                  {`<select className="border border-input" />`}
                                  <br />
                                  {`<textarea className="border border-input" />`}
                                </code>
                              </div>
                            </>
                          )}
                          {key === "ring" && (
                            <>
                              ใช้สำหรับ <code className="bg-muted px-1 py-0.5 rounded text-[11px]">outline-color</code> หรือ <code className="bg-muted px-1 py-0.5 rounded text-[11px]">ring-color</code> เมื่อ element อยู่ในสถานะ focus เพื่อแสดง visual feedback
                              <p className="mt-1 text-[11px] opacity-80">
                                ตัวอย่าง: <code className="bg-muted px-1 py-0.5 rounded">ring-ring</code> → <code className="bg-muted px-1 py-0.5 rounded">outline-color: hsl(var(--ring))</code>
                              </p>
                              <div className="pt-1 border-t border-border/50 mt-2">
                                <p className="text-[11px] font-medium text-foreground mb-1">การใช้งาน:</p>
                                <code className="block bg-muted p-2 rounded text-[11px] font-mono">
                                  {`<input className="focus-visible:ring-2 focus-visible:ring-ring" />`}
                                  <br />
                                  {`<button className="focus-visible:ring-2 focus-visible:ring-ring" />`}
                                </code>
                                <p className="mt-1 text-[11px] opacity-80">
                                  เมื่อ focus ที่ element จะแสดง ring สีเหลืองรอบๆ element
                                </p>
                              </div>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-2 border-t">
                <div
                  className={cn(
                    "h-20 w-full rounded-md flex items-center justify-center",
                    {
                      "bg-primary text-primary-foreground": key === "primary",
                      "bg-secondary text-secondary-foreground": key === "secondary",
                      "bg-destructive text-destructive-foreground": key === "destructive",
                      "bg-background text-foreground": key === "background",
                      "bg-foreground text-background": key === "foreground",
                      "bg-muted text-muted-foreground": key === "muted",
                      "bg-accent text-accent-foreground": key === "accent",
                      "bg-card text-card-foreground": key === "card",
                      "bg-popover text-popover-foreground": key === "popover",
                      "bg-border": key === "border",
                      "bg-input": key === "input",
                      "bg-ring": key === "ring",
                    }
                  )}
                >
                  <span className="font-medium">Sample Text</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CSS Variables Output */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>CSS Variables</CardTitle>
          <CardDescription>
            ค่า CSS Variables ทั้งหมดสำหรับใช้ในโปรเจกต์ (Yellow Theme)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Light Mode */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Light Mode</h3>
              <button
                onClick={() => {
                  const lightModeVars = `:root {
  --background: ${colorTokens.background.value};
  --foreground: ${colorTokens.foreground.value};
  --card: ${colorTokens.card.value};
  --card-foreground: ${"foreground" in colorTokens.card ? colorTokens.card.foreground : "inherit"};
  --popover: ${colorTokens.popover.value};
  --popover-foreground: ${"foreground" in colorTokens.popover ? colorTokens.popover.foreground : "inherit"};
  --primary: ${colorTokens.primary.value};
  --primary-foreground: ${colorTokens.primary.foreground};
  --secondary: ${colorTokens.secondary.value};
  --secondary-foreground: ${colorTokens.secondary.foreground};
  --muted: ${colorTokens.muted.value};
  --muted-foreground: ${colorTokens.muted.foreground};
  --accent: ${colorTokens.accent.value};
  --accent-foreground: ${colorTokens.accent.foreground};
  --destructive: ${colorTokens.destructive.value};
  --destructive-foreground: ${colorTokens.destructive.foreground};
  --border: ${colorTokens.border.value};
  --input: ${colorTokens.input.value};
  --ring: ${colorTokens.ring.value};
}`
                  copyToClipboard(lightModeVars)
                }}
                className="flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors"
              >
                <Copy className="h-3 w-3" />
                Copy Light Mode
              </button>
            </div>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm border">
              <code className="text-foreground font-mono">
{`:root {
  --background: ${colorTokens.background.value};
  --foreground: ${colorTokens.foreground.value};
  --card: ${colorTokens.card.value};
  --card-foreground: ${"foreground" in colorTokens.card ? colorTokens.card.foreground : "inherit"};
  --popover: ${colorTokens.popover.value};
  --popover-foreground: ${"foreground" in colorTokens.popover ? colorTokens.popover.foreground : "inherit"};
  --primary: ${colorTokens.primary.value};
  --primary-foreground: ${colorTokens.primary.foreground};
  --secondary: ${colorTokens.secondary.value};
  --secondary-foreground: ${colorTokens.secondary.foreground};
  --muted: ${colorTokens.muted.value};
  --muted-foreground: ${colorTokens.muted.foreground};
  --accent: ${colorTokens.accent.value};
  --accent-foreground: ${colorTokens.accent.foreground};
  --destructive: ${colorTokens.destructive.value};
  --destructive-foreground: ${colorTokens.destructive.foreground};
  --border: ${colorTokens.border.value};
  --input: ${colorTokens.input.value};
  --ring: ${colorTokens.ring.value};
}`}
              </code>
            </pre>
          </div>

          {/* Dark Mode */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Dark Mode</h3>
              <button
                onClick={() => {
                  const darkModeVars = `.dark {
  --background: 20 14.3% 4.1%;
  --foreground: 60 9.1% 97.8%;
  --card: 20 14.3% 4.1%;
  --card-foreground: 60 9.1% 97.8%;
  --popover: 20 14.3% 4.1%;
  --popover-foreground: 60 9.1% 97.8%;
  --primary: 47.9 95.8% 53.1%;
  --primary-foreground: 26 83.3% 14.1%;
  --secondary: 12 6.5% 15.1%;
  --secondary-foreground: 60 9.1% 97.8%;
  --muted: 12 6.5% 15.1%;
  --muted-foreground: 24 5.4% 63.9%;
  --accent: 12 6.5% 15.1%;
  --accent-foreground: 60 9.1% 97.8%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 60 9.1% 97.8%;
  --border: 12 6.5% 15.1%;
  --input: 12 6.5% 15.1%;
  --ring: 47.9 95.8% 53.1%;
}`
                  copyToClipboard(darkModeVars)
                }}
                className="flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors"
              >
                <Copy className="h-3 w-3" />
                Copy Dark Mode
              </button>
            </div>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm border">
              <code className="text-foreground font-mono">
{`.dark {
  --background: 20 14.3% 4.1%;
  --foreground: 60 9.1% 97.8%;
  --card: 20 14.3% 4.1%;
  --card-foreground: 60 9.1% 97.8%;
  --popover: 20 14.3% 4.1%;
  --popover-foreground: 60 9.1% 97.8%;
  --primary: 47.9 95.8% 53.1%;
  --primary-foreground: 26 83.3% 14.1%;
  --secondary: 12 6.5% 15.1%;
  --secondary-foreground: 60 9.1% 97.8%;
  --muted: 12 6.5% 15.1%;
  --muted-foreground: 24 5.4% 63.9%;
  --accent: 12 6.5% 15.1%;
  --accent-foreground: 60 9.1% 97.8%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 60 9.1% 97.8%;
  --border: 12 6.5% 15.1%;
  --input: 12 6.5% 15.1%;
  --ring: 47.9 95.8% 53.1%;
}`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
