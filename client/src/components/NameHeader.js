import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginBottom: theme.spacing(2),
    backgroundColor: "#fbf3f3",
  },

  mainText: {
    position: "relative",
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(18),
    },
    [theme.breakpoints.only("md")]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(12),
    },
    [theme.breakpoints.only("lg")]: {
      paddingTop: theme.spacing(13),
      paddingBottom: theme.spacing(13),
    },
    [theme.breakpoints.only("xl")]: {
      paddingTop: theme.spacing(18),
      paddingBottom: theme.spacing(18),
    },
  },
  title: {
    fontSize: 32,
    color: "#2d6a4f",

    lineHeight: 2,
    fontWeight: 600,
    paddingBottom: theme.spacing(1),
  },
  font: {
    fontSize: 24,
    lineHeight: 2,
    paddingBottom: theme.spacing(1),
  },
}));

export default function NameHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" justify="center" alignItems="top">
        <Grid item xs={12} sm={12} md={10} lg={10} xl={7}>
          <div className={classes.mainText}>
            <Typography
              className={classes.title}
              component="h4"
              variant="h4"
              align="left"
            >
              Hello, I’m Huy
            </Typography>
            <Typography
              className={classes.font}
              variant="h6"
              align="left"
              color="inherit"
              paragraph
            >
              I’m an experienced
              <span style={{ color: "#f4a261", fontWeight: 600 }}>
                {" "}
                software engineer{" "}
              </span>
              based in
              <span style={{ color: "#2a9d8f", fontWeight: 600 }}>
                {" "}
                Dallas TX,{" "}
              </span>
              who is actively working to create modern web and mobile
              applications.
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              color="inherit"
              paragraph
            >
              Currently, I am working as a software engineer at{" "}
              <span style={{ color: "#e9c46a", fontWeight: 600 }}>
                L3Harris Technologies.
              </span>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
