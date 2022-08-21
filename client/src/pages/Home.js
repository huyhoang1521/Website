import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NameHeader from "../components/NameHeader";
import MediaCard from "../components/MediaCard";
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
  },
  titleText: {
    fontSize: 30,
    fontWeight: 900,
  },
  gridContainer: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(20),
    margins: 0,
  },
  gridItem: {
    padding: theme.spacing(3),

    margin: 0,
  },
}));

const images = [
  {
    category: "Flutter, Firebase",
    title: "Fitness App",
    image: "/assets/fitapp/fit-app-thumbnail.png",
    description:
      "A calistenics based fitness app that creates a personalized workout",
    link: "/negotiatinggravity",
  },
  {
    category: "Unity, C#",
    title: "Reverie",
    image: "/assets/game/reverie-thumbnail.png",
    description:
      "Platformer video game with many different ways to complete levels",
    link: "/reverie",
  },
  {
    category: "ReactJs, NodeJs",
    title: "Leasing Website",
    image: "/assets/summit/summit-thumbnail.png",
    description:
      "A website for a local office building used to display leasing information",
    link: "/summitoffriendswood",
  },
  {
    category: "ReactJs, NodeJs, SQL",
    title: "UTD Senior Design",
    image: "/assets/website/utd-thumbnail.png",
    description: "A centralized site for managing UTD senior design projects",
    link: "/utdseniordesign",
  },
  {
    category: "Android Studio, Java, API",
    title: "Contact Manager",
    image: "/assets/app/android-thumbnail.png",
    description: "Android app to keep track of every contact in a user's phone",
    link: "/contactmanager",
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
        <Container className={classes.container} maxWidth="lg">
          <NameHeader />
          <Grid
            className={classes.gridContainer}
            container
            spacing={4}
            justifyContent="center"
            justify="center"
            alignItems="top"
          >
            <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
              <Grid
                container
                spacing={4}
                align="center"
                justifyContent="center"
                alignItems="center"
              >
                {images.map((project) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={4}
                    key={project.title}
                    className={classes.gridItem}
                  >
                    <MediaCard key={project.title} project={project} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}

export default Home;
