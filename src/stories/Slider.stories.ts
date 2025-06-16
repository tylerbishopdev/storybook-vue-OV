import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Slider } from '@/components/ui/slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Slider },
    template: `
      <div class="w-80">
        <Slider :default-value="[33]" :max="100" :step="1" />
      </div>
    `,
  }),
}

export const Range: Story = {
  render: () => ({
    components: { Slider },
    template: `
      <div class="w-80">
        <Slider :default-value="[25, 75]" :max="100" :step="1" />
      </div>
    `,
  }),
}
