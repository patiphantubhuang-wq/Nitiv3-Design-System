import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './separator'

const meta: Meta<typeof Separator> = {
  title: 'Primitives/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Separators are used to visually divide content into distinct sections. They provide clear visual hierarchy and organization.

## Usage

Separators should be used for:
- Dividing sections of content
- Separating menu items
- Creating visual boundaries
- Organizing layout elements

## Orientations

- **horizontal**: Default, creates a horizontal line (full width)
- **vertical**: Creates a vertical line (full height)

## Props

- **orientation**: Horizontal or vertical separator
- **decorative**: Whether the separator is decorative (default: true)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is decorative',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Separator component.
 * Use the controls below to experiment with different orientations.
 */
export const InteractivePlayground: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: (args) => (
    <div className={args.orientation === 'vertical' ? 'flex h-20 items-center gap-4' : 'w-[200px] space-y-4'}>
      <div>เนื้อหาด้านบน</div>
      <Separator {...args} />
      <div>เนื้อหาด้านล่าง</div>
    </div>
  ),
}

/**
 * All separator patterns and use cases in one view.
 * This story demonstrates various separator configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Horizontal Separator */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Horizontal Separator</h3>
        <div className="w-[300px] space-y-4">
          <div>
            <h4 className="text-sm font-medium">หัวข้อส่วน</h4>
            <p className="text-sm text-muted-foreground">คำอธิบายส่วน</p>
          </div>
          <Separator />
          <div>
            <p className="text-sm">เนื้อหาด้านล่างตัวคั่น</p>
          </div>
        </div>
      </div>

      {/* Vertical Separator */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Vertical Separator</h3>
        <div className="flex h-20 items-center gap-4">
          <div>ซ้าย</div>
          <Separator orientation="vertical" />
          <div>กลาง</div>
          <Separator orientation="vertical" />
          <div>ขวา</div>
        </div>
      </div>

      {/* In Content */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">In Content</h3>
        <div className="w-[300px] space-y-4">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Title</h4>
            <p className="text-sm text-muted-foreground">
              Description text goes here.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </div>

      {/* In Card */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">In Card</h3>
        <div className="w-[300px] rounded-lg border p-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">หัวข้อการ์ด</h4>
            <p className="text-sm text-muted-foreground">
              คำอธิบายการ์ดพร้อมตัวคั่นด้านล่าง
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">สถานะ</span>
            <span className="text-sm font-medium">ใช้งาน</span>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Separator usage with horizontal and vertical orientations, and common layout patterns.',
      },
    },
  },
}
