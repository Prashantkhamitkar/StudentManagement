import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, myAxios } from "../services/helper";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Payment.css'
import Swal from "sweetalert2";
function Payment() {
    const {name}=useParams()
    const imgurl=`${BASE_URL}/student/image/`
    const [stddata,setstddata]=useState({});
    const [courdata,setcourdata]=useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [cvv,setcvv]=useState('');
    const [cardnumber,setcardnumber]=useState('');
    const id=sessionStorage.getItem("id");
    const handlecvv = (e) => {
      const { value } = e.target;
      // Allow only numbers and limit the length to 3 for CVV
      if (/^[0-9]*$/.test(value) && value.length <= 3) {
        setcvv(value);
      }
    };
    const handlecardnumber = (e) => {
      const { value } = e.target;
      // Allow only numbers and limit the length to 16 for card number
      if (/^[0-9]*$/.test(value) && value.length <= 16) {
        setcardnumber(value);
      }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentResponse = await myAxios.get(`/student/${id}`);
                //console.log(studentResponse.data);
                // Assuming the student data needs to be set too
                setstddata(studentResponse.data);
                console.log(stddata.ispurchased)
                const courseResponse = await myAxios.get(`/course/${name}`);
                console.log(courseResponse.data);
                setcourdata(courseResponse.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id, name]); 
    useEffect(()=>{
        console.log(courdata)
        console.log(stddata.ispurchased)
    },[courdata])
const handlesubmit=(e)=>{
e.preventDefault();    
if (stddata && stddata.ispurchased===1) {
  // If the course is already purchased, show a SweetAlert
  Swal.fire({
    icon: 'info',
    title: 'Already Enrolled!',
    text: 'You have already enrolled the course.',
  });}
else{
const object={
  "studentid":`${id}`,
  "cname":`${name}`,
  "date":`${new Date().toISOString()}`,


}
myAxios.post("/student/makepayment",object).then(res=>{
  console.log(res.data);
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Payment successful!',
  });
setPaymentSuccess(true)
}).catch(error=>{
  console.log(error)
  Swal.fire({
    icon: 'error',
    title: 'Failed!',
    text: 'Payment Failed',
  });

})
}
}

    if (!courdata) {
        return <div>Loading...</div>; // You can show a loader or any message while waiting for data
      }
    return ( <> 
     <form onSubmit={handlesubmit}>
    <div className="container mt-6">
  <div className="divrow">
    <div className="col-md-12">
      <div className="cards cardsforpayment">
        <div className="card-body paymentbody" >
          <h5 className="card-title payment-title"  style={{color:"black"}}>Student Information</h5>
          <div className="formdata">
          <img
            className="imgpayment"
            src={`${imgurl}${stddata.imagename}`}
            
            alt="Student"
          />
          <br /><label>Profile</label>
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              value={`${stddata.firstname} ${stddata.lastname}`}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-control" type="email" value={stddata.email} readOnly />
          </div>
          <div className="form-group ">
            <label>Mobile Number:</label>
            <input
              className="form-control"
              type="tel"
              value={stddata.mobilenumber}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12">
      <div className="cards cardsforpayment">
        <div className="card-body paymentbody" >
          <h5 className="card-title payment-title"  style={{color:"black"}}>Choosen Course</h5>
          
          <div className="form-group-label">
            <label >Course Name:</label>
            <input
              className="form-control"
              type="text"
              value={courdata.name}
              readOnly
           />
          </div>
          <div className="form-group">
            <label>Course Fees:</label>
            <input className="form-control" type="email" value={courdata.price} readOnly />
          </div>
          <div className="form-group ">
            <label>Seats :</label>
            <input
              className="form-control"
              type="tel"
              value={courdata.availableSeats}
              readOnly
            />
          </div>
          <div className="form-group ">
            <label>Course Duration:</label>
            <input
              className="form-control"
              type="tel"
              value={courdata.duration}
              readOnly
            />
          </div>
          <div className="form-group ">
            <label>Location:</label>
            <input
              className="form-control"
              type="tel"
              value={courdata.location}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
   
   <div className="col-md-12">
      <div className="cards cardsforpayment">
        <div className="card-body paymentbody" >
          <h5 className="card-title payment-title"  style={{color:"rgb(50, 120, 180)"}}>Payment</h5>
          
          <div className="form-group-label">
            <label >Choosen Course:</label>
            <input
              className="form-control"
              type="text"
              value={courdata.name}
              readOnly
           />
          </div>
          <div className="form-group">
            <label>Amount :</label>
            <input className="form-control" type="email" value={courdata.price} readOnly />
          </div>
          <div className="form-group ">
            <label>Enter Card Number :</label>
            <input
              className="form-control"
              type="tel"
              value={cardnumber}
              onChange={handlecardnumber}
              maxLength={16}
              placeholder="XXXX XXXX XXXX XXXX"
              required  
            />
            {cardnumber.length !== 16 && (
            <small className="text-danger" style={{color:'red'}}>Please enter a valid 16-digit card number.</small>
          )}
          </div>
          <div className="form-group ">
            <label>Cvv:</label>
            <input
              className="form-control"
              type="text"
              value={cvv}
            onChange={handlecvv}
            maxLength={3}
            required
                          />
                          {cvv.length !== 3 && (
            <small className="text-danger" style={{color:'red'}}>Please enter a valid CVV.</small>
          )}
          </div>
          <div className="form-group " >
            <br />
            <div style={{textAlign:'center'}}>
            
            <button type="submit" className="btn btn-success" disabled={paymentSuccess} >Payment</button>
          </div></div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</form>
 </> );
}

export default Payment;