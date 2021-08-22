import axios from "axios";

const baseApiUrl = axios.create({
    baseURL: 'https://my-json-server.typicode.com/devKhairul/hello-vue',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })


  export default {
      getEvents() {
          return baseApiUrl.get('/events')
      }
      
  }