import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    template: `
      <RadioGroup default-value="comfortable">
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label for="r1">Default</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label for="r2">Comfortable</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label for="r3">Compact</Label>
        </div>
      </RadioGroup>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    template: `
      <RadioGroup default-value="option-2" disabled>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label for="option-1">Option 1</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label for="option-2">Option 2</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="option-3" id="option-3" />
          <Label for="option-3">Option 3</Label>
        </div>
      </RadioGroup>
    `,
  }),
}

export const Horizontal: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    template: `
      <RadioGroup default-value="card" class="grid grid-cols-3 gap-4">
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label for="card">Card</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="paypal" />
          <Label for="paypal">PayPal</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="apple" id="apple" />
          <Label for="apple">Apple Pay</Label>
        </div>
      </RadioGroup>
    `,
  }),
}

export const WithDescription: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    template: `
      <RadioGroup default-value="free">
        <div class="mb-4">
          <div class="flex items-start space-x-3">
            <RadioGroupItem value="free" id="free" class="mt-1" />
            <div class="grid gap-1.5 leading-none">
              <Label for="free" class="text-sm font-medium leading-none">
                Free plan
              </Label>
              <p class="text-sm text-muted-foreground">
                Up to 20 users for free
              </p>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div class="flex items-start space-x-3">
            <RadioGroupItem value="pro" id="pro" class="mt-1" />
            <div class="grid gap-1.5 leading-none">
              <Label for="pro" class="text-sm font-medium leading-none">
                Pro plan
              </Label>
              <p class="text-sm text-muted-foreground">
                $10 per user per month
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-start space-x-3">
            <RadioGroupItem value="enterprise" id="enterprise" class="mt-1" />
            <div class="grid gap-1.5 leading-none">
              <Label for="enterprise" class="text-sm font-medium leading-none">
                Enterprise plan
              </Label>
              <p class="text-sm text-muted-foreground">
                Custom pricing for your organization
              </p>
            </div>
          </div>
        </div>
      </RadioGroup>
    `,
  }),
}
