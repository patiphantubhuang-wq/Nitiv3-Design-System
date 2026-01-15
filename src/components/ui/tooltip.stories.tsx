import type { Meta, StoryObj } from '@storybook/react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip'
import { Button } from './button'
import { Info, HelpCircle, Settings } from 'lucide-react'

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback & Status/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Tooltips provide additional information when users hover over or focus on an element. They are helpful for explaining functionality or providing context.

## Usage

Tooltips should be used for:
- Explaining icon-only buttons
- Providing additional context
- Help text for form fields
- Accessibility enhancements

## Components

- **TooltipProvider**: Wrapper component (required at root level)
- **Tooltip**: Container component
- **TooltipTrigger**: Element that triggers the tooltip
- **TooltipContent**: The tooltip content
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Tooltip component.
 * Hover over the button to see the tooltip.
 */
export const InteractivePlayground: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">วางเมาส์เหนือ</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>นี่คือ tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

/**
 * All tooltip patterns and use cases in one view.
 * This story demonstrates various tooltip configurations.
 */
export const Examples: Story = {
  render: () => (
    <TooltipProvider>
      <div className="space-y-8">
        {/* With Button */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">With Button</h3>
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">วางเมาส์เหนือ</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>เพิ่มไปที่ไลบรารี</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* With Icon Buttons */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">With Icon Buttons</h3>
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More information</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>คลิกเพื่อขอความช่วยเหลือ</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Multiple Tooltips */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Multiple Tooltips</h3>
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Open settings</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <Info className="mr-2 h-4 w-4" />
                  ข้อมูล
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>ดูข้อมูล</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Tooltip usage with buttons, icon buttons, and multiple tooltips.',
      },
    },
  },
}
