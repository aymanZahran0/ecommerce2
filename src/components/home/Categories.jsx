import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  Grid,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import "swiper/css";
import "swiper/css/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Man,Woman,TvOutlined,BeachAccessOutlined,HeadsetOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";



export default function Categories() {
  const categories = [
    { name: "men's clothing", icon: <Man sx={{fontSize:'40px'}}/> },
    { name: "jewelery", icon: <BeachAccessOutlined sx={{fontSize:'40px'}}/> },
    { name: "electronics", icon: <TvOutlined sx={{fontSize:'40px'}}/> },
    { name: "women's clothing", icon: <Woman sx={{fontSize:'40px'}}/> },
    { name: "HeadPhones", icon: <HeadsetOutlined sx={{fontSize:'40px'}}/> },
    { name: "Gaming", icon: <AccessAlarmsIcon sx={{fontSize:'40px'}}/> },
  ];

   const navigate= useNavigate()
   
  return (
    <>
      <ToastContainer />
      <Container maxWidth="xl">
         <Divider />
        <Box sx={{ my: "50px" }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={4}
          > 
            <Box sx={{width:'100%'}}>
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
                  Categories
                </Typography>
              </Stack>

              <Box sx={{ display: {sm:"flex" },justifyContent:'space-between',mt:"20px"}}>
                <Typography variant="h3" sx={{fontSize:{xs:'25px',sm:'30px',md:'45px'}}}>
                  Browse By Category
                </Typography>

                <Box sx={{mt:'20px', }}>
                  <IconButton id="custom-prev" sx={{backgroundColor:'#F5F5F5',p:'', mr:'10px'}}>
                    <ArrowBackIcon />
                  </IconButton>

                  <IconButton id="custom-next" sx={{backgroundColor:'#F5F5F5',p:''}}>
                    <ArrowForwardIcon />
                  </IconButton>
                </Box>

              </Box>
            </Box>
          </Box>

          <Swiper
            breakpoints={{
              0: { slidesPerView: 2 },
              600: { slidesPerView: 3 },
              900: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            // slidesPerView={6}
            spaceBetween={20}
            // navigation={true}
            navigation={{
              prevEl: "#custom-prev",
              nextEl: "#custom-next",
            }}
            modules={[Navigation]}
            style={{ paddingBottom: "20px" }}
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index}>
                <Card
                 onClick={()=>{navigate(`category/${cat.name}`)}}
                  sx={{
                    borderRadius: 3,
                    textAlign: "center",
                    p: " 15px",
                    cursor: "pointer",
                    transition: "0.3s",
                    border: "1px solid #e0e0e0",
                    color: cat.name === "jewelery" ? "#fff" : "#000",
                    bgcolor: cat.name === "jewelery" ? "#E53935" : "#fff",
                    "&:hover": {
                      bgcolor: "#E53935",
                      color: "#fff",
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" justifyContent="center" mb={1}>
                      {cat.icon}
                    </Box>
                    <Typography variant="body1" fontWeight={500}>
                      {cat.name}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Divider />
      </Container>
    </>
  );
}
