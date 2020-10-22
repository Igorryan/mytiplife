import axios from 'axios'

const api = axios.create({
  baseURL:
    'http://mytip-env.eba-cv6sgh29.us-east-1.elasticbeanstalk.com/api/v1/'
})

export default api
