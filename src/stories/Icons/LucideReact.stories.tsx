import type { Meta, StoryObj } from '@storybook/react'
import React, { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { icons } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const meta: Meta = {
  title: 'Foundations/Icons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Icons จาก Lucide React - Icon library ที่ใช้ใน Design System นี้

## เกี่ยวกับ Lucide React

Lucide React เป็น open-source icon library ที่มี:
- **1,600+ icons** - ครอบคลุม icons สำหรับการใช้งานทั่วไป
- **Consistent design** - ทุก icon มีสไตล์ที่สอดคล้องกัน
- **Tree-shakeable** - Import เฉพาะ icons ที่ต้องการ
- **TypeScript support** - มี type definitions ครบถ้วน

## การใช้งาน

\`\`\`tsx
import { IconName } from 'lucide-react'

<IconName className="h-4 w-4" />
\`\`\`

## ขนาดที่แนะนำ

- **Small**: \`h-4 w-4\` (16px) - สำหรับ text และ small buttons
- **Default**: \`h-5 w-5\` (20px) - สำหรับ buttons และ links
- **Medium**: \`h-6 w-6\` (24px) - สำหรับ headings และ cards
- **Large**: \`h-8 w-8\` (32px) - สำหรับ hero sections และ large displays
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Get all icon names from lucide-react icons object
const allIconNames = Object.keys(icons).sort()

// Icon Card Component
function IconCard({ iconName }: { iconName: string }) {
  const [copied, setCopied] = useState(false)
  const IconComponent = icons[iconName as keyof typeof icons] as LucideIcon

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!IconComponent) return null

  return (
    <Card
      className="group cursor-pointer transition-all hover:shadow-md"
      onClick={() => copyToClipboard(iconName)}
    >
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg border bg-background transition-colors group-hover:bg-accent">
          <IconComponent className="h-8 w-8 text-foreground" />
        </div>
        <p className="text-sm font-medium text-center break-all">{iconName}</p>
        {copied && (
          <p className="mt-2 text-xs text-muted-foreground">คัดลอกแล้ว!</p>
        )}
      </CardContent>
    </Card>
  )
}

/**
 * รายการ Icons ทั้งหมดจาก Lucide React
 * ค้นหาและคลิกที่ icon เพื่อคัดลอกชื่อ icon
 */
export const IconList: Story = {
  render: () => {
    const [searchQuery, setSearchQuery] = useState('')
    
    // Filter icons based on search
    const filteredIcons = useMemo(() => {
      if (!searchQuery.trim()) return allIconNames
      const query = searchQuery.toLowerCase().trim()
      return allIconNames.filter((iconName) =>
        iconName.toLowerCase().includes(query)
      )
    }, [searchQuery])

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Lucide React Icons</h2>
          <p className="text-muted-foreground">
            ค้นหาและสำรวจ icons จาก Lucide React ({allIconNames.length} icons) - คลิกที่ icon เพื่อคัดลอกชื่อ
          </p>
        </div>

        <div className="max-w-md">
          <Input
            placeholder="ค้นหา icon (เช่น: search, user, home)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {filteredIcons.map((iconName) => (
              <IconCard key={iconName} iconName={iconName} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">ไม่พบ icons ที่ตรงกับการค้นหา</p>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>วิธีใช้งาน</CardTitle>
            <CardDescription>
              คลิกที่ icon เพื่อคัดลอกชื่อ icon
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <p className="text-sm font-medium">1. Import icon</p>
              <code className="block rounded bg-muted p-2 text-sm">
                import &#123; IconName &#125; from &apos;lucide-react&apos;
              </code>
            </div>
            <div>
              <p className="text-sm font-medium">2. ใช้งานใน component</p>
              <code className="block rounded bg-muted p-2 text-sm">
                &lt;IconName className=&quot;h-5 w-5&quot; /&gt;
              </code>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
}