import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Grid,
  Container,
  Rating,
  Stack,
  Skeleton,
  Link,
  Button,
} from "@mui/material";
import Primary_Button from "../../components/common/Primary_Button";
import axiosInstance from "../../api/axiosInstance";
import Heart_Icon from "../../assets/svgComponents/product_Icon/Heart_icon";
import Eye_Icon from "../../assets/svgComponents/product_Icon/Eye_Icon";
import { getProductById_Cart } from "../../api/products_Api";
import { getProductById_Wishlist } from "../../api/products_Api";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث



export default function CategoryPage() {
  console.info("category page");
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [value, setValue] = useState(
    localStorage.getItem("myRate") === null ? 2 : localStorage.getItem("myRate")
  );

  async function getProductData() {
    try {
      const { data } = await axiosInstance.get("/products");
      console.log(data);
      setAllProducts(data);
      return data;
    } catch (err) {
      console.log(err);
      return err.response.data;
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  // add to cart
  const addToCart = (id) => {
    try {
      dispatch(getProductById_Cart(id));
    } catch (error) {
      console.log(error);
    }
  };

  // add to wishlist
  const addToWishlist = (id) => {
    try {
      dispatch(getProductById_Wishlist(id));
    } catch (error) {
      console.log(error);
    }
  };

  const filtered = allProducts.filter((item) => item.category === categoryName);

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
        <Typography variant="body1">{categoryName}</Typography>
      </Stack>

    <Container maxWidth="xl">
      <Grid container spacing={4}>
        {allProducts.length > 0 ? (
          filtered.map((product, index) => (
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

                <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
                  <Button
                    onClick={() => addToWishlist(product.id)}
                    sx={{ cursor: "pointer", mb: "5px" }}
                  >
                    <Heart_Icon />
                  </Button>
                  <Button sx={{ cursor: "pointer", display: "block" }}>
                    <Eye_Icon />
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
                    35%
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
          </>
        )}
      </Grid>
    </Container>
      
    </>
  );
}
