import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Progress } from '@/components/ui/progress'
import { ref } from 'vue'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="w-80">
        <Progress :model-value="33" />
      </div>
    `,
  }),
}

export const Complete: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="w-80">
        <Progress :model-value="100" />
      </div>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="w-80 space-y-4">
        <div>
          <p class="text-sm font-medium mb-2">Installing dependencies...</p>
          <Progress :model-value="13" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Building application...</p>
          <Progress :model-value="45" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Running tests...</p>
          <Progress :model-value="67" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Deployment complete!</p>
          <Progress :model-value="100" />
        </div>
      </div>
    `,
  }),
}

export const Animated: Story = {
  render: () => ({
    components: { Progress },
    setup() {
      const progress = ref(0)

      // Simulate progress
      const interval = setInterval(() => {
        if (progress.value < 100) {
          progress.value += 10
        } else {
          clearInterval(interval)
        }
      }, 500)

      return { progress }
    },
    template: `
      <div class="w-80">
        <p class="text-sm font-medium mb-2">Loading... {{ progress }}%</p>
        <Progress :model-value="progress" />
      </div>
    `,
  }),
}

export const CustomColors: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="w-80 space-y-4">
        <div>
          <p class="text-sm font-medium mb-2">Primary</p>
          <Progress :model-value="60" class="[&>div]:bg-primary" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Secondary</p>
          <Progress :model-value="40" class="[&>div]:bg-secondary" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Destructive</p>
          <Progress :model-value="80" class="[&>div]:bg-destructive" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Success</p>
          <Progress :model-value="100" class="[&>div]:bg-green-500" />
        </div>
      </div>
    `,
  }),
}
