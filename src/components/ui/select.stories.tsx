import type { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'
import { Label } from './label'
import { User, Mail, Building, Globe } from 'lucide-react'

const meta: Meta<typeof Select> = {
  title: 'Form Components/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="space-y-2 w-full max-w-sm">
      <Label htmlFor="email">อีเมล</Label>
      <Select>
        <SelectTrigger id="email">
          <SelectValue placeholder="เลือกอีเมล" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="john@example.com">john@example.com</SelectItem>
          <SelectItem value="jane@example.com">jane@example.com</SelectItem>
          <SelectItem value="bob@example.com">bob@example.com</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="fruit">ผลไม้</Label>
        <Select>
          <SelectTrigger id="fruit">
            <SelectValue placeholder="เลือกผลไม้" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">แอปเปิล</SelectItem>
            <SelectItem value="banana">กล้วย</SelectItem>
            <SelectItem value="orange">ส้ม</SelectItem>
            <SelectItem value="grape">องุ่น</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2 w-full max-w-sm">
      <Label htmlFor="disabled">Select ที่ปิดใช้งาน</Label>
      <Select disabled>
        <SelectTrigger id="disabled">
          <SelectValue placeholder="นี่ถูกปิดใช้งาน" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">ตัวเลือก 1</SelectItem>
          <SelectItem value="option2">ตัวเลือก 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="user-select">ผู้ใช้</Label>
        <Select>
          <SelectTrigger id="user-select" className="w-full">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="เลือกผู้ใช้" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="john">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>จอห์น โด</span>
              </div>
            </SelectItem>
            <SelectItem value="jane">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>เจน สมิธ</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-select">อีเมล</Label>
        <Select>
          <SelectTrigger id="email-select" className="w-full">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="เลือกอีเมล" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="john@example.com">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>john@example.com</span>
              </div>
            </SelectItem>
            <SelectItem value="jane@example.com">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>jane@example.com</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const LongList: Story = {
  render: () => (
    <div className="space-y-2 w-full max-w-sm">
      <Label htmlFor="country">ประเทศ</Label>
      <Select>
        <SelectTrigger id="country">
          <SelectValue placeholder="เลือกประเทศ" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="thailand">ประเทศไทย</SelectItem>
          <SelectItem value="usa">สหรัฐอเมริกา</SelectItem>
          <SelectItem value="uk">สหราชอาณาจักร</SelectItem>
          <SelectItem value="japan">ญี่ปุ่น</SelectItem>
          <SelectItem value="korea">เกาหลีใต้</SelectItem>
          <SelectItem value="china">จีน</SelectItem>
          <SelectItem value="singapore">สิงคโปร์</SelectItem>
          <SelectItem value="malaysia">มาเลเซีย</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}
