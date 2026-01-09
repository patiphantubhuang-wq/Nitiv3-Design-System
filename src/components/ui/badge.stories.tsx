import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'
import { CheckCircle2, X, AlertCircle, Info } from 'lucide-react'

const meta: Meta<typeof Badge> = {
  title: 'Components/UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Badge',
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Badge',
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge>
        <CheckCircle2 className="mr-1 h-3 w-3" />
        Success
      </Badge>
      <Badge variant="secondary">
        <Info className="mr-1 h-3 w-3" />
        Info
      </Badge>
      <Badge variant="destructive">
        <AlertCircle className="mr-1 h-3 w-3" />
        Error
      </Badge>
      <Badge variant="outline">
        <X className="mr-1 h-3 w-3" />
        Close
      </Badge>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span>Notifications</span>
        <Badge>5</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Messages</span>
        <Badge variant="secondary">12</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Errors</span>
        <Badge variant="destructive">3</Badge>
      </div>
    </div>
  ),
}
