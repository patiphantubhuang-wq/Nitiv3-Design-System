import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './switch'
import { Label } from './label'

const meta: Meta<typeof Switch> = {
  title: 'Primitives/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Switches are used to toggle between two states, typically on/off. They provide immediate visual feedback and are ideal for settings and preferences.

## Usage

Switches should be used for:
- Toggle settings (e.g., notifications, preferences)
- Feature enable/disable
- Boolean toggles in forms
- Settings panels

## States

- **unchecked**: Default off state
- **checked**: On state
- **disabled**: Non-interactive state
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked (controlled)',
      table: {
        type: { summary: 'boolean' },
      },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the switch is checked by default (uncontrolled)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
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
 * Interactive playground for the Switch component.
 * Use the controls below to experiment with different states.
 */
export const InteractivePlayground: Story = {
  args: {
    defaultChecked: false,
    disabled: false,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="playground-switch" {...args} />
      <Label htmlFor="playground-switch">ป้ายกำกับสวิตช์</Label>
    </div>
  ),
}

/**
 * All switch states and patterns in one view.
 * This story demonstrates common switch usage patterns.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Basic States */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">States</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Switch id="unchecked" />
            <Label htmlFor="unchecked">ปิด (Off)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="checked" defaultChecked />
            <Label htmlFor="checked">เปิด (On)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled" disabled />
            <Label htmlFor="disabled">ปิดใช้งาน</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled-checked" defaultChecked disabled />
            <Label htmlFor="disabled-checked">ปิดใช้งาน (เปิด)</Label>
          </div>
        </div>
      </div>

      {/* Settings Pattern */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Settings Pattern</h3>
        <div className="space-y-4 w-full max-w-sm">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">การแจ้งเตือนทางอีเมล</Label>
            <Switch id="notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms">การแจ้งเตือนทาง SMS</Label>
            <Switch id="sms" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push">การแจ้งเตือนแบบ Push</Label>
            <Switch id="push" />
          </div>
        </div>
      </div>

      {/* Common Use Cases */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Common Use Cases</h3>
        <div className="space-y-4 w-full max-w-sm">
          <div className="flex items-center justify-between">
            <Label htmlFor="airplane">โหมดเครื่องบิน</Label>
            <Switch id="airplane" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="wifi">Wi-Fi</Label>
            <Switch id="wifi" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="bluetooth">Bluetooth</Label>
            <Switch id="bluetooth" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Switch states, settings patterns, and common usage patterns.',
      },
    },
  },
}
