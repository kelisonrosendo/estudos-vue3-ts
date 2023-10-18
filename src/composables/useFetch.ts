import axios from 'axios'

interface httpMethod {
  get: string
  post: string
  patch: string
  put: string
  delete: string
}

interface Param {
  method: string
  url: string
  data: object
  onSuccess: ({ data }: any) => void
  onError: ({ response }: any) => void
  onFinally: () => void
}

const httpMethods: httpMethod = {
  get: 'get',
  post: 'post',
  patch: 'patch',
  put: 'put',
  delete: 'delete'
}

const useFetch = ({ method, url, data, onSuccess, onError, onFinally }: Param) => {
  try {
    if (!httpMethods[method as keyof httpMethod]) {
      throw new Error(`Método HTTP inválido. Use: ${Object.values(httpMethods)}.`)
    }

    if (!url) {
      throw new Error('O parâmetro "url" é obrigatório para criação da instância do serviço.')
    }

    if (method === httpMethods.get && data) {
      throw new Error('O método "get" não pode enviar conteúdo no corpo da requisição.')
    }

    return axios({
      method,
      url,
      data
    })
      .then(onSuccess)
      .catch(onError)
      .finally(onFinally)
  } catch (error) {
    console.error(error)
  }
}

export default useFetch
