import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Tabs organize content into multiple sections that users can switch between. They provide a way to display related content without overwhelming the interface.

## Usage

Tabs should be used for:
- Organizing related content
- Settings panels
- Multi-step forms
- Content that can be grouped into sections

## Components

- **Tabs**: Container component (manages tab state)
- **TabsList**: Container for tab triggers
- **TabsTrigger**: Individual tab button
- **TabsContent**: Content panel for each tab

## Types

- **single**: Only one tab can be active at a time
- **multiple**: Multiple tabs can be active simultaneously
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Tabs component.
 * Click on different tabs to see the content change.
 */
export const InteractivePlayground: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">บัญชี</TabsTrigger>
        <TabsTrigger value="password">รหัสผ่าน</TabsTrigger>
        <TabsTrigger value="settings">การตั้งค่า</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">บัญชี</h3>
          <p className="text-sm text-muted-foreground">
            ทำการเปลี่ยนแปลงบัญชีของคุณที่นี่
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password" className="mt-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">รหัสผ่าน</h3>
          <p className="text-sm text-muted-foreground">
            เปลี่ยนรหัสผ่านของคุณที่นี่
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">การตั้งค่า</h3>
          <p className="text-sm text-muted-foreground">
            จัดการการตั้งค่าของคุณที่นี่
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

/**
 * All tabs patterns and use cases in one view.
 * This story demonstrates various tabs configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Default Tabs */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Default (Single Selection)</h3>
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Account</h3>
              <p className="text-sm text-muted-foreground">
                ทำการเปลี่ยนแปลงบัญชีของคุณที่นี่ คลิกบันทึกเมื่อคุณทำเสร็จแล้ว
              </p>
            </div>
          </TabsContent>
          <TabsContent value="password" className="mt-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Password</h3>
              <p className="text-sm text-muted-foreground">
                เปลี่ยนรหัสผ่านของคุณที่นี่ หลังจากบันทึกแล้ว คุณจะถูกออกจากระบบ
              </p>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Settings</h3>
              <p className="text-sm text-muted-foreground">
                จัดการการตั้งค่าและความต้องการของบัญชีของคุณ
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Multiple Selection */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Multiple Selection</h3>
        <Tabs defaultValue={['account']} type="multiple" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Account</h3>
              <p className="text-sm text-muted-foreground">
                Account content (can be opened with others).
              </p>
            </div>
          </TabsContent>
          <TabsContent value="password" className="mt-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Password</h3>
              <p className="text-sm text-muted-foreground">
                เนื้อหารหัสผ่าน (สามารถเปิดพร้อมกับตัวอื่นได้)
              </p>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Settings</h3>
              <p className="text-sm text-muted-foreground">
                เนื้อหาการตั้งค่า (สามารถเปิดพร้อมกับตัวอื่นได้)
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Tabs usage with single and multiple selection modes.',
      },
    },
  },
}
