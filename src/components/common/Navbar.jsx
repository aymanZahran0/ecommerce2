import React from "react";
import {
  AppBar,
  Divider,
  Box,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Menu,
  MenuItem,
  Link,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import Favorite_Bar from "../../assets/svgComponents/Favorite_Bar";
import Shop_Icon from "../../assets/svgComponents/Shop_icon";
import { Link as RouterLink } from "react-router-dom"; //  conflict اعدت تسميته لعدم حدوث
import Account_Icon from "../../assets/svgComponents/Account_Icon";
import Nav_Menu from "./Nav_Menu";
import MyAccount_Icon from "../../assets/svgComponents/person_Button_Icons/MyAccount_Icon";
import Logout_Icon from "../../assets/svgComponents/person_Button_Icons/Logout_Icon";
import Reviews_Icon from "../../assets/svgComponents/person_Button_Icons/Reviews_Icon";
import Cancelation_Icon from "../../assets/svgComponents/person_Button_Icons/Cancelation_Icon";
import Order_Icon from "../../assets/svgComponents/person_Button_Icons/Order_Icon";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Navigate, useNavigate } from "react-router-dom";


export default function Navbar() {
  let myToken = localStorage.getItem("myToken");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElAccount, setAnchorElAccount] = useState(null);
 const wishlistItems = useSelector((state) => state.wishlist.items);
 const cartItems = useSelector((state) => state.cart.items);

//  to filtter 
  const uniqueWishlist= [...new Map(wishlistItems.map(i => [i.id, i])).values()];
  const uniqueCart= [...new Map(cartItems.map(i => [i.id, i])).values()];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenAccountMenu = (event) => {
    setAnchorElAccount(event.currentTarget);
  };

  const handleCloseAccountMenu = () => {
    setAnchorElAccount(null);
  };

  function logoutFun() {
    dispatch(logout());
    handleCloseAccountMenu();
    navigate("/");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, pb: "25px", mb: "40px" }}>
        <AppBar
          elevation={0}
          position="static"
          sx={{
            backgroundColor: "white",
            color: "black",
            position: "fixed",
            zIndex: "99999",
          }}
        >
          <Toolbar sx={{ mx: { md: "40px" } }}>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account current of user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={anchorElNav}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "flex", lg: "none" },
                  position: "fixed",
                  zIndex: "99999",
                }}
              >
                <MenuItem
                  sx={{}}
                  component={RouterLink}
                  to="/"
                  onClick={handleCloseNavMenu}
                >
                  <Typography variant="body1" color="">
                    Home
                  </Typography>
                </MenuItem>

                <MenuItem
                  component={RouterLink}
                  to="/contact"
                  onClick={handleCloseNavMenu}
                >
                  <Typography variant="body1" color="">
                    Contact
                  </Typography>
                </MenuItem>

                <MenuItem
                  component={RouterLink}
                  to="/about"
                  onClick={handleCloseNavMenu}
                >
                  <Typography variant="body1" color="">
                    About
                  </Typography>
                </MenuItem>

                <MenuItem
                  component={RouterLink}
                  to="/register"
                  onClick={handleCloseNavMenu}
                >
                  {!myToken ? (
                    <Typography variant="body1" color="">
                      Sign Up
                    </Typography>
                  ) : (
                    ""
                  )}
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              Exclusive
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
              }}
            />

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                display: { xs: "none", sm: "none", md: "felx", lg: "flex" },
              }}
            >
              <Link
                component={RouterLink}
                to="/"
                sx={{ mx: "10px", color: "black" }}
                underline="hover"
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                sx={{ mx: "10px", color: "black" }}
                underline="hover"
              >
                Contact
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                sx={{ mx: "10px", color: "black" }}
                underline="hover"
              >
                About
              </Link>
              {!myToken ? (
                <Link
                  component={RouterLink}
                  to="/register"
                  sx={{ mx: "10px", color: "black" }}
                  underline="hover"
                >
                  Signup
                </Link>
              ) : (
                ""
              )}
            </Box>

            <TextField
              hiddenLabel
              size="small"
              sx={{ width: "245px", mx: "10px" }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
              id="search"
              placeholder="What are you looking for"
              type="search"
              variant="filled"
            />

            {myToken ? (
              <Box sx={{ display: { xs: "flex", sm: "flex", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  component={RouterLink}
                  to="Wishlist"
                >
                  <Badge badgeContent={uniqueWishlist.length} color="error"><Favorite_Bar /></Badge>
                </IconButton>

                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  component={RouterLink}
                  to="cart"
                >
                  <Badge badgeContent={uniqueCart.length} color="error"> <Shop_Icon /></Badge>   
                </IconButton>

                {/* account menu ______________ */}
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenAccountMenu}
                  color="inherit"
                >
                  <Account_Icon />
                </IconButton>

                <Nav_Menu
                  id="menu-appbar"
                  anchorEl={anchorElAccount}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={anchorElAccount}
                  onClose={handleCloseAccountMenu}
                  sx={{ position: "fixed", zIndex: "99999" }}
                >
                  <MenuItem
                    sx={{}}
                    component={RouterLink}
                    to="account"
                    onClick={handleCloseAccountMenu}
                  >
                    <MyAccount_Icon />
                    <Typography ml="15px" variant="body1" color="">
                      Manage My Account
                    </Typography>
                  </MenuItem>

                  <MenuItem
                    component={RouterLink}
                    to="account"
                    onClick={handleCloseAccountMenu}
                  >
                    <Order_Icon />
                    <Typography ml="15px" variant="body1" color="">
                      My Order
                    </Typography>
                  </MenuItem>

                  <MenuItem
                    component={RouterLink}
                    to="account"
                    onClick={handleCloseAccountMenu}
                  >
                    <Cancelation_Icon />
                    <Typography ml="15px" variant="body1" color="">
                      My Cancellations
                    </Typography>
                  </MenuItem>

                  <MenuItem
                    component={RouterLink}
                    to="account"
                    onClick={handleCloseAccountMenu}
                  >
                    <Reviews_Icon />
                    <Typography ml="15px" variant="body1" color="">
                      {" "}
                      My Reviews{" "}
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={logoutFun}>
                    <Logout_Icon />
                    <Typography ml="15px" variant="body1" color="">
                      {" "}
                      Logout{" "}
                    </Typography>
                  </MenuItem>
                </Nav_Menu>
              </Box>
            ) : (
              ""
            )}
          </Toolbar>
          <Divider sx={{ backgroundColor:''}}/>
        </AppBar>
      </Box>
    </>
  );
}
