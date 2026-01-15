import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './collapsible'
import { Button } from './button'
import { ChevronDown } from 'lucide-react'

const meta: Meta<typeof Collapsible> = {
  title: 'Overlay & Containers/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Collapsible components allow users to show and hide content. They provide a simple way to toggle content visibility.

## Usage

Collapsible should be used for:
- Expanding and collapsing sections
- Hiding secondary content
- Creating expandable lists or details
- Progressive disclosure of information

## Components

- **Collapsible**: Container component (manages open/closed state)
- **CollapsibleTrigger**: Button that toggles the collapsible
- **CollapsibleContent**: Content that expands and collapses
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Collapsible component.
 * Click the button to expand and collapse the content.
 */
export const InteractivePlayground: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @peduarte ให้ดาว 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}

/**
 * All collapsible patterns and use cases in one view.
 * This story demonstrates various collapsible configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Default Example */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Default Example</h3>
        <CollapsibleExample />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Collapsible usage with interactive toggle controls.',
      },
    },
  },
}

function CollapsibleExample() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
