import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import {
  getProductById_Cart,
  getProductById_Details,
} from "../../api/products_Api";
import { getProductById_Wishlist } from "../../api/products_Api";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث
import { removeWishlistItem } from "../../redux/wishlistSlice";
import { removeCartItem } from "../../redux/cartSlice";

export default function CategoryPage() {
  console.info("category page");
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [value, setValue] = useState(
    localStorage.getItem("myRate") === null ? 2 : localStorage.getItem("myRate")
  );
  const navigate = useNavigate();
  const [toggleHeartColor, setToggleHeartColor] = useState({});
  const [toggleCart, setToggleCart] = useState({});

  
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
    </>
  );
}
