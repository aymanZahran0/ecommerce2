import React from "react";
import { Container, Box, Typography } from "@mui/material";
import MyButton from "../common/Primary_Button";
import { Link as RouterLink } from "react-router-dom"; 


export default function NotFound_Page() {
  return (
    <>
      <Container maxWidth="xl" sx={{}}>
        <Box sx={{display:'flex', textAlign:'center', height:'70vh' ,justifyContent:'center', alignItems:'center' }}>
          <Box sx={{}}>
            <Typography variant="h2" sx={{fontSize:{md:'80px',xs:'60px'}}} >
              404 Not Found
            </Typography>
            <Typography variant="body1" my='20px' mb='50px'>
              Your visited page not found. You may go home page.
            </Typography>
            <MyButton component={RouterLink} to="/home" sx={{px:'20px'}}>Back to home page</MyButton>

          </Box>
        </Box>
      </Container>
    </>
  );
}
