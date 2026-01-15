import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './table'
import { Button } from './button'

const meta: Meta<typeof Table> = {
  title: 'Organisms/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'จ่ายแล้ว',
    totalAmount: '$250.00',
    paymentMethod: 'บัตรเครดิต',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'รอดำเนินการ',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'ยังไม่จ่าย',
    totalAmount: '$350.00',
    paymentMethod: 'โอนเงินผ่านธนาคาร',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'จ่ายแล้ว',
    totalAmount: '$450.00',
    paymentMethod: 'บัตรเครดิต',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'จ่ายแล้ว',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'รอดำเนินการ',
    totalAmount: '$200.00',
    paymentMethod: 'โอนเงินผ่านธนาคาร',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'ยังไม่จ่าย',
    totalAmount: '$300.00',
    paymentMethod: 'บัตรเครดิต',
  },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>รายการใบแจ้งหนี้ล่าสุดของคุณ</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ใบแจ้งหนี้</TableHead>
          <TableHead>สถานะ</TableHead>
          <TableHead>วิธีการ</TableHead>
          <TableHead className="text-right">จำนวนเงิน</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>รวม</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const Simple: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ชื่อ</TableHead>
          <TableHead>อีเมล</TableHead>
          <TableHead>บทบาท</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">จอห์น โด</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>ผู้ดูแลระบบ</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">เจน สมิธ</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>ผู้ใช้</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">บ็อบ จอห์นสัน</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>ผู้ใช้</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>สินค้า</TableHead>
          <TableHead>ราคา</TableHead>
          <TableHead>สต็อก</TableHead>
          <TableHead className="text-right">การดำเนินการ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">แล็ปท็อป</TableCell>
          <TableCell>$999.00</TableCell>
          <TableCell>15</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              แก้ไข
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">เมาส์</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell>50</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              แก้ไข
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">คีย์บอร์ด</TableCell>
          <TableCell>$79.99</TableCell>
          <TableCell>30</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              แก้ไข
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
