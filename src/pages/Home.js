import { Alert, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import img1 from "../Assets/ArtGalleryimg1.jpg";
import Slider from "react-slick";
import img2 from "../Assets/ArtGalleryimg2.jpg";
import img3 from "../Assets/ArtGalleryimg3.jpg";
import img4 from "../Assets/ArtGalleryimg4.jpg";
import img5 from "../Assets/ArtGalleryimg5.jpg";
import img6 from "../Assets/ArtGalleryimg6.jpg";
import img7 from "../Assets/ArtGalleryimg7.jpg";
import imgclient from "../Assets/imgClient.jpg";
import imgpromoter from "../Assets/ImgPromoter.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import ReactLogo from "../Assets/logo192.png";
import MuiIcon from "../Assets/muiIcon.png";
import SpringBootIcon from "../Assets/springboot.png";
import { Snackbar } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
  {
    title:
      " “Art has no era. It is the emotion that sleeps on pillows of eternity.” ",
    url: img1,
  },
  {
    title: " “Art is made to disturb, science to reassure.” ",
    url: img2,
  },
  { title: " “At the opera you know the master.” ", url: img3 },

  {
    title: " “Art is contemplation.”  ",
    url: img4,
  },
  {
    title: " “Carving emptiness to give shape to thoughts”  ",
    url: img5,
  },
  {
    title: " “A sensory journey through notes that sculpt the imagination.”",
    url: img6,
  },
  {
    title: " “Cities transformed into open-air canvases.” ",
    url: img7,
  },
];

