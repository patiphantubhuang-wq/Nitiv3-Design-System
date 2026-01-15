import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './slider'

const meta: Meta<typeof Slider> = {
  title: 'Primitives/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Sliders allow users to select a value or range of values by dragging a handle along a track. They are ideal for numeric inputs within a defined range.

## Usage

Sliders should be used for:
- Numeric range selection (e.g., price, volume, size)
- Settings with continuous values
- Progress or duration selection
- Filter ranges

## Types

- **Single value**: Select one value from a range
- **Range**: Select a range of values with two handles

## Props

- **defaultValue**: Initial value(s) (array for range)
- **min**: Minimum value (default: 0)
- **max**: Maximum value (default: 100)
- **step**: Step increment (default: 1)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'object',
      description: 'The default value(s) of the slider',
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[50]' },
      },
    },
    min: {
      control: 'number',
      description: 'The minimum value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: 'The maximum value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    step: {
      control: 'number',
      description: 'The step increment',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
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
 * Interactive playground for the Slider component.
 * Use the controls below to experiment with different props.
 */
export const InteractivePlayground: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
}

/**
 * All slider patterns and use cases in one view.
 * This story demonstrates various slider configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Single Value */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Single Value</h3>
        <div className="w-[300px]">
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </div>

      {/* Range */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Range</h3>
        <div className="w-[300px]">
          <Slider defaultValue={[20, 80]} max={100} step={1} />
        </div>
      </div>

      {/* With Steps */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Steps</h3>
        <div className="w-[300px] space-y-4">
          <div>
            <Slider defaultValue={[50]} max={100} step={10} />
            <div className="text-sm text-muted-foreground mt-2">Step: 10</div>
          </div>
          <div>
            <Slider defaultValue={[25]} max={100} step={25} />
            <div className="text-sm text-muted-foreground mt-2">Step: 25</div>
          </div>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">States</h3>
        <div className="w-[300px] space-y-4">
          <div>
            <Slider defaultValue={[50]} max={100} step={1} />
            <div className="text-sm text-muted-foreground mt-2">ปกติ</div>
          </div>
          <div>
            <Slider defaultValue={[50]} max={100} step={1} disabled />
            <div className="text-sm text-muted-foreground mt-2">ปิดใช้งาน</div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Slider usage with single values, ranges, steps, and states.',
      },
    },
  },
}
