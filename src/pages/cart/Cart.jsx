import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Stack,
  Link,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.info("Cart Page");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
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
        <Typography variant="body1">Cart</Typography>
      </Stack>

      <Container maxWidth="xl"></Container>
    </>
  );
}
