import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from './radio-group'
import { Label } from './label'

const meta: Meta<typeof RadioGroup> = {
  title: 'Primitives/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Radio groups allow users to select a single option from a set of mutually exclusive choices.

## Usage

Radio groups should be used for:
- Single selection from multiple options
- Settings with mutually exclusive choices
- Preference selection
- Form inputs where only one option can be selected

## Components

- **RadioGroup**: Container component that manages the group state
- **RadioGroupItem**: Individual radio button items
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default selected value',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire radio group is disabled',
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
 * Interactive playground for the RadioGroup component.
 * Use the controls below to experiment with different props.
 */
export const InteractivePlayground: Story = {
  args: {
    defaultValue: 'option-1',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="playground-1" />
        <Label htmlFor="playground-1">ตัวเลือก 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="playground-2" />
        <Label htmlFor="playground-2">ตัวเลือก 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="playground-3" />
        <Label htmlFor="playground-3">ตัวเลือก 3</Label>
      </div>
    </RadioGroup>
  ),
}

/**
 * All radio group patterns and use cases in one view.
 * This story demonstrates various radio group configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Vertical Layout */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Vertical Layout</h3>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">ค่าเริ่มต้น</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">สบาย</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">กะทัดรัด</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Horizontal Layout */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Horizontal Layout</h3>
        <RadioGroup defaultValue="option-one" className="flex gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="h1" />
            <Label htmlFor="h1">ตัวเลือกที่หนึ่ง</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="h2" />
            <Label htmlFor="h2">ตัวเลือกที่สอง</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="h3" />
            <Label htmlFor="h3">ตัวเลือกที่สาม</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Disabled State */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Disabled State</h3>
        <RadioGroup defaultValue="option-one" disabled>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="d1" />
            <Label htmlFor="d1">ตัวเลือกที่หนึ่ง</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="d2" />
            <Label htmlFor="d2">ตัวเลือกที่สอง</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="d3" />
            <Label htmlFor="d3">ตัวเลือกที่สาม</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of RadioGroup usage with vertical and horizontal layouts, and disabled states.',
      },
    },
  },
}
