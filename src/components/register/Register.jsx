import React from 'react'
import LoginImg from '../../assets/LoginImg.svg'
import Box from "@mui/material/Box"
import MyButton from '../common/Primary_Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Google_Icon from '../../assets/svgComponents/Google_Icon'
import InputAdornment from '@mui/material/InputAdornment';
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";





export default function Login() {
return (
<>

  <Box  sx={{}}>
    <Grid container spacing={2}>

      {/* 1 */}
      <Grid 
        size={{ lg: 7, md: 0, xs:0}}
        sx={{  }}
      >
        <Typography  component="Img" src={LoginImg} sx={{width:'100%',}}> </Typography>
      </Grid>

      {/* 2 */}
      <Grid 
        size={{ lg: 3.5, md: 12, xs: 12 }}
        sx={{
           width:{md:'450px', xs:'450px'}, 
           height:{ md:'85vh', xs:'85vh'},
           m:'auto',
          }}
        alignContent="center"
        justifyContent="center"
      >
        <Typography variant="h4" color=""> Create an account</Typography>
        <Typography variant="body1" sx={{mb:'40px', mt:'10px'}}> Enter your details below</Typography>
        <TextField fullWidth placeholder='Name' variant="standard" type='text' sx={{display:'block', mt:'20px'}}/>
        <TextField fullWidth placeholder='Email or Phone Number' type='email' variant="standard" sx={{ my:'25px'}}/>
        <TextField fullWidth placeholder='Password' type='password' variant="standard" />
        <MyButton sx={{px:'45px' , mt:'30px',mb:'20px', width:'100%',}}>Create Account</MyButton>
        <Button variant="outlined"
         color='' 
         sx={{
          width:'100%', 
          py:'10px',  
          textTransform: "revert",
          }}
          startIcon={<Google_Icon/>}
        >
          Sign up with Google 
        </Button>

        <Box sx={{display:'flex',justifyContent:'center', mt:'30px'}} color='text.secondary'>
          <Typography variant="body1" sx={{mr:'10px',  textAlign:'center',}}>Allredy have account? </Typography>
          <Link variant="body1" component={RouterLink} to="/login" sx={{cursor:'pointer', color:'black'}} underline="">Log in</Link>
        </Box>
       
 
      </Grid>

    </Grid>

   
    
    


  </Box>
    
</>
    
)
}
