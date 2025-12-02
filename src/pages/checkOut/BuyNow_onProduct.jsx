import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Link,
  Container,
  TextField,
  Skeleton,
  Divider,
  Checkbox,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث
import { useSelector, useDispatch } from "react-redux";
import { setQuantity } from "../../redux/cartSlice";
import Primary_Button from "../../components/common/Primary_Button";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

export default function BuyNow_onProduct() {
  console.info("buyNow page");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quantities = useSelector((state) => state.cart.quantities);
  console.info(quantities);
  const item = useSelector((state) => state.detailsItem.items.data);

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{ px: { sm: "50px", xs: "10px" } }}
        pt="50px"
        pb="20px"
      >
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
        <Typography variant="body1">buy now</Typography>
      </Stack>

      {item ? (
        <Container maxWidth="xl" sx={{ px: { md: "50px" }, mb: "40px" }}>
          <Typography variant="h4" my="30px">
            Billing Details
          </Typography>

          <Box sx={{ display: { md: "flex" } }}>
            {/* 1 */}

            <Box
              sx={{
                width: { md: "50%" },
                m: "auto",
                width: { lg: "80%", md: "50%" },
                px: { sm: "50px", lg: "1px" },
              }}
            >
              <Typography variant="body1" color="text.secondary">
                First Name*
              </Typography>
              <TextField
                hiddenLabel
                variant="filled"
                size="small"
                sx={{
                  width: { md: "60%", xs: "100%" },
                  mb: "20px",
                  "& .MuiFilledInput-root": {
                    "&:before": { borderBottom: "none" },
                  },
                }}
              />

              <Typography variant="body1" color="text.secondary">
                Company Name
              </Typography>
              <TextField
                hiddenLabel
                variant="filled"
                size="small"
                sx={{
                  width: { md: "60%", xs: "100%" },
                  mb: "20px",
                  "& .MuiFilledInput-root": {
                    "&:before": { borderBottom: "none" },
                  },
                }}
              />

              <Typography variant="body1" color="text.secondary">
                Street Adress*
              </Typography>
              <TextField
                hiddenLabel
                variant="filled"
                size="small"
                sx={{
                  width: { md: "60%", xs: "100%" },
                  mb: "20px",
                  "& .MuiFilledInput-root": {
                    "&:before": { borderBottom: "none" },
                  },
                }}
              />

              <Typography variant="body1" color="text.secondary">
                Apartment, floor, etc. (optional)
              </Typography>
              <TextField
                hiddenLabel
                variant="filled"
                size="small"
                sx={{
                  width: { md: "60%", xs: "100%" },
                  mb: "20px",
                  "& .MuiFilledInput-root": {
                    "&:before": { borderBottom: "none" },
                  },
                }}
              />

              <Typography variant="body1" color="text.secondary">
                Town/City*
              </Typography>
              <TextField
                hiddenLabel
                variant="filled"
                size="small"
                sx={{
                  width: { md: "60%", xs: "100%" },
                  mb: "20px",
                  "& .MuiFilledInput-root": {
                    "&:before": { borderBottom: "none" },
                  },
                }}
              />

              <Typography variant="body1" color="text.secondary">
                Phone Number*
              </Typography>
              <TextField
                hiddenLabel
                type="number"
                variant="filled"
                size="small"
                sx={{
                  width: { md: "60%", xs: "100%" },
                  mb: "20px",
                  "& .MuiFilledInput-root": {
                    "&:before": { borderBottom: "none" },
                  },
                }}
              />

              <Typography variant="body1" color="text.secondary">
                Email Address*
              </Typography>
              <TextField
                type="email"
                hiddenLabel
                variant="filled"
                size="small"
                sx={{
                  width: { md: "60%", xs: "100%" },
                  mb: "20px",
                  "& .MuiFilledInput-root": {
                    "&:before": { borderBottom: "none" },
                  },
                }}
              />

              <Box sx={{ display: "flex", alignItems: "center", mb: "50px" }}>
                <Checkbox defaultChecked color="error" />
                <Typography variant="body1" color="">
                  Save this information for faster check-out next time
                </Typography>
              </Box>
            </Box>

            {/* 2 */}
            <Box sx={{ width: { lg: "50%", md: "55%" } }}>
              {item ? (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      pb: "20px",
                      width: "70%",
                      mx: { lg: "1px", sm: "50px" },
                    }}
                  >
                    {/* img and name */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ position: "relative" }}>
                        <Box
                          component="img"
                          src={item?.image}
                          sx={{ width: "40px", mr: "15px" }}
                        />
                        <Box
                          variant="body1"
                          color="white "
                          sx={{
                            position: "absolute",
                            top: "-5px",
                            left: "-10px",
                            backgroundColor: "#DB4444",
                            borderRadius: "50%",
                            px: "6px",
                            cursor: "pointer",
                          }}
                        >
                          {quantities[item?.id]}
                        </Box>
                      </Box>
                      <Typography variant="body1" color="">
                        {item?.title.length > 20
                          ? item?.title.slice(0, 20) + "..."
                          : item?.title}
                      </Typography>
                    </Box>

                    {/* price */}
                    <Typography variant="body1">${item?.price}</Typography>
                  </Box>
                </Box>
              ) : (
                // ))
                <>
                  <Typography variant="bodu1" color="">
                    loading...
                  </Typography>
                </>
              )}

              <Box
                sx={{ width: "70%", mb: "30px", mx: { lg: "1px", sm: "50px" } }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: "10px",
                  }}
                >
                  <Typography variant="body1" color="">
                    Subtotal:
                  </Typography>
                  <Typography variant="body1" color="">
                    ${item?.price}
                  </Typography>
                </Box>

                <Divider sx={{}} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: "10px",
                  }}
                >
                  <Typography variant="body1" color="">
                    Shipping:
                  </Typography>
                  <Typography variant="body1" color="">
                    Free
                  </Typography>
                </Box>
                <Divider sx={{}} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: "10px",
                  }}
                >
                  <Typography variant="body1" color="">
                    Total:
                  </Typography>
                  <Typography variant="body1" color="">
                    ${item?.price}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ width: { lg: "100%", xs: "100%" }, mb: "20px" }}>
                <TextField
                  size="small"
                  placeholder="Coupon Code"
                  sx={{ width: "50%" }}
                />
                <Primary_Button
                  sx={{
                    py: "5px",
                    px: { sm: "40px" },
                    ml: "10px",
                    fontWeight: "500",
                  }}
                >
                  Apply Coupon
                </Primary_Button>
              </Box>

              <Primary_Button
                sx={{
                  py: "5px",
                  px: { md: "40px" },
                  ml: "10px",
                  fontWeight: "500",
                }}
              >
                Place Order
              </Primary_Button>
            </Box>
          </Box>
        </Container>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "40px",
            }}
          >
            <Typography variant="h6" color="error" sx={{ pr: "10px" }}>
              not found any item to show it
            </Typography>
            <HeartBrokenIcon color="error" sx={{ textAlign: "" }} />
          </Box>
        </>
      )}
    </>
  );
}
