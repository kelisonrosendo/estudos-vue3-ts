import { useFetch } from '@/composables'
import characterQuery from './character-query'

interface Param {
  page: number
  search: string
}

interface ServiceParam {
  params: Param
  onSuccess: ({ data }: any) => void
  onError: ({ response }: any) => void
  onFinally: () => void
}

const getCharacterService = ({ params, onSuccess, onError, onFinally }: ServiceParam) =>
  useFetch({
    data: {
      query: characterQuery(params)
    },
    method: 'post',
    url: 'https://rickandmortyapi.com/graphql',
    onSuccess,
    onError,
    onFinally
  })

export { getCharacterService }
