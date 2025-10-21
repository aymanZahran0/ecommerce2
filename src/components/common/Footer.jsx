import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Container,
  Stack,
} from "@mui/material";
import Icon_Input from "../../assets/svgComponents/Icon_Input";
import QRcode from "../../assets/svgComponents/QRcode";
import Google_Play from "../../assets/svgComponents/Google_Play";
import App_Store from "../../assets/svgComponents/App_Store";
import Facebook_Icon from "../../assets/svgComponents/media_Icon/Facebook_Icon";
import Twitter_Icon from "../../assets/svgComponents/media_Icon/Twitter_Icon";
import Linkedin_Icon from "../../assets/svgComponents/media_Icon/Linkedin_Icon";
import Instagram_Icon from "../../assets/svgComponents/media_Icon/Instagram_Icon";

export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "black", color: "white", py: "50px" }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>

            {/* 1 */}
            <Grid 
              size={{ lg: 3, md: 3, sm: 4, xs:6}}
              sx={{}}
            >
              <Typography variant="h5" mb="20px" color="">
                Exclusive
              </Typography>
              <Typography variant="body1" color="">
                Subscribe
              </Typography>
              <Typography variant="body2" color="" my="10px">
                Get 10% off your first order
              </Typography>

              <TextField
                hiddenLabel
                size="small"
                variant="outlined"
                placeholder="Enter your email"
                color="text.secondary"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ cursor: "pointer" }}
                      >
                        <Icon_Input />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  input: { color: "white" },
                  border: "solid white 1px",
                  borderRadius: "5px",
                }}
              />
            </Grid>

            {/* 2 */}
            <Grid 
             size={{ lg: 2, md: 4, sm: 4, xs:6 }}
            
            >
              <Typography variant="h5" mb="20px">
                Support
              </Typography>
              <Typography variant="body1">111 Bijoy sarani, Dhaka,</Typography>
              <Typography variant="body1">DH 1515, Bangladesh.</Typography>
              <Typography variant="body1" my="20px">
                exclusive@gmail.com
              </Typography>
              <Typography variant="body1">+88015-88888-9999</Typography>
            </Grid>

            {/* 3 */}
            <Grid 
              size={{ lg: 2, md: 2.5, sm: 4, xs:6 }}
              sx={{my:'20px'}}
            >
              <Typography variant="h5" mb="20px">
                Account
              </Typography>
              <Typography variant="body1">My Account</Typography>
              <Typography variant="body1" my="20px">
                Login / Register
              </Typography>
              <Typography variant="body1" my="20px">
                Cart
              </Typography>
              <Typography variant="body1" my="20px">
                Wishlist
              </Typography>
              <Typography variant="body1">Shop</Typography>
            </Grid>

            {/* 4 */}
            <Grid 
              size={{ lg: 2, md: 2.5, sm: 6, xs:6 }}
              sx={{my:'20px'}}
            >
              <Typography variant="h5" mb="20px">
                Quick Link
              </Typography>
              <Typography variant="body1">Privacy Policy</Typography>
              <Typography variant="body1" my="20px">
                Terms Of Use
              </Typography>
              <Typography variant="body1" my="20px">
                FAQ
              </Typography>
              <Typography variant="body1">Contact</Typography>
            </Grid>

            {/* 5 */}
            <Grid size={{ lg: 2.5, md: 4, sm: 6, xs: 6 }}>
              <Typography variant="h5" mb="20px">
                Download App
              </Typography>
              <Typography variant="body2" color="mutedColor">
                Save $3 with App New User Only
              </Typography>

              <Box sx={{ display: "flex", mt: "8px" }}>
                <Box mt="4px">
                  <QRcode />
                </Box>
                <Box sx={{ ml: "5px" }}>
                  <Google_Play />
                  <Box><App_Store /></Box>
                </Box>
              </Box>
              {/* media icon */}
              <Stack spacing={{ xs: 3, sm: 3}} direction="row">
                <Facebook_Icon />
                <Twitter_Icon />
                <Instagram_Icon />
                <Linkedin_Icon />
              </Stack>

            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
