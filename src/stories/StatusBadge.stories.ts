import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { StatusBadge } from '@/components/ui/badge'
import { CheckCircle, XCircle, AlertCircle, Wifi, WifiOff, ShieldCheck } from 'lucide-vue-next'

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { StatusBadge },
    template: `<StatusBadge />`,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { StatusBadge, ShieldCheck, WifiOff },
    template: `
      <StatusBadge 
        :leftIcon="ShieldCheck" 
        :rightIcon="WifiOff"
        leftLabel="Verified"
        rightLabel="Disconnected"
      />
    `,
  }),
}

export const Success: Story = {
  render: () => ({
    components: { StatusBadge, CheckCircle, Wifi },
    template: `
      <StatusBadge 
        status="success"
        :leftIcon="CheckCircle" 
        :rightIcon="Wifi"
        leftLabel="Live"
        rightLabel="Connected"
      />
    `,
  }),
}

export const Error: Story = {
  render: () => ({
    components: { StatusBadge, XCircle, WifiOff },
    template: `
      <StatusBadge 
        status="error"
        :leftIcon="XCircle" 
        :rightIcon="WifiOff"
        leftLabel="Failed"
        rightLabel="Offline"
      />
    `,
  }),
}

export const CustomLabels: Story = {
  render: () => ({
    components: { StatusBadge, AlertCircle },
    template: `
      <StatusBadge 
        :leftIcon="AlertCircle"
        leftLabel="System Status"
        rightLabel="Maintenance Mode"
      />
    `,
  }),
}

export const AllStatuses: Story = {
  render: () => ({
    components: { StatusBadge, CheckCircle, XCircle, AlertCircle, Wifi, WifiOff, ShieldCheck },
    template: `
      <div class="flex flex-col gap-4">
        <StatusBadge 
          status="default"
          :leftIcon="ShieldCheck"
          :rightIcon="WifiOff"
          leftLabel="Verified"
          rightLabel="Disconnected"
        />
        <StatusBadge 
          status="success"
          :leftIcon="CheckCircle"
          :rightIcon="Wifi"
          leftLabel="Active"
          rightLabel="Online"
        />
        <StatusBadge 
          status="error"
          :leftIcon="XCircle"
          :rightIcon="WifiOff"
          leftLabel="Error"
          rightLabel="Offline"
        />
      </div>
    `,
  }),
}
