import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginBottom: theme.spacing(4),
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  mainText: {
    position: "relative",
    padding: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8),
      paddingRight: 0,
    },
  },
}));

export default function NameHeader(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <div className={classes.root}>
      <div className={classes.overlay} />
      <Grid container alignItems="flex-start" justify="flex-start">
        <Grid item md={8}>
          <div className={classes.mainText}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              align="left"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" align="left" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" align="left" href="#">
              {post.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

NameHeader.propTypes = {
  post: PropTypes.object,
};
