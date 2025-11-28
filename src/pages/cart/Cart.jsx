import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Stack,
  Link,
  Container,
  Grid,
  TextField,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث
// import {NumberField} from '@base-ui-components/react/number-field';

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.info("Cart Page");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const uniqueItems = [...new Map(items.map((i) => [i.id, i])).values()];
  const [quantities, setQuantities] = useState({});


  const handleQuantityChange = (id, value) => {
    setQuantities(() => ({
      [id]: value,
    }));
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
                <TableCell sx={{ fontSize: "21px", textAlign: "", m: "20px" }}>
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
                        <Box
                          component="img"
                          src={product.image}
                          sx={{ width: "50px", mr: "15px" }}
                        />
                        <Typography variant="body1" color="">
                          {product.title}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="">{product.price} $</TableCell>
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
                    <TableCell align="">{product.price* (quantities[product.id] || 1)} $</TableCell>
                  </TableRow>
                ))
              ) : (
                <>
                  <Grid size={{ lg: 3, md: 4, xs: 6 }}>
                    <Box>
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={200}
                      />
                      <Skeleton width="90%" />
                      <Skeleton width="30%" />
                    </Box>
                  </Grid>
                  <Grid size={{ lg: 3, md: 4, xs: 6 }}>
                    <Box>
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={200}
                      />
                      <Skeleton width="90%" />
                      <Skeleton width="30%" />
                    </Box>
                  </Grid>
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
