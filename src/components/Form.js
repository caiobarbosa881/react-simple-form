import * as React from 'react';
import { FormControl } from '@mui/material';
import { TextField } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';
import './Form.css';
import { Grid } from '@mui/material';

function Form() {   
  return (
    <Grid 
    container
    direction="column"
    justifyContent="center"
    alignItems="flex-start"
    className='grid-style' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
           
           <Grid item xs={8}>
        
            <TextField id="outlined-basic"  label="Nome" margin="dense" variant="outlined" />
            
            <TextField id="outlined-basic" label="E-mail" margin="dense" variant="outlined" />
          
            <TextField id="outlined-basic" label="Celular" margin="dense" variant="outlined" />
           
            <TextField id="outlined-basic" label="Cidade" margin="dense" variant="outlined" />
            </Grid>


          
            <Grid item xs={8}>

            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gênero</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="outro"
              name="radio-buttons-group"
            >
              <FormControlLabel  value="homem" control={<Radio />} label="Homem" />
              <FormControlLabel  value="mulher" control={<Radio />} label="Mulher" />
              <FormControlLabel  value="outro" control={<Radio />} label="Outro" />
            </RadioGroup>
           
          </FormControl>    
          </Grid>
      </Grid>
  )};   

export default Form