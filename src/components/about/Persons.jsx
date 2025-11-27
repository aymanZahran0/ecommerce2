import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image_46 from "../../assets/svgComponents/about/Image_46.svg";
import Image_51 from "../../assets/svgComponents/about/Image_51.svg";
import Image_47 from "../../assets/svgComponents/about/Image_47.svg";
import Instagram_Icon from "../../assets/svgComponents/media_icon_dark/Instagram_Icon";
import Twitter_Icon from "../../assets/svgComponents/media_icon_dark/Twitter_Icon";
import Linkedin_Icon from "../../assets/svgComponents/media_icon_dark/Linkedin_Icon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Persons() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <Box
        sx={{
          width: { lg: "75%",md: "95%", sm:'69%',xs: "50%" },
          m: "auto",
        }}
      >
        <Slider {...settings} >
          <Box sx={{}}>
            <Box
              component="img"
              src={Image_46}
              sx={{
                borderRadius: "5px",
                backgroundColor: "#F5F5F5",
                width: "95%",
                height: "300px",
                pt: "20px",
                px: "30px",
              }}
            />
            <Typography variant="h5"> Tom Cruise </Typography>
            <Typography variant="body2"> Founder & Chairman </Typography>
            <Stack direction="row" spacing={1} mt="10px">
              <Twitter_Icon />
              <Instagram_Icon />
              <Linkedin_Icon />
            </Stack>
          </Box>

          <Box sx={{}}>
            <Box
              component="img"
              src={Image_51}
              sx={{
                borderRadius: "5px",
                backgroundColor: "#F5F5F5",
                width: "95%",
                height: "300px",
                pt: "20px",
                px: "30px",
              }}
            />
            <Typography variant="h5"> Emma Watson </Typography>
            <Typography variant="body2"> Managing Director </Typography>
            <Stack direction="row" spacing={1} mt="10px">
              <Twitter_Icon />
              <Instagram_Icon />
              <Linkedin_Icon />
            </Stack>
          </Box>

          <Box sx={{}}>
            <Box
              component="img"
              src={Image_47}
              sx={{
                borderRadius: "5px",
                backgroundColor: "#F5F5F5",
                width: "95%",
                height: "300px",
                pt: "20px",
                px: "30px",
              }}
            />
            <Typography variant="h5"> Will Smith </Typography>
            <Typography variant="body2"> Product Designer </Typography>
            <Stack direction="row" spacing={1} mt="10px">
              <Twitter_Icon />
              <Instagram_Icon />
              <Linkedin_Icon />
            </Stack>
          </Box>

          <Box sx={{}}>
            <Box
              component="img"
              src={Image_46}
              sx={{
                borderRadius: "5px",
                backgroundColor: "#F5F5F5",
                width: "95%",
                height: "300px",
                pt: "20px",
                px: "30px",
              }}
            />
            <Typography variant="h5"> Tom Cruise </Typography>
            <Typography variant="body2"> Founder & Chairman </Typography>
            <Stack direction="row" spacing={1} mt="10px">
              <Twitter_Icon />
              <Instagram_Icon />
              <Linkedin_Icon />
            </Stack>
          </Box>

          <Box sx={{}}>
            <Box
              component="img"
              src={Image_47}
              sx={{
                borderRadius: "5px",
                backgroundColor: "#F5F5F5",
                width: "95%",
                height: "300px",
                pt: "20px",
                px: "30px",
              }}
            />
            <Typography variant="h5"> Tom Cruise </Typography>
            <Typography variant="body2"> Founder & Chairman </Typography>
            <Stack direction="row" spacing={1} mt="10px">
              <Twitter_Icon />
              <Instagram_Icon />
              <Linkedin_Icon />
            </Stack>
          </Box>

        </Slider>
      </Box>
    </>
  );
}
