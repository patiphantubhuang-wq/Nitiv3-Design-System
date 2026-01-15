import type { Meta, StoryObj } from '@storybook/react'
import { Toaster } from './toaster'
import { Button } from './button'
import { useToast } from '@/hooks/use-toast'

const meta: Meta<typeof Toaster> = {
  title: 'Organisms/Toaster',
  component: Toaster,
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
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            variant: "destructive",
          })
        }}
      >
        Show Destructive Toast
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
