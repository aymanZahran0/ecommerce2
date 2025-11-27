import React, { useEffect, useState } from "react";
import { Typography, Box, Grid, Container, Rating, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../../api/axiosInstance";
import Today from "../../components/home/Today";
import Categories from "../../components/home/Categories";
import Best_Selling_Products from "../../components/home/Best_Selling_Products";
import Our_Products from "../../components/home/Our_Products";
import Features from "../../components/home/Features";
import SidePar from "../../components/home/SidePar";
// import {ToastContainer, toast} from "react-toastify";



export default function Home() {

  console.info("home page");
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <>
      <Container maxWidth="xl" >
        <Box sx={{px:{md:'50px', sx:'1px'}}}>
          <SidePar/>
          <Today/>
          <Categories/>
          <Best_Selling_Products/>
          <Our_Products/>
          <Features/>
        </Box>
      </Container>
    </>
  );
}
