import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
  args: {
    variant: 'default',
    size: 'default',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    default: 'Destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    default: 'Outline',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    default: 'Ghost',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    default: 'Link',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    default: 'Small',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    default: 'Large',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    default: '🔥',
  },
}
