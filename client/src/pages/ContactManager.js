import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
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
  item: {
    padding: 0,
  },
}));

const images = [
  {
    image: "/assets/app/contact_management_app.png",
  },
  {
    image: "/assets/app/activites.png",
  },
  {
    image: "/assets/app/map-address.png",
  },
];

export default function MainFeaturedPost() {
  const classes = useStyles();
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.image;
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.image);
          }, 100);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(images.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <div className={classes.root}>
      <Fade in={imgsLoaded} timeout={1000}>
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
              Contact Manager Applcation
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} gutterBottom>
            <img
              className={classes.picture}
              src={"/assets/app/contact_management_app.png"}
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
              A simple application that displays manages a user's contacts. When
              starting the app, the default page provides a scrollable list view
              of all of the contacts in a user's phone. From this page, user’s
              can add a new contact or select an existing contact. Selecting a
              contact in the list directs the user to a new page, which displays
              their basic contact information. From there, all of their
              information can be edited and saved. The app utilizes an
              accelerometer sensor as well as a google maps fragment for
              routing. The app was created for Android devices using Android
              Studio.
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
              There are two main screens that are used in this app. The default
              screen is a scrolling list view that contains the first and last
              name of the contacts. There is an Action Bar at the top containing
              a button for adding a new contact. The second screen shows the
              contact’s details, which you reach by selecting a contact. Fields
              for contact information include:
            </Typography>
            <List
              component="nav"
              aria-label="main mailbox folders"
              className={classes.typographyParagraph}
            >
              <ListItem className={classes.item}>
                <ListItemText primary="- First Name (25 characters)" />
              </ListItem>
              <ListItem className={classes.item}>
                <ListItemText primary="- Phone number (10 digits)" />
              </ListItem>
              <ListItem className={classes.item}>
                <ListItemText primary="- Birth date (may be left blank on entry, stored in 10 characters as MMDDYYYY)" />
              </ListItem>
              <ListItem className={classes.item}>
                <ListItemText primary="- Date of first contact.  (stored as MMDDYYYY)" />
              </ListItem>
              <ListItem className={classes.item}>
                <ListItemText primary="- Address line 1 and 2  (25 each; second line may be empty)" />
              </ListItem>
              <ListItem className={classes.item}>
                <ListItemText primary="- City (25)" />
              </ListItem>
              <ListItem className={classes.item}>
                <ListItemText primary="- State (2 letters)" />
              </ListItem>
              <ListItem className={classes.item}>
                <ListItemText primary="- Zip code (5 digits)" />
              </ListItem>
            </List>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typographyParagraph}
            >
              The two date fields can be changed by either typing into the
              textbox, or clicking the change button, which will bring up a
              calendar pop up. After the user has selected a date in the pop up,
              they can click the okay button and their date will be stored.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typographyParagraph}
            >
              Once the user is done updating the contact information, the save
              button can be clicked to save the changes. Pressing the delete
              button will remove that contact from the phone. After clicking
              either of these buttons, the app will return to the default.
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} gutterBottom>
            <img
              className={classes.picture}
              src={"/assets/app/activites.png"}
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
              Accelerometer Sensor
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typographyParagraph}
            >
              Using the accelerometer, the user can shake the phone, which will
              re-sort the contacts in the reverse order from how they are
              currently sorted. That is, if they currently show up
              alphabetically from A to Z, shaking should cause them to sort from
              Z to A, and vice versa. Since the accelerometer is a very
              sensitive device, the amount of motion required to sort the list
              was reduced so that the user does not accidentally shake their
              phone.
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="h5"
              gutterBottom
              align="left"
              className={classes.typography}
            >
              Address Mapping
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typographyParagraph}
            >
              If a user wants to navigate to an address from their current
              location, they can push the map address button. The screen uses a
              Google Maps fragment. After the button is selected, a map with a
              pin on the address is displayed, with the longitude and latitude
              of the address and the distance from the user’s current location
              to that address.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typographyParagraph}
            >
              Reverse geocoding is used to get the longitude and latitude of
              that address. First, the address is submitted and waits for the
              callback with the JSON string. It then parses the JSON string into
              an object, making it possible to retrieve its members. The user’s
              location is retrieved using Location Services. Using the formula
              for the distance between two points on the Earth’s surface, it
              then determines how far the user is from that address.
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} gutterBottom>
            <img
              className={classes.picture}
              src={"/assets/app/map-address.png"}
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
              Database
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typographyParagraph}
            >
              To store the users and their information, a SQLite database is
              implemented. The database requires a primary key, which is stored
              in an object when the record is read. A module is then created
              that implements a SQLite database. After this is created, a
              function is called in the module that checks for the existence of
              the database and creates if it does not exist. If there are any
              contacts in the database, they are read and put in the list that
              the user sees. The app contains functions to add, update, and
              delete records from the database. The import function reads a text
              file containing contacts and puts them into the database. The
              reinitialize contacts function allows the user to clear the
              database, meaning all of the contacts are deleted. The “import”
              and “reinitialize” functions are utilized in the form of action
              bar buttons on the main screen.
            </Typography>
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
              className={classes.typographyParagraph}
            >
              Working on this app was a great introduction into app development.
              As I was designing the app, I found myself really enjoying the
              whole process of it. Creating a simple layout with an emphasis on
              the user's experience was very enjoyable to me. I also loved
              creating the backend and storing user data. Overall, this project
              was a great learning experience. Although it was a simple project,
              it was a great motivator for other projects.
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}
