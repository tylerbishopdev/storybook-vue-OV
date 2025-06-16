import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Tabs, TabsContent, TabsList, TabsTrigger },
    template: `
      <Tabs default-value="account" class="w-[400px]">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p class="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </TabsContent>
        <TabsContent value="password">
          <p class="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </TabsContent>
      </Tabs>
    `,
  }),
}

export const ThreeTabs: Story = {
  render: () => ({
    components: { Tabs, TabsContent, TabsList, TabsTrigger },
    template: `
      <Tabs default-value="tab1" class="w-[400px]">
        <TabsList class="grid w-full grid-cols-3">
          <TabsTrigger value="tab1">Tab One</TabsTrigger>
          <TabsTrigger value="tab2">Tab Two</TabsTrigger>
          <TabsTrigger value="tab3">Tab Three</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p>Content for the first tab.</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p>Content for the second tab.</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p>Content for the third tab.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
}
