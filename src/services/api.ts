import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.mytiplife.com/api/v1'
})

export default api
