import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group'
import { Button } from './button'
import { Download, Upload, Search } from 'lucide-react'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/UI/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline">
          <Download className="h-4 w-4" />
          Download
        </Button>
        <Button variant="outline">
          <Upload className="h-4 w-4" />
          Upload
        </Button>
        <Button variant="outline">
          <Search className="h-4 w-4" />
          Search
        </Button>
      </ButtonGroup>
    </div>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline">First</Button>
        <ButtonGroupSeparator />
        <Button variant="outline">Second</Button>
        <ButtonGroupSeparator />
        <Button variant="outline">Third</Button>
      </ButtonGroup>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <ButtonGroupText>Sort by:</ButtonGroupText>
        <Button variant="outline">Name</Button>
        <Button variant="outline">Date</Button>
        <Button variant="outline">Size</Button>
      </ButtonGroup>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Outline (recommended for button groups)</p>
        <ButtonGroup>
          <Button variant="outline">First</Button>
          <Button variant="outline">Second</Button>
          <Button variant="outline">Third</Button>
        </ButtonGroup>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Default (primary color)</p>
        <ButtonGroup>
          <Button variant="default">First</Button>
          <Button variant="default">Second</Button>
          <Button variant="default">Third</Button>
        </ButtonGroup>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Mixed variants (not recommended)</p>
        <ButtonGroup>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
}
