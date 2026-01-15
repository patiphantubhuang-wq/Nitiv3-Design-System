import type { Preview } from '@storybook/react'
import React from 'react'

/**
 * Simple Theme per Product Architecture
 * 
 * โครงสร้าง:
 * - primitive.css  → สีไล่เฉด (กลาง)
 * - base.css       → semantic token ครบ (ตัวแม่)
 * - juristic.css   → override เฉพาะที่ต่าง
 * - guard.css      → override เฉพาะที่ต่าง
 * - admin.css      → override เฉพาะที่ต่าง
 * 
 * ไม่มี layer ซับซ้อน:
 * - Primitive → Semantic (อยู่ใน theme เลย)
 * - Component ใช้ semantic โดยตรง
 */

// Tailwind + Primitive Colors + Universal Tokens (ต้องมาก่อน theme files)
import '../src/index.css'

// Theme Files (Semantic - ใช้ primitive colors จาก index.css)
import '../src/themes/base.css'
import '../src/themes/juristic.css'
import '../src/themes/guard.css'
import '../src/themes/admin.css'

// Theme configuration
const themes = [
  { value: 'base', title: '⚪ Base (Neutral)' },
  { value: 'juristic', title: '🟡 Juristic' },
  { value: 'guard', title: '🟢 Guard' },
  { value: 'admin', title: '⚫ Admin' },
]

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Theme Mode',
      defaultValue: 'base',
      toolbar: {
        icon: 'paintbrush',
        items: themes,
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'hsl(var(--background))' },
        { name: 'dark', value: 'hsl(var(--background))' },
      ],
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Guidelines',
          ['*'],
          'Foundations',
          ['*'],
          'Primitives',
          ['*'],
          'Form Components',
          ['*'],
          'Navigation',
          ['*'],
          'Feedback & Status',
          ['*'],
          'Overlay & Containers',
          ['*'],
          'Data Display',
          ['*'],
          'Patterns & Utilities',
          ['*'],
          'Templates',
          ['*'],
        ],
        locales: 'en-US',
      },
    },
  },
  decorators: [
    (Story, context) => {
      // Get theme from Storybook toolbar
      const theme = context.globals.theme || 'base'
      
      // Set data-theme on document root (affects entire Storybook)
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme)
      }
      
      return React.createElement(
        'div',
        { className: 'p-8' },
        React.createElement(Story)
      )
    },
  ],
}

export default preview
