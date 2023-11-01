<template>
  <nav class="w-full px-10 flex items-center justify-between">
    <ul class="w-full flex max-sm:justify-center gap-10">
      <li>
        <RouterLink to="/" class="flex flex-col items-center hover:text-slate-500">
          <Home :size="18" />
          <span class="mt-1 text-sm">Home</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/characters" class="flex flex-col items-center hover:text-slate-500">
          <Contact2 :size="18" />
          <span class="mt-1 text-sm">Characters</span>
        </RouterLink>
      </li>
    </ul>
    <Badge
      v-if="charactersRoute"
      class="whitespace-nowrap bg-green-400 hover:bg-green-500 text-slate-800 cursor-pointer max-sm:hidden"
    >
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
