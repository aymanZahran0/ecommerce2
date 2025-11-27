import React from "react";
import {
  Box,
  Typography,
  Stack,
  Link,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../api/products_Api";


export default function Account_Slice() {

  const { data } = useSelector((state) => state.auth.authData);
  const dispatch = useDispatch();

    dispatch(getProducts());

  return (
    <>
      <Box sx={{display:'flex', justifyContent:'space-between'}}> 

        {/* 1 */}
        <Stack direction="row" spacing={2}sx={{px:{sm:'50px', xs:'10px'}}} py="50px">
          <Link
            variant="body1"
            color="text.secondary"
            component={RouterLink}
            underline="hover"
            to="/"
          >
            Home
          </Link>
          <Typography variant="body1">/</Typography>
          <Typography variant="body1"> My Account</Typography>
        </Stack>

        {/* 2 */}
        <Stack direction="row" spacing={1} px="50px" py="50px">

         {data? <>
         <Typography variant="body1">Welcome!</Typography>
          <Typography variant="body1" color="error"> {data.name.firstname} {data.name.lastname} </Typography>
         </>:''}
        </Stack>
      </Box>
    </>
  );
}
