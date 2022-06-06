import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(15),
    },
    backgroundColor: "#FFFFFF",
    textTransform: "none",
    justifyContent: "flex-start",
    height: "6em",
  },
  title: {
    flex: 1,
  },
  toolbarTitle: {
    flex: 1,
    fontWeight: 600,
    color: "#000000",
  },
  toolButton: {
    fontSize: "17px",
    marginLeft: theme.spacing(2),
    "&:hover": {
      color: "#d2d2d2",
    },
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

function ToolbarFile(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Link
              to="/"
              noWrap
              variant="body2"
              href="/"
              style={{ textDecoration: "none" }}
              className={classes.title}
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                size="large"
                disableElevation
                disableRipple
                className={classes.toolButton}
                style={{ backgroundColor: "transparent" }}
              >
                Home
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button
                size="large"
                disableElevation
                disableRipple
                className={classes.toolButton}
                style={{ backgroundColor: "transparent" }}
              >
                About
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

export default ToolbarFile;
