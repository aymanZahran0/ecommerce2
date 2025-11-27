import React from "react";
import { Typography, Box, Divider, Stack } from "@mui/material";
import Phone_Home from "../../assets/svgComponents/Phone_Home.jsx";
import Phone_Home2 from "../../assets/svgComponents/Phone_Home.svg";
import Apple_Icon from "../../assets/svgComponents/Apple_Icon";

export default function SidePar() {
  return (
    <>
      <Box>
        <Box sx={{ display: { lg: "flex", xs: "block" } }}>
          {/* side par*/}
          <Box>
            <Box>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem sx={{pl:'0px', display:{lg:'block', xs:'none'}}}/>}
                spacing={3}
                mt="0px"
              >
                <Stack
                    useFlexGap
                    sx={{flexWrap: 'wrap'}}
                  direction={{ xs: "row", lg: "column" }}
                  pt="30px"
                  spacing={3}
                >
                  <Typography variant="h6" sx={{cursor:'pointer', textDecoration:{lg:'none', xs:'underline'}}}>
                    men's clothing
                  </Typography>
                  <Typography variant="h6" sx={{cursor:'pointer', textDecoration:{lg:'none', xs:'underline'}}}>
                    jewelery
                  </Typography>
                  <Typography variant="h6" sx={{cursor:'pointer', textDecoration:{lg:'none', xs:'underline'}}}>
                    women's clothing
                  </Typography>
                  <Typography variant="h6" sx={{cursor:'pointer', textDecoration:{lg:'none', xs:'underline'}}}>
                    electronics
                  </Typography>
                  <Typography variant="h6" sx={{cursor:'pointer', textDecoration:{lg:'none', xs:'underline'}}}>
                    HeadPhones
                  </Typography>
                  <Typography variant="h6" sx={{cursor:'pointer', textDecoration:{lg:'none', xs:'underline'}}}>
                    Gaming
                  </Typography>
                </Stack>
                  <Box></Box>
              </Stack>
            </Box>
          </Box>

          {/* section 2 */}
          <Box
            sx={{
              backgroundColor: "black",
              color: "white",
              mx: { lg: "40px", xs: "1px" },
              my: "30px",
              py: "30px",
              width: { lg: "79%", xs: "100%" },
            }}
          >
            {/* <Box direction="row" spacing={4}> */}
            <Box
              sx={{
                display: { md: "flex", xs: "block" },
                justifyContent: "space-between",
              }}
            >
              <Box pl={10} pt="20px" sx={{}}>
                <Stack direction="row" spacing={3}>
                  <Apple_Icon />
                  <Typography variant="body1" py="15px">
                    iphone 14 series
                  </Typography>
                </Stack>
                <Typography variant="h2">
                  Up to 10%
                </Typography>
                <Typography variant="h2">
                  off Voucher
                </Typography>
                <Typography
                  variant="h6"
                  to="/"
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                  my="30px"
                >
                  Shop Now
                </Typography>
              </Box>

              <Box sx={{}}>
                <Box
                  component="img"
                  src={Phone_Home2}
                  sx={{
                    width: { sm: "100%", xs: "90%" },
                    backgroundColor: "gray",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
