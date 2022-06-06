import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import PropTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
  },
  media: {
    height: 300,
  },
  [theme.breakpoints.down("md")]: {
    height: 600,
  },
  typography: {
    lineHeight: 1.2,
    fontSize: 12,
    paddingBottom: theme.spacing(2),
  },
  description: {
    lineHeight: 1.2,
    fontSize: 16,
    paddingBottom: theme.spacing(2),
  },
  typographyBold: {
    lineHeight: 1.2,
    fontWeight: 900,
    fontSize: 28,
    paddingBottom: theme.spacing(2),
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const { project } = props;

  return (
    <Card className={classes.root} elevation={0}>
      <Typography
        className={classes.typography}
        variant="subtitle2"
        color="textSecondary"
        component="p"
      >
        {project.category}
      </Typography>
      <Typography
        className={classes.typographyBold}
        variant="h5"
        component="h2"
      >
        {project.title}
      </Typography>
      <Typography
        className={classes.description}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {project.description}
      </Typography>
      <CardActionArea href="#" disableRipple component={Link} to={project.link}>
        <CardMedia
          className={classes.media}
          image={project.image}
          title={project.title}
        />
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  project: PropTypes.object,
};
