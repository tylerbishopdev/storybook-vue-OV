<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="alert-description"
    :class="cn('text-sm pt-2 [&_p]:leading-relaxed bg-inherit', props.class)"
  >
    <slot />
  </div>
</template>
