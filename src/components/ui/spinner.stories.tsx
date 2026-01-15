import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './spinner'
import { Button } from './button'

const meta: Meta<typeof Spinner> = {
  title: 'Feedback & Status/Loading State',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Spinners indicate that content is loading. They provide visual feedback during asynchronous operations.

## Usage

Spinners should be used for:
- Loading states
- Async operations
- Data fetching indicators
- Button loading states

## Sizing

Spinners can be sized using Tailwind classes:
- Small: \`size-4\` or \`h-4 w-4\`
- Default: \`size-4\` (default)
- Large: \`size-8\` or \`h-8 w-8\`

## Colors

Spinners inherit text color and can be styled with Tailwind color utilities.
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Spinner component.
 * Use this to see how spinners display with different sizes and colors.
 */
export const InteractivePlayground: Story = {
  render: () => <Spinner />,
}

/**
 * All spinner patterns and use cases in one view.
 * This story demonstrates various spinner configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Sizes</h3>
        <div className="flex items-center gap-4">
          <Spinner className="size-4" />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
          <Spinner className="size-12" />
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Colors</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Spinner className="text-primary" />
            <span className="text-sm text-muted-foreground">Primary</span>
          </div>
          <div className="flex items-center gap-4">
            <Spinner className="text-secondary" />
            <span className="text-sm text-muted-foreground">Secondary</span>
          </div>
          <div className="flex items-center gap-4">
            <Spinner className="text-destructive" />
            <span className="text-sm text-muted-foreground">Destructive</span>
          </div>
          <div className="flex items-center gap-4">
            <Spinner className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Muted</span>
          </div>
        </div>
      </div>

      {/* In Buttons */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">In Buttons</h3>
        <div className="flex flex-col gap-4">
          <Button disabled>
            <Spinner className="mr-2 size-4" />
            กำลังโหลด...
          </Button>
          <Button variant="outline" disabled>
            <Spinner className="mr-2 size-4" />
            กำลังดำเนินการ
          </Button>
          <Button variant="secondary" disabled>
            <Spinner className="mr-2 size-4" />
            กำลังบันทึก...
          </Button>
        </div>
      </div>

      {/* Standalone */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Standalone</h3>
        <div className="flex items-center gap-4">
          <Spinner />
          <span className="text-sm text-muted-foreground">กำลังโหลดเนื้อหา...</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Spinner usage with different sizes, colors, and common patterns like button loading states.',
      },
    },
  },
}
