import type { Meta, StoryObj } from '@storybook/react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from './input-otp'

const meta: Meta<typeof InputOTP> = {
  title: 'Form Components/Input OTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Input OTP (One-Time Password) components provide a secure way to input verification codes. They display multiple input fields for entering codes digit by digit.

## Usage

Input OTP should be used for:
- Two-factor authentication (2FA)
- Verification codes
- OTP codes from SMS or email
- Security token input

## Components

- **InputOTP**: Container component
- **InputOTPGroup**: Group of input slots
- **InputOTPSlot**: Individual input slot
- **InputOTPSeparator**: Visual separator between groups

## Common Lengths

- **4 digits**: Common for PIN codes
- **6 digits**: Standard for OTP codes
- **8 digits**: Extended verification codes
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the InputOTP component.
 * Try typing numbers to see how the OTP input works.
 */
export const InteractivePlayground: Story = {
  args: {
    maxLength: 6,
  },
  render: (args) => (
    <InputOTP {...args}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

/**
 * All input OTP patterns and use cases in one view.
 * This story demonstrates various input OTP configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* 6 Digits (Default) */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">6 Digits (Default)</h3>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* 4 Digits */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">4 Digits</h3>
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* With Separator */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Separator</h3>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of InputOTP usage with different lengths (4 and 6 digits) and with separators.',
      },
    },
  },
}
