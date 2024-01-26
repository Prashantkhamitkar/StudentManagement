import React, { useState } from 'react';
    //import '../page/Login.css'; // Import your CSS file for styling
    import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
    import "../page/Newcss.css"
import { myAxios } from '../services/helper';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../page/Model.css"
import "../page/Checkmark.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "../page/Button.css"
function Studentlogin() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [email,setemail]=useState('');
  const [otp,setotp]=useState('');
  const [showforgetpassword,setshowforgetpassword]=useState(false)
  const [password,setpassword]=useState({
    password:''
  })
  const [error, setError] = useState('');
  const [showafterclick,setshowafterclick]=useState(false)
const [resotp,setresotp]=useState('');
const [verification,setverification]=useState('');
  const navigate =useNavigate();
let isCorrectOTP=false;
    const [userdata,setdata]=useState({
      email:'',
      password:''
    })
  const handelchange=(e)=>{
    const {name,value}=e.target;
    setdata({...userdata,[name]:value})
  }
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
    const handleLogin = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      // Handle the login logic here
      // You can make an API call to authenticate the user
      // For this example, we'll just display a message
      
      myAxios.post("/student/",userdata,{
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res)=>{
       console.log(res.data)
       sessionStorage.setItem("studlog",true)
       sessionStorage.setItem("id",res.data.id);
       Swal.fire(
        {
            title:'Success!',
            text:'Successfully Logged in',
            timer:10000,
            icon:'success'
            
        }
    );
    //sessionStorage.setItem("sid",res.data.id);
    
    navigate(`/details/${res.data.id}`)
    }).catch((e)=>{console.log(e)
      setError('Enter valid credentials');
      console.log(userdata)
      Swal.fire(
        {
            title:'Error!',
            text:'Enter valid credentials',
            timer:5000,
            icon:'error'
            
        }
    );

    })
     
    };
    const handlevent=()=>{
setshowforgetpassword(true)
    }
  const sendresetpassword=()=>{
console.log(email);
if (!email) {
  setError('Email is required');
  return;
}
myAxios.get(`/student/send/${email}`).then((res)=>{
  console.log(res.data)
  setresotp(res.data);
  setError('');
  Swal.fire(
    {
        title:'success',
        text:'Enter OTP',
        timer:1000,
        icon:'success'
        
    })

}).catch((error)=>{
  console.log(error)
  setshowforgetpassword(true)
  setshowafterclick(false)
  setError('Something went wrong');
  Swal.fire(
    {
        title:'Error!',
        text:'something went wrong',
        timer:5000,
        icon:'error'
        
    })

})
setshowafterclick(true)
setshowforgetpassword(false)
  }
  const changepassword=()=>{
console.log(password);
console.log(resotp);
if (!otp || !password.password) {
  setError('OTP and Password are required');
  
  Swal.fire({
    title:'Warning',
    text:'Enter the Required field',
    timer:5000,
    icon:'warning'
  })
  return;
}
myAxios.post(`/student/send/${email}`,password,{
  headers:{
    "Content-Type":"application/json"
  }
}).then((res)=>{
  console.log(res.data);
  setError('');
  Swal.fire(
    {
        title:'successfully updated password ',
        text:'Success',
        timer:3000,
        icon:'success'
        
    })
    setshowafterclick(false)
}).catch((error)=>{
  console.log(error);
  setError('Something went wrong');
  Swal.fire(
    {
        title:'Error!',
        text:'something went wrong',
        timer:5000,
        icon:'error'
        
    })
})

  }
  const handleotp=(e) => {
    e.preventDefault();
    
    const inputotp=e.target.value;
    setotp(inputotp);
    //console.log(inputotp);
    if(resotp.toString()===inputotp){
    
      setverification("OTP is Correct");
       
    }
    else{
      setverification("OTP is Incorrect please enter correct ");
    
    }
     
  }
  const handlepassword=(e)=>{
    const {name,value}=e.target;
    setpassword({...password,[name]:value})
  }
 
    isCorrectOTP=(verification==="OTP is Correct");
   let inputclass=(isCorrectOTP?'correct':'');
    return (<>
      <section className="vh-100">
<div className="container-fluid h-custom">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-md-9 col-lg-6 col-xl-5">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        className="img-fluid" alt="Sample image"/>
    </div>
    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <form onSubmit={handleLogin}>
        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
          <p className="lead fw-normal mb-0 me-3"><strong>Stuent Login</strong></p>
          <br></br>
          <br></br><br></br>
          <br></br>
          
        </div>

        
        <div className="form-outline mb-4">
          <input type="email" required id="email" placeholder="name@example.com" name='email' value={userdata.email} onChange={handelchange} className="form-control form-control-lg"
             />
          <label className="form-label" for="form3Example3">Email address</label>
        </div>

       
        <div className="form-outline mb-3">
          <input type="password" required name="password" id="password" placeholder="Password" value={userdata.password} onChange={handelchange} className="form-control form-control-lg"
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
          <Link onClick={handlevent}>Forgot password?</Link>
        </div>

        <div className="text-center text-lg-start mt-4 pt-2">
          <button type="submit" className="btn btn-primary btn-lg"
            style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
          <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={"/signin"}
              className="link-danger">Register</Link></p>
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
{showforgetpassword&&(<div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setshowforgetpassword(false)}>
              &times;
            </span>
            <h2>Forgot Password</h2>
            <p>Enter your email to reset your password:</p>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              required
              onChange={(e) => setemail(e.target.value)}
            />
            <button onClick={sendresetpassword}>Send Email</button>
          </div>
        </div>
      )}
      {showafterclick&&(<div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setshowafterclick(false)}>
              &times;
            </span>
            <h2>change Password</h2>
            <p>Enter OTP to verify your email:</p>
            <input
  type="text"
  placeholder="Enter OTP"
  value={otp}
  required
  onChange={handleotp}
  className={inputclass}
/>

{isCorrectOTP && (
  <div className="checkmark">&#10003;</div>
)}

<div className="password-input-container">
  <input
    type={showNewPassword ? 'text' : 'password'}
    placeholder="Enter your new password"
    value={password.password}
    required
    name='password'
    onChange={handlepassword}
  />
  <button
    type="button"
    className="password-toggle"
    onClick={toggleNewPasswordVisibility}
  >
    {showNewPassword ? <FaEyeSlash style={{ color: 'black' }}/> : <FaEye style={{ color: 'black' }}/>}
  </button>
</div>
            <button onClick={changepassword}>Change Password</button>
          </div>
        </div>
      )}
</section>




</>
        
    //  <form onSubmit={handleLogin}>
    //     <div className="container">
    //   <div className="row justify-content-center align-items-center vh-100">
    //     <div className="col-md-4">
          
    //         <h2 className="mb-4">Login</h2>
    //         <div className="mb-3">
    //           <label htmlFor="email" className="form-label">Email address</label>
    //           <input type="email" className="form-control" id="email" placeholder="name@example.com" name='email' value={userdata.email} onChange={handelchange}/>
    //         </div>
    //         <div className="mb-3">
    //           <label htmlFor="password" className="form-label">Password</label>
    //           <input type="password" name='password' className="form-control" id="password" placeholder="Password" value={userdata.password} onChange={handelchange}/>
    //         </div>
    //         <div className="mb-3 form-check">
    //           <input type="checkbox" className="form-check-input" id="rememberMe" />
    //           <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
    //         </div>
    //         <button type="submit" className="btn btn-primary w-100">Login</button>
          
    //     </div>
    //   </div>
    // </div>
    //     </form>
      
    );
  }

export default Studentlogin;