import type { Meta, StoryObj } from '@storybook/react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './chart'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

const meta: Meta<typeof ChartContainer> = {
  title: 'Data Display/Chart',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Charts provide visual representations of data using recharts library. They help users understand trends, patterns, and relationships in data.

## Usage

Charts should be used for:
- Data visualization and analytics
- Trend analysis
- Comparative data display
- Performance metrics

## Chart Types

- **Line Chart**: Best for showing trends over time
- **Bar Chart**: Ideal for comparing categories
- **Area Chart**: Similar to line charts but with filled areas
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const chartData = [
  { month: 'มกราคม', desktop: 186, mobile: 80 },
  { month: 'กุมภาพันธ์', desktop: 305, mobile: 200 },
  { month: 'มีนาคม', desktop: 237, mobile: 120 },
  { month: 'เมษายน', desktop: 273, mobile: 190 },
  { month: 'พฤษภาคม', desktop: 209, mobile: 130 },
  { month: 'มิถุนายน', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: 'เดสก์ท็อป',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'มือถือ',
    color: 'hsl(var(--chart-2))',
  },
}

export const LineChartExample: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>กราฟเส้น</CardTitle>
        <CardDescription>ข้อมูลยอดขายตามเวลา</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="desktop"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="mobile"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A line chart showing desktop and mobile sales over time.',
      },
    },
  },
}

export const BarChartExample: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>กราฟแท่ง</CardTitle>
        <CardDescription>เปรียบเทียบยอดขายเดสก์ท็อปและมือถือ</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A bar chart comparing desktop and mobile sales by month.',
      },
    },
  },
}

export const AreaChartExample: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>กราฟพื้นที่</CardTitle>
        <CardDescription>แนวโน้มยอดขายพร้อมพื้นที่ที่เติมสี</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="desktop"
              stroke="var(--color-desktop)"
              fill="var(--color-desktop)"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="mobile"
              stroke="var(--color-mobile)"
              fill="var(--color-mobile)"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'An area chart with filled areas showing sales trends.',
      },
    },
  },
}
