import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'
import { Button } from './button'

const meta: Meta<typeof Dialog> = {
  title: 'Overlay & Containers/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>เปิด Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>คุณแน่ใจหรือไม่?</DialogTitle>
          <DialogDescription>
            การดำเนินการนี้ไม่สามารถย้อนกลับได้ การดำเนินการนี้จะลบบัญชีของคุณอย่างถาวร
            และลบข้อมูลของคุณออกจากเซิร์ฟเวอร์ของเรา
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">ยกเลิก</Button>
          <Button variant="destructive">ลบ</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Simple: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">แก้ไขโปรไฟล์</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>แก้ไขโปรไฟล์</DialogTitle>
          <DialogDescription>
            ทำการเปลี่ยนแปลงโปรไฟล์ของคุณที่นี่ คลิกบันทึกเมื่อคุณทำเสร็จแล้ว
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              ชื่อ
            </label>
            <input
              id="name"
              defaultValue="ชื่อ นามสกุล"
              className="col-span-3 rounded-md border border-input bg-background px-3 py-2"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">บันทึกการเปลี่ยนแปลง</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
