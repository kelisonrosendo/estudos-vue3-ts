import { useQuery } from '@tanstack/vue-query'

interface Param {
  key: string
  url: string
}

const useFetch = ({ key, url }: Param) => {
  const { isLoading, isFetching, isError, data, error } = useQuery({
    queryKey: [key],
    queryFn: async () => await fetch(url).then((response) => response.json())
  })

  return {
    isLoading,
    isFetching,
    isError,
    data,
    error
  }
}

export default useFetch
