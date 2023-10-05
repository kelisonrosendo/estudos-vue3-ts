import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useFetch } from '@/composables'

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

interface State {
  isLoading: boolean
  info: Info | {}
  results: Result[]
}

export const useCharactersStore = defineStore('characters', {
  state: (): State => ({
    isLoading: false,
    info: {},
    results: []
  }),

  actions: {
    async getData(url: string = 'https://rickandmortyapi.com/api/character') {
      const { isLoading, data } = useFetch({
        key: 'characters',
        url
      })

      this.isLoading = computed<boolean>(() => isLoading?.value)
      this.info = computed<Info>(() => data.value?.info)
      this.results = computed<Result[]>(() => data.value?.results)
    }
  }
})
