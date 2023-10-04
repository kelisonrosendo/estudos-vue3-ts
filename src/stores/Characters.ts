import { defineStore } from 'pinia'
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
  info: Info | {}
  results: Array<Result> | []
}

export const useCharactersStore = defineStore('characters', {
  state: (): State => ({
    info: {},
    results: []
  }),

  actions: {
    async getData(url = 'https://rickandmortyapi.com/api/character') {
      const { data } = useFetch({
        key: 'characters',
        url
      })

      this.info = data.value.info
      this.results = data.value.results
    }
  }
})
