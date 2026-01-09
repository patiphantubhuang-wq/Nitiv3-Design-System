import type { Meta, StoryObj } from '@storybook/react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
} from './input-group'
import { Search, Mail, User, Eye, EyeOff } from 'lucide-react'

const meta: Meta<typeof InputGroup> = {
  title: 'Components/UI/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const WithIconStart: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <Search className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <Mail className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="email@example.com" />
      </InputGroup>
    </div>
  ),
}

export const WithIconEnd: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <InputGroup>
        <InputGroupInput placeholder="Enter password" type="password" />
        <InputGroupAddon align="inline-end">
          <Eye className="h-4 w-4" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const WithButton: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <Search className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    </div>
  ),
}

export const BothSides: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <User className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Username" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <Search className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}