export const Home = () => {
  const stringDevs = [
    "Paolo Coletta | 0124002554",
    "Dawid Adrian Danila | 0124002590",
    "Maria Grazia Di Giorgio | 0124002701",
    "Carmela Pia Fiore | 0124002523",
  ];

  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    afterChange: (current) => setCurrentIndex(current),
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsLoggedOut(false);
  };
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("loggedOut")) {
      // Se la query string contiene "loggedOut=true", mostra la Snackbar
      setIsLoggedOut(true);
    }
  }, [location.search]);
  return (
    <div>
      {isLoggedOut && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isLoggedOut}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            variant="filled"
          >
            Logged out successfully!
          </Alert>
        </Snackbar>
      )}
      <Stack spacing={3} style={{ height: "80vh" }}>
        <Slide
          autoplay={true}
          onChange={function noRefCheck() {}}
          onStartChange={function noRefCheck() {}}
        >
          {images.map((img) => (
            <div key={img.title} className="each-slide-effect">
              <div
                style={{
                  backgroundImage: `url(${img.url})`,
                  backgroundSize: "cover",
                }}
              >
                <span>{img.title}</span>
              </div>
            </div>
          ))}
        </Slide>
        {/* web */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Grid
            container
            spacing={2}
            direction={"row"}
            className="row-img"
            style={{ backgroundColor: "#4A4E69" }}
          >
            <Grid item lg={4}>
              <img src={imgclient} alt="img" />
            </Grid>
            <Grid item container direction={"column"} lg={3}>
              <Grid item md={4}>
                <span>
                  <Typography
                    component={"i"}
                    variant="h3"
                    style={{ display: "block" }}
                  >
                    For Customers{" "}
                  </Typography>
                  <Typography component={"i"} variant="body1">
                    If you're looking to turn your day into a cultural
                    adventure, you're in the right place! Explore our world of
                    extraordinary exhibitions and snag yourself a ticket to fun.
                    Get ready to dive into a journey of art, emotions, and
                    discoveries. Don't miss the chance to purchase your ticket
                    for an experience that will bring a smile to your face.
                    Click now and start the countdown to cultural delight!"
                  </Typography>
                </span>
              </Grid>

              <Grid item container direction={"row"}>
                <Grid item md={6}>
                  <Link
                    key={"login"}
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/login`}
                  >
                    <KeyboardDoubleArrowLeftIcon />{" "}
                    <Typography textAlign="center"> {"Login"}</Typography>
                  </Link>
                </Grid>
                <Grid item md={6}>
                  <Link
                    key={"SignUp"}
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/signUpclients`}
                  >
                    <KeyboardDoubleArrowRightIcon />{" "}
                    <Typography textAlign="center"> {"Sign Up"}</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            direction={"row"}
            className="row-img"
            style={{ backgroundColor: "#4A4E69" }}
          >
            <Grid item container direction={"column"} lg={3}>
              <Grid item md={4}>
                <span>
                  <Typography
                    component={"i"}
                    variant="h3"
                    style={{ display: "block" }}
                  >
                    For Promoters{" "}
                  </Typography>
                  <Typography component={"i"} variant="body1">
                    Welcome to the place where your event takes center stage! If
                    you have a special occasion to share with the world, you're
                    in the right spot. Enter the details of your event and let
                    the magic of advertising bring it into the spotlight. The
                    stage is yours, and we're here to make you shine. Don't
                    wait, click now, and give your event the attention it
                    deserves. Make every moment unforgettable!
                  </Typography>
                </span>
              </Grid>

              <Grid item container direction={"row"}>
                <Grid item md={6}>
                  <Link
                    key={"loginprom"}
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/login`}
                  >
                    <KeyboardDoubleArrowLeftIcon />{" "}
                    <Typography textAlign="center"> {"Login"}</Typography>
                  </Link>{" "}
                </Grid>
                <Grid item md={6}>
                  <Link
                    key={"signUpprom"}
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/signUppromoters`}
                  >
                    <KeyboardDoubleArrowRightIcon />{" "}
                    <Typography textAlign="center"> {"Sign Up"}</Typography>
                  </Link>{" "}
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4}>
              <img src={imgpromoter} alt="img" />
            </Grid>
          </Grid>
          {/* Qua Inizia per artist */}
          <Grid
            container
            spacing={2}
            direction={"row"}
            className="row-img"
            style={{ backgroundColor: "#4A4E69" }}
          >
            <Grid item lg={4}>
              <img src={img3} alt="img" />
            </Grid>
            <Grid item container direction={"column"} lg={3}>
              <Grid item md={4}>
                <span>
                  <Typography
                    component={"i"}
                    variant="h3"
                    style={{ display: "block" }}
                  >
                    For Artists{" "}
                  </Typography>
                  <Typography component={"i"} variant="body1">
                    "Explore the vibrant world of Art Event. From inspiring
                    paintings to captivating sculptures, discover the unique
                    vision of Artists. Find the perfect piece to bring
                    creativity into your space. Join us on this artistic journey
                    and immerse yourself in the boundless imagination of Art
                    Event.
                  </Typography>
                </span>
              </Grid>

              <Grid item container direction={"row"}>
                <Grid item md={6}>
                  <Link
                    key={"login"}
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/login`}
                  >
                    <KeyboardDoubleArrowLeftIcon />{" "}
                    <Typography textAlign="center"> {"Login"}</Typography>
                  </Link>
                </Grid>
                <Grid item md={6}>
                  <Link
                    key={"SignUp"}
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/signUpArtist`}
                  >
                    <KeyboardDoubleArrowRightIcon />{" "}
                    <Typography textAlign="center"> {"Sign Up"}</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Qua finisce per artist */}
        </Box>

        {/* mobile */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Grid
            container
            spacing={2}
            direction={"row"}
            className="row-img-mobile"
          >
            <Grid
              item
              xs={7}
              style={{
                background: `url(${img1})`,
                height: "10rem",
                backgroundSize: "cover",
              }}
            ></Grid>
            <Grid item xs={4}>
              <span>
                <Typography component={"i"} variant={"h6"}>
                  For Clients
                </Typography>
              </span>
            </Grid>{" "}
          </Grid>
          <Grid
            container
            spacing={2}
            direction={"row"}
            className="row-img-mobile"
          >
            <Grid item xs={4}>
              {" "}
              <span>
                <Typography component={"i"} variant={"h6"}>
                  For Promoters
                </Typography>
              </span>
            </Grid>
            <Grid
              item
              xs={7}
              style={{
                background: `url(${img2})`,
                height: "10rem",
                backgroundSize: "cover",
              }}
            ></Grid>
          </Grid>
          {/* Qua inizia artist  */}
          <Grid
            container
            spacing={2}
            direction={"row"}
            className="row-img-mobile"
          >
            <Grid
              item
              xs={7}
              style={{
                background: `url(${img1})`,
                height: "10rem",
                backgroundSize: "cover",
              }}
            ></Grid>
            <Grid item xs={4}>
              <span>
                <Typography component={"i"} variant={"h6"}>
                  For Artist
                </Typography>
              </span>
            </Grid>{" "}
          </Grid>
          {/* Qua finisce artist */}
        </Box>
        <footer style={{ backgroundColor: "#22223B", color: "white" }}>
          <Stack
            //contiene tutto e modificato cose
            direction={"row"}
            style={{ textAlign: "center" }}
            padding={1}
          >
            <Stack
              direction={"column"}
              style={{ maxWidth: "700px", margin: "auto" }}
            >
              <Typography variant="h5" component={"i"}>
                About Us
              </Typography>
              <Slider {...sliderSettings}>
                {stringDevs.map((user, index) => (
                  <div key={index}>
                    <p>{user}</p>
                  </div>
                ))}
              </Slider>
            </Stack>
            {/*  */}
            <Stack direction={"column"}>
              <Typography variant="h5" component={"i"}>
                Products
              </Typography>
              <Stack direction={"row"}>
                <IconButton
                  color="inherit"
                  href="https://github.com/DavideDDA/event_manager_app"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{ backgroundColor: "gray" }}
                />
                <IconButton
                  color="inherit"
                  href="https://react.dev/"
                  target="_blank"
                >
                  <img src={ReactLogo} alt="react logo" width={"30rem"} />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://mui.com/"
                  target="_blank"
                >
                  <img src={MuiIcon} alt="mui logo" width={"30rem"} />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://spring.io/projects/spring-boot/"
                  target="_blank"
                >
                  <img
                    src={SpringBootIcon}
                    alt="springboot logo"
                    width={"30rem"}
                  />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </footer>
      </Stack>
    </div>
  );
};
