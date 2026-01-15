import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'
import { CheckCircle2, X, AlertCircle, Info, AlertTriangle, Clock } from 'lucide-react'
import { icons } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Get all icon names from lucide-react
const allIconNames = Object.keys(icons).sort()
const iconOptions = ['', ...allIconNames] // Empty string for no icon (default)

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Badges are used to highlight an item's status or to label a piece of information.

## Usage

Badges should be used for:
- Status indicators (e.g., "Active", "Pending", "Complete")
- Labels and tags (e.g., categories, filters)
- Counts and notifications (e.g., "5 new messages")
- Quick information display

## Variants

### Notification Badges (พื้นหลังเข้ม)
- **default**: Primary badge with primary color background - สำหรับ badge notification, new, counts
- **secondary**: Secondary badge with muted background
- **destructive**: Badge for error or destructive states
- **outline**: Outlined badge with transparent background

### Status Badges (พื้นหลังอ่อน)
- **status-success**: Badge สำหรับสถานะสำเร็จ (พื้นหลังอ่อน)
- **status-warning**: Badge สำหรับสถานะเตือน (พื้นหลังอ่อน)
- **status-error**: Badge สำหรับสถานะข้อผิดพลาด (พื้นหลังอ่อน)
- **status-info**: Badge สำหรับสถานะข้อมูล (พื้นหลังอ่อน)
- **status-pending**: Badge สำหรับสถานะรอดำเนินการ (พื้นหลังอ่อน)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'status-success',
        'status-warning',
        'status-error',
        'status-info',
        'status-pending',
      ],
      description: 'The visual style variant of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    icon: {
      control: 'select',
      options: iconOptions,
      description: 'Icon name from lucide-react. Select an icon or leave empty for no icon.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'None' },
      },
    },
  } as any,
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Badge component.
 * Use the controls below to experiment with different variants, icons, and props.
 */
export const InteractivePlayground: Story = {
  args: {
    children: 'ป้าย',
    variant: 'default',
    icon: '',
  } as any,
  render: (args: any) => {
    const IconComponent = args.icon && args.icon.trim() !== '' && args.icon !== 'None'
      ? icons[args.icon as keyof typeof icons] as LucideIcon
      : null

    return (
      <Badge variant={args.variant}>
        {IconComponent && <IconComponent className="mr-1 h-3 w-3" />}
        {args.children}
      </Badge>
    )
  },
}

/**
 * All badge variants in one view.
 * This story demonstrates all available visual styles of the Badge component.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Notification Badges (พื้นหลังเข้ม) */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Notification Badges</h3>
          <p className="text-sm text-muted-foreground mb-4">
            สำหรับ badge notification, new, counts (พื้นหลังเข้ม)
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="default">new</Badge>
          <Badge variant="secondary">รอง</Badge>
          <Badge variant="destructive">ลบ</Badge>
          <Badge variant="outline">กรอบ</Badge>
        </div>
      </div>

      {/* Status Badges (พื้นหลังอ่อน) */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Status Badges</h3>
          <p className="text-sm text-muted-foreground mb-4">
            สำหรับแสดงสถานะ (พื้นหลังอ่อน)
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="status-success">สำเร็จ</Badge>
          <Badge variant="status-warning">เตือน</Badge>
          <Badge variant="status-error">ข้อผิดพลาด</Badge>
          <Badge variant="status-info">ข้อมูล</Badge>
          <Badge variant="status-pending">รอจ่าย</Badge>
        </div>
      </div>

      {/* Status Badges with Icons */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Status Badges with Icons</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="status-success">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            สำเร็จ
          </Badge>
          <Badge variant="status-warning">
            <AlertTriangle className="mr-1 h-3 w-3" />
            เตือน
          </Badge>
          <Badge variant="status-error">
            <AlertCircle className="mr-1 h-3 w-3" />
            ข้อผิดพลาด
          </Badge>
          <Badge variant="status-info">
            <Info className="mr-1 h-3 w-3" />
            ข้อมูล
          </Badge>
          <Badge variant="status-pending">
            <Clock className="mr-1 h-3 w-3" />
            รอจ่าย
          </Badge>
        </div>
      </div>

      {/* Notification Badges with Icons */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Notification Badges with Icons</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="default">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            new
          </Badge>
          <Badge variant="secondary">
            <Info className="mr-1 h-3 w-3" />
            ข้อมูล
          </Badge>
          <Badge variant="destructive">
            <AlertCircle className="mr-1 h-3 w-3" />
            ข้อผิดพลาด
          </Badge>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Usage Examples</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span>การแจ้งเตือน</span>
            <Badge variant="default">5</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>สถานะพัสดุ</span>
            <Badge variant="status-pending">รอจ่าย</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>สถานะ</span>
            <Badge variant="status-success">สำเร็จ</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of all Badge variants, with icons, and common usage patterns.',
      },
    },
  },
}
