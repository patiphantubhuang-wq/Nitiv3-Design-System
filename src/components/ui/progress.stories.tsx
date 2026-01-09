import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './progress'
import { useState } from 'react'
import { Button } from './button'

const meta: Meta<typeof Progress> = {
  title: 'Components/UI/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Progress value={33} className="w-full max-w-md" />,
}

export const Values: Story = {
  render: () => (
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
  ),
}

export const Interactive: Story = {
  render: () => {
    const [progress, setProgress] = useState(13)

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
            Reset
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">Progress: {progress}%</p>
      </div>
    )
  },
}
