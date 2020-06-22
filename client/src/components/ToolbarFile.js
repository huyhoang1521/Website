import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    marginTop: theme.spacing(3),
    textTransform: "none",
    justifyContent: "flex-end",
  },
  toolbarTitle: {
    flex: 1,
  },
  toolButton: {
    fontSize: "18px",
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

function ToolbarFile() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <React.Fragment>
        <Toolbar className={classes.toolbar}>
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
          <Link to="/work" style={{ textDecoration: "none" }}>
            <Button
              size="large"
              disableElevation
              disableRipple
              className={classes.toolButton}
              style={{ backgroundColor: "transparent" }}
            >
              Work
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
      </React.Fragment>
    </React.Fragment>
  );
}

export default ToolbarFile;
