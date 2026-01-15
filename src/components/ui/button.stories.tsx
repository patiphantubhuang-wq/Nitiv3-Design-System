import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Download, Upload, Search, Settings, Mail, Send } from 'lucide-react'
import { icons } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Get all icon names from lucide-react
const allIconNames = Object.keys(icons).sort()
const iconOptions = ['', ...allIconNames] // Empty string for no icon (default)

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Buttons are used to trigger actions. They can be placed anywhere in the interface and come in various styles and sizes.

## Usage

Buttons should be used for:
- Primary actions (e.g., "Save", "Submit", "Confirm")
- Secondary actions (e.g., "Cancel", "Back")
- Navigation (e.g., "Next", "Previous")

## Variants

- **default**: Primary button for main actions
- **secondary**: Secondary button for less prominent actions
- **destructive**: For destructive actions (e.g., delete, remove)
- **outline**: Outlined button with transparent background
- **ghost**: Minimal button with no background
- **link**: Link-styled button for navigation

## Sizes

- **default**: Standard button size (h-10 px-4 py-2)
- **sm**: Small button (h-9 px-3)
- **lg**: Large button (h-11 px-8)
- **icon**: Square button for icons only (h-10 w-10)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      description: 'The visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child element (for composition with other components)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
 * Interactive playground for the Button component.
 * Use the controls below to experiment with different variants, sizes, icons, and props.
 */
export const InteractivePlayground: Story = {
  args: {
    children: 'ปุ่ม',
    variant: 'default',
    size: 'default',
    disabled: false,
    icon: '',
  } as any,
  render: (args: any) => {
    const IconComponent = args.icon && args.icon.trim() !== '' && args.icon !== 'None'
      ? icons[args.icon as keyof typeof icons] as LucideIcon
      : null

    return (
      <Button
        variant={args.variant}
        size={args.size}
        disabled={args.disabled}
        asChild={args.asChild}
      >
        {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
        {args.children}
      </Button>
    )
  },
}

/**
 * All button variants and sizes in one view.
 * This story demonstrates all available visual styles and sizes of the Button component.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Variants</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default">ค่าเริ่มต้น</Button>
          <Button variant="secondary">รอง</Button>
          <Button variant="destructive">ลบ</Button>
          <Button variant="outline">กรอบ</Button>
          <Button variant="ghost">โปร่งใส</Button>
          <Button variant="link">ลิงก์</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">เล็ก</Button>
          <Button size="default">ปกติ</Button>
          <Button size="lg">ใหญ่</Button>
          <Button size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Icons</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            ดาวน์โหลด
          </Button>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            อัปโหลด
          </Button>
          <Button variant="secondary">
            <Search className="mr-2 h-4 w-4" />
            ค้นหา
          </Button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Icon Buttons</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="icon" variant="outline">
            <Settings className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost">
            <Mail className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">States</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button>ปกติ</Button>
          <Button disabled>ปิดใช้งาน</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of all Button variants, sizes, and states.',
      },
    },
  },
}
