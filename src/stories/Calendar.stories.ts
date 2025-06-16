import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Calendar } from '@/components/ui/calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Calendar },
    template: `<Calendar />`,
  }),
}

export const WithInitialFocus: Story = {
  render: () => ({
    components: { Calendar },
    template: `<Calendar :initial-focus="true" />`,
  }),
}
