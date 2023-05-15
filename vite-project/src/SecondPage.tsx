import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from './MyContext';

const SecondPage = () => {
     
  const navigate = useNavigate();
  const userdata = localStorage.getItem('user'); 

  const { text, setText } = useContext(MyContext);
  

  useEffect(()=>{
     if(!userdata){
       navigate('/');
       setText(true);
     }
    
    },[navigate, userdata])

  return (
    <div>
        <h1>second page</h1>
    </div>
  )
}

export default SecondPage;
