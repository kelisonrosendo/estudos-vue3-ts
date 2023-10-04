<template>
  <div v-if="isLoading">
    <Loader />
  </div>
  <div v-else class="max-w-[1230px] m-auto">
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      <div v-for="character in data?.results" :key="character.id">
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
import { CharacterCard, Loader } from '@/components'
import { useFetch } from '@/composables'

const { isLoading, data } = useFetch({
  key: 'characters',
  url: 'https://rickandmortyapi.com/api/character'
})
</script>
