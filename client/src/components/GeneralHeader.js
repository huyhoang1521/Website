import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import GitHubIcon from "@material-ui/icons/GitHub";
import FilterNoneOutlinedIcon from "@material-ui/icons/FilterNoneOutlined";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginBottom: theme.spacing(2),
    paddingTop: "6em",
  },

  mainText: {
    position: "relative",
    [theme.breakpoints.only("xs")]: {
      paddingBottom: theme.spacing(5),
    },
  },
  gridContainer: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
  },
  item: {
    padding: 0,
  },
  itemText: {
    marginBottom: 0,
    padding: 0,
  },
  itemText2: {
    marginBottom: 0,
    padding: 0,
  },
  itemTypography: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "2.8vw",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.5vw",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "1.3vw",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "1.05vw",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "1vw",
    },
    paddingRight: theme.spacing(0.5),
  },

  link: {
    color: "#000000",
    "&:hover": {
      color: "#d2d2d2",
      backgroundColor: "transparent",
    },
  },
  sub: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "4.0vw",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.2vw",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "1.6vw",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "1.45vw",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "1.3vw",
    },

    marginBottom: 0,
    paddingBottom: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "8.4vw",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "4.0vw",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "3.5vw",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "3.0vw",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "2.4vw",
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
        <Grid item xs={10} sm={5} md={4} lg={4} xl={4}>
          <div className={classes.mainText}>
            <Typography
              className={classes.title}
              variant="h1"
              component="div"
              align="left"
            >
              {projectImage.title}
            </Typography>

            <Typography
              className={classes.sub}
              variant="subtitle1"
              align="left"
              color="inherit"
              paragraph
            >
              {projectImage.description}
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
            {projectImage.github != "" || projectImage.link != "" ? (
              <ListItem className={classes.itemText2}>
                <Typography
                  className={classes.itemTypography}
                  variant="subtitle2"
                  align="left"
                  color="inherit"
                >
                  <span style={{ fontWeight: "bold" }}>Links:</span>
                </Typography>
                {projectImage.github != "" ? (
                  <Link rel="stylesheet" href={projectImage.github}>
                    <IconButton className={classes.link} disableRipple>
                      <GitHubIcon />
                    </IconButton>
                  </Link>
                ) : (
                  <p> </p>
                )}
                {projectImage.link != "" ? (
                  <Link rel="stylesheet" href={projectImage.link}>
                    <IconButton className={classes.link} disableRipple>
                      <FilterNoneOutlinedIcon />
                    </IconButton>
                  </Link>
                ) : (
                  <p> </p>
                )}
              </ListItem>
            ) : (
              <p> </p>
            )}
          </div>
        </Grid>

        <Grid item xs={10} sm={5} md={4} lg={4} xl={4}>
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
