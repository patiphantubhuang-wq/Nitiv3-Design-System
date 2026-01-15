import type { Meta, StoryObj } from '@storybook/react'
import { Toaster } from './sonner'
import { Button } from './button'
import { toast as sonnerToast } from 'sonner'

const meta: Meta<typeof Toaster> = {
  title: 'Organisms/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

function SonnerDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="outline"
        onClick={() => sonnerToast('สร้างกิจกรรมแล้ว')}
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => sonnerToast.success('Event has been created')}
      >
        Show Success Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => sonnerToast.error('Something went wrong')}
      >
        Show Error Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => sonnerToast.info('Here is some info')}
      >
        Show Info Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => sonnerToast.warning('This is a warning')}
      >
        Show Warning Toast
      </Button>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <>
      <SonnerDemo />
      <Toaster />
    </>
  ),
}
