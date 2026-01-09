import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'
import { Label } from './label'

const meta: Meta<typeof Textarea> = {
  title: 'Components/UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="space-y-2 w-full max-w-sm">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  ),
}

export const WithPlaceholder: Story = {
  render: () => (
    <Textarea
      placeholder="Type your message here. This is a longer placeholder text."
      className="w-full max-w-md"
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2 w-full max-w-sm">
      <Label htmlFor="disabled">Disabled Textarea</Label>
      <Textarea
        id="disabled"
        placeholder="This textarea is disabled"
        disabled
      />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label>Small (min-h-[60px])</Label>
        <Textarea className="min-h-[60px]" placeholder="Small textarea" />
      </div>
      <div className="space-y-2">
        <Label>Default (min-h-[80px])</Label>
        <Textarea placeholder="Default textarea" />
      </div>
      <div className="space-y-2">
        <Label>Large (min-h-[120px])</Label>
        <Textarea className="min-h-[120px]" placeholder="Large textarea" />
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="feedback">Feedback</Label>
        <Textarea
          id="feedback"
          placeholder="Tell us what you think..."
          rows={4}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter a detailed description..."
          rows={6}
        />
      </div>
    </div>
  ),
}
