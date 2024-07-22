import React from 'react';
import MyForm from "./components/myForm";
import BirthDays from "./components/BirthDays";
import Navbar from './components/Navbar';

const Home = ({setIsLogin}) => {

    return (
        <> 
           <BirthDays setIsLogin={setIsLogin}/>
        </>
    )
}

export default Home;