<template>
  <nav class="w-full flex items-center justify-between">
    <ul class="flex gap-10">
      <li class="flex items-center gap-2">
        <Home :size="22" />
        <RouterLink to="/"> Home </RouterLink>
      </li>
      <li class="flex items-center gap-2">
        <Contact2 :size="22" />
        <RouterLink to="/characters"> Characters </RouterLink>
      </li>
    </ul>
    <Badge v-if="charactersRoute" class="bg-green-300 text-slate-800 text-sm">
      Characters found: {{ charactersCounter }}
    </Badge>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCharacterStore } from '@/stores/character'
import { Home, Contact2 } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { computed } from 'vue'

const route = useRoute()
const charactersRoute = computed(() => route.name === 'characters')

const store = useCharacterStore()
const charactersCounter = computed(() => store.info.count || 0)
</script>
