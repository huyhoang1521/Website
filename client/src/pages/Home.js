import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NameHeader from "../components/NameHeader";
import HomeSquareImage from "../components/HomeSquareImage";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const header = {
  title: "I'm Huy Hoang",
  description: "A Software Engineer who's dedicated to creating things",
};

const images = [
  {
    title: "Contact Manager Android App",
    image: "/assets/app/contact_management_app.png",
    link: "/contactmanager",
  },
  {
    title: "UT Dallas Senior Design Website",
    image: "/assets/website/projects-edit.png",
    link: "/utdseniordesign",
  },
  {
    title: "Reverie",
    image: "/assets/game/game1-edit.png",
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
    <div className={classes.root}>
      <Fade in={imgsLoaded} timeout={800}>
        <Container>
          <NameHeader post={header} />
          <Grid container spacing={4}>
            {images.map((post) => (
              <HomeSquareImage key={post.title} post={post} />
            ))}
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}

export default Home;
