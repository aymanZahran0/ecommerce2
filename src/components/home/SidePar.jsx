import React, { useState, useEffect } from "react";
import { Typography, Box, Divider, Stack, Skeleton } from "@mui/material";
import Phone_Home from "../../assets/svgComponents/Phone_Home.jsx";
import Phone_Home2 from "../../assets/svgComponents/Phone_Home.svg";
import Apple_Icon from "../../assets/svgComponents/Apple_Icon";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث
import { getProductById_Details } from "../../api/products_Api";
import { useSelector, useDispatch } from "react-redux";

export default function SidePar() {
  const [allProducts, setAllProducts] = useState([]);
  const uniqueItems = [
    ...new Map(allProducts.map((item) => [item.category, item])).values(),
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    // console.log(allProducts)
  }, []);

  return (
    <>
      <Box>
        <Box sx={{ display: { lg: "flex", xs: "block" } }}>
          {/* side par*/}
          <Box>
            <Box>
              <Stack
                direction="row"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ pl: "0px", display: { lg: "block", xs: "none" } }}
                  />
                }
                spacing={3}
                mt="0px"
              >
                <Stack
                  useFlexGap
                  sx={{ flexWrap: "wrap" }}
                  direction={{ xs: "row", lg: "column" }}
                  pt="30px"
                  spacing={3}
                >
                  {allProducts.length > 0 ? (
                    uniqueItems.map((product, index) => (
                      <Typography
                        onClick={() => {
                          navigate(`category/${product.category}`);
                        }}
                        key={index}
                        variant="h6"
                        sx={{
                          cursor: "pointer",
                          textDecoration: { lg: "none", xs: "underline" },
                        }}
                      >
                        {product.category}
                      </Typography>
                    ))
                  ) : (
                    <>
                      <Stack
                        direction="row"
                        divider={
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                              pl: "0px",
                              display: { lg: "block", xs: "none" },
                            }}
                          />
                        }
                        spacing={3}
                        mt="0px"
                      >
                        <Stack
                          useFlexGap
                          sx={{ flexWrap: "wrap" }}
                          direction={{ xs: "row", lg: "column" }}
                          pt="30px"
                          spacing={3}
                        >
                          <Skeleton variant="rectangular" width="150px" />
                          <Skeleton variant="rectangular" width="150px" />
                          <Skeleton variant="rectangular" width="150px" />
                          <Skeleton variant="rectangular" width="150px" />
                        </Stack>
                      </Stack>
                    </>
                  )}
                  <Typography
                    variant="h6"
                    sx={{ py: { lg: "60px" } }}
                  ></Typography>
                </Stack>
                <Box></Box>
              </Stack>
            </Box>
          </Box>

          {/* section 2 */}
          {allProducts.length > 0 ? (
            <Box
              sx={{
                backgroundColor: "black",
                color: "white",
                mx: { lg: "40px", xs: "1px" },
                my: "30px",
                py: "30px",
                width: { lg: "79%", xs: "100%" },
              }}
            >
              {/* <Box direction="row" spacing={4}> */}
              <Box
                sx={{
                  display: { md: "flex", xs: "block" },
                  justifyContent: "space-between",
                }}
              >
                <Box pl={10} pt="20px" sx={{}}>
                  <Stack direction="row" spacing={3}>
                    {/* <Apple_Icon /> */}
                    <Typography variant="body1" py="15px">
                      {/* iphone 14 series */}
                      {allProducts[10]?.title}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h2"
                    sx={{ fontSize: { md: "45px", xs: "30px" } }}
                  >
                    Up to 10%
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{ fontSize: { md: "45px", xs: "30px" } }}
                  >
                    off Voucher
                  </Typography>
                  <Typography
                    variant="h6"
                    to="/"
                    sx={{ textDecoration: "underline", cursor: "pointer" }}
                    my="30px"
                    onClick={() => {
                      navigate("/buynow");
                      dispatch(getProductById_Details(10));
                    }}
                  >
                    Shop Now
                  </Typography>
                </Box>

                <Box sx={{}}>
                  <Box
                    component="img"
                    src={allProducts[10]?.image}
                    sx={{
                      width: { sm: "100%", xs: "90%" },
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  color: "white",
                  mx: { lg: "40px", xs: "1px" },
                  my: "30px",
                  py: "30px",
                  width: { lg: "79%", xs: "100%" },
                }}
              >
                <Box>
                  <Skeleton variant="rectangular" width="100%" height={300} />
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
