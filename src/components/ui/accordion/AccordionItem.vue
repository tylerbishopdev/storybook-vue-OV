<script setup lang="ts">
import { AccordionItem, type AccordionItemProps, useForwardProps } from 'reka-ui'

const props = defineProps<AccordionItemProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <AccordionItem
    data-slot="accordion-item"
    v-bind="forwardedProps"
    class="mb-2 border-0 focus-within:ring-0"
  >
    <slot />
  </AccordionItem>
</template>
