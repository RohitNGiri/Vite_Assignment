import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react'
import data from './data'
import Button from '@mui/material/Button';

export default function IndeterminateCheckbox() {

   const [index] = useState(0);
   const [expander, setExpander] = useState(false);
   const {department, sub_departments} = data[index];
   
   const [checked, setChecked] = useState([true, false]);
   

   const handleExpander = () => {
    if(expander){
      setExpander(false)
    }else{
      setExpander(true);
    }
   }

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };


  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };
  

  

  return (
    <>
    <div>
      {expander ? <Button onClick={handleExpander} style={{ fontSize: '30px' }}>-</Button> : <Button onClick={handleExpander} style={{ fontSize: '30px' }}>+</Button> }
      
      
      <FormControlLabel sx={{ ml: 0 }}
        label={department}
        control={
          <Checkbox
          checked={checked[0] && checked[1]}
          indeterminate={checked[0] !== checked[1]}
          onChange={handleChange1}
          />
        }
        />
      
      {
        expander &&
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
       <FormControlLabel
        label={sub_departments[0]}
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
        /> 
       <FormControlLabel
        label={sub_departments[1]}
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
        /> 
    </Box>
      }
       



    
    
    </div>
   
    </>
  );
}