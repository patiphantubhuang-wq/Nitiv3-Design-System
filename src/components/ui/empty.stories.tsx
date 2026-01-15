import type { Meta, StoryObj } from '@storybook/react'
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from './empty'
import { Inbox, FileX, Search } from 'lucide-react'
import { Button } from './button'

const meta: Meta<typeof Empty> = {
  title: 'Feedback & Status/Empty State',
  component: Empty,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Empty states are used when there's no content to display. They provide guidance and encourage users to take action.

## Usage

Empty states should be used for:
- Empty lists or tables
- No search results
- Initial states (no data yet)
- Error states with helpful messaging

## Components

- **Empty**: Container component
- **EmptyHeader**: Header section (typically contains media, title, description)
- **EmptyMedia**: Media area (icons, images)
- **EmptyTitle**: Title text
- **EmptyDescription**: Description text
- **EmptyContent**: Action area (buttons, links)

## Variants

- **default**: Default media display
- **icon**: Icon variant with background
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * All empty state patterns and use cases in one view.
 * This story demonstrates various empty state configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Default */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Default</h3>
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <Inbox className="h-12 w-12 text-muted-foreground" />
            </EmptyMedia>
            <EmptyTitle>ไม่พบรายการ</EmptyTitle>
            <EmptyDescription>
              เริ่มต้นด้วยการสร้างรายการใหม่
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>สร้างรายการ</Button>
          </EmptyContent>
        </Empty>
      </div>

      {/* With Icon Variant */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Icon Variant</h3>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FileX className="h-6 w-6" />
            </EmptyMedia>
            <EmptyTitle>ไม่มีไฟล์</EmptyTitle>
            <EmptyDescription>
              อัปโหลดไฟล์แรกของคุณเพื่อเริ่มต้น
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>อัปโหลดไฟล์</Button>
          </EmptyContent>
        </Empty>
      </div>

      {/* Search Empty */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Search Empty</h3>
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <Search className="h-12 w-12 text-muted-foreground" />
            </EmptyMedia>
            <EmptyTitle>ไม่พบผลลัพธ์</EmptyTitle>
            <EmptyDescription>
              ลองปรับการค้นหาหรือตัวกรองเพื่อค้นหาสิ่งที่คุณกำลังมองหา
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline">ล้างตัวกรอง</Button>
          </EmptyContent>
        </Empty>
      </div>

      {/* Simple */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Simple</h3>
        <Empty>
          <EmptyHeader>
            <EmptyTitle>ไม่มีเนื้อหา</EmptyTitle>
            <EmptyDescription>
              ไม่มีอะไรให้แสดงที่นี่
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Empty state usage with default, icon variant, search empty, and simple patterns.',
      },
    },
  },
}