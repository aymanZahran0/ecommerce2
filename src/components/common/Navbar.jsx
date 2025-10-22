import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Favorite_Bar from "../../assets/svgComponents/Favorite_Bar";
import Shop_Icon from "../../assets/svgComponents/Shop_icon";




export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <>
      <Box sx={{ flexGrow: 1 ,pb:'40px',}}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", color: "black" , position:'fixed', zIndex:'99999',  }}
        >
          <Toolbar sx={{ mx:{md:'40px', }}}>
            <Box sx={{  display: { xs: "flex", sm:'flex', md: "flex",lg:'none' }, }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                sx={{ display: { xs: "block", md: "flex",lg:'none' } }}
              >
                
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>Home</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>Contact</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>About</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>Sign Up</Typography>
                </MenuItem>
              
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "block", sm: "block" }, }}
            >
              
              Exclusive
            </Typography>
            
            <Box sx={{flexGrow:1,  display: { xs: "flex", sm:'flex', md: "flex",lg:'none'},}}/>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                display: { xs: "none", sm:'none', md: "felx",lg:'flex' },
              }}
            >
              <Typography variant="body1" sx={{ mx: "10px" }}>
                Home
              </Typography>
              <Typography variant="body1" sx={{ mx: "10px" }}>
                Contact
              </Typography>
              <Typography variant="body1" sx={{ mx: "10px" }}>
                About
              </Typography>
              <Typography variant="body1" sx={{ mx: "10px" }}>
                Signup
              </Typography>
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

            <Box sx={{ display: { xs: "flex", sm:'flex',md: "flex", } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Favorite_Bar/>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Shop_Icon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
