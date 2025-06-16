import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Separator } from '@/components/ui/separator'


const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Separator },
    template: `
          <div>
            <div class="space-y-1">
              <h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
              <p class="text-sm text-muted-foreground">
                An open-source UI component library.
              </p>
            </div>
            <Separator class="my-4" />
            <div class="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>
        `,
  }),
}
