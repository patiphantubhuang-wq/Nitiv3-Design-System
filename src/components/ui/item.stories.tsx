import type { Meta, StoryObj } from '@storybook/react'
import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemSeparator,
} from './item'
import { Button } from './button'
import { User, Settings, Mail } from 'lucide-react'

const meta: Meta<typeof Item> = {
  title: 'Components/UI/Item',
  component: Item,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'muted'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ItemGroup>
      <Item>
        <ItemMedia>
          <User className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm">
            View
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia>
          <Settings className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Settings</ItemTitle>
          <ItemDescription>Manage your preferences</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm">
            Edit
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
}

export const WithIconVariant: Story = {
  render: () => (
    <ItemGroup>
      <Item>
        <ItemMedia variant="icon">
          <User className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Profile</ItemTitle>
          <ItemDescription>View your profile</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="icon">
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Messages</ItemTitle>
          <ItemDescription>Check your messages</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}

export const Outline: Story = {
  render: () => (
    <ItemGroup>
      <Item variant="outline">
        <ItemMedia>
          <User className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <Settings className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Settings</ItemTitle>
          <ItemDescription>Manage your preferences</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}

export const Small: Story = {
  render: () => (
    <ItemGroup>
      <Item size="sm">
        <ItemMedia>
          <User className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item size="sm">
        <ItemMedia>
          <Settings className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Settings</ItemTitle>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}
