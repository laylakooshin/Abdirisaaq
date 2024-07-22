import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Navigate,  } from 'react-router-dom'

const isLoginLocal= JSON.parse(localStorage.getItem('islogin')|| false);
const birthDaysData= JSON.parse(localStorage.getItem('birthDays') || "[]");



function Myform({ setIsLogin }) {

  const [name, setName] = useState('')
  const [dob, SetDob] = useState('')
  const [birthDays, setBirthDays] = useState(birthDaysData)

  useEffect(()=>{
    setBirthDays(JSON.parse(localStorage.getItem('birthDays') || "[]"))
    

  },[])

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    SaveLocalStorage(
      {
        name: name,
        dob: dob
      }
    )

    
    

  };

  function SaveLocalStorage(obj) {
    const updatedBirthDays = [...birthDays, obj] 
    localStorage.setItem('birthDays', JSON.stringify(updatedBirthDays));
    setName('')
    SetDob('')
  }




  if (!isLoginLocal) {
    return <Navigate to="/signin" />;
  }

  return (

    <div className='cont'>
      <nav>
        <Link to='/form'>Form</Link>
        <Link to='/'>display</Link>
        <button className='out' onClick={() => {
          localStorage.setItem("islogin", JSON.stringify(false))
          setIsLogin(false)
          navigate("/signin")
        }}> Logout</button>
      </nav>
      <form onSubmit={handleSubmit} className='form'>
        <h1 style={{ textAlign: 'center' }}>Register your Birthday</h1>
        <input type="text" name="name" placeholder="Enter your name" autoComplete='off'
          onChange={(e) => setName(e.target.value)} value={name}
        />
        <input type="date" name="dob"
          onChange={(e) => SetDob(e.target.value)} value={dob}
        />
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default Myform