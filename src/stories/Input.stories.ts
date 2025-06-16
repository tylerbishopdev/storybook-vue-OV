import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Input },
    template: `<Input placeholder="Enter text..." />`,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Input, Label },
    template: `
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
    `,
  }),
}

export const Password: Story = {
  render: () => ({
    components: { Input },
    template: `<Input type="password" placeholder="Password" />`,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Input },
    template: `<Input placeholder="Disabled input" disabled />`,
  }),
}
