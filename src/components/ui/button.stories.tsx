import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Download, Upload, Search, Settings, Mail, Send } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
}

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'sm',
    disabled: false
  },
}

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg',
    disabled: false
  },
}

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
}

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
    disabled: false
  },
}

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
        <Button variant="secondary">
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
        <Button variant="outline">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
        <Button variant="ghost">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button>
          Send
          <Send className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="secondary">
          Email
          <Mail className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download
          <Upload className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button size="icon">
        <Search className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="secondary">
        <Settings className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="outline">
        <Download className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="ghost">
        <Mail className="h-4 w-4" />
      </Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  ),
}
