import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  talkButton: {
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
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  picture: {
    display: "flex",
    flex: 1,
    height: 500,
    position: "relative",
    marginBottom: theme.spacing(4),
    backgroundImage: "/assets/egg.jpg",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  profilePic: {
    display: "flex",
    flex: 1,
    position: "relative",
    backgroundImage: "/assets/egg.jpg",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  large: {
    height: "100%",
    width: "100%",
    maxHeight: "300px",
    maxWidth: "300px",
    borderRadius: "50%",
  },
}));

export default function ImageGridList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={4}
          gutterBottom
          className={classes.mainFeaturedPostPic}
        >
          <img src={"/assets/egg.jpg"} alt="pic" className={classes.large} />
        </Grid>

        <Grid item xs={10} md={8} justifyContent="center">
          <Typography
            variant="h4"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            I’m Huy, a software engineer
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            I recently graduated from the University of Texas at Dallas with a
            degree in Computer Science. During my time there, I learned many
            computer science concepts, which helped shape my fundamentals in
            programming.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            In my free time, I love to play video games, discover and play
            music, and cook. I hope to continue to always challenge myself to
            learn new things.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            My goal is to create as many things as I can. I’m always eager to
            learn new skills and keep up with current technology trends.
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
    </div>
  );
}
