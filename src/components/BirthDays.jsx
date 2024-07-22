import React, { useState, useEffect } from 'react';
import { Link, useNavigate , } from 'react-router-dom'

import { Navigate,  } from 'react-router-dom'
// soo Akhrinta xogta

const isLoginLocal= JSON.parse(localStorage.getItem('islogin')|| false);

const birthDaysData= JSON.parse(localStorage.getItem('birthDays') || "[]");

const BirthDays = ({ setIsLogin }) => {
  const [todayBirthdays, setTodayBirthdays] = useState([]);
  const [birthDays, setBirthDays] = useState([])
  const navigate = useNavigate()

  // Hubinta isla ekaanta Xogta

  useEffect(() => {
    setIsLogin(JSON.parse(localStorage.getItem('islogin')));
    const today = new Date();
    const todayMonth = today.getMonth() ;
    const todayDate = today.getDate() ;

    console.log("Today's Month:", todayMonth);
    console.log("Today's Date:", todayDate);

    const filteredBirthdays = birthDaysData.filter(person => {
      const birthDate = new Date(person.dob);
      
      return birthDate.getMonth()  === todayMonth && birthDate.getDate()+1  === todayDate;
    });
    
    console.log("Filtered Birthdays:", filteredBirthdays);
    setTodayBirthdays(filteredBirthdays);
  },[]); // Empty dependency array to run effect only once on mount


  if (!isLoginLocal) {
    return <Navigate to="/signin" />;
  }
  return (
    <div className='cont'>

      <nav>
        <Link to='/form'>Form</Link>
        <Link to='/'>display</Link>
        <button className='out' onClick={() =>{
          localStorage.setItem("islogin",JSON.stringify(false))
          setIsLogin(false)
          navigate("/signin")
        } }> Logout</button>
      </nav>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>

      <div className='birthdays-container'>
         
          
        <h1 className='birth'>{todayBirthdays.length} Birthday Reminder</h1>
        {todayBirthdays.map((person, index) => (
          <div key={index} className='birthday-item'>
            <h3> <i class="bi bi-person-check"></i>
              {person.name} 
            <span className='dob'>{person.dob}</span > 
            
            <span className='cong'><i class="bi bi-gift-fill"></i>Hambalyo Maanta waa dhalashadaada </span> 
            {/* <i className="bi bi-pencil-square ok"></i> 
            <i className="bi bi-trash3-fill ok"></i> */}
            </h3>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthDays;
