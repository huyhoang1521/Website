import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "6em",
    marginBottom: theme.spacing(7),
    //backgroundColor: "#fbf3f3",
  },
  container: {
    paddingTop: theme.spacing(25),
    paddingBottom: theme.spacing(30),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  mainText: {
    position: "relative",
    paddingBottom: theme.spacing(1),
  },
  mainText2: {
    position: "relative",
    paddingBottom: theme.spacing(3),
  },
  title1: {
    fontSize: 18,
    lineHeight: 2,
    fontWeight: 600,
  },
  title: {
    fontSize: 32,
    color: "#2d6a4f",
    lineHeight: 2,
    fontWeight: 600,
  },
  font: {
    color: "#2d6a4f",
    fontSize: 65,
    lineHeight: 1.25,
    padding: 0,
  },
}));

export default function NameHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.container}
        container
        justifyContent="center"
        justify="center"
        alignItems="top"
      >
        <Grid item xs={12} sm={12} md={10} lg={10} xl={7}>
          <Grid container justifyContent="left" justify="left" alignItems="top">
            <Grid item xs={12} sm={12} md={10} lg={10} xl={7}>
              <div className={classes.mainText}>
                <Typography
                  className={classes.title1}
                  component="h4"
                  variant="h4"
                  align="left"
                >
                  Hi, my name is
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
              <div className={classes.mainText2}>
                <Typography
                  className={classes.font}
                  variant="h6"
                  align="left"
                  color="inherit"
                >
                  <span style={{ fontWeight: 600, whiteSpace: "pre-line" }}>
                    Huy Hoang. {"\n"}I build things for the web.
                  </span>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className={classes.mainText}>
                <Typography
                  variant="subtitle1"
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
                  applications. Currently, I am working as a software engineer
                  at{" "}
                  <span style={{ color: "#e9c46a", fontWeight: 600 }}>
                    L3Harris Technologies.
                  </span>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
