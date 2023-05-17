import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react'
import data from './data'

export default function IndeterminateCheckbox() {

   const [index, setIndex] = useState(0);
   const {department, sub_departments} = data[index];
   
   const [checked, setChecked] = useState([true, false]);
   

   

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

      <FormControlLabel sx={{ ml: 8 }}
        label={department}
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
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



    
    
    </div>
   
    </>
  );
}