import type { Meta, StoryObj } from '@storybook/react'
import {
  Toast,
  ToastAction,
} from './toast'
import { Button } from './button'
import { useToast } from '@/hooks/use-toast'
import { Toaster } from './toaster'

const meta: Meta<typeof Toast> = {
  title: 'Organisms/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

function ToastDemo() {
  const { toast } = useToast()

  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "กำหนดเวลา: ติดตาม",
            description: "วันศุกร์ที่ 10 กุมภาพันธ์ 2023 เวลา 17:57 น.",
          })
        }}
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "เกิดข้อผิดพลาด! มีบางอย่างผิดพลาด",
            description: "เกิดปัญหากับคำขอของคุณ",
            variant: "destructive",
          })
        }}
      >
        Show Destructive Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "สร้างกิจกรรมแล้ว",
            description: "วันศุกร์ที่ 10 กุมภาพันธ์ 2023 เวลา 17:57 น.",
            action: (
              <ToastAction altText="ไปที่ตารางเวลาสำหรับย้อนกลับ">ย้อนกลับ</ToastAction>
            ),
          })
        }}
      >
        แสดง Toast พร้อมการดำเนินการ
      </Button>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <>
      <ToastDemo />
      <Toaster />
    </>
  ),
}
