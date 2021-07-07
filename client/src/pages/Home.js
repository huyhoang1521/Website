import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NameHeader from "../components/NameHeader";
import MediaCard from "../components/MediaCard";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {},
  containerName: {
    padding: 0,
    margins: 0,
  },
  projects: {
    padding: 0,
    margins: 0,
  },
  container: {
    padding: 0,
    margins: 0,
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(8),
    },
  },
  title: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.spacing(15),
  },
  titleText: {
    fontSize: 30,
    fontWeight: 900,
  },
  gridContainer: {
    [theme.breakpoints.only("md")]: {
      paddingLeft: theme.spacing(24.2),
      paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(24.2),
      paddingRight: theme.spacing(18),
    },
    marginTop: theme.spacing(15),
    paddingBottom: theme.spacing(20),
    margins: 0,
  },
  gridItem: {
    padding: theme.spacing(3),
    margin: 0,
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const images = [
  {
    category: "Android Studio, Java, API",
    title: "Contact Manager Android App",
    image: "/assets/app/contact_management_app.png",
    description: "Android app to keep track of every contact in a user's phone",
    link: "/contactmanager",
  },
  {
    category: "ReactJs, NodeJs, SQL",
    title: "UT Dallas Senior Design Website",
    image: "/assets/website/projects-edit.png",
    description:
      "A centralized site for UTD students to pick their senior design project",
    link: "/utdseniordesign",
  },
  {
    category: "Unity, C#",
    title: "Reverie",
    image: "/assets/game/game1-edit.png",
    description:
      "Platformer video game with many different ways to complete levels",
    link: "/reverie",
  },
];

function Home() {
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
        <Container className={classes.container} maxWidth={false}>
          <NameHeader />
          <Grid
            className={classes.gridContainer}
            container
            spacing={9}
            align="center"
          >
            <Grid
              xs={12}
              md={3}
              className={classes.title}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} align="center" className={classes.projects}>
                <Typography
                  className={classes.titleText}
                  component="h4"
                  variant="h4"
                  align="left"
                >
                  My Projects
                </Typography>
              </Grid>
            </Grid>
            <Grid container xs={12} md={9} spacing={0}>
              {images.map((post) => (
                <Grid item xs={12} md={6} className={classes.gridItem}>
                  <MediaCard key={post.title} post={post} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}

export default Home;
