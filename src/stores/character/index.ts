import { defineStore } from 'pinia'
import { getCharacterService } from '@/services/character'

interface Info {
  count?: number
  pages?: number
  next?: number
  prev?: number | null
}

interface Location {
  name: string
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
  info: Info
  results: Result[]
}

interface Param {
  page: number
  search: string
}

export const useCharacterStore = defineStore('characters', {
  state: (): State => ({
    isLoading: false,
    info: {},
    results: []
  }),
  actions: {
    async getCharacters(params: Param) {
      this.isLoading = true

      await getCharacterService({
        params,
        onSuccess: ({ data }: any) => {
          const { info, results } = data.data.characters

          this.info = info
          this.results = results
        },
        onError: ({ response }: any) => console.error(response.data),
        onFinally: () => (this.isLoading = false)
      })
    }
  }
})
