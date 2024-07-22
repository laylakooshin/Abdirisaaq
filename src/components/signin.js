// import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
// import { auth } from '../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import useCurrentUser from '../hooks/useCurrentUser'

const SignIn = ({users, setIsLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()
  useEffect(()=>{
    setIsLogin(JSON.parse(localStorage.getItem('islogin')))
  })

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        if(users.filter(user=>user.email==email && user.password==password).length){
          setIsLogin(true)
          localStorage.setItem('islogin', JSON.stringify(true));
          navigate("/")
        }else{
          alert("Invalid Credentials");
          toast.error("Invalid Credentials")
        }
      } catch (error) {
        toast.error(error.message)
      } finally {
        setEmail("");
        setPassword("");
      }
     
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign In </h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
           
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>
        <button type="submit" style={styles.button}>Sign In</button>
        <Link  to="/signup" style={{width:'100%'}} >
            If don't have account signup
        </Link>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    width: '90%',
    marginLeft:'2%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  },
};

export default SignIn;
