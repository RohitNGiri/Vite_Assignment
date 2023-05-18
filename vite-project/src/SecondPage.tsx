/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from './MyContext';
import DataGrida from './DataGrid'
import Department from './Department';
import SubDepartment from './SubDepartment';
import data from './data';

const url = 'https://jsonplaceholder.typicode.com/posts'


const SecondPage = () => {
     
  const navigate = useNavigate();
  const userdata = localStorage.getItem('user'); 
  const [tours, setTours] = useState([]);
  
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  const { setText } = useContext(MyContext);
  

  useEffect(()=>{
     if(!userdata){
       navigate('/');
       setText(true);
     }
    
    },[navigate, userdata])
  

   
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
    
     <DataGrida tours={tours} {...data}  />
     <Department />
     <SubDepartment />
    </div>
  )
}

export default SecondPage;
