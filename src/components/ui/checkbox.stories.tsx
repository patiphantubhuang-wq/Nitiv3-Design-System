import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './checkbox'
import { Label } from './label'

const meta: Meta<typeof Checkbox> = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Checkboxes allow users to select one or more options from a set. They are useful for multiple selections or boolean inputs.

## Usage

Checkboxes should be used for:
- Multiple selection lists
- Terms and conditions acceptance
- Feature toggles and preferences
- Boolean form inputs

## States

- **unchecked**: Default state
- **checked**: Selected state
- **disabled**: Non-interactive state
- **indeterminate**: Partially selected state (advanced)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked (controlled)',
      table: {
        type: { summary: 'boolean' },
      },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked by default (uncontrolled)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Checkbox component.
 * Use the controls below to experiment with different states.
 */
export const InteractivePlayground: Story = {
  args: {
    defaultChecked: false,
    disabled: false,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="playground-checkbox" {...args} />
      <Label htmlFor="playground-checkbox">ป้ายกำกับช่องทำเครื่องหมาย</Label>
    </div>
  ),
}

/**
 * All checkbox states and patterns in one view.
 * This story demonstrates common checkbox usage patterns.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Basic States */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">States</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">ไม่เลือก</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">เลือกแล้ว</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">ปิดใช้งาน</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" defaultChecked disabled />
            <Label htmlFor="disabled-checked">ปิดใช้งาน (เลือกแล้ว)</Label>
          </div>
        </div>
      </div>

      {/* Multiple Options */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Multiple Options</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="option1" />
            <Label htmlFor="option1">ตัวเลือก 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option2" defaultChecked />
            <Label htmlFor="option2">ตัวเลือก 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option3" />
            <Label htmlFor="option3">ตัวเลือก 3</Label>
          </div>
        </div>
      </div>

      {/* Common Use Cases */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Common Use Cases</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">ยอมรับข้อกำหนดและเงื่อนไข</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <Label htmlFor="newsletter">สมัครรับจดหมายข่าว</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" defaultChecked />
            <Label htmlFor="marketing">รับอีเมลการตลาด</Label>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Checkbox states, multiple options, and common usage patterns.',
      },
    },
  },
}
