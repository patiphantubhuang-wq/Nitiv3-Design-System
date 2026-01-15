import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './card'
import { Button } from './button'

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Cards are containers for displaying content and actions about a single topic. They provide a flexible way to present information.

## Usage

Cards should be used for:
- Content grouping and organization
- Displaying related information
- Dashboard layouts
- Content previews and summaries

## Components

- **Card**: Container component
- **CardHeader**: Header section (typically contains title and description)
- **CardTitle**: Card title
- **CardDescription**: Optional description text
- **CardContent**: Main content area
- **CardFooter**: Footer section (typically contains actions)
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Card component.
 * Use this to see how cards display with different content.
 */
export const InteractivePlayground: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>หัวข้อการ์ด</CardTitle>
        <CardDescription>คำอธิบายการ์ดอยู่ตรงนี้</CardDescription>
      </CardHeader>
      <CardContent>
        <p>เนื้อหาการ์ดอยู่ตรงนี้</p>
      </CardContent>
      <CardFooter>
        <Button>ดำเนินการ</Button>
      </CardFooter>
    </Card>
  ),
}

/**
 * All card patterns and use cases in one view.
 * This story demonstrates various card configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Default Card */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Default Card</h3>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>หัวข้อการ์ด</CardTitle>
            <CardDescription>คำอธิบายการ์ดอยู่ตรงนี้</CardDescription>
          </CardHeader>
          <CardContent>
            <p>เนื้อหาการ์ดอยู่ตรงนี้</p>
          </CardContent>
          <CardFooter>
            <Button>ดำเนินการ</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Without Footer */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Without Footer</h3>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>หัวข้อการ์ด</CardTitle>
            <CardDescription>คำอธิบายการ์ดอยู่ตรงนี้</CardDescription>
          </CardHeader>
          <CardContent>
            <p>เนื้อหาการ์ดอยู่ตรงนี้</p>
          </CardContent>
        </Card>
      </div>

      {/* Simple Card */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Simple Card</h3>
        <Card className="w-[350px]">
          <CardContent className="pt-6">
            <p>การ์ดแบบง่ายที่มีเฉพาะเนื้อหา</p>
          </CardContent>
        </Card>
      </div>

      {/* Card with Only Title */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Card with Only Title</h3>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>หัวข้อการ์ดเท่านั้น</CardTitle>
          </CardHeader>
          <CardContent>
            <p>เนื้อหาการ์ดโดยไม่มีคำอธิบาย</p>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Card usage with different layouts, with and without footers, and various content patterns.',
      },
    },
  },
}
