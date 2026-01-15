import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Guidelines/Migration',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const MigrationGuide: Story = {
  render: () => (
    <div className="space-y-10 text-sm leading-relaxed text-foreground">
      <section className="space-y-3">
        <h1 className="text-2xl font-bold">🚀 Migration Guide</h1>
        <p className="font-medium">
          คู่มือการย้าย Design System นี้ไปใช้ในโปรเจกต์จริงที่ใช้ Shadcn/ui
        </p>
        <p>
          Design System นี้ถูกออกแบบมาให้ **100% ตรงกับมาตรฐาน Shadcn/ui** 
          ดังนั้นการ migration จึงเป็นไปอย่างราบรื่น ไม่ต้องแก้ไข Component code
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">✅ ความสอดคล้องกับ Shadcn/ui</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-semibold mb-2">Standard Semantic Tokens</h3>
            <p className="mb-2">ตรงกับ Shadcn/ui 100%:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Core: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--primary</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--secondary</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--muted</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--accent</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--destructive</code></li>
              <li>Surface: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--background</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--foreground</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--card</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--popover</code></li>
              <li>Utility: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--border</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--input</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--ring</code></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Sidebar Tokens</h3>
            <p className="mb-2">ตรงกับ Shadcn/ui standard:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">--sidebar</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--sidebar-foreground</code></li>
              <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">--sidebar-primary</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--sidebar-accent</code></li>
              <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">--sidebar-border</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--sidebar-ring</code></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Chart Tokens</h3>
            <p className="mb-2">ตรงกับ Shadcn/ui standard:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">--chart-1</code> ถึง <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--chart-5</code></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Custom Tokens (นอกมาตรฐาน Shadcn)</h3>
            <p className="mb-2">ใช้เฉพาะใน Badge component:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">--status-success</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--status-warning</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--status-error</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--status-info</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">--status-pending</code></li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">
              ⚠️ Custom tokens เหล่านี้เป็นไปตามแนวทาง "Product-specific Components" 
              และใช้เฉพาะใน Badge component เท่านั้น ไม่กระทบ Component อื่น
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">📋 ขั้นตอนการ Migration</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-semibold mb-2">1️⃣ Copy Design Foundations</h3>
            <p className="mb-2">Copy ไฟล์ <code className="bg-muted px-1.5 py-0.5 rounded text-xs">src/index.css</code> ไปใส่ในโปรเจกต์จริง</p>
            <p className="text-xs text-muted-foreground mb-2">
              ไฟล์นี้ประกอบด้วย:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Primitive Color Scale (Tailwind scale)</li>
              <li>Typography tokens</li>
              <li>Spacing tokens (8pt grid)</li>
              <li>Border Radius tokens</li>
              <li>Shadow tokens</li>
            </ul>
            <pre className="rounded-md border border-border bg-muted/40 p-3 text-xs mt-2">
{`// ในโปรเจกต์จริง
import './index.css'  // หรือ import ใน main.tsx/main.jsx`}
            </pre>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">2️⃣ Copy Theme Files</h3>
            <p className="mb-2">Copy โฟลเดอร์ <code className="bg-muted px-1.5 py-0.5 rounded text-xs">src/themes/</code> ทั้งหมดไปใส่ในโปรเจกต์จริง</p>
            <p className="text-xs text-muted-foreground mb-2">
              ไฟล์ที่ต้อง copy:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li><code className="bg-muted px-1.5 py-0.5 rounded">themes/base.css</code> - Neutral fallback</li>
              <li><code className="bg-muted px-1.5 py-0.5 rounded">themes/juristic.css</code> - Juristic product theme</li>
              <li><code className="bg-muted px-1.5 py-0.5 rounded">themes/guard.css</code> - Guard product theme</li>
              <li><code className="bg-muted px-1.5 py-0.5 rounded">themes/admin.css</code> - Admin product theme</li>
            </ul>
            <pre className="rounded-md border border-border bg-muted/40 p-3 text-xs mt-2">
{`// ในโปรเจกต์จริง (main.tsx หรือ App.tsx)
import './themes/base.css'
import './themes/juristic.css'
import './themes/guard.css'
import './themes/admin.css'`}
            </pre>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">3️⃣ ตั้งค่า Theme ในโปรเจกต์</h3>
            <p className="mb-2">ตั้งค่า <code className="bg-muted px-1.5 py-0.5 rounded text-xs">data-theme</code> attribute ตาม Product ที่ต้องการ</p>
            <pre className="rounded-md border border-border bg-muted/40 p-3 text-xs mt-2">
{`// ตัวอย่าง: ตั้งค่า theme ใน React App
// ใน root component หรือ layout
useEffect(() => {
  document.documentElement.setAttribute('data-theme', 'juristic')
}, [])

// หรือใน Next.js (app/layout.tsx)
export default function RootLayout({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'juristic')
  }, [])
  
  return <html>{children}</html>
}`}
            </pre>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">4️⃣ อัปเดต Tailwind Config</h3>
            <p className="mb-2">ตรวจสอบว่า <code className="bg-muted px-1.5 py-0.5 rounded text-xs">tailwind.config.js</code> มี semantic tokens ครบ</p>
            <p className="text-xs text-muted-foreground mb-2">
              ต้องมี tokens เหล่านี้:
            </p>
            <pre className="rounded-md border border-border bg-muted/40 p-3 text-xs mt-2 overflow-x-auto">
{`// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        // ... และอื่นๆ ตามมาตรฐาน Shadcn
      }
    }
  }
}`}
            </pre>
            <p className="text-xs text-muted-foreground mt-2">
              ✅ ถ้าโปรเจกต์ใช้ Shadcn/ui อยู่แล้ว config นี้ควรมีอยู่แล้ว
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">5️⃣ Components ใช้งานได้ทันที</h3>
            <p className="mb-2">
              Components ทั้งหมดใช้ semantic tokens ตามมาตรฐาน Shadcn/ui 
              ดังนั้น <strong>ไม่ต้องแก้ไข Component code เลย</strong>
            </p>
            <pre className="rounded-md border border-border bg-muted/40 p-3 text-xs mt-2">
{`// Component ใช้งานได้ทันที
<Button variant="default">Click me</Button>
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
</Card>

// สีจะเปลี่ยนตาม theme ที่ตั้งค่าไว้`}
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">⚠️ สิ่งที่ต้องระวัง</h2>
        <div className="space-y-2">
          <div className="border-l-4 border-status-warning bg-status-warning/10 p-3 rounded">
            <h3 className="text-base font-semibold mb-1">Custom Status Tokens</h3>
            <p className="text-xs">
              ถ้าโปรเจกต์จริงไม่ต้องการ Badge status variants 
              สามารถลบ <code className="bg-muted px-1.5 py-0.5 rounded">--status-*</code> tokens 
              ออกจาก theme files ได้ (ไม่กระทบ Component อื่น)
            </p>
          </div>
          <div className="border-l-4 border-status-info bg-status-info/10 p-3 rounded">
            <h3 className="text-base font-semibold mb-1">Theme Selection</h3>
            <p className="text-xs">
              ต้องตั้งค่า <code className="bg-muted px-1.5 py-0.5 rounded">data-theme</code> attribute 
              บน <code className="bg-muted px-1.5 py-0.5 rounded">&lt;html&gt;</code> หรือ <code className="bg-muted px-1.5 py-0.5 rounded">:root</code> 
              เพื่อให้ theme ทำงาน
            </p>
          </div>
          <div className="border-l-4 border-status-info bg-status-info/10 p-3 rounded">
            <h3 className="text-base font-semibold mb-1">Import Order</h3>
            <p className="text-xs">
              ต้อง import <code className="bg-muted px-1.5 py-0.5 rounded">index.css</code> ก่อน theme files 
              เพื่อให้ primitive colors พร้อมใช้งาน
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">✅ Checklist</h2>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <input type="checkbox" checked readOnly className="mt-1" />
            <div>
              <p className="font-medium">Copy <code className="bg-muted px-1.5 py-0.5 rounded text-xs">index.css</code> ไปโปรเจกต์จริง</p>
              <p className="text-xs text-muted-foreground">Primitive colors + Universal tokens</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" checked readOnly className="mt-1" />
            <div>
              <p className="font-medium">Copy <code className="bg-muted px-1.5 py-0.5 rounded text-xs">themes/</code> folder ไปโปรเจกต์จริง</p>
              <p className="text-xs text-muted-foreground">base.css + product themes</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" checked readOnly className="mt-1" />
            <div>
              <p className="font-medium">Import CSS files ในลำดับที่ถูกต้อง</p>
              <p className="text-xs text-muted-foreground">index.css → themes/*.css</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" checked readOnly className="mt-1" />
            <div>
              <p className="font-medium">ตั้งค่า <code className="bg-muted px-1.5 py-0.5 rounded text-xs">data-theme</code> attribute</p>
              <p className="text-xs text-muted-foreground">บน document root</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" checked readOnly className="mt-1" />
            <div>
              <p className="font-medium">ตรวจสอบ Tailwind config</p>
              <p className="text-xs text-muted-foreground">มี semantic tokens ครบตาม Shadcn</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" checked readOnly className="mt-1" />
            <div>
              <p className="font-medium">ทดสอบ Components</p>
              <p className="text-xs text-muted-foreground">สีเปลี่ยนตาม theme ที่ตั้งค่า</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">📦 ไฟล์ที่ต้อง Copy</h2>
        <div className="rounded-md border border-border bg-muted/40 p-4">
          <pre className="text-xs font-mono whitespace-pre">
{`src/
├── index.css                    ← Design Foundations (Primitive + Universal)
└── themes/
    ├── base.css                 ← Base Theme (Neutral)
    ├── juristic.css             ← Juristic Product Theme
    ├── guard.css                ← Guard Product Theme
    └── admin.css                ← Admin Product Theme`}
          </pre>
        </div>
        <p className="text-xs text-muted-foreground">
          ⚠️ <strong>ไม่ต้อง copy components</strong> เพราะโปรเจกต์จริงใช้ Shadcn components อยู่แล้ว
          แค่เปลี่ยน theme files ก็พอ
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">🎯 ผลลัพธ์ที่ได้</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>✅ Components ใช้งานได้ทันทีโดยไม่ต้องแก้ code</li>
          <li>✅ สีเปลี่ยนตาม theme ที่ตั้งค่า (Juristic/Guard/Admin)</li>
          <li>✅ ตรงกับมาตรฐาน Shadcn/ui 100%</li>
          <li>✅ รองรับหลาย Product โดยไม่ fork component</li>
          <li>✅ ระบบไม่พังเมื่อ scale</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">💡 Tips</h2>
        <div className="space-y-2">
          <div className="border-l-4 border-primary bg-primary/10 p-3 rounded">
            <p className="text-xs font-medium mb-1">Dynamic Theme Switching</p>
            <p className="text-xs">
              สามารถเปลี่ยน theme แบบ dynamic ได้โดยเปลี่ยน <code className="bg-muted px-1.5 py-0.5 rounded">data-theme</code> attribute
            </p>
            <pre className="rounded-md border border-border bg-muted/40 p-2 text-xs mt-2">
{`document.documentElement.setAttribute('data-theme', 'guard')`}
            </pre>
          </div>
          <div className="border-l-4 border-primary bg-primary/10 p-3 rounded">
            <p className="text-xs font-medium mb-1">Per-User Theme</p>
            <p className="text-xs">
              สามารถเก็บ theme preference ใน localStorage หรือ user profile 
              แล้วตั้งค่า theme ตาม user preference
            </p>
          </div>
        </div>
      </section>
    </div>
  ),
}
