import type { Meta, StoryObj } from '@storybook/react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './hover-card'
import { Button } from './button'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const meta: Meta<typeof HoverCard> = {
  title: 'Feedback & Status/Hover Card',
  component: HoverCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Hover cards display additional information when users hover over an element. They provide rich content previews without navigating away.

## Usage

Hover cards should be used for:
- User profile previews
- Content previews
- Additional context on hover
- Rich tooltips with structured content

## Components

- **HoverCard**: Container component
- **HoverCardTrigger**: Element that triggers the hover card
- **HoverCardContent**: Content displayed in the hover card
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the HoverCard component.
 * Hover over the button to see the hover card.
 */
export const InteractivePlayground: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

/**
 * All hover card patterns and use cases in one view.
 * This story demonstrates various hover card configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Default */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Default</h3>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* With Avatar */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Avatar</h3>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@shadcn</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@shadcn</h4>
                <p className="text-sm">
                  คอมโพเนนต์ที่นำกลับมาใช้ใหม่ได้ สร้างด้วย Radix UI และ Tailwind CSS
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    เข้าร่วมในเดือนมกราคม 2023
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of HoverCard usage with default content and avatars.',
      },
    },
  },
}
