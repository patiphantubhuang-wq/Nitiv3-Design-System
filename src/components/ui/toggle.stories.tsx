import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './toggle'
import { Bold, Italic, Underline } from 'lucide-react'

const meta: Meta<typeof Toggle> = {
  title: 'Primitives/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Toggles are interactive buttons that can be pressed to toggle between on/off states. They are ideal for toolbar controls and formatting options.

## Usage

Toggles should be used for:
- Toolbar buttons (e.g., text formatting)
- Toggleable actions
- State indicators that can be toggled
- Icon-only buttons with state

## Variants

- **default**: Transparent background
- **outline**: Outlined border

## Sizes

- **default**: Standard size (h-10 px-3)
- **sm**: Small size (h-9 px-2.5)
- **lg**: Large size (h-11 px-5)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'The visual style variant of the toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'The size of the toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pressed: {
      control: 'boolean',
      description: 'Whether the toggle is pressed (controlled)',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Toggle component.
 * Use the controls below to experiment with different variants and props.
 */
export const InteractivePlayground: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  render: (args) => (
    <Toggle {...args} aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

/**
 * All toggle variants, sizes, and patterns in one view.
 * This story demonstrates various toggle configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Variants</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle aria-label="Toggle default">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle outline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Sizes</h3>
        <div className="flex items-center gap-4">
          <Toggle size="sm" aria-label="Toggle small">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle size="default" aria-label="Toggle default">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle large">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      {/* With Text */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Text</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
            ตัวหนา
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
            ตัวเอียง
          </Toggle>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">States</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle aria-label="Toggle normal">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle pressed aria-label="Toggle pressed">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle disabled aria-label="Toggle disabled">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      {/* Multiple Toggles */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Toolbar Example</h3>
        <div className="flex gap-2">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of all Toggle variants, sizes, states, and common usage patterns like toolbars.',
      },
    },
  },
}
