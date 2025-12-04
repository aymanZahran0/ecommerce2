import React from "react";
import {
  Typography,
  Box,
  Rating,
  IconButton,
  Grid,
  Container,
  Skeleton,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import Heart_Icon from "../../assets/svgComponents/product_Icon/Heart_icon";
import Eye_Icon from "../../assets/svgComponents/product_Icon/Eye_Icon";
import Primary_Button from "../common/Primary_Button";
import { getProductById_Cart } from "../../api/products_Api";
import { getProductById_Wishlist} from "../../api/products_Api";
import { getProductById_Details} from "../../api/products_Api";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItem } from "../../redux/wishlistSlice";
import { removeCartItem } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";


export default function Today() {
  const [value, setValue] = useState(
    localStorage.getItem("myRate") === null ? 2 : localStorage.getItem("myRate")
  );
  const [allProducts, setAllProducts] = useState([]);
  const [viewAll, setViewAll] = useState(4);
  const dispatch = useDispatch();
 const [toggleHeartColor, setToggleHeartColor] = useState({});
 const [toggleCart, setToggleCart] = useState({});
 const navigate = useNavigate();

  async function getProductData() {
    try {
      const { data } = await axiosInstance.get("/products");
      // console.log(data);
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
            navigate('/detailsitem')
          }



  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ display: "" }}>
          {/* 1 */}
          <Box sx={{ my: "50px", display: "" }}>
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
                Today's
              </Typography>
            </Stack>
            <Typography variant="h3" my="20px">
              Flash sales
            </Typography>
            <Typography variant="h6" my="" fontWeight={500}>
              HAVIT HV-G92 Gamepad
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6" color="error" mr="15px">
                $120
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              >
                $160
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
                (88)
              </Typography>
            </Stack>
          </Box>

          {/* 2 */}
          <Box>
            <Box
              sx={{
                display: {sm:"flex"},
                justifyContent: "space-between",
                my: "20px",
              }}
            >
              <Stack direction="row" spacing={2} ml="40px">
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "10px", fontWeight: "700" }}
                  >
                    Days
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "25px", fontWeight: "700" }}
                  >
                    30
                  </Typography>
                </Box>
                <Typography variant="h5" pt="15px" color="error">
                  :
                </Typography>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "10px", fontWeight: "700" }}
                  >
                    Hours
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "25px", fontWeight: "700" }}
                  >
                    23
                  </Typography>
                </Box>
                <Typography variant="h5" pt="15px" color="error">
                  :
                </Typography>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "10px", fontWeight: "700" }}
                  >
                    Minutes
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "25px", fontWeight: "700" }}
                  >
                    19
                  </Typography>
                </Box>
                <Typography variant="h5" pt="15px" color="error">
                  :
                </Typography>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "10px", fontWeight: "700" }}
                  >
                    seconds
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "25px", fontWeight: "700" }}
                  >
                    56
                  </Typography>
                </Box>
              </Stack>

              <Box sx={{ mt: "20px" }}>
                <IconButton
                  id="custom-prev2"
                  sx={{ backgroundColor: "#F5F5F5", p: "", mr: "10px" }}
                >
                  <ArrowBackIcon />
                </IconButton>

                <IconButton
                  id="custom-next2"
                  sx={{ backgroundColor: "#F5F5F5", p: "" }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </Box>

            <Swiper
              breakpoints={{
                0: { slidesPerView: 2 },
                600: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              // slidesPerView={6}
              spaceBetween={20}
              // navigation={true}
              navigation={{
                prevEl: "#custom-prev2",
                nextEl: "#custom-next2",
              }}
              modules={[Navigation]}
              style={{ display: "" }}
            >
              {allProducts.length > 0 ? (
                allProducts.slice(0, 8).map((product, index) => (
                  <SwiperSlide key={index} style={{ display: "" }}>
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
                        sx={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                        }}
                      >
                        <Button onClick={() => toggleHeart(product.id)} sx={{ cursor: "pointer", mb: "5px" }}>
                          <Heart_Icon  fill={
                          toggleHeartColor[product.id] ? "red" : "transparent"
                        }/>
                        </Button>
                        <Button onClick={()=>{detailsItem(product.id)}} sx={{ cursor: "pointer" ,display:'flex', justifyContent:'center'}}>
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
                      <Box
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
                       { toggleCart[product.id]? 'Cancle' :  ' Add To Cart'}
                      </Box>
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
                  </SwiperSlide>
                ))
              ) : (
                <Grid container spacing={4} mb='40px'>
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
                </Grid>
              )}
            </Swiper>
          </Box>
        </Box>

        <Box sx={{ mb: "40px", display: "flex", justifyContent: "center" }}>
          <Primary_Button sx={{ px: "30px" }}>View All Products</Primary_Button>
        </Box>
      </Container>
    </>
  );
}
