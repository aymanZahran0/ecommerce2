import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Stack,
  Link,
  Container,
  Button,
  Skeleton,
  Divider,
  Rating,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import Primary_Button from "../../components/common/Primary_Button";
import { setQuantity } from "../../redux/cartSlice";
import Heart_Icon from "../../assets/svgComponents/product_Icon/Heart_icon";
import { removeWishlistItem } from "../../redux/wishlistSlice";
import { getProductById_Wishlist } from "../../api/products_Api";
import delivery_Icon from "../../assets/svgComponents/detailsItem/delivery_Icon.svg";
import return_Icon from "../../assets/svgComponents/detailsItem/return_Icon.svg";

export default function DetailsItem() {
  console.info("detailsItem Page");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const item = useSelector((state) => state.detailsItem.items.data);
  console.info(item);
  const [value, setValue] = useState(
    localStorage.getItem("myRate") === null ? 2 : localStorage.getItem("myRate")
  );

  const dispatch = useDispatch();
  const [toggleHeartColor, setToggleHeartColor] = useState({});

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
        <Typography variant="body1">{item?.title}</Typography>
      </Stack>

      <Container maxWidth="xl">
        <Box sx={{ mx: { lg: "50px" } }}>
          {item ? (
            <Box
              sx={{
                display: { md: "flex" },
                justifyContent: "space-around",
                my: "40px",
              }}
            >
              {/* 1 */}
              <Box sx={{ display: "flex", justifyContent:'center' }}>
                <Box 
                 sx={{ 
                    // m: { md: "1px", xs: "auto" },

                 }}
                 >
                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: "100px",
                      height: { sm: "130px", xs: "70px" },
                      mr: "15px",
                      backgroundColor: "#F5F5F5",
                      p: "10px",
                      borderRadius: "5px",
                      mb: "5px",
                      display: "block",
                    }}
                  />

                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: "100px",
                      height: { sm: "130px", xs: "70px" },
                      mr: "15px",
                      backgroundColor: "#F5F5F5",
                      p: "10px",
                      borderRadius: "5px",
                      mb: "5px",
                      display: "block",
                    }}
                  />

                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: "100px",
                      height: { sm: "130px", xs: "70px" },
                      mr: "15px",
                      backgroundColor: "#F5F5F5",
                      p: "10px",
                      borderRadius: "5px",
                      mb: "5px",
                      display: "block",
                    }}
                  />

                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: "100px",
                      height: { sm: "130px", xs: "70px" },
                      mr: "15px",
                      backgroundColor: "#F5F5F5",
                      p: "10px",
                      borderRadius: "5px",
                      mb: "5px",
                      display: "block",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#F5F5F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // m: { md: "1px", xs: "auto" }
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: { sm: "400px", xs: "100%" },
                      height: { sm: "340px", xs: "250px" },
                      mr: "15px",
                      p: "10px",
                      borderRadius: "5px",
                      mb: "5px",
                      display: "block",
                    }}
                  />
                </Box>
              </Box>

              {/* 2 */}
              <Box
                sx={{
                  width: { sm: "70%", md: "40%" },
                  m: { md: "1px", xs: "auto" },
                }}
              >
                <Typography variant="h5" my="10px">
                  {item.title.length > 20
                    ? item.title.slice(0, 20) + "..."
                    : item.title}
                </Typography>

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
                    ({item.rating.count})
                  </Typography>
                  <Divider orientation="vertical" flexItem />
                  <Typography variant="body1" color="#66FFA3">
                    in stock
                  </Typography>
                </Stack>

                <Typography variant="h6" my="10px">
                  ${item.price}
                </Typography>
                <Typography variant="body1" my="10px">
                  {item.description}
                </Typography>

                <Divider
                  orientation=""
                  sx={{ my: "30px", backgroundColor: "black" }}
                  flexItem
                />

                <Stack direction="row" spacing={1}>
                  <Typography variant="body1" color="">
                    Size:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      border: "1px solid gray ",
                      px: "5px",
                      borderRadius: "2px",
                    }}
                  >
                    S
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      border: "1px solid red",
                      px: "5px",
                      borderRadius: "2px",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    M
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      border: "1px solid gray ",
                      px: "5px",
                      borderRadius: "2px",
                    }}
                  >
                    L
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      border: "1px solid gray ",
                      px: "5px",
                      borderRadius: "2px",
                    }}
                  >
                    XL
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} sx={{ my: "20px" }}>
                  <Stack
                    direction="row"
                    spacing={0}
                    sx={{ border: "1px solid gray" }}
                  >
                    <Button sx={{ px: "0px" }}> - </Button>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ backgroundColor: "black" }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ px: "30px", display: "flex", alignItems: "center" }}
                    >
                      1
                    </Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ backgroundColor: "black" }}
                    />
                    <Button variant="body1" sx={{ px: "0px" }}>
                      +
                    </Button>
                  </Stack>

                  <Primary_Button
                    sx={{ fontWeight: "500", py: "1px", px: "30px" }}
                    onClick={() => {
                      //  navigate(`buynow/${item.id}`);
                      navigate("/buynow");
                    }}
                  >
                    BuyNow
                  </Primary_Button>

                  <Box
                    onClick={() => toggleHeart(item.id)}
                    sx={{
                      border: "1px solid ",
                      display: "flex",
                      borderRadius: "2px",
                      cursor: "pointer",
                    }}
                  >
                    <Heart_Icon
                      fill={toggleHeartColor[item.id] ? "red" : "transparent"}
                    />
                  </Box>
                </Stack>

                <Box sx={{ border: "1px solid " }}>
                  {/* 1 */}
                  <Box
                    sx={{ display: "flex", alignItems: "center", p: "15px" }}
                  >
                    <Box component="img" src={delivery_Icon} />
                    <Box sx={{ ml: "20px" }}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "600", mb: "5px" }}
                      >
                        Free Delivery
                      </Typography>
                      <Typography variant="body2">
                        Enter your postal code for Delivery Availability
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ backgroundColor: "black" }}></Divider>
                  {/* 2 */}
                  <Box
                    sx={{ display: "flex", alignItems: "center", p: "15px" }}
                  >
                    <Box component="img" src={return_Icon} />
                    <Box sx={{ ml: "20px" }}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "600", mb: "5px" }}
                      >
                        Return Delivery
                      </Typography>
                      <Typography variant="body2">
                        Free 30 Days Delivery Returns. Details{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
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
        </Box>
      </Container>
    </>
  );
}
