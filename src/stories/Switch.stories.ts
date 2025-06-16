import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Switch },
    template: `<Switch />`,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Switch, Label },
    template: `
      <div class="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label for="airplane-mode">Airplane Mode</Label>
      </div>
    `,
  }),
}

export const Checked: Story = {
  render: () => ({
    components: { Switch },
    template: `<Switch :checked="true" />`,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Switch },
    template: `<Switch disabled />`,
  }),
}

export const DisabledChecked: Story = {
  render: () => ({
    components: { Switch },
    template: `<Switch :checked="true" disabled />`,
  }),
}
