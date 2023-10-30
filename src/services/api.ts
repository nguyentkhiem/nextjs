import Cookie from 'js-cookie'
import axios, { AxiosResponse, HttpStatusCode } from 'axios'

const apiConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiConfig.interceptors.request.use(
  (config) => {
    const token = Cookie.get('access-token')
    if (token) {
      config.headers['x-access-token'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// handle 401 , 500 ...
apiConfig.interceptors.response.use(
  (res: AxiosResponse) => {
    const status: number = res.status
    if (status === HttpStatusCode.Unauthorized) console.log('unauthorized')
    if (status === HttpStatusCode.InternalServerError)
      console.log('server error')

    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

const apiServices = {
  post(urlApi: string, params?: any) {
    return apiConfig
      .post(urlApi, params)
      .then((response: any) => response)
      .catch((error: any) => error)
  },
  put(urlApi: string, params?: any) {
    return apiConfig
      .put(urlApi, params)
      .then((response: any) => response)
      .catch((error: any) => error)
  },
  patch(urlApi: string, params?: any) {
    return apiConfig
      .patch(urlApi, params)
      .then((response: any) => response)
      .catch((error: any) => error)
  },
  get(urlApi: string, params?: any) {
    return apiConfig
      .get(urlApi, params)
      .then((response: any) => response)
      .catch((error: any) => error)
  },
  delete(urlApi: string) {
    return apiConfig
      .delete(urlApi)
      .then((response: any) => response)
      .catch((error: any) => error)
  },
}

export default apiServices
