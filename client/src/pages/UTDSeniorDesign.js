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
  title: "UTD Senior Design Website",
  description: "A website for the UTD Senior Design Program",
  image: "/assets/website/utd_mac.png",
  imageText: "mac.png",
  items: [
    "Contributions Website Front End Design",
    "Outcome Completed Spring 2020",
    "Team 2020 UTD Senior Design Team",
    "Role Front End Developer",
    "Tools React, Node.js, mySQL",
  ],
  backgroundColor: "#fbcd7a",
};

const images = [
  {
    image: "/assets/website/utd_mac.png",
  },
  {
    image: "assets/website/utd-slide-poster.png",
  },
  {
    image: "/assets/website/home-login.png",
  },
];

export default function UTDSeniorDesign() {
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
                Every year, Computer Science students at UTD participate in a
                project for the Senior Design class. These projects are created
                by companies that are interested in the program. For my project,
                I worked with a team to design a website for UTD’s Senior Design
                class. Our team's objective was to create a central website
                where students, faculty, and sponsors have easy access to all
                the information they need. Students will be able to form groups,
                submit weekly reports, and view project information. Sponsors
                will submit proposals and accompanying attachments, and faculty
                and mentors will be able to oversee and keep track of student
                progress and weekly reports. To do this we will be creating a
                web front-end with ReactJS that will provide users easy access
                to all information they need. The front-end will communicate
                with a SQL database, made using MySQL, and a Node.JS back-end.
                The resulting product will be a fully functioning secure website
                where students, faculty, and sponsors can access all the
                information they need to stay updated on their projects.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <img
                className={classes.image2}
                src={"assets/website/utd-slide-poster.png"}
                alt={"pic"}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle2}
              >
                The Problem
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                Prior to this project, students were submitting any required
                documentation through the elearning site. Teams also submitted a
                completely different form, which included the group members, and
                their preferred project choices. In addition to this, the
                provided project list and project information slides were
                located in two different sites. This was a very unorganized way
                to gather team information.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Solution
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                Our group's solution for this problem was to create a central
                site that students, faculty, and company sponsors will be able
                to log into and access all this information, so that it is both
                readily available and easily accessible. Students can use the
                student portal to join and form teams and edit them. Similarly
                to students, the company portal will allow companies to submit
                their project proposals, specify their requirements, and contact
                the faculty when necessary. Faculty will have administrative
                access and will be able to view all groups, their team members,
                and their assigned projects and can make changes as they see
                fit. As a result all three entities will be able to easily
                access all the information they need regarding the projects.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                My Role
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                For this project, I was part of the front end team. We started
                by planning out the initial design of the website. One of our
                main priorities was to create a simple interface. Once we had
                the design planned, we started to explore React and Javascript.
                To design the website, we worked with ReactJS and Material UI.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Landing Page
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                This is the page that the user will first see when they visit
                the website. The page will provide portals to a university and
                company page. These are located in the center of the page as
                buttons. Once each of these buttons is pressed, it will redirect
                the user to the corresponding login page.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Login Page
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                This page lets the user enter their login credentials to access
                the corresponding page. If the credentials are valid, then the
                display is switched to an appropriate Home Page for the user
                type. If the credentials are invalid, notify the user and allow
                a limited number of additional attempts. Permissions unlocked to
                various functions based on User Type. For example, the admin has
                the ability to add, edit, and delete teams, while a student can
                only view teams.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <img
                className={classes.image2}
                src={"/assets/website/home-login.png"}
                alt={"pic"}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Project Creation
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                Creates a new project viewable by students and includes details
                and powerpoints. Once a project has been created a Unique Number
                to the Project is assigned and it is added to the database. The
                Sponsor will submit a form that contains all details related to
                the Project as well as any additional non-text files like
                powerpoints. The server will store these and assign the Project
                a unique identifier. Missing information should be reported back
                to the Sponsor and perhaps Admin.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Data Manipulation (for admin)
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                If an error occurs in the database, the admin should be able to
                correct it. Likewise if some information is absent or
                extraneous, the admin should be able to add or remove it
                respectively. The system should update to reflect these changes
                and report if the change was unsuccessful for any reason.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Team Selection
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                Students are able to pick which teams to join, up to a certain
                capacity. During the first week of the semester, students are
                contacted by the admin to sign up for teams on the website.
                Students can join an existing team or create a new team. The
                teams constantly update their statuses.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Typography
                variant="h6"
                align="left"
                className={classes.subtitle3}
              >
                Project Selection
              </Typography>
              <Typography
                variant="h6"
                align="left"
                className={classes.typography2}
              >
                The teams can submit their top X projects that they would like
                to take on. After teams have been assembled, they will have to
                rank the projects they’d preferred to be assigned to. Ranking is
                done ordinally though will not guarantee assignment to those
                projects.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}
