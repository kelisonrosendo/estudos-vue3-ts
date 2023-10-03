<template>
  <nav class="h-[60px] bg-white shadow-md flex items-center justify-center">
    <ul class="w-full h-full flex items-center justify-center gap-10">
      <li class="flex items-center gap-2">
        <Home :size="22" />
        <RouterLink to="/"> Home </RouterLink>
      </li>
      <li class="flex items-center gap-2">
        <Contact2 :size="22" />
        <RouterLink to="/characters"> Characters </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { Home, Contact2 } from 'lucide-vue-next'
</script>
