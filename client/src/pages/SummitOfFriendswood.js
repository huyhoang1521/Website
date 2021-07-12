import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(16),
  },
  typography: {
    marginBottom: theme.spacing(3),
    lineHeight: 2,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  typographyParagraph: {
    marginBottom: theme.spacing(3),
    lineHeight: 2,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  picture: {
    position: "center",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  websiteButton: {
    borderRadius: 0,
    fontSize: "14px",
    paddingLeft: "24px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "24px",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
  },
  item: {
    padding: 0,
  },
}));

export default function SummitOfFriendswood() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        overflow: "hidden",
      }}
    >
      <Grid
        container
        maxWidth="md"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} md={9}>
          <Typography
            variant="h4"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Website for The Summit of Friendswood
          </Typography>
        </Grid>
        <Grid item xs={12} md={9} gutterBottom>
          <img
            className={classes.picture}
            src={"/assets/website/home-summit.png"}
            alt={"pic"}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="body2"
            gutterBottom
            align="left"
            className={classes.typographyParagraph}
          >
            The Summit of Friendswood is a building that leases retail space to
            small businesses. This website serves as a place to find available
            leasing options as well as general information about the building.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Screens
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            align="left"
            className={classes.typographyParagraph}
          >
            The website consists of five main screens: Home, Lease, Gallery,
            About, and Contact. Each screen contains neccessary information
            about the building. For styling, I decided to go with minimal
            components to give a modern and professional look to the website. It
            was also important to show the building itself, so I included hero
            images in each page. This combined with the mininal components helps
            to put emphasis on the images.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9} gutterBottom>
          <img
            className={classes.picture}
            src={"/assets/website/gallery.png"}
            alt={"pic"}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Design
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            align="left"
            className={classes.typographyParagraph}
          >
            For this project, I decided to design the front end using React JS,
            since it is the framework that I was most familiar with. I took a
            lot of inspiration from real estate and apartment template websites
            to get an idea of current design trends. The back end was made with
            Node JS and contains logic for running in development or production
            mode. The website also utilizes the Google Maps API in order to
            display the location of the website on a map.
          </Typography>
        </Grid>

        <Grid item xs={12} md={9} gutterBottom>
          <img
            className={classes.picture}
            src={"/assets/website/maps.png"}
            alt={"pic"}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Takeaways
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            During the process of making this website, I learned a lot about
            designing pages with outside viewers in mind. I made sure to design
            pages with a simple layout to make it easy the website understand
            navigate through. A challenge while creating this website was making
            resizable screens to ensure that the content looks presentable on
            all devices. In order to accomplish this, I had to use many
            breakpoints and resiable grid items to adapt to different screen
            sizes. In the end, I feel that I gained a lot of experience with
            designing pages in React.
          </Typography>
          <Link
            rel="stylesheet"
            className={classes.link}
            href="https://summit-of-friendswood.herokuapp.com/"
          >
            <Button
              size="large"
              square={true}
              disableRipple
              className={classes.websiteButton}
            >
              View Website
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
