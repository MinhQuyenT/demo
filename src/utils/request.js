import axios from 'axios'

//axios 
const request = axios.create({
  // API 
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000,
  headers: {
    "Content-type": "application/json"
  }
})


export default request

export {
  request as axios
}
