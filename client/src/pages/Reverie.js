import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GeneralHeader from "../components/GeneralHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
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
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(8),
    },
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
    color: "#8f5daf",
    marginBottom: theme.spacing(2),
  },
  subtitle2: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 22,
    fontWeight: 600,
    color: "#8f5daf",
    marginTop: theme.spacing(6),
  },
  subtitle3: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 16,
    fontWeight: 600,
    color: "#8f5daf",
    marginTop: theme.spacing(6),
  },
  subtitle4: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 16,
    fontWeight: 600,
    color: "#8f5daf",
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
  playButton: {
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
  title: "Reverie",
  description: "A 2D platformer video game created with Unity",
  image: "/assets/game/game_mac.png",
  imageText: "mac.png",
  items: [
    "Contributions Story Concept & Level Design",
    "Outcome Released Spring 2019 on the Unity Website",
    "Team 2019 UTD Video Game Programming Team",
    "Role Level Designer",
    "Tools Unity, C#",
  ],
  backgroundColor: "#dea2e7",
};

const images = [
  {
    image: "/assets/game/game_mac.png",
  },
  {
    image: "/assets/game/game5.PNG",
  },
  {
    image: "/assets/game/game10.PNG",
  },
  {
    image: "/assets/game/game4.PNG",
  },
];

export default function Reverie() {
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
            <Grid item xs={12} sm={8} md={8} className={classes.titleGrid}>
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
                A 2D platformer made as a team project for the 2019 UTD Video
                Game Programming class.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle2}
              >
                About This Game
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                Reverie is a 2D platformer designed for players who are looking
                for a challenge. The game was created in Unity. Reverie follows
                a main character who is constantly stuck in a day-dreamt world.
                In this world, there are many obstacles that threaten to derail
                their path to the end. The player will have to use their
                creativity and maneuverability to complete levels and find the
                path to the end.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12}></Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.list}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle4}
              >
                Controls
              </Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem className={classes.item} align="left">
                  <Typography
                    variant="h6"
                    align="left"
                    className={classes.typographyList}
                  >
                    <span style={{ fontWeight: 900 }}>Mouse: </span>
                    Shoot acorn projectile at enemies
                  </Typography>
                </ListItem>
                <ListItem className={classes.item} align="left">
                  <Typography
                    variant="h6"
                    align="left"
                    className={classes.typographyList}
                  >
                    <span style={{ fontWeight: 900 }}>WASD/Arrow Keys: </span>
                    Control character movement
                  </Typography>
                </ListItem>
                <ListItem className={classes.item} align="left">
                  <Typography
                    variant="h6"
                    align="left"
                    className={classes.typographyList}
                  >
                    <span style={{ fontWeight: 900 }}>Spacebar: </span>
                    Jump or double jump
                  </Typography>
                </ListItem>
                <ListItem className={classes.item} align="left">
                  <Typography
                    variant="h6"
                    align="left"
                    className={classes.typographyList}
                  >
                    <span style={{ fontWeight: 900 }}>Enter/Return: </span>
                    Pause the game
                  </Typography>
                </ListItem>
                <ListItem className={classes.item} align="left">
                  <Typography
                    variant="h6"
                    align="left"
                    className={classes.typographyList}
                  >
                    <span style={{ fontWeight: 900 }}>Esc: </span>
                    Quit the game at anytime
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.list}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle4}
              >
                Features
              </Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem className={classes.item} align="left">
                  <Typography
                    variant="h6"
                    align="left"
                    className={classes.typographyList}
                  >
                    <span style={{ fontWeight: 900 }}>2D Sprite Art: </span>
                    Retro style art design
                  </Typography>
                </ListItem>
                <ListItem className={classes.item} align="left">
                  <Typography
                    variant="h6"
                    align="left"
                    className={classes.typographyList}
                  >
                    <span style={{ fontWeight: 900 }}>
                      Character Movement:{" "}
                    </span>
                    Fast and responsive movement
                  </Typography>
                </ListItem>
                <ListItem className={classes.item} align="left">
                  <Typography
                    variant="h6"
                    align="left"
                    className={classes.typographyList}
                  >
                    <span style={{ fontWeight: 900 }}>Challenging: </span>
                    Designed hard levels
                  </Typography>
                </ListItem>

                <ListItem className={classes.item} align="left">
                  <Typography
                    variant="h6"
                    align="left"
                    className={classes.typographyList}
                  >
                    <span style={{ fontWeight: 900 }}>Fast Respawn: </span>
                    Minimal time wasted
                  </Typography>
                </ListItem>
                <ListItem className={classes.item} align="left">
                  <Typography
                    variant="h6"
                    align="left"
                    className={classes.typographyList}
                  >
                    <span style={{ fontWeight: 900 }}>Many Ways to Play: </span>
                    Each level has multple paths
                  </Typography>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Level Design
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                The game consists of many mini levels, where the player will
                have to find a path to the next level. Each level is filled to
                the whole screen. This is done to maximize the space and allow
                each level to have a lot of detail. The camera will move to the
                next level once the player has completed the current level.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}></Grid>

            <Grid item xs={12} sm={8} md={4}>
              <img
                className={classes.image2}
                src={"/assets/game/game5.PNG"}
                alt={"pic"}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <img
                className={classes.image2}
                src={"/assets/game/game10.PNG"}
                alt={"pic"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}></Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Collecting Coins
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                Some levels will require the player to collect all of the coins
                in order to proceed to the next level. Coins are placed in
                various parts in the level that are difficult to reach. The
                player will have to plan their route to collect these coins.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={5}>
              <img
                className={classes.image2}
                src={"/assets/game/game4.PNG"}
                alt={"pic"}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
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
                My aim from the start of this game was to create an enjoyable,
                yet challenging experience for the player. I chose to do a
                platformer because I thought it would be a great first game to
                start with while having lots of room to improve the gameplay
                experience. Creating this game taught me a lot about the
                process.
              </Typography>
              <Link
                rel="stylesheet"
                className={classes.link}
                href="https://connect.unity.com/mg/other/reverie-l"
              >
                <Button
                  size="large"
                  square="true"
                  disableRipple
                  className={classes.playButton}
                >
                  Play Reverie
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}
