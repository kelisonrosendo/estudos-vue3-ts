<template>
  <div class="max-w-[1230px] m-auto">
    <div class="mt-[4px] w-full flex gap-4 mb-4">
      <div class="flex gap-4 w-[50%]">
        <Input placeholder="Search by character name" />
        <Button variant="primary">Search</Button>
      </div>
      <div class="flex justify-end gap-4 w-[50%]">
        <Button variant="primary" @click="onClickPrevious" :disabled="!charactersStore.info.prev">
          Previous
        </Button>
        <Button variant="primary" @click="onClickNext" :disabled="!charactersStore.info.next">
          Next
        </Button>
      </div>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      <div v-for="character in charactersStore.results" :key="character.id">
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
import { useCharactersStore } from '@/stores/Characters'
import { CharacterCard } from '@/components'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const charactersStore = useCharactersStore()
await charactersStore.getData()

const onClickPrevious = async () => {
  const { prev } = charactersStore.info

  if (prev !== null) await charactersStore.getData(prev)
}

const onClickNext = async () => {
  const { next } = charactersStore.info

  if (next !== null) await charactersStore.getData(next)
}
</script>
