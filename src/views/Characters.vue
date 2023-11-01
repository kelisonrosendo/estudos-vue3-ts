<template>
  <div v-if="store.isLoading">
    <Loader />
  </div>
  <div v-else>
    <div class="p-1 grid sm:grid-cols-2">
      <div class="flex gap-4 mb-4">
        <Input v-model="queryParams.search" placeholder="Search by character name" />
        <Button @click="onSearch"> Search </Button>
      </div>
      <div class="flex sm:justify-end max-sm:justify-center gap-4 mb-4">
        <Button :disabled="!store.info.prev" @click="onLoad('prev')"> Previous </Button>
        <Button :disabled="!store.info.next" @click="onLoad('next')"> Next </Button>
      </div>
    </div>
    <div v-if="noResults" class="mt-10 flex justify-center text-xl text-slate-500">
      No characters found!
    </div>
    <div v-else class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      <div v-for="character in store.results" :key="character.id">
        <CharacterCard
          :name="character.name"
          :image="character.image"
          :status="character.status"
          :specie="character.species"
          :location="character.location"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useCharacterStore } from '@/stores/character'
import { CharacterCard, Loader } from '@/components'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Action {
  prev: string
  next: string
}

const store = useCharacterStore()
const noResults = computed(() => store.results.length === 0)

const queryParams = reactive({
  page: 1,
  search: ''
})

onMounted(() => {
  onLoad()
})

const onLoad = (action: string | null = null) => {
  if (action) {
    queryParams.page = store.info[action as keyof Action] || 1
  }

  store.getCharacters(queryParams)
}

const onSearch = () => {
  queryParams.page = 1

  onLoad()
}
</script>
