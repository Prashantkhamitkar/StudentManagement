import { useEffect, useState } from "react";

import Enterdata from "../services/Enterdata";
import { useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Update=()=>{
    const [datas,setdata]=useState({
        firstname:'',
        lastname:'',
        email:'',
        age:''
    })
    const navigate=useNavigate()
const data=JSON.parse(sessionStorage.getItem("data"))
useEffect(()=>{
      datas.firstname=data.firstname;
  datas.age=data.age
 datas.lastname=data.lastname;
  datas.email=data.email
},[])

const handleSubmit=()=>{
    Enterdata(datas).then((res)=>{
        console.log(datas)
        navigate("/home")
    })

}
const handleChange=(e)=>{
const {name,value}=e.target;
setdata({...datas,
    [name]:value,});
};

return(
    <div className="container">
         <h2>Student Signup</h2>
      
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={datas.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={datas.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={datas.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={datas.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      
    </div>
)

}
export default Update;