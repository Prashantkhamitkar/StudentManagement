import { myAxios } from "./helper"

const Studentsignup=(user)=>
{
   return myAxios.post('/student/signup',user).then((res)=>res.data);
}
export default Studentsignup;