import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';





const FirstPage = () => {
  const [name, setName] = useState('');
  const [phonenum, setPhonenum] = useState('')
  const [email, setEmail] = useState('');
  
  
  const navigate = useNavigate();

  const handleSubmit = () => {
    // event.preventDefault();
    console.log(name, phonenum, email);

    const user = {name, phonenum, email};
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
   
    
    
  }
 
   const userdata = localStorage.getItem('user'); 
   useEffect(()=>{
    if(userdata){
       navigate('secondpage');
     }
   },[navigate, userdata])

    

  return (
    <div>
      <div className="container">
      <h4>Please Enter the given details below</h4>
      <form  onSubmit={handleSubmit}>
        <Stack direction="column">
        <TextField label='Enter Name'   sx={{mb: 2}} value={name} onChange={e=>setName(e.target.value)} type="text" required></TextField>
        <TextField label='Phone Number'sx={{mb: 2}} value={phonenum} onChange={e=>setPhonenum(e.target.value)} type="number" required></TextField>
        <TextField label='Email' sx={{mb: 2}} value={email} onChange={e=>setEmail(e.target.value)} type="email" required></TextField>
   
        <Button color="secondary" type='submit'>
            Submit 
        </Button>

     
        </Stack>
         </form>

        
    </div>
    </div>
  )
}

export default FirstPage
