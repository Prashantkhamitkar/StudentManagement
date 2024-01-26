import { useEffect, useState } from "react";
import { BASE_URL, myAxios } from "../services/helper";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useParams } from "react-router-dom";
import Studentlogin from "./Studentlogin";
import Swal from "sweetalert2";
function Details() {
    const baseurl=BASE_URL;
    const {id}=useParams();
    //sessionStorage.getItem("sid");
  const [sdata,setdata]=useState(null)
  const [adata,setadata]=useState({
    inputAddress:'',
    inputAddress2:'',
    inputCity:'',
    state:'',
    inputZip:'',
    email:'',
  })
  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  ];
  
 useEffect(()=>{
    myAxios.get(`/student/${id}`).then((res)=>{
        console.log(res.data);
       
        setdata(res.data);
          }).catch((error)=>console.log(error))
 },[])
 const handlesubmit=(e)=>{
e.preventDefault();
console.log(sdata)
myAxios.post("/student/address",adata).then((res)=>{console.log(res.data)
Swal.fire({
title:"Success",
  text:"Address updated successfully",
  timer:5000,
  icon:"success"

})

}).catch((error)=>{
  console.log(adata);
  Swal.fire({
    title:"Error!",
      text:"Address not updated successfully",
      timer:5000,
      icon:"error"
    
    })
  console.log(error)})
} 
const handlechange=(e)=>{
const {name,value}=e.target
setadata({...adata,[name]:value})
}
if(sessionStorage.getItem("studlog"))
    return ( <><div className="container">
   
    {sdata ? (
      <div>
     
<div className="container">
  <div className="row">
    <div className="col">
    <div className="card" style={{width:"300px"}}>
  <img className="card-img-top" src={`${baseurl}/student/image/${sdata.imagename}`}  style={{width:"290px",height:"290px",objectFit:"contain"}} alt=""/>
  <h2 style={{font:"5px",color:"black",fontFamily:"fantasy"}}>{sdata.firstname} {sdata.lastname}</h2>
   <h5 style={{font:"1px",color:"black",fontFamily:"serif"}}>Email: {sdata.email}</h5>
    <h5 style={{font:"1px",color:"black",fontFamily:"unset"}}>Mobile: {sdata.mobilenumber}</h5>

  <a href="/update" className="btn btn-primary">Update Profile</a>
  
</div>
    </div>
    <div className="col">
    <form className="row g-3" onSubmit={handlesubmit}>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" required className="form-control" id="email" name="email" value={adata.email} onChange={handlechange} placeholder="Enter Your email"/>
  </div>
  
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text"  required className="form-control" id="inputAddress" value={adata.inputAddress} name="inputAddress" placeholder="1234 Main St" onChange={handlechange}/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" required className="form-control" id="inputAddress2" value={adata.inputAddress2} name="inputAddress2" placeholder="Apartment, studio, or floor" onChange={handlechange}/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" required className="form-control" id="inputCity" value={adata.inputCity} name="inputCity" onChange={handlechange}/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="state"  required className="form-select" name="state" onChange={handlechange} value={adata.state}>
    
{indianStates.map((state,index)=>{
return   <option key={index} value={state} >{state}</option>
})
}
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" required className="form-control" max={6} id="inputZip" name="inputZip" value={adata.inputZip} onChange={handlechange}/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input  required className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Update Details</button>
  </div>
</form>
    </div>
  </div>
 
</div>
        {/* Add more fields as needed */}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div></> );
  else
  return(<><Studentlogin></Studentlogin></>)
}

export default Details;