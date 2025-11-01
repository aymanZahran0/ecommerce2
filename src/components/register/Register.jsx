import React, { useEffect, useState } from "react";
import LoginImg from "../../assets/LoginImg.svg";
import Primary_Button from "../common/Primary_Button";
import { Grid,CircularProgress,Button, Box, Typography,TextField,} from "@mui/material";
import Google_Icon from "../../assets/svgComponents/Google_Icon";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { register_api } from "../../api/Auth_api";
import { useNavigate } from 'react-router-dom'
import { resetAuthState } from "../../assets/redux/authSlice";
import Joi from 'joi'


export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, seterrorMessage] = useState('');
  const [passMatch, setPasstMatch] = useState(true);
  const [errorValidate, setErrorValidate] = useState([]);
  const authData = useSelector((state) => state.auth.authData);
  const { loading, error, data } = useSelector((state) => state.auth.authData);


  useEffect(() => {
    if (!loading && data) {
      if (data.Success === true) {
        navigate('/login');
        seterrorMessage('');
        dispatch(resetAuthState());
      } else {
        seterrorMessage(data.Error);
      }
    }
  }, [data, loading, navigate]);


  const [user, setUser] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  function getUserData(enfo) {
    let mydata = { ...user };
    mydata[enfo.target.name] = enfo.target.value;
    setUser(mydata);
    console.log(user);
  }



  function validateRegisterForm(){

    let scheme = Joi.object({

      fullName: Joi.string().min(2).required(),
      phoneNumber: Joi.number().min(0).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(/^[1-9]{5,9}/).required(),
      confirmPassword: Joi.string().pattern(/^[1-9]{5,9}/).required(), 
    });

    console.log( scheme.validate(user,{abortEarly:false}) );
    return scheme.validate(user , {abortEarly:false});  
  }

  const submitRegisterForm = (e) => {
    e.preventDefault();
    let myValidation = validateRegisterForm();

    if(user.password == user.confirmPassword){
      setPasstMatch(true);
      seterrorMessage('');
        if(myValidation.error){
          setErrorValidate(myValidation.error.details);
        }
        else{
          dispatch(register_api(user));
          setErrorValidate([]);
        }
    }
    else{
      setPasstMatch(false);
      seterrorMessage('');   
    }

  };

  return (
    <>
      <Box sx={{}}>
        <Grid container spacing={2}>
          {/* 1 */}
          <Grid size={{ lg: 7, md: 0, xs: 0 }} sx={{}}>
            <Typography component="Img" src={LoginImg} sx={{ width: "100%" }}>
              {" "}
            </Typography>
          </Grid>

          {/* 2 */}
          <Grid
            size={{ lg: 3.5, md: 12, xs: 12 }}
            sx={{
              width: { md: "450px", xs: "450px" },
              minHeight: { md: "85vh", xs: "85vh" },
              m: "auto",
            }}
            alignContent="center"
            justifyContent="center"
          >
            <Typography variant="h4" color="">
              {" "}
              Create an account
            </Typography>
            <Typography variant="body1" sx={{ mb: "40px", mt: "10px" }}>
              {" "}
              Enter your details below
            </Typography>

            <Box component="form" onSubmit={submitRegisterForm}>
              <TextField
                onChange={getUserData}
                fullWidth
                placeholder="Email or Phone Number"
                type="email"
                name="email"
                variant="standard"
                sx={{ mt: "25px" }}
              />
              <TextField
                onChange={getUserData}
                fullWidth
                placeholder="fullName"
                type="string"
                name="fullName"
                variant="standard"
                sx={{ display: "block", mt: "20px" }}
              />
              <TextField
                onChange={getUserData}
                fullWidth
                placeholder="phoneNumber"
                variant="standard"
                type="number"
                name="phoneNumber"
                sx={{ display: "block", mt: "20px" }}
              />
              <TextField
                onChange={getUserData}
                fullWidth
                placeholder="Password"
                type="password"
                name="password"
                variant="standard"
                sx={{ display: "block", mt: "20px" }}
              />
              <TextField
                onChange={getUserData}
                fullWidth
                placeholder="confirmPassword"
                type="password"
                name="confirmPassword"
                variant="standard"
                sx={{ display: "block", mt: "20px" }}
              />
              {errorMessage?.length >0 ?<Typography variant="body1" color="error">{errorMessage}</Typography>:''}
              {passMatch == false ?<Typography variant="body1" color="error">password do not match</Typography>:''}
              {errorValidate.map((err, index)=>
              {if(err.context.label === 'password'|| err.context.label === 'confirmPassword' ){
              return <Typography key= {index} color='error'>invalid password! ..it must be 5 number or more </Typography>
              }
              else{
                return <Typography key= {index} color='error'>{ err.message } </Typography>
              }})}
                  
              <Primary_Button
                type="submit"
                sx={{ px: "45px", mt: "30px", mb: "20px", width: "100%" }}
              >
                {loading === true ? (
                  <CircularProgress size="32px" color="text" />
                ) : (
                  "Create Account"
                )}
              </Primary_Button>

            </Box>

            <Button
              variant="outlined"
              color=""
              sx={{
                width: "100%",
                py: "10px",
                textTransform: "revert",
              }}
              startIcon={<Google_Icon />}
            >
              Sign up with Google
            </Button>

            <Box
              sx={{ display: "flex", justifyContent: "center", mt: "30px" }}
              color="text.secondary"
            >
              <Typography
                variant="body1"
                sx={{ mr: "10px", textAlign: "center" }}
              >
                Allredy have account?{" "}
              </Typography>
              <Link
                variant="body1"
                component={RouterLink}
                to="/login"
                sx={{ cursor: "pointer", color: "black" }}
                underline=""
              >
                Log in
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
