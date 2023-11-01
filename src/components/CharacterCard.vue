<template>
  <Card class="h-full">
    <CardContent>
      <img class="w-full my-6 rounded-t-lg" :src="image" :alt="name" />
      <CardTitle> {{ name }} </CardTitle>
      <CardDescription>{{ specie }}</CardDescription>
    </CardContent>
    <CardFooter>
      <ul class="text-sm space-y-2">
        <li class="flex items-center gap-1">
          <strong>Status: </strong>
          <Badge :class="computedStatus">{{ status }}</Badge>
        </li>
        <li>
          <strong>Location: </strong>
          {{ location?.name }}
        </li>
      </ul>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Location {
  name: string
}

interface Prop {
  name: string
  image: string
  status: string
  specie: string
  location: Location
}

const props = withDefaults(defineProps<Prop>(), {
  image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
  status: 'unknown',
  specie: 'Unknown'
})

const computedStatus = computed<string>(() => {
  interface Enum {
    unknown: string
    Dead: string
    Alive: string
  }

  const statusEnum = {
    unknown: 'bg-slate-300 hover:bg-slate-400 text-slate-800 cursor-pointer',
    Dead: 'bg-red-400 hover:bg-red-500 cursor-pointer',
    Alive: 'bg-green-400 hover:bg-green-500 text-slate-800 cursor-pointer'
  }

  return statusEnum[props.status as keyof Enum]
})
</script>
