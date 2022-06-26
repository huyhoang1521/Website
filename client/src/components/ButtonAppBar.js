import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Link2 from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    textTransform: "none",
    justifyContent: "flex-start",
    height: "6em",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
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
  drawer: {
    width: "75vw",
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function ButtonAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar className={classes.root}>
          <Hidden smUp>
            <Drawer
              anchor={"right"}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <div className={classes.drawer}>
                <IconButton onClick={handleDrawerToggle}>
                  <CloseIcon />
                </IconButton>
              </div>
              <List>
                <ListItem disablePadding>
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
                </ListItem>
                <ListItem>
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
                </ListItem>
                <ListItem>
                  <Link2
                    className={classes.link}
                    rel="stylesheet"
                    href="https://github.com/huyhoang1521"
                  >
                    <Button
                      size="large"
                      disableElevation
                      disableRipple
                      className={classes.iconButton}
                      style={{ backgroundColor: "transparent" }}
                    >
                      Github
                    </Button>
                  </Link2>
                </ListItem>
                <ListItem>
                  <Link2
                    className={classes.link}
                    rel="stylesheet"
                    href="https://www.linkedin.com/in/huyhoang2197/"
                  >
                    <Button
                      size="large"
                      disableElevation
                      disableRipple
                      className={classes.iconButton}
                      style={{ backgroundColor: "transparent" }}
                    >
                      LinkedIn
                    </Button>
                  </Link2>
                </ListItem>
                <ListItem>
                  <Link
                    to="/contact"
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
                      Contact
                    </Button>
                  </Link>
                </ListItem>
                <ListItem></ListItem>
              </List>
            </Drawer>
          </Hidden>
          <IconButton
            edge="start"
            className={classes.iconButton}
            color="inherit"
            aria-label="menu"
            disableRipple
            display={{ xs: "none" }}
          >
            <Link
              to="/"
              noWrap
              variant="body2"
              href="/"
              display={{ xs: "none" }}
              style={{
                textDecoration: "none",
                display: { xs: "none", sm: "none" },
              }}
            >
              <Typography
                component="h2"
                variant="h5"
                align="left"
                style={{
                  textDecoration: "none",
                  display: { xs: "none", sm: "none" },
                }}
                noWrap
                className={classes.toolbarTitle}
              >
                Huy Hoang
              </Typography>
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden xsDown>
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

            <Link rel="stylesheet" to="/contact">
              <IconButton className={classes.iconButton} disableRipple>
                <MailOutlineIcon className={classes.iconSmall} />
              </IconButton>
            </Link>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
