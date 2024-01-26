
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Signin from './page/Signin';
import Home from './page/Home';
import Student from './page/Student';
import StudentRecord from './page/StudentRecord';
import Update from './page/Update';
import Studentlogin from './page/Studentlogin'
import Details from './page/Details';
import Logout from './page/Logout';
import Newpage from './page/NewPage';
import Course from './page/Course';
import Carousel from './page/Carosal';
import Payment from './page/Payment';
import Confirm from './page/Confirm';


function App() {
  return (

    <Routes>
      <Route path='/login' element={<Signin/>}></Route>
      <Route path="/" element={<Carousel></Carousel>}></Route>
      <Route path='/logout' element={<Logout></Logout>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/signin' element={<Student></Student>}></Route>
      <Route path="/student" element={<StudentRecord></StudentRecord>}></Route>
      <Route path="/update" element={<Update></Update>}></Route>
      <Route path="/studentlogin" element={<Studentlogin></Studentlogin>}></Route>
      <Route path="/details/:id" element={<Details></Details>}></Route>
      <Route path="/course/:name" element={<Course></Course>}></Route>
      <Route path="/new" element={<Newpage></Newpage>}/>
      <Route path="/payment/:name" element={<Payment></Payment>}/>
      <Route path="/confirm/:name" element={<Confirm></Confirm>}/>
    </Routes>
    





    
    
  );
}

export default App;
