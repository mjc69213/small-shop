import Axios from "axios"
Axios.defaults.baseURL = "http://localhost:3303/api"
// Axios.defaults.baseURL = "http://192.168.0.107:3303/api"
// Axios.defaults.baseURL = "https://www.11e.top/api"

Axios.interceptors.request.use(config=>{
  return config
},err=>{
  console.log(err)
})

Axios.interceptors.response.use(res=>{
  return res
},err=>{
  console.log(err)
})

export default Axios