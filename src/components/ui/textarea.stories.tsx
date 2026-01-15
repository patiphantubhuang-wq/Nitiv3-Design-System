import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'
import { Label } from './label'

const meta: Meta<typeof Textarea> = {
  title: 'Primitives/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Textareas allow users to enter multiple lines of text. They are ideal for longer form inputs like descriptions, comments, or messages.

## Usage

Textareas should be used for:
- Multi-line text input (e.g., descriptions, comments)
- Message composition
- Long form content
- Feedback and reviews

## States

- **default**: Normal textarea state
- **disabled**: Disabled state (non-interactive)
- **error**: Error state (typically styled with validation)

## Sizing

Textareas can be sized using the \`min-h-\` Tailwind classes or \`rows\` prop.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when textarea is empty',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Textarea component.
 * Use the controls below to experiment with different props.
 */
export const InteractivePlayground: Story = {
  args: {
    placeholder: 'กรุณาพิมพ์ข้อความของคุณที่นี่...',
    disabled: false,
    rows: 4,
  },
  render: (args) => (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="playground-textarea">Message</Label>
      <Textarea id="playground-textarea" {...args} />
    </div>
  ),
}

/**
 * All textarea patterns, sizes, and use cases in one view.
 * This story demonstrates various textarea configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Basic Usage */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Basic Usage</h3>
        <div className="space-y-4 w-full max-w-md">
          <div className="space-y-2">
            <Label htmlFor="message">ข้อความ</Label>
            <Textarea id="message" placeholder="กรุณาพิมพ์ข้อความของคุณที่นี่" />
          </div>
          <Textarea
            placeholder="กรุณาพิมพ์ข้อความของคุณที่นี่ นี่เป็นข้อความ placeholder ที่ยาวกว่า"
          />
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">States</h3>
        <div className="space-y-4 w-full max-w-md">
          <div className="space-y-2">
            <Label htmlFor="normal-textarea">ปกติ</Label>
            <Textarea id="normal-textarea" placeholder="ช่องข้อความปกติ" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-textarea">ปิดใช้งาน</Label>
            <Textarea
              id="disabled-textarea"
              placeholder="ช่องข้อความนี้ถูกปิดใช้งาน"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Sizes</h3>
        <div className="space-y-4 w-full max-w-md">
          <div className="space-y-2">
            <Label>เล็ก (min-h-[60px])</Label>
            <Textarea className="min-h-[60px]" placeholder="ช่องข้อความเล็ก" />
          </div>
          <div className="space-y-2">
            <Label>ปกติ (min-h-[80px])</Label>
            <Textarea placeholder="ช่องข้อความปกติ" />
          </div>
          <div className="space-y-2">
            <Label>ใหญ่ (min-h-[120px])</Label>
            <Textarea className="min-h-[120px]" placeholder="ช่องข้อความใหญ่" />
          </div>
        </div>
      </div>

      {/* Common Use Cases */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Common Use Cases</h3>
        <div className="space-y-4 w-full max-w-md">
          <div className="space-y-2">
            <Label htmlFor="feedback">ความคิดเห็น</Label>
            <Textarea
              id="feedback"
              placeholder="บอกเราในสิ่งที่คุณคิด..."
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">คำอธิบาย</Label>
            <Textarea
              id="description"
              placeholder="กรุณากรอกคำอธิบายโดยละเอียด..."
              rows={6}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comment">ความคิดเห็น</Label>
            <Textarea
              id="comment"
              placeholder="เขียนความคิดเห็น..."
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Textarea usage with different sizes, states, and common patterns.',
      },
    },
  },
}
