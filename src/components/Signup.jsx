// import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
// import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {usersData} from '../App'


const SignUp = ({setUsers}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const addUser =  (user) => {
    usersData.push(user);
     localStorage.setItem('users',JSON.stringify(usersData));
     setUsers(usersData);
  };

  const navigate = useNavigate();

  const validate = () => {
    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 3) {
      errors.password = 'Password must be at least 3 characters';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
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
        addUser({email , password})
        navigate("/")
      } catch (error) {
        console.log(error.message);
        toast.error(error.message)
      } finally {
        setEmail("");
        setPassword("");
        setConfirmPassword('')
      }
  }
}

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up</h2>
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
        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
          {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
        </div>
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
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
    marginLeft: '3%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28A745',
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

export default SignUp;
