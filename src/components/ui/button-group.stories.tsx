import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group'
import { Button } from './button'
import { Download, Upload, Search } from 'lucide-react'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Patterns & Utilities/Button Group',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Button groups combine multiple buttons into a connected unit. They create visual cohesion and indicate related actions.

## Usage

Button groups should be used for:
- Related actions that belong together
- Toolbar controls
- Filter or sort options
- Grouped navigation buttons

## Orientations

- **horizontal**: Default, buttons arranged horizontally (side by side)
- **vertical**: Buttons arranged vertically (stacked)

## Components

- **ButtonGroup**: Container component
- **ButtonGroupSeparator**: Visual separator between button groups
- **ButtonGroupText**: Text label for the button group
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the button group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the ButtonGroup component.
 * Use the controls below to experiment with different orientations.
 */
export const InteractivePlayground: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">แรก</Button>
      <Button variant="outline">สอง</Button>
      <Button variant="outline">สาม</Button>
    </ButtonGroup>
  ),
}

/**
 * All button group patterns and use cases in one view.
 * This story demonstrates various button group configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Horizontal Layout */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Horizontal Layout</h3>
        <ButtonGroup>
          <Button variant="outline">แรก</Button>
          <Button variant="outline">สอง</Button>
          <Button variant="outline">สาม</Button>
        </ButtonGroup>
      </div>

      {/* Vertical Layout */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Vertical Layout</h3>
        <ButtonGroup orientation="vertical">
          <Button variant="outline">First</Button>
          <Button variant="outline">Second</Button>
          <Button variant="outline">Third</Button>
        </ButtonGroup>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Icons</h3>
        <ButtonGroup>
          <Button variant="outline">
            <Download className="h-4 w-4" />
            ดาวน์โหลด
          </Button>
          <Button variant="outline">
            <Upload className="h-4 w-4" />
            อัปโหลด
          </Button>
          <Button variant="outline">
            <Search className="h-4 w-4" />
            ค้นหา
          </Button>
        </ButtonGroup>
      </div>

      {/* With Separator */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Separator</h3>
        <ButtonGroup>
          <Button variant="outline">First</Button>
          <ButtonGroupSeparator />
          <Button variant="outline">Second</Button>
          <ButtonGroupSeparator />
          <Button variant="outline">Third</Button>
        </ButtonGroup>
      </div>

      {/* With Text Label */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Text Label</h3>
        <ButtonGroup>
          <ButtonGroupText>เรียงตาม:</ButtonGroupText>
          <Button variant="outline">ชื่อ</Button>
          <Button variant="outline">วันที่</Button>
          <Button variant="outline">ขนาด</Button>
        </ButtonGroup>
      </div>

      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Variants</h3>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Outline (recommended)</p>
            <ButtonGroup>
              <Button variant="outline">First</Button>
              <Button variant="outline">Second</Button>
              <Button variant="outline">Third</Button>
            </ButtonGroup>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Default (primary)</p>
            <ButtonGroup>
              <Button variant="default">แรก</Button>
              <Button variant="default">สอง</Button>
              <Button variant="default">สาม</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of ButtonGroup usage with horizontal and vertical orientations, icons, separators, text labels, and variants.',
      },
    },
  },
}
