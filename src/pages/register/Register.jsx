import React, {useState } from "react";
import LoginImg from "../../assets/LoginImg.svg";
import Primary_Button from "../../components/common/Primary_Button";
import { Grid,CircularProgress,Button, Box, Typography,TextField,} from "@mui/material";
import Google_Icon from "../../assets/svgComponents/Google_Icon";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { resetAuthState } from "../../redux/authSlice";
import Joi from 'joi';
import { useForm } from "react-hook-form";
import axiosInstance from "../../api/axiosInstance";
import { useEffect } from "react";
import {ToastContainer, toast} from "react-toastify";
import { alertMessage } from "../../components/common/alertMessage";





export default function Register() {
  console.info('register page')

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, seterrorMessage] = useState('');
  // const { loading, error, data } = useSelector((state) => state.auth.authData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });


  // register
  async function sendRegisterDataToAPI(user) {
    setIsLoading(true);
    try{
      const {data} = await axiosInstance.post('/users',user);
      setIsLoading(false);
      seterrorMessage('');
      alertMessage('success','success register') ;
      dispatch(resetAuthState());
      // navigate('/login');
      console.log(data)
    }
    catch (err){
      console.log(err)
      seterrorMessage(err.response.data);
      setIsLoading(false);
      alertMessage('success','faild register') ;
    }
  }


  const submitRegisterForm = (data) => {
    seterrorMessage('');
    sendRegisterDataToAPI(data);
  };


  return (
    <>
    <ToastContainer/>
      <Box sx={{mx:{xs:'20px'}}}>
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

            <Box component="form" onSubmit={handleSubmit(submitRegisterForm)}>
              <TextField
                fullWidth
                placeholder="Email or Phone Number"
                type="email"
                name="email"
                variant="standard"
                {...register("email", {
                  required: "Email is required",
                })}
                sx={{ mt: "25px", 'input':{pl:'15px'}}}
                error={errors.email}
                helperText={errors.email?.message}
              />

              <TextField
                fullWidth
                placeholder="username"
                type="string"
                name="username"
                variant="standard"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 2,
                    message: "At least 2 characters",
                  },
                })}
                sx={{ display: "block", mt: "20px",'input':{pl:'15px'} }}
                error={errors.username}
                helperText={errors.username?.message}
              />

              <TextField

                fullWidth
                placeholder="Password"
                type="password"
                name="password"
                variant="standard"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Minimum 5 characters",
                  },
                })}
                sx={{ display: "block", mt: "20px", 'input':{pl:'15px'} }}
                error={errors.password}
                helperText={errors.password?.message}
              />
              {errorMessage?.length >0 ?<Typography variant="body1" color="error">{errorMessage}</Typography>:''}
  
              <Primary_Button
                type="submit"
                sx={{ px: "45px", mt: "30px", mb: "20px", width: "100%" }}
              >
                {isLoading === true ? (
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
