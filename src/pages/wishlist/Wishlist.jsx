import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Stack,
  Link,
  Container,
  Grid,
  Button,
  Rating,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث
import Primary_Button from "../../components/common/Primary_Button";
import Delete_Icon from "../../assets/svgComponents/wishlist/Delete_Icon";
import { getProductById_Cart } from "../../api/products_Api";
import { getProductById_Wishlist} from "../../api/products_Api";


export default function Wishlist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.info("wishlist Page");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);
  const uniqueItems = [...new Map(items.map(i => [i.id, i])).values()];
  console.info(uniqueItems);

  useEffect(() => {
    console.info(items);
    console.info(items.length);
  }, [items]);

  
    // add to cart
      const addToCart = (id) => {
      try {
        dispatch( getProductById_Cart(id));
      } catch (error) {
        console.log(error);
      }
    };
  

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{ px: { sm: "50px", xs: "10px" } }}
        py="50px"
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
        <Typography variant="body1">Wishlist</Typography>
      </Stack>

      <Container maxWidth="xl" sx={{ px: { sm: "60px", xs: "10px" } }}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mb: "40px" }}
        >
          {/* 1 */}
          <Typography variant="h6" color="">
            wishlist ({uniqueItems.length})
          </Typography>

          {/* 2 */}
          <Button
            variant="outlined"
            color="text"
            sx={{ textTransform: "revert", px: "30px", py: "10px" , fontSize:'16px',}}
          >
            Move All To Cart
          </Button>
        </Box>

        <Grid container spacing={4} mb='40px'>
          {uniqueItems ? (
            // items.length > 0 ? (
            uniqueItems.map((product, index) => (
              <Grid size={{ lg: 3, md: 4, xs: 6 }} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "5px",
                    position: "relative",
                    mb: "5px",
                  }}
                >
                  <Box
                    sx={{
                      margin: "auto",
                      height: "200px",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      sx={{
                        width: "60%",
                        height: "150px",
                        mb: "0px",
                        pb: "0px",
                      }}
                    ></Box>
                  </Box>

                  <Box
                    sx={{ position: "absolute", top: "10px", right: "10px" }}
                  >
                    <Button
                      
                      sx={{ cursor: "pointer", mb: "5px" }}
                    >
                      <Delete_Icon />
                    </Button>
                  </Box>

                  <Box>
                    <Typography
                      variant="body1"
                      px="10px"
                      py="3px"
                      sx={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        color: "white",
                        backgroundColor: "#DB4444",
                        borderRadius: "5px",
                      }}
                    >
                      -35%
                    </Typography>
                  </Box>
                  <Button
                    variant="body1"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      width: "100%",
                      mt: "0px",
                      py: "5px",
                      textAlign: "center",
                      cursor: "pointer",
                      textTransform: "revert",
                    }}
                    onClick={() => addToCart(product.id)}
                  >
                    Add To Cart
                  </Button>
                </Box>
                <Box>
                  <Typography variant="body1" color="initial">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="error">
                    {product.price} $
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                  <Typography variant="body1" color="text.secondary">
                    ({product.rating.count})
                  </Typography>
                </Stack>
              </Grid>
            ))
          ) : (
            <>
              <Grid size={{ lg: 3, md: 4, xs: 6 }}>
                <Box>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <Skeleton width="90%" />
                  <Skeleton width="30%" />
                </Box>
              </Grid>
              <Grid size={{ lg: 3, md: 4, xs: 6 }}>
                <Box>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <Skeleton width="90%" />
                  <Skeleton width="30%" />
                </Box>
              </Grid>
              <Grid size={{ lg: 3, md: 4, xs: 6 }}>
                <Box>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <Skeleton width="90%" />
                  <Skeleton width="30%" />
                </Box>
              </Grid>

              <Grid size={{ lg: 3, md: 4, xs: 6 }}>
                <Box>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <Skeleton width="90%" />
                  <Skeleton width="30%" />
                </Box>
              </Grid>
            </>
            // <Typography variant="h5" color=""> Loading... </Typography>
          )}
        </Grid>
      </Container>
    </>
  );
}
