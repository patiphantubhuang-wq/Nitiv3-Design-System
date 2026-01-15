import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const meta = {
  title: 'Primitives/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Avatars are used to display user profile pictures or initials. They provide a visual representation of users or entities.

## Usage

Avatars should be used for:
- User profile pictures
- User identification in lists and cards
- Team member displays
- Status indicators (when combined with badges)

## Components

- **Avatar**: Container component
- **AvatarImage**: The image source (falls back to AvatarFallback if image fails to load)
- **AvatarFallback**: Fallback content (typically initials) shown when image is unavailable

## Sizes

- **sm**: Small size (h-8 w-8, text-xs)
- **md**: Medium size (h-10 w-10, default)
- **lg**: Large size (h-16 w-16, text-lg)
- **xl**: Extra large size (h-24 w-24, text-2xl)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'group'],
      description: 'Display mode: single avatar or avatar group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The size of the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    type: {
      control: 'select',
      options: ['image', 'fallback', 'both'],
      description: 'Display type: image only, fallback only, or both (image with fallback)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'both' },
      },
    },
    imageUrl: {
      control: 'text',
      description: 'Image URL for the avatar',
      table: {
        type: { summary: 'string' },
      },
    },
    fallbackText: {
      control: 'text',
      description: 'Fallback text (typically initials)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'JD' },
      },
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image',
      table: {
        type: { summary: 'string' },
      },
    },
  } as any,
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// Size configurations
const sizeConfig = {
  sm: {
    avatar: 'h-8 w-8',
    fallback: 'text-xs',
  },
  md: {
    avatar: 'h-10 w-10',
    fallback: 'text-sm',
  },
  lg: {
    avatar: 'h-16 w-16',
    fallback: 'text-lg',
  },
  xl: {
    avatar: 'h-24 w-24',
    fallback: 'text-2xl',
  },
}

/**
 * Interactive playground for the Avatar component.
 * Use the controls below to experiment with different sizes, images, fallbacks, and group display.
 */
export const InteractivePlayground: Story = {
  args: {
    mode: 'single',
    size: 'md',
    type: 'both',
    imageUrl: 'https://github.com/shadcn.png',
    fallbackText: 'CN',
    alt: '@shadcn',
  } as any,
  render: (args: any) => {
    const sizeClasses = sizeConfig[args.size as keyof typeof sizeConfig]
    const hasImage = args.type === 'image' || args.type === 'both'
    const hasFallback = args.type === 'fallback' || args.type === 'both'

    // Single Avatar Mode
    if (args.mode === 'single') {
      // For fallback-only mode, we need to ensure AvatarImage is not rendered
      // Radix UI AvatarFallback works when there's no Image or Image fails to load
      if (args.type === 'fallback') {
        // Fallback only - no Image component
        return (
          <Avatar className={sizeClasses.avatar}>
            <AvatarFallback className={sizeClasses.fallback}>
              {args.fallbackText || 'JD'}
            </AvatarFallback>
          </Avatar>
        )
      }
      
      // For 'both' or 'image' mode
      return (
        <Avatar className={sizeClasses.avatar}>
          {hasImage && args.imageUrl && (
            <AvatarImage src={args.imageUrl as string} alt={args.alt as string || ''} />
          )}
          {hasFallback && (
            <AvatarFallback className={sizeClasses.fallback}>
              {args.fallbackText || 'JD'}
            </AvatarFallback>
          )}
        </Avatar>
      )
    }

    // Avatar Group Mode
    return (
      <div className="flex -space-x-2">
        <Avatar className={sizeClasses.avatar}>
          {hasImage && args.imageUrl && (
            <AvatarImage src={args.imageUrl as string} alt={args.alt as string || ''} />
          )}
          {hasFallback && (
            <AvatarFallback className={sizeClasses.fallback}>
              {args.fallbackText || 'JD'}
            </AvatarFallback>
          )}
        </Avatar>
        <Avatar className={sizeClasses.avatar}>
          <AvatarFallback className={sizeClasses.fallback}>AB</AvatarFallback>
        </Avatar>
        <Avatar className={sizeClasses.avatar}>
          <AvatarFallback className={sizeClasses.fallback}>CD</AvatarFallback>
        </Avatar>
        <Avatar className={sizeClasses.avatar}>
          <AvatarFallback className={sizeClasses.fallback}>+5</AvatarFallback>
        </Avatar>
      </div>
    )
  },
}

/**
 * All avatar patterns, sizes, and use cases in one view.
 * This story demonstrates various avatar configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Basic Usage */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Basic Usage</h3>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://invalid-url.com/image.png" alt="@user" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Sizes</h3>
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-lg">LG</AvatarFallback>
          </Avatar>
          <Avatar className="h-24 w-24">
            <AvatarFallback className="text-2xl">XL</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* With Images */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Images</h3>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/tailwindlabs.png" alt="@tailwind" />
            <AvatarFallback>TW</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Fallback Only */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Fallback Only</h3>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Avatar Groups */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Avatar Groups</h3>
        <div className="flex -space-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>+5</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Avatar usage with different sizes, images, fallbacks, and grouping patterns.',
      },
    },
  },
}