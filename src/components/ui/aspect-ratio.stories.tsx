import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './aspect-ratio'

const meta: Meta<typeof AspectRatio> = {
  title: 'Primitives/Aspect Ratio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
AspectRatio maintains consistent proportions for content like images and videos. It ensures content displays with the correct aspect ratio regardless of container size.

## Usage

AspectRatio should be used for:
- Image galleries
- Video players
- Responsive media
- Maintaining consistent proportions

## Common Ratios

- **16:9**: Video standard (default for videos)
- **4:3**: Classic image format
- **1:1**: Square (profile pictures, thumbnails)
- **3:4**: Portrait orientation

## Props

- **ratio**: Aspect ratio value (width / height), e.g., \`16/9\` for 16:9
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'number',
      description: 'The aspect ratio (width / height)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '16/9' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the AspectRatio component.
 * Use the controls below to experiment with different ratios.
 */
export const InteractivePlayground: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args} className="bg-muted">
        <div className="flex h-full w-full items-center justify-center rounded-md border bg-background">
          <span className="text-sm text-muted-foreground">
            {args.ratio === 16/9 ? '16:9' : args.ratio === 4/3 ? '4:3' : args.ratio === 1 ? '1:1' : `${args.ratio}`}
          </span>
        </div>
      </AspectRatio>
    </div>
  ),
}

/**
 * All aspect ratio patterns and use cases in one view.
 * This story demonstrates various aspect ratio configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Video Ratio (16:9) */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Video Ratio (16:9)</h3>
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <div className="flex h-full w-full items-center justify-center rounded-md border bg-background">
              <div className="text-center">
                <div className="mb-2 text-4xl">▶</div>
                <span className="text-sm text-muted-foreground">เครื่องเล่นวิดีโอ</span>
              </div>
            </div>
          </AspectRatio>
        </div>
      </div>

      {/* Square (1:1) */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Square (1:1)</h3>
        <div className="w-[300px]">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <div className="flex h-full w-full items-center justify-center rounded-md border bg-background">
              <span className="text-sm text-muted-foreground">1:1 (Square)</span>
            </div>
          </AspectRatio>
        </div>
      </div>

      {/* Image Ratio (4:3) */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Image Ratio (4:3)</h3>
        <div className="w-[400px]">
          <AspectRatio ratio={4 / 3} className="bg-muted">
            <div className="flex h-full w-full items-center justify-center rounded-md border bg-background">
              <span className="text-sm text-muted-foreground">4:3 Image</span>
            </div>
          </AspectRatio>
        </div>
      </div>

      {/* Portrait (3:4) */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Portrait (3:4)</h3>
        <div className="w-[200px]">
          <AspectRatio ratio={3 / 4} className="bg-muted">
            <div className="flex h-full w-full items-center justify-center rounded-md border bg-background">
              <span className="text-sm text-muted-foreground">3:4 (Portrait)</span>
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of AspectRatio usage with common ratios for videos, images, squares, and portrait orientations.',
      },
    },
  },
}
