<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from 'reka-ui'

const props = defineProps<AccordionContentProps>()
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    v-bind="props"
    class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
  >
    <Transition
      enter-active-class="transition-all duration-400 ease-out"
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-2"
    >
      <div class="ml-7 mt-1 md:ml-16 pb-4">
        <div class="relative max-w-xs rounded border px-4 py-2 text-foreground shadow-sm">
          <slot />
        </div>
      </div>
    </Transition>
  </AccordionContent>
</template>
