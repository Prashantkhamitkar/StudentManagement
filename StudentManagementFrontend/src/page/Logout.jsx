import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout=()=>{
const navigate=useNavigate()

useEffect(()=>{
    sessionStorage.removeItem("isloggedin");
    sessionStorage.removeItem("studlog");
    sessionStorage.removeItem("config");
    navigate("/studentlogin")
},[])
   
}
export default Logout;