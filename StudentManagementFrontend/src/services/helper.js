import axios from "axios";
export const BASE_URL='http://localhost:8080';
const jwttoken=sessionStorage.getItem("jwttoken")
const config = {
    headers: {
      'Authorization': `Bearer ${jwttoken}`
    }
  };
  const axiosconfig=JSON.stringify(config);
sessionStorage.setItem("config",axiosconfig);

export const myAxios=axios.create({
    baseURL:BASE_URL,

})