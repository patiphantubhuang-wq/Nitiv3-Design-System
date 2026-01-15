import type { Meta, StoryObj } from '@storybook/react'
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldContent,
} from './field'
import { Input } from './input'
import { Label } from './label'

const meta: Meta<typeof Field> = {
  title: 'Form Components/Field',
  component: Field,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Fields are form components that combine labels, inputs, descriptions, and error messages into a cohesive unit. They provide a consistent structure for form elements.

## Usage

Fields should be used for:
- Form inputs with labels and descriptions
- Form validation display
- Consistent form layouts
- Accessible form structures

## Orientations

- **vertical**: Label above input (default)
- **horizontal**: Label and input side by side
- **responsive**: Vertical on mobile, horizontal on desktop

## Components

- **Field**: Container component
- **FieldGroup**: Wrapper for field elements
- **FieldLabel**: Label for the field
- **FieldDescription**: Help text or description
- **FieldError**: Error message display
- **FieldContent**: Input/content area
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
      description: 'The orientation of the field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Field component.
 * Use the controls below to experiment with different orientations.
 */
export const InteractivePlayground: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <Field {...args} className="w-full max-w-sm">
      <FieldGroup>
        <FieldLabel htmlFor="playground-field">ป้ายกำกับ</FieldLabel>
        <FieldContent>
          <Input id="playground-field" placeholder="กรุณากรอกค่า..." />
        </FieldContent>
        <FieldDescription>นี่คือคำอธิบาย</FieldDescription>
      </FieldGroup>
    </Field>
  ),
}

/**
 * All field patterns and use cases in one view.
 * This story demonstrates various field configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Vertical Orientation */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Vertical Orientation</h3>
        <div className="space-y-4 w-full max-w-sm">
          <Field orientation="vertical">
            <FieldGroup>
              <FieldLabel htmlFor="vertical-name">ชื่อ</FieldLabel>
              <FieldContent>
                <Input id="vertical-name" placeholder="กรุณากรอกชื่อของคุณ" />
              </FieldContent>
              <FieldDescription>ชื่อเต็มของคุณ</FieldDescription>
            </FieldGroup>
          </Field>
          <Field orientation="vertical">
            <FieldGroup>
              <FieldLabel htmlFor="vertical-email">อีเมล</FieldLabel>
              <FieldContent>
                <Input id="vertical-email" type="email" placeholder="อีเมล@example.com" />
              </FieldContent>
              <FieldDescription>เราจะไม่แบ่งปันอีเมลของคุณ</FieldDescription>
            </FieldGroup>
          </Field>
        </div>
      </div>

      {/* Horizontal Orientation */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Horizontal Orientation</h3>
        <div className="space-y-4 w-full max-w-md">
          <Field orientation="horizontal">
            <FieldGroup>
              <FieldLabel htmlFor="horizontal-name">ชื่อ</FieldLabel>
              <FieldContent>
                <Input id="horizontal-name" placeholder="กรุณากรอกชื่อของคุณ" />
              </FieldContent>
            </FieldGroup>
          </Field>
          <Field orientation="horizontal">
            <FieldGroup>
              <FieldLabel htmlFor="horizontal-email">Email</FieldLabel>
              <FieldContent>
                <Input id="horizontal-email" type="email" placeholder="email@example.com" />
              </FieldContent>
            </FieldGroup>
          </Field>
        </div>
      </div>

      {/* With Error */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Error</h3>
        <div className="space-y-4 w-full max-w-sm">
          <Field orientation="vertical">
            <FieldGroup>
              <FieldLabel htmlFor="error-email">อีเมล</FieldLabel>
              <FieldContent>
                <Input id="error-email" type="email" aria-invalid="true" />
              </FieldContent>
              <FieldError errors={[{ message: 'กรุณากรอกที่อยู่อีเมลที่ถูกต้อง' }]} />
            </FieldGroup>
          </Field>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Field usage with vertical and horizontal orientations, and error states.',
      },
    },
  },
}
