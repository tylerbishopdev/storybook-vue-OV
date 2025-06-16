import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Checkbox },
    template: `<Checkbox />`,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Checkbox, Label },
    template: `
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    `,
  }),
}

export const Checked: Story = {
  render: () => ({
    components: { Checkbox },
    template: `<Checkbox :checked="true" />`,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Checkbox },
    template: `<Checkbox disabled />`,
  }),
}

export const CheckedDisabled: Story = {
  render: () => ({
    components: { Checkbox },
    template: `<Checkbox :checked="true" disabled />`,
  }),
}
