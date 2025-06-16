import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal, AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-vue-next'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Alert, AlertDescription, AlertTitle },
    template: `
      <Alert class="max-w-md">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    `,
  }),
}

export const WithIcon: Story = {
  render: () => ({
    components: { Alert, AlertDescription, AlertTitle, Terminal },
    template: `
      <Alert class="max-w-md">
        <Terminal class="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    `,
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: { Alert, AlertDescription, AlertTitle, AlertCircle },
    template: `
      <Alert variant="destructive" class="max-w-md">
        <AlertCircle class="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    `,
  }),
}

export const WithoutTitle: Story = {
  render: () => ({
    components: { Alert, AlertDescription, Info },
    template: `
      <Alert class="max-w-md">
        <Info class="h-4 w-4" />
        <AlertDescription>
          This is a simple alert without a title but with an icon.
        </AlertDescription>
      </Alert>
    `,
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: {
      Alert,
      AlertDescription,
      AlertTitle,
      Terminal,
      AlertCircle,
      CheckCircle,
      AlertTriangle,
    },
    template: `
      <div class="space-y-4 max-w-md">
        <Alert>
          <Terminal class="h-4 w-4" />
          <AlertTitle>Terminal</AlertTitle>
          <AlertDescription>
            This is the default alert variant with a terminal icon.
          </AlertDescription>
        </Alert>
        
        <Alert variant="destructive">
          <AlertCircle class="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            This is a destructive alert variant with an error icon.
          </AlertDescription>
        </Alert>

        <Alert variant="success">
          <CheckCircle class="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </Alert>

        <Alert variant="warning">
          <AlertTriangle class="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            This action cannot be undone. Please proceed with caution.
          </AlertDescription>
        </Alert>
      </div>
    `,
  }),
}

export const IconPositioning: Story = {
  render: () => ({
    components: { Alert, AlertDescription, AlertTitle, Info, AlertCircle },
    template: `
      <div class="space-y-4 max-w-lg">
        <Alert>
          <Info class="h-4 w-4" />
          <AlertTitle>Icon positioning demo</AlertTitle>
          <AlertDescription>
            Notice how the icon is positioned absolutely in the top-left, and the content is automatically indented to accommodate it. This creates a clean, consistent layout.
          </AlertDescription>
        </Alert>
        
        <Alert variant="destructive">
          <AlertCircle class="h-4 w-4" />
          <AlertDescription>
            Even without a title, the icon positioning and content indentation work perfectly. The text flows naturally around the icon space.
          </AlertDescription>
        </Alert>
      </div>
    `,
  }),
}
