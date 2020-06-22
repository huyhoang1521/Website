import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Fade from "@material-ui/core/Fade";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    height: 300,
    position: "relative",
    marginBottom: theme.spacing(4),
    textDecoration: "none",
    backgroundImage: "/assets/android.png",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textTransform: "none",
  },
  cardDetails: {
    flex: 1,
    "&:hover": {
      backgroundColor: "rgba(299,299,299,0.8)",
    },
  },
}));

export default function WorkSquareImage(props) {
  const classes = useStyles();
  const [hover, sethover] = React.useState(false);
  const { post } = props;

  return (
    <Grid item xs={12} md={4}>
      <CardActionArea component="a" href="#" disableRipple>
        <Card
          className={classes.card}
          square={true}
          component={Link}
          to={post.link}
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div
            className={classes.cardDetails}
            onMouseOver={() => sethover(true)}
            onMouseOut={() => sethover(false)}
            onClick={() => <Redirect to={"/experience"} />}
          >
            <Fade
              in={hover}
              style={{ transformOrigin: "20 20 0" }}
              {...(hover ? { timeout: 1000 } : {})}
            >
              <CardContent onClick={() => <Redirect to={"/experience"} />}>
                {/* Increase the priority of the hero background image */}
                {
                  <img
                    style={{ display: "none" }}
                    src={post.image}
                    alt={post.imageText}
                  />
                }
                {hover ? (
                  <Typography
                    component="h1"
                    variant="h4"
                    color="inherit"
                    style={{ fontSize: "100%" }}
                    align="left"
                    gutterBottom
                  >
                    {post.title}
                  </Typography>
                ) : (
                  <p> </p>
                )}
              </CardContent>
            </Fade>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

WorkSquareImage.propTypes = {
  post: PropTypes.object,
};
