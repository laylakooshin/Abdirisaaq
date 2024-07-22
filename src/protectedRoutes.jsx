import { useEffect, useState } from 'react';
import { Navigate,  } from 'react-router-dom'

const isLoginLocal= JSON.parse(localStorage.getItem('islogin')|| false);


const ProtectedRoute = ({ children }) => {
  const [islogin , setIsLogin] = useState(isLoginLocal);
  useEffect(()=>{
    setIsLogin(isLoginLocal);
  })
  if (!islogin) {
    return <Navigate to="/signin" />;
  }

  return children;
  
}

export default ProtectedRoute