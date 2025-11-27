import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Icon_shop from "../../assets/svgComponents/about/Icon_shop.svg";
import Icon_Sale from "../../assets/svgComponents/about/Icon_Sale.svg";
import Icon_Shopping_bag from "../../assets/svgComponents/about/Icon_Shopping_bag.svg";
import Icon_Moneybag from "../../assets/svgComponents/about/Icon_Moneybag.svg";

export default function Details() {
  return (
    <>
      <Container maxWidth="xl">
        {/* <Stack direction='row' spacing={2}>
            <Box>
                <Box sx={{backgroundColor:'gray', borderRadius:'50%',p:'5px',}}>
                  <Box component='img' src={Icon_shop} sx={{backgroundColor:'Black', p:'15px', borderRadius:'50%'}}></Box>
                </Box>
            </Box>

        </Stack> */}

        <Stack
          useFlexGap
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 5 }}
          sx={{ my: "70px", justifyContent: "center", flexWrap: "wrap" }}
        >
          {/* 1 */}
          <Box
            sx={{
              border: "1px solid #C1C0C1",
              borderRadius: "5px",
              px: "30px",
              py: "10px",
              "&:hover": {
                bgcolor: "#DB4444",
                color: "#fff",
              },
            }}
          >
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
                <Box component="img" src={Icon_shop}></Box>
              </Box>
            </Box>

            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ textAlign: "center", mt: "20px" }}
            >
              10.5k
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={700}
              sx={{ textAlign: "center" }}
            >
              Sallers active our site
            </Typography>
          </Box>

          {/* 2 */}
          <Box
            sx={{
              border: "1px solid #C1C0C1",
              borderRadius: "5px",
              px: "30px",
              py: "10px",
              backgroundColor: "#DB4444",
              color: "white",
            }}
          >
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
                  backgroundColor: "white",
                  width: "60px",
                  p: "10px",
                  display: "flex",
                  borderRadius: "50%",
                }}
              >
                <Box component="img" src={Icon_Sale}></Box>
              </Box>
            </Box>

            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ textAlign: "center", mt: "20px" }}
            >
              33k
            </Typography>
            <Typography
              variant="body2"
              fontWeight={700}
              sx={{ textAlign: "center" }}
            >
              Mopnthly Produduct Sale
            </Typography>
          </Box>

          {/* 3 */}
          <Box
            sx={{
              border: "1px solid #C1C0C1",
              borderRadius: "5px",
              px: "30px",
              py: "10px",
               "&:hover": {
                bgcolor: "#DB4444",
                color: "#fff",
              },
            }}
          >
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
                <Box component="img" src={Icon_Shopping_bag}></Box>
              </Box>
            </Box>

            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ textAlign: "center", mt: "20px" }}
            >
              45.5k
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={700}
              sx={{ textAlign: "center" }}
            >
              Customer active in our site
            </Typography>
          </Box>

          {/* 4 */}
          <Box
            sx={{
              border: "1px solid #C1C0C1",
              borderRadius: "5px",
              px: "30px",
              py: "10px",
               "&:hover": {
                bgcolor: "#DB4444",
                color: "#fff",
              },
            }}
          >
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
                <Box component="img" src={Icon_Moneybag}></Box>
              </Box>
            </Box>

            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ textAlign: "center", mt: "20px" }}
            >
              25K
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={700}
              sx={{ textAlign: "center" }}
            >
              Anual gross sale in our site
            </Typography>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
