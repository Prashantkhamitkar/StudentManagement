import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { myAxios } from '../services/helper';

export default function App() {
  const navigate=useNavigate();
const [cdata,setdata]=useState([]);
useEffect(()=>{
  myAxios.get("/course/").then((res)=>{
    console.log(res.data)
    setdata(res.data);
    
  }).catch((error)=>console.log(error))
},[])
  const [showBasic, setShowBasic] = useState(false);
console.log(sessionStorage.getItem("studlog"));
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/home'>Student Management</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/' style={{marginLeft:"10px"}}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/signin'style={{ whiteSpace: 'nowrap' }} >Student-Section</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{marginLeft:"10px"}}>
                  Menu
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={()=>{
                    navigate("/login")
                  }}>Admin Login</MDBDropdownItem>
                  <MDBDropdownItem link onClick={()=>
                  navigate("/studentlogin")}>Student Login</MDBDropdownItem>
                  <MDBDropdownItem link onClick={()=>{
                    navigate("/contactus")
                  }}>Contact-us</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem> 
            <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Courses
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                 {
                  cdata.map((item,index)=>{
             return<MDBDropdownItem key={index} link onClick={()=>{
                      navigate(`/course/${item.name}`)
                    }}>{item.name}</MDBDropdownItem>
})
                 }
                 
                 </MDBDropdownMenu>
                </MDBDropdown>
              
                </MDBNavbarItem> 
                {(sessionStorage.getItem("studlog"))?
               ( <MDBNavbarItem> 
            <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                 Enroll-Course
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                 {
                  cdata.map((item,index)=>{
             return<MDBDropdownItem key={index} link onClick={()=>{
                      navigate(`/confirm/${item.name}`)
                    }}>{item.name}</MDBDropdownItem>
})
                 }
                 </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavbarItem> ):null
}
             
            <MDBNavbarItem>
              <MDBNavbarLink  href='#' tabIndex={-1} aria-disabled='true'>
          
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink  href='' tabIndex={-1} aria-disabled='true' style={{marginLeft:200}}>
              { (!(sessionStorage.getItem("isloggedin")||sessionStorage.getItem("studlog")))?(
          <button className='btn btn-primary' onClick={()=>navigate('/studentlogin')} style={{height:35}}>Login</button>
              )
               :(<button className='btn btn-primary' onClick={()=>navigate('/logout')} style={{height:35}}>Logout</button>
               )}
               </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}