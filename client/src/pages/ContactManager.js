import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GeneralHeader from "../components/GeneralHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    margins: 0,
  },
  list: {
    paddingBottom: theme.spacing(3),
  },
  container: {
    padding: 0,
    margins: 0,
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(8),
    },
  },
  backgroundImage: {
    [theme.breakpoints.between("sm", "md")]: {
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: theme.spacing(15),
    },
  },
  titleGrid: {
    padding: 0,
  },
  item: {
    padding: 0,
    marginBottom: theme.spacing(2),
  },
  title: {
    lineHeight: 2,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 35,
    fontWeight: 500,
    marginBottom: theme.spacing(3),
  },
  subtitle1: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 28,
    fontWeight: 600,
    color: "#2f4f06",
    marginBottom: theme.spacing(2),
  },
  subtitle2: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 22,
    fontWeight: 600,
    color: "#2f4f06",
    marginTop: theme.spacing(6),
  },
  subtitle3: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 16,
    fontWeight: 600,
    color: "#2f4f06",
    marginTop: theme.spacing(6),
  },
  subtitle4: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 16,
    fontWeight: 600,
    color: "#2f4f06",
  },

  typography1: {
    lineHeight: 1.3,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 24,
  },
  typography2: {
    lineHeight: 2,
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 18,
    marginBottom: theme.spacing(1),
  },
  typography3: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 16,
    marginBottom: theme.spacing(10),
  },
  typographyList: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 16,
  },
  image: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
  },
  image2: {
    position: "center",
    color: theme.palette.common.white,

    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(7),
      paddingBottom: theme.spacing(3),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  gridContainer: {
    [theme.breakpoints.only("xs")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },

    paddingBottom: theme.spacing(20),
    margins: 0,
  },
}));

const imageText = {
  title: "Contact Manager App",
  description: "A mobile application to manage a user's contacts",
  image: "/assets/app/contact-phones.png",
  imageText: "mac.png",
  items: [
    "Contributions Front End Design",
    "Outcome Completed Spring 2019",
    "Team 2019 UTD Mobile Programming Team",
    "Role Android Developer",
    "Tools Android Studio, SQLite",
  ],
  backgroundColor: "#e9e9e9",
};

const images = [
  {
    image: "/assets/app/contact-phones.png",
  },
  {
    image: "/assets/app/map-address.png",
  },
];

export default function ContactManager() {
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
    <div
      className={classes.root}
      style={{
        overflow: "hidden",
      }}
    >
      <Fade in={imgsLoaded} timeout={1000}>
        <Container className={classes.container} maxWidth="false">
          <GeneralHeader projectImage={imageText} />

          <Grid
            container
            className={classes.gridContainer}
            justifyContent="center"
            justify="center"
            alignItems="top"
          >
            <Grid item xs={12} sm={8} md={8} className={classes.titleGrid}>
              <Typography variant="h3" align="left" className={classes.title}>
                Overview
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle1}
              >
                Description
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                A simple application that displays manages a user's contacts.
                When starting the app, the default page provides a scrollable
                list view of all of the contacts in a user's phone. From this
                page, user’s can add a new contact or select an existing
                contact. Selecting a contact in the list directs the user to a
                new page, which displays their basic contact information. From
                there, all of their information can be edited and saved. The app
                utilizes an accelerometer sensor as well as a google maps
                fragment for routing. The app was created for Android devices
                using Android Studio.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle2}
              >
                Screens
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                There are two main screens that are used in this app. The
                default screen is a scrolling list view that contains the first
                and last name of the contacts. There is an Action Bar at the top
                containing a button for adding a new contact. The second screen
                shows the contact’s details, which you reach by selecting a
                contact.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Fields
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                The two date fields can be changed by either typing into the
                textbox, or clicking the change button, which will bring up a
                calendar pop up. After the user has selected a date in the pop
                up, they can click the okay button and their date will be
                stored. Once the user is done updating the contact information,
                the save button can be clicked to save the changes. Pressing the
                delete button will remove that contact from the phone. After
                clicking either of these buttons, the app will return to the
                default.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Accelerometer Sensor
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                Using the accelerometer, the user can shake the phone, which
                will re-sort the contacts in the reverse order from how they are
                currently sorted. That is, if they currently show up
                alphabetically from A to Z, shaking should cause them to sort
                from Z to A, and vice versa. Since the accelerometer is a very
                sensitive device, the amount of motion required to sort the list
                was reduced so that the user does not accidentally shake their
                phone.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Address Mapping
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                If a user wants to navigate to an address from their current
                location, they can push the map address button. The screen uses
                a Google Maps fragment. After the button is selected, a map with
                a pin on the address is displayed, with the longitude and
                latitude of the address and the distance from the user’s current
                location to that address.
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                Reverse geocoding is used to get the longitude and latitude of
                that address. First, the address is submitted and waits for the
                callback with the JSON string. It then parses the JSON string
                into an object, making it possible to retrieve its members. The
                user’s location is retrieved using Location Services. Using the
                formula for the distance between two points on the Earth’s
                surface, it then determines how far the user is from that
                address.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
              <img
                className={classes.image2}
                src={"/assets/app/map-address.png"}
                alt={"pic"}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Database
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                To store the users and their information, a SQLite database is
                implemented. The database requires a primary key, which is
                stored in an object when the record is read. A module is then
                created that implements a SQLite database. After this is
                created, a function is called in the module that checks for the
                existence of the database and creates if it does not exist. If
                there are any contacts in the database, they are read and put in
                the list that the user sees. The app contains functions to add,
                update, and delete records from the database. The import
                function reads a text file containing contacts and puts them
                into the database. The reinitialize contacts function allows the
                user to clear the database, meaning all of the contacts are
                deleted. The “import” and “reinitialize” functions are utilized
                in the form of action bar buttons on the main screen.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Takeaways
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                Working on this app was a great introduction into app
                development. As I was designing the app, I found myself really
                enjoying the whole process of it. Creating a simple layout with
                an emphasis on the user's experience was very enjoyable to me. I
                also loved creating the backend and storing user data. Overall,
                this project was a great learning experience. Although it was a
                simple project, it was a great motivator for other projects.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}
