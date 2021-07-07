import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  typography: {
    marginBottom: theme.spacing(3),
    lineHeight: 2,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  image: {
    position: "center",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  item: {
    padding: 0,
  },
  link: {
    //color: "#bad9f4",
    color: "#000000",
    "&:hover": {
      color: "#d2d2d2",
    },
    marginLeft: theme.spacing(1),
  },
}));

const images = [
  {
    image: "/assets/game/game1.PNG",
  },
  {
    image: "/assets/game/game10.PNG",
  },
  {
    image: "/assets/game/game4.PNG",
  },
  {
    image: "/assets/game/game8.PNG",
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
    <div className={classes.root}>
      <Fade in={imgsLoaded} timeout={1000}>
        <Grid
          container
          maxWidth="md"
          spacing={2}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} md={9}>
            <Typography
              variant="h4"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Reverie
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} gutterBottom>
            <img
              className={classes.image}
              src={"/assets/game/game1.PNG"}
              alt={"pic"}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Reverie is a 2D platformer designed for players who are looking
              for a challenge. The game was created in Unity. Reverie follows a
              main character who is constantly stuck in a day-dreamt world. In
              this world, there are many obstacles that threaten to derail their
              path to the end. The player will have to use their creativity and
              maneuverability to complete levels and find the path to the end.
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="h5"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Level Design
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              The game consists of many mini levels, where the player will have
              to find a path to the next level. Each level is filled to the
              whole screen. This is done to maximize the space and allow each
              level to have a lot of detail. The camera will move to the next
              level once the player has completed the current level.{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} gutterBottom>
            <img
              className={classes.image}
              src={"/assets/game/game10.PNG"}
              alt={"pic"}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="h5"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Character Physics
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              When creating this game, it was important for me to make sure the
              character movement felt good. A lot of work also went into the
              fall speed of the character. Initially, the character felt too
              floating, which resulted in the game feeling slower. After a lot
              of tweaking, I was able to get the character moving smoothly.
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="h5"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Controls
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem className={classes.item}>
                <ListItemText primary=" - Mouse: Clicking the buttons on the menus. Clicking to shoot the acorn weapon during gameplay" />
              </ListItem>
              <ListItem className={classes.item}>
                <ListItemText primary=" - WASD or Arrow keys (up, down, left, right): control the direction of the character" />
              </ListItem>
              <ListItem className={classes.item}>
                <ListItemText primary=" - Spacebar key: jump up to two times in a row" />
              </ListItem>
              <ListItem className={classes.item}>
                <ListItemText primary=" - Enter/Return key: Pause the game" />
              </ListItem>
              <ListItem className={classes.item}>
                <ListItemText primary="- Esc key: Exit/quit the game at anytime" />
              </ListItem>
            </List>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              The character has two jumps: the initial jump and a double jump.
              This gives the character more flexibility and allows players to be
              more creative when they complete obstacles. The character dash
              speed is fairly quick. This helps to keep the gameplay fast and
              exciting.
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="h5"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Collecting Coins
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Some levels will require the player to collect all of the coins in
              order to proceed to the next level. Coins are placed in various
              parts in the level that are difficult to reach. The player will
              have to plan their route to collect these coins.
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} gutterBottom>
            <img
              className={classes.image}
              src={"/assets/game/game4.PNG"}
              alt={"pic"}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="h5"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Deaths
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Players can die from many different ways when attempting to
              complete a level. The first way is if they fall where there is no
              ground. Another way is by touching the spikes that are placed in
              many levels throughout the game. There are also various level
              components, such as fireballs, that will cause a death when the
              player collides with them. If a player dies, they will respond to
              the beginning of that level.
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} gutterBottom>
            <img
              className={classes.image}
              src={"/assets/game/game8.PNG"}
              alt={"pic"}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="h5"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Many Ways to Play
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              There is no correct way to complete a level. Most levels are
              designed with multiple paths of completion in mind. This allows
              players to use their creativity in order to solve these levels.
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="h5"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Takeaways
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              My aim from the start of this game was to create an enjoyable, yet
              challenging experience for the player. I chose to do a platformer
              because I thought it would be a great first game to start with
              while having lots of room to improve the gameplay experience.
              Creating this game taught me a lot about the process.
              <Link
                rel="stylesheet"
                className={classes.link}
                href="https://connect.unity.com/mg/other/reverie-l"
              >
                Play Reverie here
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}
