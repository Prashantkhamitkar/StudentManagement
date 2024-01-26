import { useState } from "react";
import { Login } from "../services/user-service";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Signin=()=>{
  const imgurl=process.env.PUBLIC_URL+'/image/—Pngtree—book bird learn freedom_3607383.png';
  const navigate=useNavigate();
  const jwttoken=null;
    const [data,setdata]=useState({
        email:'',
        password:''
    })
  
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setdata({
          ...data,
          [name]: value,
        });
    }
    const handleLogin=(event)=>{
        event.preventDefault()
        console.log(data);
        Login(data).then((resp)=>{
            console.log(resp.jwttoken)
            console.log("success");
            Swal.fire(
              {
                  title:'Success!',
                  text:'Successfully Logged in',
                  timer:10000,
                  icon:'success'
                  
              })
              sessionStorage.setItem("isloggedin",true)
            sessionStorage.setItem("jwttoken",resp.jwttoken)
            navigate("/home")
           
        }).catch((error)=>{
            console.log(error);
            console.log("failed");
            Swal.fire(
              {
                  title:'Error!',
                  text:'Enter valid credentials',
                  timer:5000,
                  icon:'error'
                  
              }
          );

        })

    }

   
    
    
    
     return (<>
      <section className="vh-100">
<div className="container-fluid h-custom">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-md-9 col-lg-6 col-xl-5">
      <img src={imgurl}
        className="img-fluid" alt="Sample image"/>
    </div>
    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <form onSubmit={handleLogin}>
        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
          <p className="lead fw-normal mb-0 me-3"><strong>Administration Login</strong></p>
          <br></br>
          <br></br><br></br>
          <br></br>
          
        </div>

        
        <div className="form-outline mb-4">
          <input type="email"   placeholder="name@example.com" id="email"
               name="email"
               value={data.email}
              onChange={handleChange} className="form-control form-control-lg"
             />
          <label className="form-label" for="form3Example3">Email address</label>
        </div>

       
        <div className="form-outline mb-3">
          <input type="password" id="password"
               name="password"
               value={data.password}
              onChange={handleChange} className="form-control form-control-lg"
             />
          <label className="form-label" for="form3Example4">Password</label>
        </div>

        <div className="d-flex justify-content-between align-items-center">
         
          <div className="form-check mb-0">
            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
            <label className="form-check-label" for="form2Example3">
              Remember me
            </label>
          </div>
          
        </div>

        <div className="text-center text-lg-start mt-4 pt-2">
          <button type="submit" className="btn btn-primary btn-lg"
            style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
         
        </div>

      </form>
    </div>
  </div>
</div>
<div
  className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
 
  <div className="text-white mb-3 mb-md-0">
    
  </div>
 
  <div>
    <a href="#!" className="text-white me-4">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#!" className="text-white me-4">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="#!" className="text-white me-4">
      <i className="fab fa-google"></i>
    </a>
    <a href="#!" className="text-white">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
  
</div>
</section></>
     //<div className="container">
    //     <h2>Administration Login</h2>
    //     <form onSubmit={submitForm}>
    //     <div className="mb-3">
    //     <label htmlFor="email" className="form-label">Username</label>
    //         <input
    //           type="text"
    //           id="email"
    //           name="email"
    //           value={data.email}
    //           onChange={handleChange}
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="password" className="form-label">Password:</label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           value={data.password}
    //           onChange={handleChange} className="form-control"
    //         />
    //       </div>
    //       <button type="submit" className="btn btn-primary">Login</button>
    //     </form>
    //   </div> 
    );
}

export default Signin;