<script setup lang="ts">
import { ref, type HTMLAttributes } from 'vue'
import { Minus, Plus } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '.'

interface FAQItem {
  id: number
  question: string
  answer: string
  icon?: string
  iconPosition?: 'left' | 'right'
}

interface FaqAccordionProps {
  data: FAQItem[]
  class?: HTMLAttributes['class']
  timestamp?: string
}

const props = withDefaults(defineProps<FaqAccordionProps>(), {
  timestamp: 'Click',
})

const openItem = ref<string>('')
</script>

<template>
  <div :class="cn('p-4', props.class)">
    <Accordion v-model="openItem" type="single" :collapsible="true">
      <AccordionItem v-for="item in props.data" :key="item.id" :value="item.id.toString()">
        <AccordionTrigger>
          <div
            class="relative flex items-center space-x-2 rounded border p-3 transition-all duration-300 hover:border-primary/50 data-[state=open]:bg-primary"
          >
            <span class="font-medium text-foreground">{{ item.question }}</span>
          </div>

          <template #icon> </template>
        </AccordionTrigger>

        <AccordionContent>
          {{ item.answer }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
