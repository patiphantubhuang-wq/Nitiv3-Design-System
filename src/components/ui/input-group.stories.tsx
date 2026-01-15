import type { Meta, StoryObj } from '@storybook/react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
} from './input-group'
import { Search, Mail, User, Eye } from 'lucide-react'

const meta: Meta<typeof InputGroup> = {
  title: 'Form Components/Input Group',
  component: InputGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Input groups combine inputs with addons like icons, buttons, or text. They provide a cohesive way to enhance input fields with additional elements.

## Usage

Input groups should be used for:
- Search inputs with icons
- Inputs with action buttons
- Inputs with prefixes or suffixes
- Enhanced form inputs

## Components

- **InputGroup**: Container component
- **InputGroupInput**: The input field
- **InputGroupAddon**: Addon container (icons, buttons, text)
- **InputGroupButton**: Button within an addon
- **InputGroupText**: Text within an addon
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the InputGroup component.
 * Use this to see how input groups display with different configurations.
 */
export const InteractivePlayground: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <Search className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="ค้นหา..." />
      </InputGroup>
    </div>
  ),
}

/**
 * All input group patterns and use cases in one view.
 * This story demonstrates various input group configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* With Icon Start */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Icon (Start)</h3>
        <div className="space-y-4 w-full max-w-sm">
          <InputGroup>
            <InputGroupAddon>
              <Search className="h-4 w-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="ค้นหา..." />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <Mail className="h-4 w-4" />
            </InputGroupAddon>
            <InputGroupInput type="email" placeholder="อีเมล@example.com" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <User className="h-4 w-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="ชื่อผู้ใช้" />
          </InputGroup>
        </div>
      </div>

      {/* With Icon End */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Icon (End)</h3>
        <div className="space-y-4 w-full max-w-sm">
          <InputGroup>
            <InputGroupInput placeholder="กรุณากรอกรหัสผ่าน" type="password" />
            <InputGroupAddon align="inline-end">
              <Eye className="h-4 w-4" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      {/* With Button */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Button</h3>
        <div className="space-y-4 w-full max-w-sm">
          <InputGroup>
            <InputGroupInput placeholder="ค้นหา..." />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>
                <Search className="h-4 w-4" />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      {/* With Text */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Text</h3>
        <div className="space-y-4 w-full max-w-sm">
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="example.com" />
          </InputGroup>
        </div>
      </div>

      {/* Both Sides */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Both Sides</h3>
        <div className="space-y-4 w-full max-w-sm">
          <InputGroup>
            <InputGroupAddon>
              <User className="h-4 w-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="ชื่อผู้ใช้" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>
                <Search className="h-4 w-4" />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of InputGroup usage with icons, buttons, text addons, and combinations on both sides.',
      },
    },
  },
}
