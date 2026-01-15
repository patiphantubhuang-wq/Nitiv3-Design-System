# 📚 Storybook Patterns Guide

โครงสร้าง Storybook ใหม่ที่ปรับให้เหมือนกับ Grafana UI เพื่อให้ Developer เข้าถึงได้ง่ายขึ้น

## 🎯 โครงสร้างใหม่ของ Stories

### สำหรับ Atoms และ Molecules (Simple Components)

Stories ควรมีโครงสร้างดังนี้:

1. **Basic** - Interactive playground ที่สามารถใช้ Controls ปรับแต่งได้
2. **Examples** - รวม Variants ทั้งหมดไว้ในหน้าเดียว

### สำหรับ Organisms (Complex Components)

สามารถแยกเป็น Stories แบบเดิมได้ ตาม use cases

## 📋 Template Structure

### 1. Interactive Playground Story

```typescript
export const InteractivePlayground: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
}
```

- ใช้ `args` เพื่อให้ Controls ทำงาน
- Developer สามารถทดสอบ variants ต่างๆ ได้ทันที

### 2. Examples Story (All Variants)

```typescript
export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Variants Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Variants</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          {/* ... all variants */}
        </div>
      </div>
      {/* Other sections */}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of all Button variants, sizes, and states.',
      },
    },
  },
}
```

- รวม Variants ทั้งหมดไว้ในหน้าเดียว
- จัดกลุ่มตาม Categories (Variants, Sizes, States, etc.)
- ง่ายต่อการเปรียบเทียบ

### 3. Docs Configuration

```typescript
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Buttons are used to trigger actions. They can be placed anywhere in the interface and come in various styles and sizes.

## Usage

Buttons should be used for:
- Primary actions (e.g., "Save", "Submit", "Confirm")
- Secondary actions (e.g., "Cancel", "Back")
- Navigation (e.g., "Next", "Previous")

## Variants

- **default**: Primary button for main actions
- **secondary**: Secondary button for less prominent actions
- **destructive**: For destructive actions (e.g., delete, remove)
- **outline**: Outlined button with transparent background
- **ghost**: Minimal button with no background
- **link**: Link-styled button for navigation

## Sizes

- **default**: Standard button size (h-10 px-4 py-2)
- **sm**: Small button (h-9 px-3)
- **lg**: Large button (h-11 px-8)
- **icon**: Square button for icons only (h-10 w-10)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      description: 'The visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    // ... other argTypes with descriptions
  },
}
```

- มี description ที่ชัดเจน
- อธิบาย Usage, Variants, Sizes
- argTypes มี description และ table configuration

## 📝 ตัวอย่าง: Button Component

ดูตัวอย่างที่สมบูรณ์ได้ที่ `src/components/ui/button.stories.tsx`

### Structure:
- **Docs Page**: มีรายละเอียดครบถ้วน (Usage, Variants, Sizes)
- **Basic Story**: Interactive playground
- **Examples Story**: รวม variants ทั้งหมด

## 🔄 Migration Guide

### ก่อน (Old Structure)
```typescript
export const Default: Story = { ... }
export const Secondary: Story = { ... }
export const Outline: Story = { ... }
export const Ghost: Story = { ... }
// ... many separate stories
```

### หลัง (New Structure)
```typescript
export const InteractivePlayground: Story = {
  args: { ... } // Interactive with Controls
}

export const Examples: Story = {
  render: () => (
    // All variants in one view
  )
}
```

## 📌 Guidelines

### เมื่อไหร่ควรใช้ Interactive Playground + Examples?
- **Atoms**: ใช้ Interactive Playground + Examples เสมอ
- **Molecules**: ใช้ Interactive Playground + Examples ถ้า component มี variants หลายแบบ
- **Organisms**: สามารถแยก stories ตาม use cases ได้

### เมื่อไหร่ควรแยก Stories?
- **Organisms**: Form, Data Table, Dialog - แยกตาม use cases
- **Composite Components**: Components ที่ประกอบจากหลาย components
- **Complex Examples**: Examples ที่ต้องการแสดง scenario เฉพาะ

## 🎨 Best Practices

1. **Docs Description**: ควรมีรายละเอียดครบถ้วน (Usage, Variants, Props)
2. **Examples Organization**: จัดกลุ่มตาม Categories (Variants, Sizes, States)
3. **Interactive Controls**: Interactive Playground story ควรมี controls ครบถ้วน
4. **Story Names**: ใช้ชื่อที่ชัดเจน (Interactive Playground, Examples, not Default, Secondary)

## 🔍 Examples

### ✅ Good (Button Component)
- Interactive Playground: Interactive playground with controls
- Examples: All variants in one view
- Docs: Comprehensive description with Usage, Variants, Sizes

### ✅ Good (Form Component - Organism)
- Default: Login form example
- WithValidation: Form with validation
- Complex: Multi-step form
- (แยกตาม use cases)

### ❌ Bad
- Default, Secondary, Outline, Ghost (แยกหลาย stories)
- ไม่มี Docs description
- ไม่มี Interactive controls

## 📚 References

- [Grafana UI Storybook](https://developers.grafana.com/ui/latest/)
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
