import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Badge } from '@/components/ui/badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Badge },
    template: `<Badge>Badge</Badge>`,
  }),
}

export const Secondary: Story = {
  render: () => ({
    components: { Badge },
    template: `<Badge variant="secondary">Secondary</Badge>`,
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: { Badge },
    template: `<Badge variant="destructive">Destructive</Badge>`,
  }),
}

export const Outline: Story = {
  render: () => ({
    components: { Badge },
    template: `<Badge variant="outline">Outline</Badge>`,
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    `,
  }),
}
