import React, { useState, useEffect } from "react";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(22),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(15),
    },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    padding: 0,
    margin: 0,
    alignContent: "center",
    justifyContent: "center",
    justify: "center",
    marginBottom: theme.spacing(22),
  },
  talkButton: {
    marginLeft: theme.spacing(20),
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(10),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(0),
    },
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
  talkBox: {
    padding: "0px",
  },

  typography: {
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(20),
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(15),
    },
    [theme.breakpoints.only("xs")]: {
      paddingLeft: theme.spacing(0),
    },
    lineHeight: 2,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  title: {
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(20),
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(15),
    },
    [theme.breakpoints.only("xs")]: {
      paddingLeft: theme.spacing(0),
    },
    lineHeight: 1,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  large: {
    marginTop: theme.spacing(1),
    maxHeight: "300px",
    maxWidth: "300px",
    borderRadius: "50%",
  },
  mainFeaturedPostPic: {
    alignContent: "center",
    justifyContent: "center",
  },
}));

const images = [
  {
    title: "Profile",
    image: "/assets/profile_square.JPG",
  },
];

export default function ImageGridList() {
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
    <div className={classes.root}>
      <Fade in={imgsLoaded} timeout={1000}>
        <Container className={classes.container} maxWidth={false}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justify="center"
            maxWidth={false}
          >
            <Grid item xs={12} md={3} align="center">
              <img
                src={"/assets/profile_square.JPG"}
                alt="pic"
                className={classes.large}
              />
            </Grid>
            <Grid item xs={10} md={8} align="center">
              <Typography
                variant="h4"
                gutterBottom
                align="left"
                className={classes.title}
              >
                I’m Huy, a software engineer
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                align="left"
                className={classes.typography}
              >
                I recently graduated from the University of Texas at Dallas with
                a degree in Computer Science. During my time there, I learned
                many computer science concepts, which helped shape my
                fundamentals in programming.
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                align="left"
                className={classes.typography}
              >
                In my free time, I love to play video games, discover and play
                music, and cook. I hope to continue to always challenge myself
                to learn new things.
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                align="left"
                className={classes.typography}
              >
                My goal is to create as many things as I can. I’m always eager
                to learn new skills and keep up with current technology trends.
              </Typography>
              <Box
                display="flex"
                justifyContent="flex-start"
                bgcolor="background.paper"
              >
                <Box>
                  <Link to="/contact">
                    <Button
                      size="large"
                      square={true}
                      disableRipple
                      className={classes.talkButton}
                    >
                      LET'S TALK
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}
