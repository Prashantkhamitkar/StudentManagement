import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { myAxios } from "../services/helper";


function Confirm() {
   const {name}= useParams();
   const [stddata,setstdata]=useState({})
   const navigate=useNavigate();
   const id=sessionStorage.getItem("id")
   useEffect(()=>
    {
        Swal.fire({
            title:`Do you want to purchase ${name} Course`,
            
            showCancelButton:true,
            confirmButtonText:'Yes',
            cancelButtonText:'No',
           
            confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', 
                
        }).then((result)=>{
            if(result.isConfirmed){
                Swal.fire(`Make Payment for ${name} course :)`)
                navigate(`/payment/${name}`)
            }
            else
            Swal.fire("Thank You ):")
        })
    }
    
   
   ,[name])
   useEffect(()=>{
    const fetchData = async () => {
        try {
            const studentResponse = await myAxios.get(`/student/${id}`);
            //console.log(studentResponse.data);
            // Assuming the student data needs to be set too
            setstdata(studentResponse.data);

            console.log(stddata.ispurchased)
            console.log(stddata);   
            if (stddata && stddata.ispurchased===1) {
                // If the course is already purchased, show a SweetAlert
                Swal.fire({
                  icon: 'info',
                  title: 'Already Enrolled!',
                  text: 'You have already enrolled the course.',
                });}
                else {
                    // If the course is not purchased, allow navigation to the payment page
                    navigate(`/payment/${name}`);}

        } catch (error) {
            console.log(error);
        }
    };
fetchData();
   },[navigate, name, stddata])
  
    // if (!stddata) {
    //     return <div>Loading...</div>; // You can show a loader or any message while waiting for data
    //   }
    return ( <>
     <div>
    
    </div>
    </> );
}

export default Confirm;