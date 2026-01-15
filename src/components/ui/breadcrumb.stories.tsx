import type { Meta, StoryObj } from '@storybook/react'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './breadcrumb'
import { Home, FileText, Settings } from 'lucide-react'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Breadcrumbs provide navigation context by showing the user's current location in a hierarchy. They help users understand where they are and navigate back.

## Usage

Breadcrumbs should be used for:
- Hierarchical navigation
- Showing current page location
- Providing navigation shortcuts
- Large applications with deep navigation

## Components

- **Breadcrumb**: Container component
- **BreadcrumbList**: List container
- **BreadcrumbItem**: Individual breadcrumb item
- **BreadcrumbLink**: Clickable link item
- **BreadcrumbPage**: Current page (non-clickable)
- **BreadcrumbSeparator**: Separator between items
- **BreadcrumbEllipsis**: Ellipsis for truncated paths
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Breadcrumb component.
 * Use this to see how breadcrumbs display navigation paths.
 */
export const InteractivePlayground: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">หน้าแรก</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

/**
 * All breadcrumb patterns and use cases in one view.
 * This story demonstrates various breadcrumb configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Default */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Default</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">หน้าแรก</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">คอมโพเนนต์</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Icons</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                เอกสาร
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="flex items-center gap-1">
                <Settings className="h-4 w-4" />
                การตั้งค่า
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Long Path with Ellipsis */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Long Path with Ellipsis</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">หน้าแรก</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">คอมโพเนนต์</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Breadcrumb usage with default paths, icons, and long paths with ellipsis.',
      },
    },
  },
}
