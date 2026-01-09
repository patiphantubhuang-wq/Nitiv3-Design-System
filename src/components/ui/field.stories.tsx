import type { Meta, StoryObj } from '@storybook/react'
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldContent,
} from './field'
import { Input } from './input'
import { Label } from './label'

const meta: Meta<typeof Field> = {
  title: 'Components/UI/Field',
  component: Field,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Vertical: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <FieldContent>
          <Input id="email" type="email" placeholder="email@example.com" />
          <FieldDescription>
            Enter your email address
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <FieldContent>
          <Input id="password" type="password" />
          <FieldDescription>
            Must be at least 8 characters
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <FieldGroup>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="name-h">Name</FieldLabel>
        <FieldContent>
          <Input id="name-h" placeholder="John Doe" />
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="email-h">Email</FieldLabel>
        <FieldContent>
          <Input id="email-h" type="email" placeholder="email@example.com" />
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
}

export const WithError: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="email-error">Email</FieldLabel>
        <FieldContent>
          <Input id="email-error" type="email" aria-invalid="true" />
          <FieldError>Please enter a valid email address</FieldError>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
}
