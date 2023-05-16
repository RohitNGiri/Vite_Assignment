import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from './MyContext';
import DataGrid from './DataGrid'

const url = 'https://jsonplaceholder.typicode.com/posts'


const SecondPage = () => {
     
  const navigate = useNavigate();
  const userdata = localStorage.getItem('user'); 
  const [tours, setTours] = useState([]);

  const { text, setText } = useContext(MyContext);
  

  useEffect(()=>{
     if(!userdata){
       navigate('/');
       setText(true);
     }
    
    },[navigate, setText, userdata])
  

   
const fetchTours = async () => {

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, [])

   

   
   

  return (
    <div>
    
     <DataGrid tours={tours}  />
    </div>
  )
}

export default SecondPage;
