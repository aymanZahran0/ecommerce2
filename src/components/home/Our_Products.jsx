import React from "react";
import {
  Typography,
  Box,
  Grid,
  Container,
  Rating,
  Stack,
  Skeleton,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Primary_Button from "../common/Primary_Button";
import axiosInstance from "../../api/axiosInstance";
import Heart_Icon from "../../assets/svgComponents/product_Icon/Heart_icon";
import Eye_Icon from "../../assets/svgComponents/product_Icon/Eye_Icon";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getProductById_Cart } from "../../api/products_Api";
import { getProductById_Wishlist} from "../../api/products_Api";



export default function Our_Products() {
  const [value, setValue] = useState(
    localStorage.getItem("myRate") === null ? 2 : localStorage.getItem("myRate")
  );
  const [allProducts, setAllProducts] = useState([]);
  const [viewAll, setViewAll] = useState(17);
  const [toggleViewAll, setToggleViewAll] = useState(false);
  const dispatch = useDispatch();
  async function getProductData() {
    try {
      const { data } = await axiosInstance.get("/products");
      setAllProducts(data);
      return data;
    } catch (err) {
      return err.response.data;
    }
  }
  useEffect(() => {
    getProductData();
  }, []);

  function ViewProducts() {
    setViewAll(allProducts.length);
    if (toggleViewAll === false) {
      setToggleViewAll(true);
      setViewAll(allProducts.length);
    } else {
      setToggleViewAll(false);
      setViewAll(17);
    }
  }

  // add to cart
      const addToCart = (id) => {
      try {
        dispatch( getProductById_Cart(id));
      } catch (error) {
        console.log(error);
      }
    };
  
    // add to wishlist
      const addToWishlist = (id) => {
      try {
        dispatch( getProductById_Wishlist(id));
      } catch (error) {
        console.log(error);
      }
    };
  


  return (
    <>
      <ToastContainer />
      <Container maxWidth="xl">
        <Box my="50px">
          <Stack direction="row" spacing={2}>
            <Typography
              variant="body2"
              sx={{
                width: "20px",
                height: "40px",
                backgroundColor: "#DB4444",
                borderRadius: "5px",
              }}
            ></Typography>
            <Typography variant="h6" color="error">
              Our Products
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "20px",
            }}
          >
            <Typography variant="h3">Explore Our Products</Typography>
            <Box>
              {/* <Primary_Button onClick={ViewProducts} sx={{px:'30px'}}>
                    {toggleViewAll===false? 'View All':'View less'}
                    </Primary_Button> */}
            </Box>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {allProducts.length > 0 ? (
            allProducts.slice(9, viewAll).map((product, index) => (
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
                    <Typography
                      component="Img"
                      src={product.image}
                      sx={{
                        width: "60%",
                        height: "150px",
                        mb: "0px",
                        pb: "0px",
                      }}
                    ></Typography>
                  </Box>

                  <Box
                    sx={{ position: "absolute", top: "10px", right: "10px" }}
                  >
                    <Button onClick={() => addToWishlist(product.id)} sx={{ cursor: "pointer", mb: "5px" }}>
                      <Heart_Icon />
                    </Button>
                    <Button sx={{ cursor: "pointer" , display:'block'}}>
                      <Eye_Icon />
                    </Button>
                  </Box>

                  <Box>
                    {product.id < 13 ? (
                      <Typography
                        variant="body1"
                        px="10px"
                        py="3px"
                        sx={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          color: "white",
                          backgroundColor: "#00FF66",
                          borderRadius: "5px",
                        }}
                      >
                        New
                      </Typography>
                    ) : (
                      ""
                    )}
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
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                      localStorage.setItem("myRate", newValue);
                    }}
                  />
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
          )}
        </Grid>

        <Box sx={{ my: "40px", display: "flex", justifyContent: "center" }}>
          <Primary_Button
            onClick={ViewProducts}
            sx={{ px: "30px", margin: "" }}
          >
            {toggleViewAll === false ? "View All Products" : "View less "}
          </Primary_Button>
        </Box>
      </Container>
    </>
  );
}
