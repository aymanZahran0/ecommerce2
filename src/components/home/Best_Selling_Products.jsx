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
import Primary_Button from "../../components/common/Primary_Button";
import axiosInstance from "../../api/axiosInstance";
import Heart_Icon from "../../assets/svgComponents/product_Icon/Heart_icon";
import Eye_Icon from "../../assets/svgComponents/product_Icon/Eye_Icon";
import { useState } from "react";
import { useEffect } from "react";
import MusicSvg from "../../assets/svgComponents/MusicSvg";
import { ToastContainer, toast } from "react-toastify";
import {
  getProductById_Cart,
  getProductById_Details,
} from "../../api/products_Api";
import { getProductById_Wishlist } from "../../api/products_Api";
import { useNavigate } from "react-router-dom";
import { removeWishlistItem } from "../../redux/wishlistSlice";
import { removeCartItem } from "../../redux/cartSlice";

export default function Best_Selling_Products() {
  const [value, setValue] = useState(
    localStorage.getItem("myRate") === null ? 2 : localStorage.getItem("myRate")
  );
  const [allProducts, setAllProducts] = useState([]);
  const [viewAll, setViewAll] = useState(4);
  const [toggleViewAll, setToggleViewAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toggleHeartColor, setToggleHeartColor] = useState({});
  const [toggleCart, setToggleCart] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();

  async function getProductData() {
    try {
      const { data } = await axiosInstance.get("/products");
      // console.log(data);
      setAllProducts(data);
      setLoading(false);
      return data;
    } catch (err) {
      console.log(err);
      setLoading(false);
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
      setViewAll(allProducts.length - 10);
    } else {
      setToggleViewAll(false);
      setViewAll(4);
    }
  }

  // add to cart
  const addToCart = (id) => {
    const current = toggleCart[id];
    if (!current) {
      dispatch(getProductById_Cart(id));
    } else {
      dispatch(removeCartItem(id));
    }

    setToggleCart((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle for that product only
    }));
  };

  // heart icon
  const toggleHeart = (id) => {
    const current = toggleHeartColor[id];

    if (!current) {
      dispatch(getProductById_Wishlist(id));
    } else {
      dispatch(removeWishlistItem(id));
    }

    setToggleHeartColor((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle for that product only
    }));
  };

  // eye icon
  const detailsItem = (id) => {
    dispatch(getProductById_Details(id));
    navigate("/detailsitem");
  };

  return (
    <>
      <ToastContainer />
      {/* 1 */}
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
              this Month
            </Typography>
          </Stack>

          <Box
            sx={{
              display: { sm: "flex" },
              justifyContent: "space-between",
              mt: "20px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "25px", sm: "30", md: "45px" },
                mb: { sm: "0px", xs: "20px" },
              }}
            >
              Best Selling Products
            </Typography>
            <Box>
              <Primary_Button onClick={ViewProducts} sx={{ px: "30px" }}>
                {toggleViewAll === false ? "View All" : "View less"}
              </Primary_Button>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {loading == false ? (
            // allProducts.length > 0 ? (
            allProducts.slice(0, viewAll).map((product, index) => (
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
                      onClick={() => toggleHeart(product.id)}
                      sx={{ cursor: "pointer", mb: "5px" }}
                    >
                      <Heart_Icon
                        fill={
                          toggleHeartColor[product.id] ? "red" : "transparent"
                        }
                      />
                    </Button>
                    <Button
                      onClick={() => {
                        detailsItem(product.id);
                      }}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
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
                    {toggleCart[product.id] ? "Cancle" : " Add To Cart"}
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

      {/* 2 */}
      {allProducts.length > 0?
       <Box
        sx={{
          my: "70px",
          position: "relative",
          backgroundColor: "black",
          height: "80vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 1 */}
        <Box sx={{ m: "auto", pl: "" }}>
          <Typography variant="h6" mb="30px" color="#00FF66">
            Categories
          </Typography>
          <Typography variant="h3" color="white">
            Enhance Your
          </Typography>
          <Typography variant="h3" color="white">
            Movies  Experience
          </Typography>

          <Stack direction="row" spacing={2} sx={{ my: "50px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70px",
                p: "15px",
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: "800" }}>
                  23
                </Typography>
                <Typography variant="body2">Hours</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70px",
                p: "px",
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: "800" }}>
                  05
                </Typography>
                <Typography variant="body2">Days</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70px",
                p: "px",
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: "800" }}>
                  59
                </Typography>
                <Typography variant="body2">Minutes</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70px",
                p: "px",
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: "800" }}>
                  35
                </Typography>
                <Typography variant="body2">seconds</Typography>
              </Box>
            </Box>
          </Stack>

          <Primary_Button
            onClick={() => {
              navigate("/buynow");
              dispatch(getProductById_Details(14));
            }}
            sx={{
              px: "30px",
              backgroundColor: "#00FF66",
              "&:hover": {
                backgroundColor: "#00dF11",
              },
            }}
          >
            Buy Now!
          </Primary_Button>
        </Box>

        {/* 2 */}
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
          }}
        >
          <Box sx={{}}>
            {/* <MusicSvg /> */}
            <Box
              component="img"
              src={allProducts[13]?.image}
              sx={{
                width: { sm: "100%", xs: "90%" },
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
      :
      <>
       <Box
        sx={{
          my: "70px",
          position: "relative",
          height: "80vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Skeleton variant="rectangular" width="100%" height='80%' />
      </Box>
      </>}
    </>
  );
}
