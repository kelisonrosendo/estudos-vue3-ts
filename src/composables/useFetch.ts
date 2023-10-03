import { ref } from 'vue'

export async function useFetch(url: string) {
  const data = ref<Array<any>>([])
  const error = ref<any>(null)
  const loading = ref<boolean>(false)

  const fetchData = async () => {
    loading.value = true

    try {
      const response = await fetch(url)
      data.value = await response.json()
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  await fetchData()

  return { data, loading, error }
}
