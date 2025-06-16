import type { Meta, StoryObj } from '@storybook/vue3-vite'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogTrigger,
      Button,
    },
    template: `
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    `,
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogTrigger,
      Button,
    },
    template: `
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="destructive">Delete Account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Account</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your account and all associated data.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction class="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete Account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    `,
  }),
}

export const Success: Story = {
  render: () => ({
    components: {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogTrigger,
      Button,
    },
    template: `
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="default">Save Changes</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Save Changes</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to save these changes? This will update your profile information.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction class="bg-green-700 text-white hover:bg-green-700/90">
              Save Changes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    `,
  }),
}

export const WithLongContent: Story = {
  render: () => ({
    components: {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogTrigger,
      Button,
    },
    template: `
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="outline">Terms & Conditions</Button>
        </AlertDialogTrigger>
        <AlertDialogContent class="max-w-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
            <AlertDialogDescription class="max-h-60 overflow-y-auto">
              <div class="space-y-4 text-left">
                <p>
                  By using this service, you agree to be bound by the following terms and conditions.
                  Please read them carefully.
                </p>
                <p>
                  <strong>1. Acceptance of Terms:</strong> By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  <strong>2. Privacy Policy:</strong> Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service.
                </p>
                <p>
                  <strong>3. User Conduct:</strong> You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the service.
                </p>
                <p>
                  <strong>4. Modifications:</strong> We reserve the right to modify these terms at any time. Your continued use of the service after any such changes constitutes your acceptance of the new terms.
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Decline</AlertDialogCancel>
            <AlertDialogAction>Accept Terms</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    `,
  }),
}

export const ControlledDialog: Story = {
  render: () => ({
    components: {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogTrigger,
      Button,
    },
    setup() {
      const isOpen = ref(false)

      const handleOpenChange = (open: boolean) => {
        isOpen.value = open
      }

      const handleConfirm = () => {
        alert('Confirmed!')
        isOpen.value = false
      }

      return {
        isOpen,
        handleOpenChange,
        handleConfirm,
      }
    },
    template: `
      <div class="space-y-4">
        <Button @click="isOpen = true">Open Controlled Dialog</Button>
        <p class="text-sm text-muted-foreground">
          Dialog is {{ isOpen ? 'open' : 'closed' }}
        </p>
        
        <AlertDialog :open="isOpen" @update:open="handleOpenChange">
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Controlled Dialog</AlertDialogTitle>
              <AlertDialogDescription>
                This dialog's state is controlled by the parent component.
                You can open and close it programmatically.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel @click="isOpen = false">Cancel</AlertDialogCancel>
              <AlertDialogAction @click="handleConfirm">Confirm</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    `,
  }),
}
