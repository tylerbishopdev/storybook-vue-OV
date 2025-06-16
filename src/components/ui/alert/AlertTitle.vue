<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h5
    data-slot="alert-title"
    :class="
      cn(
        'mb-1 text-sm border-b  pb-2 font-bold bg-inherit leading-none tracking-tight',
        props.class,
      )
    "
  >
    <slot />
  </h5>
</template>
