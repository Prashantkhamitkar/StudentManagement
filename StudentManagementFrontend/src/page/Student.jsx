import React, { useState } from 'react';
import Studentsignup from '../services/Studentsignup';
import { useNavigate } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const Student=()=> 
 {
  const [filedata,setfiledata]=useState(null)
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobilenumber:'',
    password:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
const filehandleChange=(e)=>{
  setfiledata(e.target.files[0])
}
  const handleSubmit = (e) => {
    e.preventDefault();
    const datas=new FormData();
    //formdata is interface which have methods append 
    
    datas.append('firstname', formData.firstname);
    datas.append('lastname', formData.lastname);
    datas.append('email', formData.email);
    datas.append('mobilenumber', formData.mobilenumber);
    datas.append('password', formData.password);
    datas.append('file', filedata);
Studentsignup(datas).then((res)=>{console.log(res.data)
navigate("/student")
}
);
    // Handle form submission, e.g., send data to the server
    // You can add your API request or data processing logic here

    console.log('Form Data:', formData);
  };

  return (
    <div >
      <h2>Student Signup</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={formData.firstname}
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
            value={formData.lastname}
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
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobilenumber">Mobile</label>
          <input
            type="tel"
            className="form-control"
            id="mobilenumber"
            name="mobilenumber"
            value={formData.mobilenumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Profile</label>
          <input
            type="file"
            className="form-control"
            id="file"
            name="file"
            onChange={filehandleChange}
            required
          />
        </div>
        <br></br>
<br></br>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default Student;