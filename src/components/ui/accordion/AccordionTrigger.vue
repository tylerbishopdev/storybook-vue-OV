<script setup lang="ts">
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from 'reka-ui'

const props = defineProps<AccordionTriggerProps>()
</script>

<template>
  <AccordionHeader class="flex w-full mb-2">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="props"
      class="flex w-full items-center justify-start gap-x-4 p-0 hover:no-underline focus-visible:outline-none"
    >
      <div
        class="flex items-center space-x-2 rounded p-3 transition-all duration-300 hover:scale-105"
      >
        <span class="font-medium text-foreground"> <slot /></span>
      </div>

      <slot name="icon">
        <span class="text-muted-foreground transition-colors">
          <slot name="trigger-icon" />
        </span>
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
