import { message } from "antd"
export const useAuthControl = ()=>{
  const auth = sessionStorage.getItem("secretKey")
  if(auth){
    return true

  } else{
    message("您没有权限操作")
    return false
  }

}