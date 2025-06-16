import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Textarea, Label },
    template: `<Textarea placeholder="Type your message here." />`,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Textarea, Label },
    template: `
          <div class="grid w-full gap-1.5">
            <Label for="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
        `,
  }),
}
