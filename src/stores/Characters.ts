import { toRaw } from 'vue'
import { defineStore } from 'pinia'
import { useFetch } from '@/composables/useFetch'

interface Info {
  count: number
  pages: number
  next: string
  prev: string | null
}

interface Location {
  name: string
  url: string
}

interface Result {
  id: number
  name: string
  image: string
  status: string
  species: string
  location: Location
}

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    info: {} as Info,
    results: [] as Array<Result>
  }),

  actions: {
    async getData(url = 'https://rickandmortyapi.com/api/character') {
      const { data }: any = await useFetch(url)

      this.info = toRaw(data.value.info)
      this.results = toRaw(data.value.results)
    }
  }
})
