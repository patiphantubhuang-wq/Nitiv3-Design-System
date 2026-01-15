import type { Meta, StoryObj } from '@storybook/react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from './data-table'
import { Button } from './button'
import { Badge } from './badge'

const meta: Meta<typeof DataTable> = {
  title: 'Data Display/Data Table',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    emptyVariant: {
      control: 'select',
      options: ['default', 'with-icon', 'search', 'simple'],
      description: 'Variant for empty state display',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '3d2e1f4a',
    amount: 250,
    status: 'success',
    email: 'test@example.com',
  },
  {
    id: 'a1b2c3d4',
    amount: 75,
    status: 'failed',
    email: 'failed@example.com',
  },
  {
    id: 'e5f6g7h8',
    amount: 300,
    status: 'success',
    email: 'success@example.com',
  },
]

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'สถานะ',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      return (
        <Badge variant={status === 'success' ? 'default' : status === 'pending' ? 'secondary' : status === 'processing' ? 'outline' : 'destructive'}>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'email',
    header: 'อีเมล',
  },
  {
    accessorKey: 'amount',
    header: 'จำนวนเงิน',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    id: 'actions',
    cell: () => {
      return (
        <Button variant="ghost" size="sm">
          ดู
        </Button>
      )
    },
  },
]

export const Default: Story = {
  render: () => <DataTable columns={columns} data={payments} />,
}

const users: { id: string; name: string; email: string; role: string }[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
]

const userColumns: ColumnDef<typeof users[0]>[] = [
  {
    accessorKey: 'name',
    header: 'ชื่อ',
  },
  {
    accessorKey: 'email',
    header: 'อีเมล',
  },
  {
    accessorKey: 'role',
    header: 'บทบาท',
  },
]

export const UsersTable: Story = {
  render: () => <DataTable columns={userColumns} data={users} />,
}

export const EmptyTableDefault: Story = {
  render: () => <DataTable columns={columns} data={[]} emptyVariant="default" />,
}

export const EmptyTableWithIcon: Story = {
  render: () => <DataTable columns={columns} data={[]} emptyVariant="with-icon" />,
}

export const EmptyTableSearch: Story = {
  render: () => <DataTable columns={columns} data={[]} emptyVariant="search" />,
}

export const EmptyTableSimple: Story = {
  render: () => <DataTable columns={columns} data={[]} emptyVariant="simple" />,
}
