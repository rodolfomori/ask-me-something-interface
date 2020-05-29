import axios from 'axios'

const api = axios.create({
  baseURL: 'https://9okzapx2nd.execute-api.us-east-1.amazonaws.com/production',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
