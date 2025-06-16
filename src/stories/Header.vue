<template>
  <header
    class="relative z-20 pt-10 pb-10 w-full px-6 py-5 sm:px-8 md:px-12 md:py-6 flex justify-between items-center"
  >
    <img
      src="/images/logos/Frame 162642.png"
      alt="Open.Video Logo"
      width="150"
      height="30"
      class="h-auto w-[150px] md:w-[160px] opacity-80"
    />
    <div class="md:hidden">
      <Button variant="ghost" size="icon" class="text-white hover:bg-white/10 p-2">
        <Menu class="h-7 w-7" />
      </Button>
    </div>
    <div class="hidden md:block">
      <Button variant="ghost" size="icon" class="rounded p-2.5">
        <UserCircle class="h-7 w-7" />
      </Button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Menu, UserCircle } from 'lucide-vue-next'
import './header.css'
</script>
