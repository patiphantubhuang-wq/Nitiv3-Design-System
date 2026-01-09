import type { Meta, StoryObj } from '@storybook/react'
import { Kbd, KbdGroup } from './kbd'

const meta: Meta<typeof Kbd> = {
  title: 'Components/UI/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Kbd>⌘</Kbd>,
}

export const SingleKey: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌃</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>Space</Kbd>
    </div>
  ),
}

export const KeyCombinations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>⇧</Kbd>
        <span>+</span>
        <Kbd>P</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌃</Kbd>
        <span>+</span>
        <Kbd>C</Kbd>
      </KbdGroup>
    </div>
  ),
}

export const InText: Story = {
  render: () => (
    <div className="flex flex-col gap-2 text-sm">
      <p>
        Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open command palette
      </p>
      <p>
        Use <Kbd>⌘</Kbd> + <Kbd>⇧</Kbd> + <Kbd>P</Kbd> to open settings
      </p>
      <p>
        Press <Kbd>Esc</Kbd> to close
      </p>
    </div>
  ),
}
