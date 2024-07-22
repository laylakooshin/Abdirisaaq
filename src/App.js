
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/Signup";
import ProtectedRoute from "./protectedRoutes";
import { createContext  } from "react";
// import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
// import { auth, db } from "./firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import Myform from "./components/myForm";
import BirthDays from "./components/BirthDays";
// import { update } from "firebase/database";

let info = createContext();

export const usersData= JSON.parse(localStorage.getItem('users') || "[]");
const isLogin= JSON.parse(localStorage.getItem('islogin')|| false);


const App = () => {
  const [users, setUsers] = useState(usersData);
  const [islogin, setIsLogin] = useState(isLogin);

   useEffect(()=>{

    setUsers(usersData)

   },[])


//   const addBirthDay = async (birthDay) => {
//     birthDaysData.push(birthDay);
//     localStorage.setItem('birthDays',JSON.stringify(birthDaysData));
//     setBirthDays(birthDaysData);
//  };
//  const removeBirthDay = async (index) => {
//   birthDays.splice(index,1);
//   localStorage.setItem('birthDays',JSON.stringify(birthDays));
//   setBirthDays(birthDaysData);
// };

  return (
    <Router>
     
      <Routes>
        <Route
          path="/"
          element={
          
              <BirthDays
                setIsLogin={setIsLogin}
              />
          }
        />
          
          <Route
            path="/form"
            element={<Myform setIsLogin={setIsLogin} />}
          />
        
        <Route path="/signin" element={<SignIn users={users} setIsLogin={setIsLogin} />}  />
        <Route path="/signup" element={<SignUp  setUsers={setUsers}/>} />
      </Routes>
    </Router>
  );
};

export default App;
 


