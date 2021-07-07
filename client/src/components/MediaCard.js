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
    maxWidth: 375,
    backgroundColor: "transparent",
  },
  media: {
    height: 280,
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
  const { post } = props;

  return (
    <Card className={classes.root}>
      <Typography
        className={classes.typography}
        variant="subtitle2"
        color="textSecondary"
        component="p"
      >
        {post.category}
      </Typography>
      <Typography
        className={classes.typographyBold}
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <Typography
        className={classes.description}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {post.description}
      </Typography>
      <CardActionArea
        component="a"
        href="#"
        disableRipple
        component={Link}
        to={post.link}
      >
        <CardMedia
          className={classes.media}
          image={post.image}
          title={post.title}
        />
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  post: PropTypes.object,
};
