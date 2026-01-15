import type { Meta, StoryObj } from '@storybook/react'
import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemSeparator,
} from './item'
import { Button } from './button'
import { User, Settings, Mail } from 'lucide-react'

const meta: Meta<typeof Item> = {
  title: 'Data Display/Item',
  component: Item,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Items are list components that display content with media, text, and actions. They provide a consistent structure for list items.

## Usage

Items should be used for:
- List items with icons or images
- User lists and profiles
- Navigation items
- Content cards in lists

## Variants

- **default**: Transparent background
- **outline**: Bordered item
- **muted**: Muted background

## Sizes

- **default**: Standard size
- **sm**: Small size

## Components

- **ItemGroup**: Container for multiple items
- **Item**: Individual item component
- **ItemMedia**: Media area (icons, avatars)
- **ItemContent**: Content area (title, description)
- **ItemTitle**: Item title
- **ItemDescription**: Item description
- **ItemActions**: Action buttons area
- **ItemSeparator**: Separator between items
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'muted'],
      description: 'The visual style variant of the item',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'The size of the item',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Item component.
 * Use the controls below to experiment with different variants and sizes.
 */
export const InteractivePlayground: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
  render: (args) => (
    <ItemGroup>
      <Item {...args}>
        <ItemMedia>
          <User className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>ชื่อรายการ</ItemTitle>
          <ItemDescription>คำอธิบายรายการ</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm">
            ดำเนินการ
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
}

/**
 * All item patterns and use cases in one view.
 * This story demonstrates various item configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Default */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Default</h3>
        <ItemGroup>
          <Item>
            <ItemMedia>
              <User className="h-5 w-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>จอห์น โด</ItemTitle>
              <ItemDescription>วิศวกรซอฟต์แวร์</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm">
                ดู
              </Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </div>

      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Variants</h3>
        <ItemGroup className="space-y-2">
          <Item variant="default">
            <ItemMedia>
              <User className="h-5 w-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>ค่าเริ่มต้น</ItemTitle>
              <ItemDescription>รูปแบบค่าเริ่มต้น</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline">
            <ItemMedia>
              <Settings className="h-5 w-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>เส้นขอบ</ItemTitle>
              <ItemDescription>รูปแบบเส้นขอบ</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="muted">
            <ItemMedia>
              <Mail className="h-5 w-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>เงียบ</ItemTitle>
              <ItemDescription>รูปแบบเงียบ</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Sizes</h3>
        <ItemGroup className="space-y-2">
          <Item size="default">
            <ItemMedia>
              <User className="h-5 w-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Default Size</ItemTitle>
              <ItemDescription>Standard size item</ItemDescription>
            </ItemContent>
          </Item>
          <Item size="sm">
            <ItemMedia>
              <User className="h-4 w-4" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>ขนาดเล็ก</ItemTitle>
              <ItemDescription>รายการขนาดเล็ก</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </div>

      {/* Multiple Items */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Multiple Items</h3>
        <ItemGroup>
          <Item>
            <ItemMedia>
              <User className="h-5 w-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>จอห์น โด</ItemTitle>
              <ItemDescription>วิศวกรซอฟต์แวร์</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm">
                ดู
              </Button>
            </ItemActions>
          </Item>
          <ItemSeparator />
          <Item>
            <ItemMedia>
              <Settings className="h-5 w-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Jane Smith</ItemTitle>
              <ItemDescription>Product Designer</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </ItemActions>
          </Item>
          <ItemSeparator />
          <Item>
            <ItemMedia>
              <Mail className="h-5 w-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>บ็อบ จอห์นสัน</ItemTitle>
              <ItemDescription>ผู้จัดการโครงการ</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Item usage with different variants, sizes, and multiple items with separators.',
      },
    },
  },
}
