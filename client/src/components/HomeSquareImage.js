import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    height: 400,
    position: "relative",
    textDecoration: "none",
    backgroundImage: "/assets/android.png",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    "&:hover": {
      backgroundColor: "#757ce8",
    },
  },
  cardDetails: {
    flex: 1,
    "&:hover": {
      backgroundColor: "rgba(299,299,299,0.8)",
    },
  },
  cardMedia: {
    width: 160,
  },
}));

export default function HomeSquareImage(props) {
  const classes = useStyles();
  const [hover, sethover] = React.useState(false);
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
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
          >
            <Fade
              in={hover}
              style={{ transformOrigin: "20 20 0" }}
              {...(hover ? { timeout: 1000 } : {})}
            >
              <CardContent>
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
                    style={{ fontSize: "150%" }}
                    align="left"
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

HomeSquareImage.propTypes = {
  post: PropTypes.object,
};
