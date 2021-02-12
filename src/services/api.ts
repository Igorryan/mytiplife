import axios from 'axios'

const api = axios.create({
  baseURL:
    'http://mytiplifeDev-env.eba-gm3u9g5s.us-east-1.elasticbeanstalk.com/api/v1'
})

export default api
