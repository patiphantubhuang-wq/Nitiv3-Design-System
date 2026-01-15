import type { Meta, StoryObj } from '@storybook/react'
import { Combobox } from './combobox'

const meta: Meta<typeof Combobox> = {
  title: 'Form Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const languages = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
]

export const Default: Story = {
  args: {
    options: frameworks,
    placeholder: 'เลือก framework...',
    searchPlaceholder: 'ค้นหา framework...',
    emptyText: 'ไม่พบ framework',
  },
}

export const WithSelectedValue: Story = {
  args: {
    options: frameworks,
    value: 'next.js',
    placeholder: 'เลือก framework...',
  },
}

export const Languages: Story = {
  args: {
    options: languages,
    placeholder: 'เลือกภาษา...',
    searchPlaceholder: 'ค้นหาภาษา...',
    emptyText: 'ไม่พบภาษา',
  },
}

export const CustomPlaceholder: Story = {
  args: {
    options: frameworks,
    placeholder: 'เลือก framework...',
    searchPlaceholder: 'ค้นหา framework...',
    emptyText: 'ไม่พบ framework',
  },
}
