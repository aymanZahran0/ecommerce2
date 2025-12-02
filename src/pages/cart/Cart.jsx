import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { removeCartItem } from "../../redux/cartSlice";
import Primary_Button from "../../components/common/Primary_Button";
import { setQuantity } from "../../redux/cartSlice";



export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.info("Cart Page");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const uniqueItems = [...new Map(items.map((i) => [i.id, i])).values()];
  const [quantities, setQuantities] = useState({});
  const navigate= useNavigate();

  const totalPrice = uniqueItems.reduce((sum, item) => {
  const q = quantities[item.id] || 1;
  return sum + item.price * q;
  }, 0);

console.log(totalPrice)

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));

    dispatch(
      setQuantity({
        id:id,
        quantity: Number(value),
      })
    )
    console.log(quantities)
  };

  useEffect(() => {
    console.info(items);
    console.info(items.length);
  }, [items]);

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
        <Typography variant="body1">Cart</Typography>
      </Stack>

      <Container maxWidth="xl" sx={{ width: "90%", mb: "40px" }}>
        {uniqueItems.length > 0 ? (
          <>
            {/* section 1 */}
            <TableContainer
              component={Paper}
              sx={{ boxShadow: { md: "none" }, border: "none" }}
            >
              <Table
                sx={{
                  minWidth: 650,
                  borderSpacing: "0px 30px",
                  borderCollapse: "separate",
                  border: 0,
                  width: "99%",
                  m: "auto",
                  "& td, & th": {
                    border: 0,
                  },
                }}
              >
                <TableHead sx={{ boxShadow: "0px 0px 5px 0px #eeededff" }}>
                  <TableRow
                    sx={{
                      "& td, & th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell
                      sx={{ fontSize: "21px", textAlign: "", m: "20px" }}
                    >
                      Product
                    </TableCell>
                    <TableCell sx={{ fontSize: "21px", textAlign: "" }}>
                      Price
                    </TableCell>
                    <TableCell sx={{ fontSize: "21px", textAlign: "" }}>
                      Quantity
                    </TableCell>
                    <TableCell sx={{ fontSize: "21px", textAlign: "" }}>
                      Subtotal
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {uniqueItems ? (
                    uniqueItems.map((product, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          boxShadow: "0px 0px 5px 0px #eeededff",
                          "& td, & th": {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell align="">
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ position: "relative" }}>
                              <Box
                                component="img"
                                src={product.image}
                                sx={{ width: "50px", mr: "15px" }}
                              />
                              <Box
                                onClick={() => {
                                  dispatch(removeCartItem(product.id));
                                }}
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
                                x
                              </Box>
                            </Box>

                            <Typography variant="body1" color="">
                              {product.title}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="">${product.price}</TableCell>
                        <TableCell align="">
                          <TextField
                            onChange={(e) =>
                              handleQuantityChange(product.id, e.target.value)
                            }
                            type="number"
                            size="small"
                            defaultValue={1}
                            sx={{ width: "60px" }}
                          />
                        </TableCell>
                        <TableCell align="">
                          ${product.price * (quantities[product.id] || 1)} 
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <>
                      <Typography variant="bodu1" color="">
                        loading...
                      </Typography>
                    </>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            {/* section 2 */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "50px",
              }}
            >
              {/* 1 */}
              <Button
                variant="outlined"
                color="text"
                sx={{
                  textTransform: "revert",
                  px: "50px",
                  py: "10px",
                  fontSize: "16px",
                }}
              >
                Return to Shop
              </Button>

              {/* 2 */}
              <Button
                variant="outlined"
                color="text"
                sx={{
                  textTransform: "revert",
                  px: "50px",
                  py: "10px",
                  fontSize: "16px",
                }}
              >
                Update Cart
              </Button>
            </Box>

            {/* section 3 */}
            <Box
              sx={{
                my: "50px",
                display: {md:'flex', },
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: { lg: "60%", xs:'100%'}, mb:'20px' }}>
                <TextField size="small" placeholder="Coupon Code" />
                <Primary_Button sx={{ py: "5px", px: {md:'40px'}, ml: "10px", fontWeight:'500' }}>
                  Apply Coupon
                </Primary_Button>
              </Box>

              <Box
                
                sx={{
                  width:{md:'50%'},
                  border: "2px solid gray",
                  p: "20px",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="h6" mb='20px'>
                  cart Total
                </Typography>
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

                <Box sx={{display:'flex', justifyContent:'center'}}>
                  <Primary_Button onClick={()=>{navigate('/checkout')}}>Process To Checkout</Primary_Button>
                </Box>
              </Box>
            </Box>
          </>
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
                Your shopping cart is empty
              </Typography>
              <HeartBrokenIcon color="error" sx={{ textAlign: "" }} />
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
