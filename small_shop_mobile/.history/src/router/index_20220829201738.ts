import { createRouter,createWebHashHistory } from "vue-router"
// const  Home  = ()=>import("../views/home")
// const  Home  = ()=>import("../views/home")
import Home from "../views/home"
const  About  = ()=>import("../views/about")

const routes = [
  {
    path:"",
    component:
  }
] 

export default createRouter({
  routes:[],
  history:createWebHashHistory(),

})
