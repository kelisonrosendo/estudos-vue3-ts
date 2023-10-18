export default ({ page, search }: { page: number; search: string }) => `{
  characters(
    page: ${page}
    filter: {
      name: "${search}"
    }
  ) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      status
      species
      image
      location {
        name
      }
    }
  }
}`
