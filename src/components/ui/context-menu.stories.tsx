import type { Meta, StoryObj } from '@storybook/react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from './context-menu'

const meta: Meta<typeof ContextMenu> = {
  title: 'Navigation/Context Menu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        คลิกขวาที่นี่
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          ย้อนกลับ
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          ไปข้างหน้า
        </ContextMenuItem>
        <ContextMenuItem inset>
          โหลดใหม่
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset>
          พิมพ์...
        </ContextMenuItem>
        <ContextMenuItem inset>
          ส่งออก...
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset>
          ดูแหล่งที่มาของหน้า
        </ContextMenuItem>
        <ContextMenuItem inset>
          ตรวจสอบ
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithLabels: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        คลิกขวาที่นี่
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>บัญชีของฉัน</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          โปรไฟล์
        </ContextMenuItem>
        <ContextMenuItem>
          การเรียกเก็บเงิน
        </ContextMenuItem>
        <ContextMenuItem>
          ทีม
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          ออกจากระบบ
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
