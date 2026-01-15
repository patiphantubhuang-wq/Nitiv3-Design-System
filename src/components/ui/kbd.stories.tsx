import type { Meta, StoryObj } from '@storybook/react'
import { Kbd, KbdGroup } from './kbd'

const meta: Meta<typeof Kbd> = {
  title: 'Primitives/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Kbd (keyboard) components are used to display keyboard keys and shortcuts. They help users discover and remember keyboard shortcuts.

## Usage

Kbd should be used for:
- Displaying keyboard shortcuts
- Showing key combinations
- Keyboard navigation hints
- Command palette shortcuts

## Components

- **Kbd**: Individual keyboard key
- **KbdGroup**: Container for key combinations (e.g., ⌘ + K)
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Kbd component.
 * Use this to see how keyboard keys are displayed.
 */
export const InteractivePlayground: Story = {
  render: () => <Kbd>⌘</Kbd>,
}

/**
 * All keyboard key patterns and use cases in one view.
 * This story demonstrates various keyboard key configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Single Keys */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Single Keys</h3>
        <div className="flex flex-wrap gap-2">
          <Kbd>⌘</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>⌃</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Delete</Kbd>
        </div>
      </div>

      {/* Key Combinations */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Key Combinations</h3>
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
          <KbdGroup>
            <Kbd>⌃</Kbd>
            <span>+</span>
            <Kbd>V</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <span>+</span>
            <Kbd>Z</Kbd>
          </KbdGroup>
        </div>
      </div>

      {/* In Text */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">In Text</h3>
        <div className="flex flex-col gap-2 text-sm w-full max-w-md">
          <p>
            กด <Kbd>⌘</Kbd> + <Kbd>K</Kbd> เพื่อเปิด command palette
          </p>
          <p>
            ใช้ <Kbd>⌘</Kbd> + <Kbd>⇧</Kbd> + <Kbd>P</Kbd> เพื่อเปิดการตั้งค่า
          </p>
          <p>
            กด <Kbd>Esc</Kbd> เพื่อปิด dialog
          </p>
          <p>
            ใช้ <Kbd>⌃</Kbd> + <Kbd>C</Kbd> เพื่อคัดลอก
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Kbd usage with single keys, key combinations, and inline text patterns.',
      },
    },
  },
}
