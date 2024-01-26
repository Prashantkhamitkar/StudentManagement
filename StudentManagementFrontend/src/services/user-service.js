import { myAxios } from "./helper";
export  const Login=(user)=>{
    return myAxios.post('/users/',user).then((response)=>response.data);
    //here not response.json()
};