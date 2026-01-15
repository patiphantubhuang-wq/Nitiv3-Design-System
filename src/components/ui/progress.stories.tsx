import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Progress } from './progress'
import { Button } from './button'

const meta: Meta<typeof Progress> = {
  title: 'Primitives/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Progress indicators show the completion status of a task or process. They provide visual feedback about the progress of an operation.

## Usage

Progress should be used for:
- File uploads and downloads
- Form completion indicators
- Loading states with known duration
- Task progress tracking

## Values

The progress value ranges from 0 to 100, representing the percentage of completion.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The progress value (0-100)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Progress component.
 * Use the controls below to experiment with different values.
 */
export const InteractivePlayground: Story = {
  args: {
    value: 50,
  },
  render: (args) => <Progress {...args} className="w-full max-w-md" />,
}

/**
 * All progress patterns and use cases in one view.
 * This story demonstrates various progress configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Progress Values */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Progress Values</h3>
        <div className="space-y-4 w-full max-w-md">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>0%</span>
            </div>
            <Progress value={0} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>25%</span>
            </div>
            <Progress value={25} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>50%</span>
            </div>
            <Progress value={50} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      </div>

      {/* Interactive Example */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Interactive Example</h3>
        <ProgressInteractiveDemo />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Progress values and interactive usage patterns.',
      },
    },
  },
}

function ProgressInteractiveDemo() {
  const [progress, setProgress] = React.useState(13)

  return (
    <div className="space-y-4 w-full max-w-md">
      <Progress value={progress} />
      <div className="flex gap-2">
        <Button
          onClick={() => setProgress(Math.max(0, progress - 10))}
          variant="outline"
          size="sm"
        >
          -10%
        </Button>
        <Button
          onClick={() => setProgress(Math.min(100, progress + 10))}
          variant="outline"
          size="sm"
        >
          +10%
        </Button>
        <Button onClick={() => setProgress(0)} variant="outline" size="sm">
          รีเซ็ต
        </Button>
        <Button onClick={() => setProgress(100)} variant="outline" size="sm">
          เสร็จสมบูรณ์
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">ความคืบหน้า: {progress}%</p>
    </div>
  )
}
