import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertDescription, AlertTitle } from './alert'
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react'

const meta: Meta<typeof Alert> = {
  title: 'Feedback & Status/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Alerts are used to display important messages to users. They provide contextual feedback and information.

## Usage

Alerts should be used for:
- Informational messages (e.g., "Your changes have been saved")
- Warning messages (e.g., "Please review your input")
- Error messages (e.g., "Something went wrong")
- Success confirmations (e.g., "Operation completed successfully")

## Variants

- **default**: Standard informational alert with blue/neutral styling
- **destructive**: Error or critical alert with red styling

## Components

- **Alert**: Container component
- **AlertTitle**: Optional title for the alert
- **AlertDescription**: Main message content
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      description: 'The visual style variant of the alert',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Alert component.
 * Use the controls below to experiment with different variants.
 */
export const InteractivePlayground: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>หัวข้อแจ้งเตือน</AlertTitle>
      <AlertDescription>
        นี่คือข้อความแจ้งเตือน คุณสามารถปรับแต่งรูปแบบได้โดยใช้ตัวควบคุม
      </AlertDescription>
    </Alert>
  ),
}

/**
 * All alert variants and common patterns in one view.
 * This story demonstrates all available alert styles and use cases.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Variants</h3>
        <div className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>แจ้งเตือน!</AlertTitle>
            <AlertDescription>
              คุณสามารถเพิ่มคอมโพเนนต์ลงในแอปพลิเคชันโดยใช้ CLI
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>เกิดข้อผิดพลาด</AlertTitle>
            <AlertDescription>
              เซสชันของคุณหมดอายุแล้ว กรุณาเข้าสู่ระบบอีกครั้ง
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* With Different Icons */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">With Icons</h3>
        <div className="space-y-4">
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>สำเร็จ</AlertTitle>
            <AlertDescription>
              การเปลี่ยนแปลงของคุณได้รับการบันทึกเรียบร้อยแล้ว
            </AlertDescription>
          </Alert>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>ข้อมูล</AlertTitle>
            <AlertDescription>
              นี่คือข้อความแจ้งข้อมูลสำหรับผู้ใช้
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>คำเตือน</AlertTitle>
            <AlertDescription>
              กรุณาตรวจสอบข้อมูลของคุณก่อนส่ง
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>เกิดข้อผิดพลาด</AlertTitle>
            <AlertDescription>
              เกิดข้อผิดพลาดบางอย่าง กรุณาลองอีกครั้ง
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Without Title */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Without Title</h3>
        <div className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              นี่คือข้อความแจ้งเตือนโดยไม่มีหัวข้อ
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              นี่คือข้อความแจ้งเตือนข้อผิดพลาดโดยไม่มีหัวข้อ
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of all Alert variants, with different icons, and common usage patterns.',
      },
    },
  },
}
