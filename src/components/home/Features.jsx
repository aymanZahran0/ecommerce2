import React from "react";
import { Typography, Box, Stack, Grid, useScrollTrigger,Link } from "@mui/material";
import Delivery_Icon from "../../assets/svgComponents/features/Delivary_Icon.jsx";
import Customer_Service from "../../assets/svgComponents/features/Customer_Service.jsx";
import Secure_Icon from "../../assets/svgComponents/features/Secure_Icon.jsx";
import Playstation from "../../assets/svgComponents/features/Playstation.svg";
import Speakers from "../../assets/svgComponents/features/Speakers.svg";
import Perfume from "../../assets/svgComponents/features/Perfume.svg";
import Women from "../../assets/svgComponents/features/Women.svg";
import { Link as RouterLink } from "react-router-dom";
 


export default function Features() {
  return (
    <>
      <Box sx={{ my: "40px" }}>
        {/* 1 */}
        <Box>
          <Stack direction="row" spacing={2}>
            <Typography
              variant="body2"
              sx={{
                width: "20px",
                height: "40px",
                backgroundColor: "#DB4444",
                borderRadius: "5px",
              }}
            ></Typography>
            <Typography variant="h6" color="error">
              Featured
            </Typography>
          </Stack>
          <Typography variant="h3" my="20px">
            New Arrival
          </Typography>

          <Grid container spacing={1}>
            <Grid size={{ lg: 6, md: 6, xs: 12 }}>
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src={Playstation}
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "5px",
                    width: "90%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                ></Box>
                <Box
                  sx={{
                    ml: "20px",
                    position: "absolute",
                    bottom: "30px",
                    left: "0px",
                    color: "white",
                  }}
                >
                  <Typography variant="h4" my="15px" color="">
                    Playstation 5
                  </Typography>
                  <Typography variant="body2" color="">
                    Black and White version of the PS5{" "}
                  </Typography>
                  <Typography variant="body2" color="">
                    coming out on sale.
                  </Typography>
                  <Typography
                    variant="h6"
                    to="/"
                    sx={{ textDecoration: "underline", cursor: "pointer" }}
                    my="20px"
                    color="white"
                  >
                    Shop Now
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              container
              spacing={1}
              size={{ lg: 6, md: 6, xs: 12 }}
              sx={{ backgroundColor: "" }}
            >
              <Grid
                size={{ lg: 12, md: 12, xs: 12 }}
                sx={{
                  borderRadius: "5px",
                  backgroundColor: "black",
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={Women}
                    sx={{
                      backgroundColor: "black",
                      borderRadius: "5px",
                      width:"100%",
                      height: "300px",
                      cursor: "pointer",
                    }}
                  ></Box>
                  <Box
                  sx={{
                    ml: "20px",
                    position: "absolute",
                    bottom: "30px",
                    left: "0px",
                    color: "white",  
                  }}
                >
                  <Typography variant="h4" my="15px" color="">
                     Women's Collections
                  </Typography>
                  <Typography variant="body2" color="">
                  Featured woman collections that 
                  </Typography>
                  <Typography variant="body2" color="">
                    give you another vibe.
                  </Typography>
                  <Typography
                    variant="h6"
                    to="/"
                    sx={{ textDecoration: "underline", cursor: "pointer" }}
                    my="20px"
                    color="white"
                  >
                    Shop Now
                  </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid
                size={{ lg: 6, md: 6, xs: 6 }}
                sx={{ backgroundColor: "black", borderRadius: "5px" }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={Speakers}
                    sx={{
                      backgroundColor: "black",
                      borderRadius: "5px",
                      margin: "auto",
                      width: "100%",
                      height: "300px",
                      cursor: "pointer",
                    }}
                  ></Box>
                   <Box
                  sx={{
                    ml: "20px",
                    position: "absolute",
                    bottom: "30px",
                    left: "0px",
                    color: "white",  
                  }}
                >
                  <Typography variant="h4" my="10px" color="">
                     Speakers
                  </Typography>
                  <Typography variant="body2" color="">
                     Amazon wireless speakers
                  </Typography>
                  <Typography
                    variant="h6"
                    to="/"
                    sx={{ textDecoration: "underline", cursor: "pointer" }}
                    my="10px"
                    color="white"
                  >
                    Shop Now
                  </Typography>
                   </Box>
                </Box>
              </Grid>

              <Grid
                size={{ lg: 6, md: 6, xs: 6 }}
                sx={{ backgroundColor: "black", borderRadius: "5px" }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={Perfume}
                    sx={{
                      backgroundColor: "black",
                      borderRadius: "5px",
                      m: "auto",
                      //   margin:'auto',
                      width: "90%",
                      height: "300px",
                      cursor: "pointer",
                    }}
                  ></Box>
                  <Box
                  sx={{
                    ml: "20px",
                    position: "absolute",
                    bottom: "30px",
                    left: "0px",
                    color: "white",  
                  }}
                >
                  <Typography variant="h4" my="10px" color="">
                     Perfume
                  </Typography>
                  <Typography variant="body2" color="">
                     GUCCI INTENSE OUD EDP
                  </Typography>
                  <Typography
                    variant="h6"
                    to="/"
                    sx={{ textDecoration: "underline", cursor: "pointer" }}
                    my="10px"
                    color="white"
                  >
                    Shop Now
                  </Typography>
                   </Box>
                </Box>
              </Grid>

            </Grid>
          </Grid>
        </Box>

        {/* 2 */}
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 5, md: 10 }}
          sx={{ my: "70px", justifyContent: "center" }}
        >
          {/* 1 */}
          <Box>

            <Box
              sx={{
                p: "10px",
                m: "auto",
                backgroundColor: "#C1C0C1",
                width: "80px",
                borderRadius: "50%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "black",
                  width: "60px",
                  p: "10px",
                  display: "flex",
                  borderRadius: "50%",
                }}
              >
                <Delivery_Icon />
              </Box>
            </Box>

            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ textAlign: "center", mt: "20px", fontSize:{md:'25px', xs:'16px'} }}
            >
              FREE AND FAST DELIVERY
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={700}
              sx={{ textAlign: "center" }}
            >
              Free delivery for all orders over $140
            </Typography>
          </Box>

          {/* 2 */}
          <Box>
            <Box
              sx={{
                p: "10px",
                m: "auto",
                backgroundColor: "#C1C0C1",
                width: "80px",
                borderRadius: "50%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "black",
                  width: "60px",
                  p: "10px",
                  display: "flex",
                  borderRadius: "50%",
                }}
              >
                <Customer_Service />
              </Box>
            </Box>

            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ textAlign: "center", mt: "20px", fontSize:{md:'25px', xs:'16px'} }}
            >
              24/7 CUSTOMER SERVICE
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={700}
              sx={{ textAlign: "center" }}
            >
              Friendly 24/7 customer support
            </Typography>
          </Box>

          {/* 3 */}
          <Box>
            <Box
              sx={{
                p: "10px",
                m: "auto",
                backgroundColor: "#C1C0C1",
                width: "80px",
                borderRadius: "50%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "black",
                  width: "60px",
                  p: "10px",
                  display: "flex",
                  borderRadius: "50%",
                }}
              >
                <Secure_Icon />
              </Box>
            </Box>

            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ textAlign: "center", mt: "20px", fontSize:{md:'25px', xs:'16px'}  }}
            >
              MONEY BACK GUARANTEE
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={700}
              sx={{ textAlign: "center" }}
            >
              We reurn money within 30 days
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
