import { toRaw } from 'vue'
import { defineStore } from 'pinia'
import { useQuery } from '@tanstack/vue-query'

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
    getData(url = 'https://rickandmortyapi.com/api/character') {
      const getCharacters = async (): Promise<State> =>
        await fetch(url).then((response) => response.json())

      const { data } = useQuery({
        queryKey: ['characters'],
        queryFn: getCharacters
      })

      console.log(data)

      this.info = toRaw(data)
      this.results = toRaw(data)
    }
  }
})
