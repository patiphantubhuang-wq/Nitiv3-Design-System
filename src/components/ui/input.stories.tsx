import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'
import { Label } from './label'
import { Search, Mail, Lock, User } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Input fields allow users to enter text or data. They are the primary way users interact with forms.

## Usage

Input fields should be used for:
- Text entry (e.g., names, descriptions)
- Email and password fields
- Search functionality
- Numeric input
- Date and time selection

## Types

Common input types include:
- **text**: Standard text input
- **email**: Email address input with validation
- **password**: Password input with masked characters
- **number**: Numeric input
- **date**: Date picker
- **time**: Time picker
- **search**: Search input

## States

- **default**: Normal input state
- **disabled**: Disabled state (non-interactive)
- **error**: Error state (typically styled with validation)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'date', 'time', 'search'],
      description: 'The type of input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when input is empty',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
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
 * Interactive playground for the Input component.
 * Use the controls below to experiment with different types and props.
 */
export const InteractivePlayground: Story = {
  args: {
    type: 'text',
    placeholder: 'กรุณากรอกข้อความ...',
    disabled: false,
  },
  render: (args) => (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="playground-input">ช่องกรอกข้อมูล</Label>
      <Input id="playground-input" {...args} />
    </div>
  ),
}

/**
 * All input types, states, and patterns in one view.
 * This story demonstrates all available input types and common usage patterns.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Input Types */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Input Types</h3>
        <div className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="text-input">ข้อความ</Label>
            <Input id="text-input" type="text" placeholder="กรุณากรอกข้อความ" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-input">อีเมล</Label>
            <Input id="email-input" type="email" placeholder="อีเมล@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password-input">รหัสผ่าน</Label>
            <Input id="password-input" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number-input">ตัวเลข</Label>
            <Input id="number-input" type="number" placeholder="กรุณากรอกตัวเลข" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date-input">วันที่</Label>
            <Input id="date-input" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time-input">เวลา</Label>
            <Input id="time-input" type="time" />
          </div>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">States</h3>
        <div className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="normal-input">ปกติ</Label>
            <Input id="normal-input" placeholder="ช่องกรอกข้อมูลปกติ" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-input">ปิดใช้งาน</Label>
            <Input id="disabled-input" placeholder="ช่องกรอกข้อมูลที่ปิดใช้งาน" disabled />
          </div>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Icons</h3>
        <div className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="search-input">ค้นหา</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="search-input" placeholder="ค้นหา..." className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-icon-input">อีเมล</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="email-icon-input" type="email" placeholder="อีเมล@example.com" className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password-icon-input">รหัสผ่าน</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="password-icon-input" type="password" placeholder="••••••••" className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="user-icon-input">ชื่อผู้ใช้</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="user-icon-input" placeholder="กรุณากรอกชื่อผู้ใช้" className="pl-9" />
            </div>
          </div>
        </div>
      </div>

      {/* With Labels */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Form Example</h3>
        <div className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="form-name">ชื่อ</Label>
            <Input id="form-name" placeholder="ชื่อ นามสกุล" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="form-email">อีเมล</Label>
            <Input id="form-email" type="email" placeholder="อีเมล@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="form-password">รหัสผ่าน</Label>
            <Input id="form-password" type="password" placeholder="••••••••" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of all Input types, states, with icons, and common form patterns.',
      },
    },
  },
}
