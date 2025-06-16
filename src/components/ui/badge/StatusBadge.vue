<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { Component } from 'vue'
import { cn } from '@/lib/utils'
import { type StatusBadgeVariants, statusBadgeVariants } from '.'

interface StatusBadgeProps {
  class?: HTMLAttributes['class']
  status?: StatusBadgeVariants['status']
  leftIcon?: Component
  rightIcon?: Component
  leftLabel?: string
  rightLabel?: string
}

const props = withDefaults(defineProps<StatusBadgeProps>(), {
  leftLabel: 'Verified',
  rightLabel: 'Disconnected',
  status: 'default',
})
</script>

<template>
  <span data-slot="status-badge" :class="cn(statusBadgeVariants({ status }), props.class)">
    <span class="inline-flex items-center gap-1.5 font-medium text-foreground">
      <component
        v-if="leftIcon"
        :is="leftIcon"
        :class="
          cn(
            '-ml-0.5 size-4 shrink-0',
            status === 'success' && 'text-emerald-600 dark:text-emerald-500',
            status === 'error' && 'text-red-600 dark:text-red-500',
          )
        "
        aria-hidden="true"
      />
      {{ leftLabel }}
    </span>
    <span class="h-4 w-px bg-border" />
    <span class="inline-flex items-center gap-1.5 text-muted-foreground">
      <component
        v-if="rightIcon"
        :is="rightIcon"
        class="-ml-0.5 size-4 shrink-0"
        aria-hidden="true"
      />
      {{ rightLabel }}
    </span>
  </span>
</template>
