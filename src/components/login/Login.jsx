import React from 'react'
import LoginImg from '../../assets/LoginImg.svg'
import Box from "@mui/material/Box"
import MyButton from '../common/Primary_Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'








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
           height:{md:'85vh', xs:'85vh'},
           m:'auto',
          //  backgroundColor:'red'
          }}
        alignContent="center"
        justifyContent="center"
      >
        <Typography variant="h4" color="">Log in to Exclusive</Typography>
        <Typography variant="body1" sx={{mb:'40px', mt:'10px'}}> Enter your details below</Typography>
        <TextField fullWidth placeholder='Email or Phone Number' variant="standard" sx={{display:'block', my:'20px'}}/>
        <TextField fullWidth placeholder='Password' type='password' variant="standard" />

        <Box sx={{display:'flex', justifyContent:'space-between', my:'30px',}}>
        <MyButton sx={{display:'',px:'45px' }}>Log in</MyButton>
        <Typography variant="body1" color="mainColor" sx={{  alignContent:'center', cursor:'pointer'}}> Forget Password?</Typography>

        </Box>
 
      </Grid>

    </Grid>

   
    
    


  </Box>
    
</>
    
)
}
