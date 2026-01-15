const { mergeConfig } = require('vite')
const path = require('path')

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // สำหรับ static build - ตั้งค่า base path เป็น root
  staticDirs: [],
  // ตั้งค่าให้ Storybook ทำงานได้ดีกับ static hosting
  features: {
    buildStoriesJson: true,
  },
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
      esbuild: {
        jsx: 'automatic',
      },
    })
  },
}

module.exports = config
