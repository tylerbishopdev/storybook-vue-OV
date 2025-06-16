import type { Meta, StoryObj } from '@storybook/vue3-vite'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  FAQChatAccordian,
} from '@/components/ui/accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Accordion, AccordionContent, AccordionItem, AccordionTrigger },
    template: `
      <Accordion type="single" collapsible class="w-full max-w-4xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: { Accordion, AccordionContent, AccordionItem, AccordionTrigger },
    template: `
      <Accordion type="multiple" class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! With type="multiple", you can have multiple sections open at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>This can be open too</AccordionTrigger>
          <AccordionContent>
            This accordion allows multiple items to be expanded simultaneously.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>And this one as well</AccordionTrigger>
          <AccordionContent>
            All sections can be open at the same time.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

export const FAQChat: Story = {
  render: () => ({
    components: { FAQChatAccordian },
    setup() {
      const faqData = [
        {
          id: 1,
          question: 'What is this chat-style accordion?',
          answer:
            "It's a beautifully designed FAQ component that mimics a chat interface with animated responses.",
          icon: '💬',
          iconPosition: 'left' as const,
        },
        {
          id: 2,
          question: 'Can I customize the styling?',
          answer:
            'Yes! You can customize the question and answer styling using the questionClass and answerClass props.',
          icon: '🎨',
          iconPosition: 'right' as const,
        },
        {
          id: 3,
          question: 'Does it support animations?',
          answer:
            'Absolutely! It includes smooth transitions and hover effects for a delightful user experience.',
          icon: '✨',
          iconPosition: 'left' as const,
        },
        {
          id: 4,
          question: 'Is it responsive?',
          answer: "Yes, it's fully responsive and works great on all device sizes.",
          icon: '📱',
          iconPosition: 'right' as const,
        },
      ]

      return { faqData }
    },
    template: `
      <div class="w-full max-w-2xl">
        <FAQChatAccordian 
          :data="faqData" 
          timestamp="Today, 2:30 PM"
          class=""
        />
      </div>
    `,
  }),
}
