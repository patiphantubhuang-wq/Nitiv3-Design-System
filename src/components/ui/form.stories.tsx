import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'
import { Input } from './input'
import { Button } from './button'

const meta: Meta<typeof Form> = {
  title: 'Form Components/Form (Example Usage)',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

function LoginForm() {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
    },
  })

  function onSubmit(data: { username: string; email: string }) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[350px] space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ชื่อผู้ใช้</FormLabel>
              <FormControl>
                <Input placeholder="ชื่อผู้ใช้" {...field} />
              </FormControl>
              <FormDescription>
                นี่คือชื่อแสดงผลสาธารณะของคุณ
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>อีเมล</FormLabel>
              <FormControl>
                <Input type="email" placeholder="คุณ@example.com" {...field} />
              </FormControl>
              <FormDescription>
                เราจะไม่แบ่งปันอีเมลของคุณ
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">ส่ง</Button>
      </form>
    </Form>
  )
}

export const Default: Story = {
  render: () => <LoginForm />,
}
