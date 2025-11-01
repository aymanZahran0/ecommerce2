import React, { useState,useEffect } from 'react'
import LoginImg from '../../assets/LoginImg.svg'
import {Grid,CircularProgress,Box,Typography,TextField} from '@mui/material'
import Primary_Button from '../common/Primary_Button'
import { Login_api } from '../../api/Auth_api'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetAuthState } from "../../assets/redux/authSlice";
import Joi from 'joi'


export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, seterrorMessage] = useState('');
  const [errorValidate, setErrorValidate] = useState([]);

  const authData = useSelector((state)=>state.auth.authData);
  const {loading,error,data} = useSelector((state)=>state.auth.authData);


  useEffect(() => {
    if (!loading && data) {
      if (data.Success === true) {
        navigate('/home');
        seterrorMessage('');
        dispatch(resetAuthState());
        // localStorage.setItem('myToken', data.Data.AccessToken );
        sessionStorage.setItem('myToken', data.Data.AccessToken );
        localStorage.setItem('myUserData', JSON.stringify(data.Data));
      } 
      else {
        seterrorMessage(data.Error);
      }
    }
  }, [data, loading, navigate]);


  const [user, setUser] = useState({
    email: '',
    password: '',
  });


  function getUserData(enfo) {
    let mydata = {...user};
    mydata[enfo.target.name] = enfo.target.value;
    setUser(mydata); 
    console.log(user);
  }

  
  function validateLoginForm(){

    let scheme = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().pattern(/^[1-9]{5,9}/).required(),
    });
    console.log( scheme.validate(user,{abortEarly:false}) );
    return scheme.validate(user , {abortEarly:false});
    // setOutputValidate(myValidation);
  }

  const submitLoginForm = (e) => {
    e.preventDefault();
    let myValidation = validateLoginForm();

    if(myValidation.error){
      setErrorValidate(myValidation.error.details);
      console.log(myValidation.error.details);
    }
    else{
      dispatch(Login_api(user));
      setErrorValidate([]);
    }
  
  };



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
          }}
        alignContent="center"
        justifyContent="center"
      >
        <Typography variant="h4" color="">Log in to Exclusive</Typography>
        <Typography variant="body1" sx={{mb:'40px', mt:'10px'}}> Enter your details below</Typography>

        {/* form */}
        <Box component='form' onSubmit={submitLoginForm} >
        <TextField onChange={getUserData} fullWidth placeholder='email' variant="standard" type='email' name='email' sx={{display:'block', my:'20px'}}/>
          <TextField onChange={getUserData} fullWidth placeholder='Password' type='password' name='password' variant="standard" />
          {errorMessage?.length >0 ?<Typography variant="body1" color="error" sx={{display:'block'}}>{errorMessage}</Typography>:''}
          {errorValidate.map((err, index)=>
          {if(err.context.label === 'password'){
          return <Typography key= {index} color='error'>invalid password! ..it must be 5 number or more </Typography>
          }
          else{
            return <Typography key= {index} color='error'>{ err.message } </Typography>
          }})}

          <Box sx={{display:'flex', justifyContent:'space-between', my:'30px',}}>        
          {/* <Primary_Button type={loading === true ? null :'submit'} sx={{display:'',px:'45px',width:'150px' }}> */}

          <Primary_Button type='submit'  sx={{display:'',px:'45px',width:'150px' }}> 
            {loading === true ? <CircularProgress size='31.5px' color='text'/> : 'Log in'}
          </Primary_Button>

         {/* {loading === true ? <Primary_Button sx={{display:'',px:'45px',width:'150px' }}> 
            {loading === true ? <CircularProgress size='31.5px' color='text'/> : 'Log in'}
          </Primary_Button>
          :
          <Primary_Button   sx={{display:'',px:'45px',width:'150px' }}> 
            {loading === true ? <CircularProgress size='31.5px' color='text'/> : 'Log in'}
          </Primary_Button>
          } */}

        </Box>
       
        <Typography variant="body1" color="mainColor" sx={{  alignContent:'center', cursor:'pointer'}}> Forget Password?</Typography>

        </Box>
 
      </Grid>

    </Grid>

   
    
    


  </Box>
    
</>
    
)
}
