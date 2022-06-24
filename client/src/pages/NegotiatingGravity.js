import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GeneralHeader from "../components/GeneralHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Container from "@material-ui/core/Container";

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
    marginBottom: theme.spacing(1),
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
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(7),
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
}));

const imageText = {
  title: "Negotiating Gravity",
  description: "A calistenics fitness app developed for iOS & Android",
  image: "/assets/fitapp/fit-app-phones.png",
  imageText: "mac.png",
  items: [
    "Contributions Back/Front End Design",
    "Developed by Nick Purdum & Huy Hoang",
    "Role Flutter Developer",
    "Years 2020-2021",
    "Tools Flutter, Firebase",
  ],
  github: "https://github.com/huyhoang1521/Fit-App",
  link: "",
  backgroundColor: "#e9e9e9",
};

const images = [
  {
    image: "/assets/fitapp/fit-app-phones.png",
  },
  {
    image: "/assets/fitapp/firebase.png",
  },
];

export default function NegotiatingGravity() {
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
                className={classes.typography2}
              >
                Negotiating Gravity is a calistenics based fitness app. The
                purpose of the app is to create a personalized workout for the
                user that will help them reach their fitness goals. Worked on
                all aspects of the design and implementation. Created using
                Flutter and Firebase.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={8} lg={8} xl={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                How it Works
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                Each user will first be asked a series of questions that will
                help to develop a personalized workout for them. Questions
                include their age, weight, and what equipment they have
                available. After this, it will ask the user what their primary
                goal would be with each workout. There are 3 options for this,
                which are strength, hypertrophy, and weight loss. Each option
                will help to create a different workout structure for the user.
                To measure their experience level, the app will prompt them to
                record their max hold and max reps for a particular exercise.
                Depending on these values, the app will place the user at a
                specific level to start. Finally, by using all of this, the app
                will retrieve specfic exercises for each workout and form a
                weekly workout plan.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <img
                className={classes.image2}
                src={"/assets/fitapp/diagram.png"}
                alt={"pic"}
              />
            </Grid>
            <Grid item xs={12} sm={10} md={8} lg={8} xl={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Authentication
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                Authenticating users is made simple by using Firebase's
                authentication service. When opening the app, the user will be
                greated with a sign in or sign up option. From there, Firebase
                will handle various authentication tasks, such as account
                creation, existing user sign in, and sign outs. By using the
                Firebase method authStateChanges(), we can render the UI
                differently depending on the state of the authentication.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={8} lg={8} xl={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Database
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                To store all of the exercise data, we used a Firebase database.
                When a workout is generated, the app will query the desired
                exercises from the database and create a workout from this. Each
                entry in the database will hold certain information about the
                exercise, such as name, description, level, and type. The
                database also holds specific user information that will be used
                in tracking their overall progress.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <img
                className={classes.image2}
                src={"/assets/fitapp/firebase.png"}
                alt={"pic"}
              />
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}
