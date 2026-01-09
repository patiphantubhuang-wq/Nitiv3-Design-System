import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'
import { Label } from './label'
import { Search, Mail, Lock, User } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'Components/UI/Input',
  component: Input,
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
      <Input id="email" type="email" placeholder="email@example.com" />
    </div>
  ),
}

export const WithPlaceholder: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <Input placeholder="Enter your name" />
      <Input placeholder="Enter your email" type="email" />
      <Input placeholder="Enter password" type="password" />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2 w-full max-w-sm">
      <Label htmlFor="disabled">Disabled Input</Label>
      <Input id="disabled" placeholder="This input is disabled" disabled />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="••••••••" />
      </div>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="search">Search</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="search" placeholder="Search..." className="pl-9" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-icon">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="email-icon" type="email" placeholder="email@example.com" className="pl-9" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-icon">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="password-icon" type="password" placeholder="••••••••" className="pl-9" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="user-icon">Username</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="user-icon" placeholder="Enter username" className="pl-9" />
        </div>
      </div>
    </div>
  ),
}

export const Types: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="date" />
      <Input type="time" />
    </div>
  ),
}
