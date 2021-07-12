import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(40),
  },
  typography: {
    marginBottom: theme.spacing(3),
    lineHeight: 2,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  typographyParagraph: {
    marginBottom: theme.spacing(3),
    lineHeight: 2,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  picture: {
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
  item: {
    padding: 0,
  },
}));

export default function NegotiatingGravity() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
            Negotiating Gravity
          </Typography>
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography
            variant="body2"
            gutterBottom
            align="left"
            className={classes.typographyParagraph}
          >
            Negotiating Gravity is a calistenics based fitness app. The purpose
            of the app is to create a personalized workout for the user that
            will help them reach their fitness goals. Worked on all aspects of
            the design and implementation. Created using Flutter and Firebase.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
