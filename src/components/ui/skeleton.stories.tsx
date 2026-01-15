import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'
import { Card, CardContent, CardHeader } from './card'

const meta: Meta<typeof Skeleton> = {
  title: 'Primitives/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Skeletons are placeholder elements that show the structure of content while it's loading. They provide visual feedback and improve perceived performance.

## Usage

Skeletons should be used for:
- Loading states for content
- Placeholder animations
- Improving perceived performance
- Indicating content is being fetched

## Styling

Skeletons use Tailwind classes for sizing and styling. Common patterns include:
- Text lines: \`h-4 w-[250px]\`
- Circles: \`h-12 w-12 rounded-full\`
- Rectangles: \`h-32 w-full\`
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Skeleton component.
 * Use this to see how skeletons display with different sizes.
 */
export const InteractivePlayground: Story = {
  render: () => <Skeleton className="h-4 w-[250px]" />,
}

/**
 * All skeleton patterns and use cases in one view.
 * This story demonstrates various skeleton configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Basic Shapes */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Basic Shapes</h3>
        <div className="space-y-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>

      {/* Card Skeleton */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Card Skeleton</h3>
        <Card className="w-full max-w-md">
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
      </div>

      {/* Profile Skeleton */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Profile Skeleton</h3>
        <div className="flex items-center space-x-4 w-full max-w-md">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>

      {/* List Skeleton */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">List Skeleton</h3>
        <div className="space-y-3 w-full max-w-md">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Skeleton usage with different shapes, card layouts, profile layouts, and list patterns.',
      },
    },
  },
}
