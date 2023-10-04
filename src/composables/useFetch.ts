import { useQuery } from '@tanstack/vue-query'

export async function useFetch(key: string, url: string) {
  const getData = async () => await fetch(url).then((response) => response.json())

  const { isLoading, data } = useQuery({
    queryKey: [key],
    queryFn: getData
  })

  return { isLoading, data }
}
