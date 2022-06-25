import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import green from "@material-ui/core/colors/green";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Link2 from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    textTransform: "none",
    justifyContent: "flex-start",
    height: "6em",
  },
  title: {
    flexGrow: 1,
  },
  toolbarTitle: {
    flex: 1,
    fontWeight: 600,
    color: "#000000",
  },
  link: {
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(2),
    },
  },
  link2: {
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(2),
    },
  },
  link3: {
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(2),
    },
  },
  iconButton: {
    "&:hover": {
      color: "#d2d2d2",
      backgroundColor: "transparent",
    },
  },
  icon: {
    width: 21,
    height: 21,
  },
  iconSmall: {
    width: 25,
    height: 25,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar className={classes.root}>
          <IconButton
            edge="start"
            className={classes.iconButton}
            color="inherit"
            aria-label="menu"
            disableRipple
          >
            <Link
              className={classes.link3}
              to="/"
              noWrap
              variant="body2"
              href="/"
              style={{ textDecoration: "none" }}
            >
              <Typography
                component="h2"
                variant="h5"
                align="left"
                style={{ textDecoration: "none" }}
                noWrap
                className={classes.toolbarTitle}
              >
                Huy Hoang
              </Typography>
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={classes.link}
          >
            <Button
              size="large"
              disableElevation
              disableRipple
              className={classes.iconButton}
              style={{ backgroundColor: "transparent" }}
            >
              Home
            </Button>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            className={classes.link}
          >
            <Button
              size="large"
              disableElevation
              disableRipple
              className={classes.iconButton}
              style={{ backgroundColor: "transparent" }}
            >
              About
            </Button>
          </Link>
          <Link2
            className={classes.link}
            rel="stylesheet"
            href="https://github.com/huyhoang1521"
          >
            <IconButton className={classes.iconButton} disableRipple>
              <GitHubIcon className={classes.icon} />
            </IconButton>
          </Link2>
          <Link2
            className={classes.link}
            rel="stylesheet"
            href="https://www.linkedin.com/in/huyhoang2197/"
          >
            <IconButton className={classes.iconButton} disableRipple>
              <LinkedInIcon className={classes.iconSmall} />
            </IconButton>
          </Link2>

          <Link className={classes.link2} rel="stylesheet" to="/contact">
            <IconButton className={classes.iconButton} disableRipple>
              <MailOutlineIcon className={classes.iconSmall} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
