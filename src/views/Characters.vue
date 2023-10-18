<template>
  <div v-if="store.isLoading">
    <Loader />
  </div>
  <div v-else>
    <div class="p-1 grid lg:grid-cols-2">
      <div class="flex gap-4 mb-4">
        <Input v-model="queryParams.search" placeholder="Search by character name" />
        <Button @click="onLoad"> Search </Button>
      </div>
      <div class="flex justify-end gap-4 mb-4">
        <Button :disabled="!store.info.prev" @click="onPrevious"> Previous </Button>
        <Button :disabled="!store.info.next" @click="onNext"> Next </Button>
      </div>
    </div>
    <div v-if="noResults">No characters found!</div>
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

const store = useCharacterStore()

const queryParams = reactive({
  page: 1,
  search: ''
})

const onLoad = () => {
  store.getCharacters(queryParams)
}

onMounted(() => {
  onLoad()
})

const noResults = computed(() => store.results.length === 0)

const onPrevious = () => {
  queryParams.page = store.info.prev || 1

  onLoad()
}

const onNext = () => {
  queryParams.page = store.info.next || 1

  onLoad()
}
</script>
