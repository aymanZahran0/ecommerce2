import React from "react";
import {
  Box,
  Typography,
  Stack,
  Link,
  Container,
  Divider,
  Grid,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث
import Call_Icon from "../../assets/svgComponents/contact/Call_Icon.svg";
import Mail_Icon from "../../assets/svgComponents/contact/Mail_Icon.svg";
import Primary_Button from "../../components/common/Primary_Button";

export default function Contact_Slice() {
  return (
    <>
      <Container maxWidth="xl" sx={{ px: { lg: "50px" }, mb: "40px" }}>
        <Stack direction="row" spacing={2} px="50px" py="50px">
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
          <Typography variant="body1"> Contact</Typography>
        </Stack>

        <Box sx={{ mt: "20px", mx: "40px" }}>
          <Grid container spacing={3}>
            {/* 1 */}
            <Grid size={{ lg: 3.5, md: 8, sm: 8, xs: 12 }} m="auto">
              <Box
                sx={{
                  boxShadow: "0px 0px 20px 0px #F5F5F5",
                  p: "20px",
                  px: "30px",
                  display: { lg: "block", md: "flex" },
                }}
              >
                <Box>
                  <Stack direction="row" spacing={2} my="30px">
                    <Box
                      component="img"
                      src={Call_Icon}
                      sx={{
                        backgroundColor: "#DB4444",
                        p: "10px",
                        borderRadius: "50%",
                      }}
                    ></Box>
                    <Typography variant="h6">Call To Us</Typography>
                  </Stack>
                  <Typography variant="body2" my="10px">
                    We are available 24/7, 7 days a week.
                  </Typography>
                  <Typography variant="body2" mb="30px">
                    Phone: +8801611112222
                  </Typography>
                </Box>

                <Divider
                  sx={{
                    display: { xs: "block" },
                    border: "solid 1px gray",
                    mx: { lg: "0px", md: "40px" },
                  }}
                />

                <Box>
                  <Stack direction="row" spacing={2} my="30px">
                    <Box
                      component="img"
                      src={Mail_Icon}
                      sx={{
                        backgroundColor: "#DB4444",
                        p: "10px",
                        borderRadius: "50%",
                      }}
                    ></Box>
                    <Typography variant="h6">Write To Us</Typography>
                  </Stack>
                  <Typography variant="body2" mb="20px" sx={{ width: "70%" }}>
                    Fill out our form and we will contact you within 24 hours.
                  </Typography>
                  <Typography variant="body2" mb="20px">
                    Emails: customer@exclusive.com
                  </Typography>
                  <Typography variant="body2" mb="20px">
                    Emails: support@exclusive.com
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* 2 */}
            <Grid size={{ lg: 8.5, md: 12, xs: 12 }}>
              <Box
                sx={{
                  m: "auto",
                  boxShadow: "0px 0px 20px 0px #F5F5F5",
                  py: "40px",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: "30px",
                    }}
                  >
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-small"
                      variant="filled"
                      size="small"
                      sx={{
                        width: "33%",
                        px: "10px",
                        "& .MuiFilledInput-root": {
                          "&:before": { borderBottom: "none" },
                        },
                      }}
                      placeholder="Your Name *"
                    />

                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-small"
                      variant="filled"
                      size="small"
                      sx={{
                        width: "33%",
                        px: "10px",
                        "& .MuiFilledInput-root": {
                          "&:before": { borderBottom: "none" },
                        },
                      }}
                      placeholder="Your Email *"
                    />

                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-small"
                      variant="filled"
                      size="small"
                      sx={{
                        width: "33%",
                        px: "10px",
                        "& .MuiFilledInput-root": {
                          "&:before": { borderBottom: "none" },
                        },
                      }}
                      placeholder="Your Phone *"
                    />
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                      placeholder="Message"
                      variant="filled"
                      multiline
                      rows={8}
                      fullWidth
                      sx={{
                        mx: "20px",
                        "& .MuiFilledInput-root": {
                          "&:before": { borderBottom: "none" },
                        },
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      mt: "25px",
                      pr: "20px",
                    }}
                  >
                    <Primary_Button sx={{ px: "40px", my: "10px" }}>
                      send message
                    </Primary_Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
