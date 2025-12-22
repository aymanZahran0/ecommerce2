import React, { useState, useEffect } from "react";
import LoginImg from "../../assets/LoginImg.svg";
import {
  Grid,
  CircularProgress,
  Box,
  Typography,
  TextField,
  Link,
  Divider
} from "@mui/material";
import Primary_Button from "../../components/common/Primary_Button";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAuthState } from "../../redux/authSlice";
import { useForm } from "react-hook-form";
import {jwtDecode} from "jwt-decode";
import axiosInstance from "../../api/axiosInstance";
import { alertMessage } from "../../components/common/alertMessage";
import {ToastContainer, toast} from "react-toastify";




export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, seterrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { loading, token, error, data } = useSelector((state) => state.auth.authData);
  console.info('Login page');

    useEffect(() => {
    window.scrollTo(0,0);
    }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });


  async function sendLoginDataToAPI(user) {  
    try{
      const {data} = await axiosInstance.post('/auth/login',user);
      setIsLoading(false);
      seterrorMessage('');
      localStorage.setItem("myToken", data.token);   
      alertMessage('success','success login') ;
      dispatch(resetAuthState());
      navigate('/');
      console.log(data)
    
      return data;
    }
    catch (err){
      console.log(err.response.data)
      seterrorMessage(err.response.data);
      setIsLoading(false);
      alertMessage('error','faild login') ;
      return err.response.data
    }
  }


  const submitLoginForm = (data) => {
    setIsLoading(true);
    seterrorMessage('');
    sendLoginDataToAPI(data);
  
  };

  return (
    <>
    <ToastContainer />

      <Box sx={{mx:{xs:'20px'}}}>
        <Grid container spacing={2}>
          {/* 1 */}
          <Grid size={{ lg: 7, md: 0, xs: 0 }} sx={{}}>
            <Box component="Img" src={LoginImg} sx={{ width: "100%" }}>
            </Box>
          </Grid>

          {/* 2 */}
          <Grid
            size={{ lg: 3.5, md: 12, xs: 12 }}
            sx={{
              width: { md: "450px", xs: "450px" },
              height: { md: "85vh", xs: "85vh" },
              m: "auto",
            }}
            alignContent="center"
            justifyContent="center"
          >
            <Typography variant="h4" color="">
              Log in to Exclusive
            </Typography>
            <Typography variant="body1" sx={{ mb: "40px", mt: "10px" }}>
              {" "}
              Enter your details below
            </Typography>

            {/* form */}
            <Box  component="form" onSubmit={handleSubmit(submitLoginForm)}>
              
              <TextField
                
                fullWidth
                placeholder="username"
                variant="standard"
                defaultValue='johnd'
                type="text"
                name="username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 2,
                    message: "At least 2 characters",
                  },
                })}
                error={errors.username}
                helperText={errors.username?.message}
                sx={{ display: "block", my: "20px", 'input':{pl:'15px'}}}
              />
              <TextField
                fullWidth
                placeholder="Password"
                defaultValue='m38rmF$'
                type="password"
                name="password"
                variant="standard"
                {...register("password", {
                  required: "Username is required",
                  minLength: {
                    value: 5,
                    message: "At least 5 characters",
                  },
                })}
                error={errors.password}
                helperText={errors.password?.message}
                 sx={{ 'input':{pl:'15px'}}}
              />
              <Box sx={{display:'flex' , gap:'10px', color:'text.secondary'}}>
                <Typography variant="caption" color="">
                  username: johnd
                </Typography>
                <Divider orientation="vertical" flexItem/>
                <Typography variant="caption" color="">
                   password: m38rmF$
                </Typography>
              </Box>

              {errorMessage?.length > 0 ? (
                <Typography
                  variant="body1"
                  color="error"
                  sx={{ display: "block" }}
                >
                  {errorMessage}
                </Typography>
              ) : (
                ""
              )}
              {error ?
                <Typography
                  variant="body1"
                  color="error"
                  sx={{ display: "block" }}
                >
                  {error}
                </Typography>
               : 
                ""
              }

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  my: "30px",
                }}
              >
                <Primary_Button
                  type="submit"
                  sx={{ display: "", px: "45px", width: "150px" }}
                >
                  {isLoading === true ? (
                    <CircularProgress size="31.5px" color="text" />
                  ) : (
                    "Log in"
                  )}
                </Primary_Button>
              </Box>

              <Typography
                variant="body1"
                color="mainColor"
                sx={{ alignContent: "center", cursor: "pointer" }}
              >
                {" "}
                Forget Password?
              </Typography>
            </Box>

              <Box
              sx={{ display: "flex", justifyContent: "", mt: "20px" }}
              color="text.secondary"
            >
              <Typography
                variant="body1"
                sx={{ mr: "10px", textAlign: "center" }}
              >
               Don't have an account? 
              </Typography>
              <Link
                variant="body1"
                component={RouterLink}
                to="/register"
                sx={{ cursor: "pointer", color: "black" }}
                underline=""
              >
                Sign Up 
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
