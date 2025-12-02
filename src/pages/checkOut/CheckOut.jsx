import React from "react";
import {
  Box,
  Typography,
  Stack,
  Link,
  Container,
  Grid,
  Button,
  TextField,
  Skeleton,
  Divider,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث
import { useSelector, useDispatch } from "react-redux";
import { setQuantity } from "../../redux/cartSlice";
import Primary_Button from "../../components/common/Primary_Button";

export default function CheckOut() {
  console.info("checkOut page");

  const quantities = useSelector((state) => state.cart.quantities);
  console.info(quantities);
  const items = useSelector((state) => state.cart.items);
  const uniqueItems = [...new Map(items.map((i) => [i.id, i])).values()];

  const totalPrice = uniqueItems.reduce((sum, item) => {
    const q = quantities[item.id] || 1;
    return sum + item.price * q;
  }, 0);

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
        <Link
          variant="body1"
          color="text.secondary"
          component={RouterLink}
          underline="hover"
          to="/cart"
        >
          Cart
        </Link>
        <Typography variant="body1">/</Typography>
        <Typography variant="body1">checkOut</Typography>
      </Stack>

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
            {uniqueItems ? (
              uniqueItems.map((product, index) => (
                <Box key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      pb: "20px",
                      width: "70%",
                      mx:{lg:'1px', sm:'50px'}
                
                    }}
                  >
                    {/* img and name */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ position: "relative" }}>
                        <Box
                          component="img"
                          src={product.image}
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
                          {quantities[product.id]}
                        </Box>
                      </Box>
                      <Typography variant="body1" color="">
                        {product.title.length > 20
                          ? product.title.slice(0, 20) + "..."
                          : product.title}
                      </Typography>
                    </Box>

                    {/* price */}
                    <Typography variant="body1">${product.price}</Typography>
                  </Box>
                </Box>
              ))
            ) : (
              <>
                <Typography variant="bodu1" color="">
                  loading...
                </Typography>
              </>
            )}

            <Box sx={{ width: "70%" ,mb:"30px",   mx:{lg:'1px', sm:'50px'} }}>
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
                  ${totalPrice}
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
                  ${totalPrice}
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
    </>
  );
}
