import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Popover, PopoverContent, PopoverTrigger, Button, Input, Label },
    template: `
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Dimensions</h4>
              <p class="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="width">Width</Label>
                <Input
                  id="width"
                  default-value="100%"
                  class="col-span-2 h-8"
                />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  default-value="300px"
                  class="col-span-2 h-8"
                />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="height">Height</Label>
                <Input
                  id="height"
                  default-value="25px"
                  class="col-span-2 h-8"
                />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  default-value="none"
                  class="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    `,
  }),
}
