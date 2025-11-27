import React from "react";
import Two_african from "../../assets/svgComponents/about/Two_african.svg";
import { Box, Typography, Stack, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث

export default function Our_Store() {
  return (
    <>
      <Stack direction="row" spacing={2} px="50px" pt="50px">
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
        <Typography variant="body1"> About</Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: "30px",
        }}
      >
        {/* 1 */}
        <Box sx={{ width: { md: "40%", xs: "90%" }, m: "auto", px: "20px" }}>
          <Typography variant="h3" mb="30px" sx={{fontWeight:'600'}}>
            Our Store
          </Typography>
          <Typography variant="h6" my="20px">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </Typography>
          <Typography variant="h6">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </Typography>
        </Box>

        {/* 2 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            width: { lg: "50%", sm: "60%" },
          }}
        >
          <Box
            component="img"
            src={Two_african}
            sx={{
              width: "100%",
              display: { sm: "block", xs: "none" },
              borderRadius: "5px 0px 0px 5px",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
