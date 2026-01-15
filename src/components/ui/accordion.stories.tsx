import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion'

const meta: Meta = {
  title: 'Overlay & Containers/Accordion',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Accordions allow users to expand and collapse sections of content. They are useful for organizing and hiding secondary information.

## Usage

Accordions should be used for:
- FAQs and help sections
- Collapsible content sections
- Organizing information hierarchically
- Reducing visual clutter

## Components

- **Accordion**: Container component (manages accordion state)
- **AccordionItem**: Individual accordion item
- **AccordionTrigger**: Clickable header that expands/collapses
- **AccordionContent**: Expandable content panel

## Types

- **single**: Only one item can be open at a time
- **multiple**: Multiple items can be open simultaneously
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Interactive playground for the Accordion component.
 * Click on different items to expand and collapse them.
 */
export const InteractivePlayground: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>มันสามารถเข้าถึงได้หรือไม่?</AccordionTrigger>
        <AccordionContent>
          ได้ มันเป็นไปตามรูปแบบการออกแบบ WAI-ARIA
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

/**
 * All accordion patterns and use cases in one view.
 * This story demonstrates various accordion configurations.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Single Selection (Collapsible) */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Single Selection (Collapsible)</h3>
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>มันสามารถเข้าถึงได้หรือไม่?</AccordionTrigger>
            <AccordionContent>
              ได้ มันเป็นไปตามรูปแบบการออกแบบ WAI-ARIA
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>มันมีสไตล์หรือไม่?</AccordionTrigger>
            <AccordionContent>
              ได้ มันมาพร้อมกับสไตล์เริ่มต้นที่ตรงกับสุนทรียภาพของคอมโพเนนต์อื่นๆ
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>มันมีแอนิเมชันหรือไม่?</AccordionTrigger>
            <AccordionContent>
              ได้ มันมีแอนิเมชันโดยค่าเริ่มต้น แต่คุณสามารถปิดใช้งานได้หากต้องการ
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Multiple Selection */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Multiple Selection</h3>
        <Accordion type="multiple" className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>React คืออะไร?</AccordionTrigger>
            <AccordionContent>
              React เป็นไลบรารี JavaScript สำหรับสร้างส่วนติดต่อผู้ใช้
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>TypeScript คืออะไร?</AccordionTrigger>
            <AccordionContent>
              TypeScript เป็น superset ที่มีประเภทของ JavaScript ที่คอมไพล์เป็น JavaScript ธรรมดา
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Tailwind CSS คืออะไร?</AccordionTrigger>
            <AccordionContent>
              Tailwind CSS เป็น CSS framework แบบ utility-first สำหรับสร้างส่วนติดต่อผู้ใช้ที่กำหนดเองอย่างรวดเร็ว
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of Accordion usage with single (collapsible) and multiple selection modes.',
      },
    },
  },
}
