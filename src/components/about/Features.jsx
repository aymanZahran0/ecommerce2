import React from "react";
import { Typography, Box, Stack, Grid,Link } from "@mui/material";
import Delivery_Icon from "../../assets/svgComponents/features/Delivary_Icon.jsx";
import Customer_Service from "../../assets/svgComponents/features/Customer_Service.jsx";
import Secure_Icon from "../../assets/svgComponents/features/Secure_Icon.jsx";
import { Link as RouterLink } from "react-router-dom";
 


export default function Features() {
  return (
    <>
      <Box sx={{ my: "40px" }}>


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
              sx={{ textAlign: "center", mt: "20px" }}
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
              sx={{ textAlign: "center", mt: "20px" }}
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
              sx={{ textAlign: "center", mt: "20px" }}
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
