import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myAxios } from "../services/helper";
import "../page/Course.css"
import "../page/Table.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Course=()=>{
const {name}=useParams();
const [showPopup, setShowPopup] = useState(false);
const [sdata,syldata]=useState([])
  const handleMouseEnter = () => {
    setShowPopup(true);
    myAxios.get(`/course/topic/${name}`).then((res)=>{console.log(res.data)
    syldata(res.data);
    }).catch
    ((error)=>console.log(error))
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

console.log(name)
const imgbase='/CourseImg/';
let fullurl='';//this gives us the error because const is not mutable
let fullurl1='';
let fullurl2='';
const [cdata,setdata]=useState([]);
useEffect(() => {
    // Define your load function
    const load = async () => {
      try {
        const result = await myAxios.get(`/course/${name}`);
        setdata(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Call the load function when the component mounts and when name changes
    load();
  }, [name]);
switch (name) {
    case "DAC":
        fullurl=imgbase+"istockphoto-1393947553-170667a.webp";
        fullurl1=imgbase+"istockphoto-1399154821-170667a.webp";
        fullurl2=imgbase+"istockphoto-1430627471-170667a.webp";
        break;
        case "DBDA":
        fullurl=imgbase+"istockphoto-1473164518-612x612.jpg";
        fullurl1=imgbase+"istockphoto-846843116-612x612.jpg";
        fullurl2=imgbase+"istockphoto-1257617279-612x612.jpg";
        break;
        case "DMC":
            fullurl=imgbase+"istockphoto-1195696110-612x612.jpg";
            fullurl1=imgbase+"istockphoto-1174690086-612x612.jpg";
            fullurl2=imgbase+"istockphoto-1407200725-612x612.jpg";
            break;
            case "DESD":
                fullurl=imgbase+"istockphoto-1396520400-612x612.jpg";
                fullurl1=imgbase+"istockphoto-529418492-612x612.jpg";
                fullurl2=imgbase+"istockphoto-658859022-612x612.jpg";
                break;
                case "DITISS":
                    fullurl=imgbase+"istockphoto-1456739978-170667a.webp";
                    fullurl1=imgbase+"istockphoto-1311084713-612x612.jpg";
                    fullurl2=imgbase+"istockphoto-1407863764-612x612.jpg";
                    break;
    default:
        break;
}
return (<>
<br></br>
<br></br>
<center><div width="30%" height="30%" className=" rounded-circle">
<strong style={{fontSize:"30px"}}>{cdata.name} Course Details</strong>
</div></center>
<br></br>
<div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
  <div className="cards h-100">
    <img src={fullurl} className="card-img-top" alt="Skyscrapers"/>
    <div className="card-body">
      <h5 className="card-title" style={{fontSize:"25px"}}>Course : {cdata.name}</h5>
      <p className="card-text">
      <b>Location: {cdata.location}</b> 
      </p>
      <p className="card-text">
       <b>Course Fees: {cdata.price}</b>
      </p>
      <p className="card-text">
       <b>Total Seats: {cdata.totalSeats}</b>
      </p>
      <p className="card-text">
       <b>Course Duration: {cdata.duration}</b>
      </p>
      <div
      className="syllabus-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
   
   >
    <button className="btn btn-primary">Syllabus
</button>  
      {showPopup && (
        <div className="syllabus-popup">
           <table className="table">
      <thead>
        <tr>
          <th>Topic</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {sdata.map(course => (
          <tr key={course.id}>
            <td>{course.topic}</td>
            <td>{course.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
          This is your syllabus content.
        </div>
      )}
    </div>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
<div className="col">
  <div className="cards h-100">
    <img src={fullurl1} className="card-img-top" alt="Los Angeles Skyscrapers"/>
    <div className="card-body">
      <h5 className="card-title">Prerequisites </h5>
      <p className="card-text"><b>{cdata.prerequisites}</b></p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
<div className="col">
  <div className="cards h-100">
    <img src={fullurl2} className="card-img-top" alt="Palm Springs Road"/>
    <div className="card-body">
      <h5 className="card-title">Descriptions </h5>
      <p className="card-text">
       <b>{cdata.description}</b>
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</div></>)
}
export default Course;