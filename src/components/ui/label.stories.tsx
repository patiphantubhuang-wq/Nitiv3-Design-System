import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label'
import { Input } from './input'
import { Checkbox } from './checkbox'

const meta: Meta<typeof Label> = {
  title: 'Primitives/Label',
  component: Label,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Labels are used to provide context and identify form controls. They improve accessibility and help users understand what input is expected.

## Usage

Labels should be used for:
- Form field identification (e.g., "Email", "Password")
- Checkbox and radio button descriptions
- Accessibility improvements (screen readers)
- Input field context

## Accessibility

Labels should always be associated with their corresponding inputs using the \`htmlFor\` prop (matches the input's \`id\`).
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'Associates the label with a form control',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Label component.
 * Use the controls below to experiment with different props.
 */
export const InteractivePlayground: Story = {
  args: {
    htmlFor: 'input-id',
    children: 'ป้ายกำกับ',
  },
  render: (args) => (
    <div className="w-full max-w-sm space-y-2">
      <Label {...args} />
      <Input id="input-id" placeholder="ช่องกรอกข้อมูลที่เกี่ยวข้อง" />
    </div>
  ),
}

/**
 * All label patterns and use cases in one view.
 * This story demonstrates common label usage patterns.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* With Input Fields */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Input Fields</h3>
        <div className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="name">ชื่อ</Label>
            <Input id="name" placeholder="กรุณากรอกชื่อของคุณ" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">อีเมล</Label>
            <Input id="email" type="email" placeholder="อีเมล@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">รหัสผ่าน</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </div>
      </div>

      {/* With Checkboxes */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Checkboxes</h3>
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
            <Checkbox id="marketing" />
            <Label htmlFor="marketing">รับอีเมลการตลาด</Label>
          </div>
        </div>
      </div>

      {/* Required Fields */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Required Fields</h3>
        <div className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="required-email">
              อีเมล <span className="text-destructive">*</span>
            </Label>
            <Input id="required-email" type="email" placeholder="อีเมล@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="required-name">
              ชื่อเต็ม <span className="text-destructive">*</span>
            </Label>
            <Input id="required-name" placeholder="ชื่อ นามสกุล" required />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Label usage with inputs, checkboxes, and required field indicators.',
      },
    },
  },
}
