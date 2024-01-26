import { useState ,useEffect} from "react";
import { BASE_URL, myAxios } from "../services/helper";

const StudentRecord=()=>{
const url=BASE_URL;
const imgurl=`${url}/student/image`;
    const [data,setdata]=useState([]);
    useEffect(()=>{
        myAxios.get("/student/").then((response)=>{
        setdata(response.data)
        console.log(response.data);}
        ).catch((error)=>console.log(error));
        },[])

    
    
    return(
        <div className="container">
    <h1>Student Record</h1>
    <table className="table table-boarded">
    <thead>
              <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>email</th>
                <th>Mobilenumber</th>
                <th>Profile</th>
                        </tr>
            </thead>
            <tbody>
                {data.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
    <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.mobilenumber}</td>
                  <td><img src={`${imgurl}/${item.imagename}`} alt="student image" style={{width:"100px",height:"100px",objectFit:"cover",borderRadius:"50%"}}></img></td>
                    </tr>
                ))}
            </tbody>
    </table>
        </div>
        
        )
}
export default StudentRecord;