import type { Meta, StoryObj } from '@storybook/react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from './menubar'

const meta: Meta<typeof Menubar> = {
  title: 'Navigation/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>ไฟล์</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            แท็บใหม่ <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            หน้าต่างใหม่ <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>หน้าต่างไม่ระบุตัวตนใหม่</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            พิมพ์... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cut <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copy <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Paste <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>มุมมอง</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>แสดงแถบบุ๊กมาร์กเสมอ</MenubarItem>
          <MenubarItem>แสดง URL แบบเต็มเสมอ</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            โหลดใหม่ <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            โหลดใหม่แบบบังคับ <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>สลับเต็มหน้าจอ</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>ซ่อนแถบด้านข้าง</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}
