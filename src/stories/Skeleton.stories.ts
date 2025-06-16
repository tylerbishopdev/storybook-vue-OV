import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Skeleton } from '@/components/ui/skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Skeleton },
    template: `<Skeleton class="w-[100px] h-[20px] rounded" />`,
  }),
}

export const Card: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
          <div class="flex items-center space-x-4">
            <Skeleton class="h-12 w-12 rounded" />
            <div class="space-y-2">
              <Skeleton class="h-4 w-[250px]" />
              <Skeleton class="h-4 w-[200px]" />
            </div>
          </div>
        `,
  }),
}

export const Paragraph: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="space-y-2">
        <Skeleton class="h-4 w-[250px]" />
        <Skeleton class="h-4 w-[200px]" />
        <Skeleton class="h-4 w-[300px]" />
        <Skeleton class="h-4 w-[180px]" />
      </div>
    `,
  }),
}
