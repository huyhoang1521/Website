import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GeneralHeader from "../components/GeneralHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    margins: 0,
  },
  list: {
    paddingBottom: theme.spacing(3),
  },
  container: {
    padding: 0,
    margins: 0,
  },
  backgroundImage: {
    [theme.breakpoints.between("sm", "md")]: {
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: theme.spacing(15),
    },
  },
  titleGrid: {
    padding: 0,
  },
  item: {
    padding: 0,
    marginBottom: theme.spacing(2),
  },
  title: {
    lineHeight: 2,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 35,
    fontWeight: 500,
    marginBottom: theme.spacing(3),
  },
  subtitle1: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 28,
    fontWeight: 600,
    color: "#2f4f06",
    marginBottom: theme.spacing(2),
  },
  subtitle2: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 22,
    fontWeight: 600,
    color: "#2f4f06",
    marginTop: theme.spacing(6),
  },
  subtitle3: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 16,
    fontWeight: 600,
    color: "#2f4f06",
    marginTop: theme.spacing(6),
  },
  subtitle4: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 16,
    fontWeight: 600,
    color: "#2f4f06",
  },

  typography1: {
    lineHeight: 1.3,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 24,
  },
  typography2: {
    lineHeight: 2,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 18,
    marginBottom: theme.spacing(6),
  },
  typography3: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 16,
    marginBottom: theme.spacing(10),
  },
  typographyList: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 16,
  },
  image: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
  },
  image2: {
    position: "center",
    color: theme.palette.common.white,

    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  gridContainer: {
    [theme.breakpoints.only("xs")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },

    paddingBottom: theme.spacing(20),
    margins: 0,
  },
  link: {
    //color: "#bad9f4",
    color: "#000000",
    "&:hover": {
      color: "#d2d2d2",
    },
  },
  webButton: {
    borderRadius: 0,
    fontSize: "14px",
    paddingLeft: "24px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "24px",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
  },
}));

const imageText = {
  title: "Leasing Website",
  description: "A website for a local office leasing building",
  image: "/assets/website/summit_mac.png",
  imageText: "mac.png",
  items: [
    "Contributions Website Design & Functionality",
    "Design Minimal Design with Responsive Pages",
    "Role Front End Developer",
    "Tools React, Node.js",
  ],
  github: "https://github.com/huyhoang1521/Summit-of-Friendswood",
  link: "https://summit-of-friendswood.herokuapp.com/",
  backgroundColor: "#e9e9e9",
};

const images = [
  {
    image: "/assets/website/summit_mac.png",
  },
  {
    image: "/assets/website/gallery.png",
  },
  {
    image: "/assets/website/maps.png",
  },
];

export default function SummitOfFriendswood() {
  const classes = useStyles();
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.image;
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.image);
          }, 100);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(images.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <div
      className={classes.root}
      style={{
        overflow: "hidden",
      }}
    >
      <Fade in={imgsLoaded} timeout={1000}>
        <Container className={classes.container} maxWidth="false">
          <GeneralHeader projectImage={imageText} />

          <Grid
            container
            className={classes.gridContainer}
            justifyContent="center"
            justify="center"
            alignItems="top"
          >
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              lg={8}
              xl={8}
              className={classes.titleGrid}
            >
              <Typography variant="h3" align="left" className={classes.title}>
                Overview
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle1}
              >
                Description
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography1}
              >
                A Website created to display leasing information for a local
                office leasing building.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={8} lg={8} xl={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle2}
              >
                About This Website
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                The Summit of Friendswood is a building that leases retail space
                to small businesses. This website serves as a place to find
                available leasing options as well as general information about
                the building.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={8} lg={8} xl={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Screens
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                The website consists of five main screens: Home, Lease, Gallery,
                About, and Contact. Each screen contains neccessary information
                about the building. For styling, I decided to go with minimal
                components to give a modern and professional look to the
                website. It was also important to show the building itself, so I
                included hero images in each page. This combined with the
                mininal components helps to put emphasis on the images.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={5} lg={5} xl={5}>
              <img
                className={classes.image2}
                src={"/assets/website/gallery.png"}
                alt={"pic"}
              />
            </Grid>
            <Grid item xs={12} sm={10} md={8} lg={8} xl={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Design
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                For this project, I decided to design the front end using React
                JS, since it is the framework that I was most familiar with. I
                took a lot of inspiration from real estate and apartment
                template websites to get an idea of current design trends. The
                back end was made with Node JS and contains logic for running in
                development or production mode. The website also utilizes the
                Google Maps API in order to display the location of the website
                on a map.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={5} lg={5} xl={5}>
              <img
                className={classes.image2}
                src={"/assets/website/maps.png"}
                alt={"pic"}
              />
            </Grid>
            <Grid item xs={12} sm={10} md={8} lg={8} xl={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle2}
              >
                Takeaways
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                During the process of making this website, I learned a lot about
                designing pages with outside viewers in mind. I made sure to
                design pages with a simple layout to make it easy the website
                understand navigate through. A challenge while creating this
                website was making resizable screens to ensure that the content
                looks presentable on all devices. In order to accomplish this, I
                had to use many breakpoints and resiable grid items to adapt to
                different screen sizes. In the end, I feel that I gained a lot
                of experience with designing pages in React.
              </Typography>
              <Link
                rel="stylesheet"
                className={classes.link}
                href="https://summit-of-friendswood.herokuapp.com/"
              >
                <Button
                  size="large"
                  square="true"
                  disableRipple
                  className={classes.webButton}
                >
                  View Website
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}
