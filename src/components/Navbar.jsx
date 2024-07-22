import React from "react"
import { Link } from "react-router-dom";

const Navbar = ({setIsLogin}) => {
  <nav>
    <Link to='/form'>Form</Link>
    <Link to='/'>display</Link>
    <button className='out' onClick={() => setIsLogin(false)}> Logout</button>
  </nav>
}

export default Navbar;