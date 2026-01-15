import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './date-picker'

const meta: Meta<typeof DatePicker> = {
  title: 'Form Components/Date Picker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'เลือกวันที่',
  },
}

export const WithInitialDate: Story = {
  args: {
    date: new Date(),
    placeholder: 'เลือกวันที่',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'เลือกวันที่',
  },
}

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'เลือกวันที่',
  },
}
