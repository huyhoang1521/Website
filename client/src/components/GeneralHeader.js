import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";

import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginBottom: theme.spacing(2),
  },

  mainText: {
    position: "relative",
    [theme.breakpoints.only("xs")]: {
      paddingBottom: theme.spacing(5),
    },
  },
  gridContainer: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(7),
  },
  item: {
    padding: 0,
  },
  itemText: {
    marginBottom: 0,
    padding: 0,
  },
  itemTypography: {
    [theme.breakpoints.only("xs")]: {
      fontSize: 14,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 15,
    },
  },
  sub: {
    marginBottom: 0,
    fontSize: 19,
    [theme.breakpoints.only("xs")]: {
      fontSize: 17,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    paddingBottom: theme.spacing(2),
  },
  title: {
    fontSize: 40,
    [theme.breakpoints.only("xs")]: {
      fontSize: 32,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    },
    fontWeight: 600,
  },
  font: {
    fontSize: 24,
    lineHeight: 2,
    paddingBottom: theme.spacing(1),
  },
  image: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    padding: 0,
    [theme.breakpoints.only("xs")]: {
      height: "50vw",
    },
    [theme.breakpoints.only("sm")]: {
      height: "30vw",
    },
    [theme.breakpoints.only("md")]: {
      height: "27vw",
    },
    [theme.breakpoints.up("lg")]: {
      height: "23vw",
    },
  },
}));

function Text(props) {
  const firstSpaceIndex = props.str.indexOf(" ");
  return (
    <>
      <span style={{ fontWeight: "bold" }}>
        {props.str.substring(0, firstSpaceIndex)}
      </span>
      <span>{props.str.substring(firstSpaceIndex)}</span>
    </>
  );
}

export default function GeneralHeader(props) {
  const classes = useStyles();
  const { projectImage } = props;

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: `${projectImage.backgroundColor}` }}
    >
      <Grid
        container
        className={classes.gridContainer}
        justifyContent="center"
        justify="center"
        alignItems="top"
      >
        <Grid item xs={10} sm={4} md={4}>
          <div className={classes.mainText}>
            <Typography
              className={classes.title}
              variant="h1"
              component="div"
              align="left"
            >
              Reverie
            </Typography>
            <Typography
              className={classes.sub}
              variant="subtitle1"
              align="left"
              color="inherit"
              paragraph
            >
              A 2D platformer video game created with Unity
            </Typography>

            {projectImage.items.map((item) => (
              <ListItem className={classes.itemText}>
                <Typography
                  className={classes.itemTypography}
                  variant="subtitle2"
                  align="left"
                  color="inherit"
                >
                  <Text str={item} />
                </Typography>
              </ListItem>
            ))}
          </div>
        </Grid>

        <Grid item xs={10} sm={4} md={4}>
          <Paper
            className={classes.image}
            alignItems="top"
            style={{
              backgroundImage: `url(${projectImage.image}`,
              backgroundColor: `${projectImage.backgroundColor}`,
            }}
          >
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: "none" }}
                src={projectImage.image}
                alt={projectImage.imageText}
              />
            }
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

GeneralHeader.propTypes = {
  projectImage: PropTypes.object,
};
