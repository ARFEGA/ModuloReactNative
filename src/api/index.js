import axios from 'axios'

// DOC API: http://api-got.keepcoding.io/doc
const BASE_URL = 'http://api-got.keepcoding.io'

export function configureAxios () {
  axios.defaults.baseURL = BASE_URL
}

export function fetchHouses () {
  const endPoint = '/casas'
  return axios.get(endPoint)
}
