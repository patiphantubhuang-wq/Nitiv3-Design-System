import type { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'
import { Label } from './label'
import { User, Mail, Building, Globe } from 'lucide-react'

const meta: Meta<typeof Select> = {
  title: 'Components/UI/Select',
  component: Select,
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
      <Label htmlFor="email">Email</Label>
      <Select>
        <SelectTrigger id="email">
          <SelectValue placeholder="Select an email" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="john@example.com">john@example.com</SelectItem>
          <SelectItem value="jane@example.com">jane@example.com</SelectItem>
          <SelectItem value="bob@example.com">bob@example.com</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="fruit">Fruit</Label>
        <Select>
          <SelectTrigger id="fruit">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2 w-full max-w-sm">
      <Label htmlFor="disabled">Disabled Select</Label>
      <Select disabled>
        <SelectTrigger id="disabled">
          <SelectValue placeholder="This is disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="user-select">User</Label>
        <Select>
          <SelectTrigger id="user-select" className="w-full">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Select a user" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="john">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>John Doe</span>
              </div>
            </SelectItem>
            <SelectItem value="jane">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Jane Smith</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-select">Email</Label>
        <Select>
          <SelectTrigger id="email-select" className="w-full">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Select an email" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="john@example.com">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>john@example.com</span>
              </div>
            </SelectItem>
            <SelectItem value="jane@example.com">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>jane@example.com</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const LongList: Story = {
  render: () => (
    <div className="space-y-2 w-full max-w-sm">
      <Label htmlFor="country">Country</Label>
      <Select>
        <SelectTrigger id="country">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="thailand">Thailand</SelectItem>
          <SelectItem value="usa">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="japan">Japan</SelectItem>
          <SelectItem value="korea">South Korea</SelectItem>
          <SelectItem value="china">China</SelectItem>
          <SelectItem value="singapore">Singapore</SelectItem>
          <SelectItem value="malaysia">Malaysia</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}
