import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  typography: {
    marginBottom: theme.spacing(3),
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  mainFeaturedPost: {
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
}));

export default function MainFeaturedPost() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
            UTD Senior Design Website
          </Typography>
        </Grid>
        <Grid item xs={12} md={9} gutterBottom>
          <img
            className={classes.mainFeaturedPost}
            src={"assets/website/utd-slide-poster.png"}
            alt={"pic"}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Every year, Computer Science students at UTD participate in a
            project for the Senior Design class. These projects are created by
            companies that are interested in the program. For my project, I
            worked with a team to design a website for UTD’s Senior Design
            class. Our team's objective was to create a central website where
            students, faculty, and sponsors have easy access to all the
            information they need. Students will be able to form groups, submit
            weekly reports, and view project information. Sponsors will submit
            proposals and accompanying attachments, and faculty and mentors will
            be able to oversee and keep track of student progress and weekly
            reports. To do this we will be creating a web front-end with ReactJS
            that will provide users easy access to all information they need.
            The front-end will communicate with a SQL database, made using
            MySQL, and a Node.JS back-end. The resulting product will be a fully
            functioning secure website where students, faculty, and sponsors can
            access all the information they need to stay updated on their
            projects.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            The Problem
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Prior to this project, students were submitting any required
            documentation through the elearning site. Teams also submitted a
            completely different form, which included the group members, and
            their preferred project choices. In addition to this, the provided
            project list and project information slides were located in two
            different sites. This was a very unorganized way to gather team
            information.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Our group's solution for this problem was to create a central site
            that students, faculty, and company sponsors will be able to log
            into and access all this information, so that it is both readily
            available and easily accessible. Students can use the student portal
            to join and form teams and edit them. Similarly to students, the
            company portal will allow companies to submit their project
            proposals, specify their requirements, and contact the faculty when
            necessary. Faculty will have administrative access and will be able
            to view all groups, their team members, and their assigned projects
            and can make changes as they see fit. As a result all three entities
            will be able to easily access all the information they need
            regarding the projects.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            My Role
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            For this project, I was part of the front end team. We started by
            planning out the initial design of the website. One of our main
            priorities was to create a simple interface. Once we had the design
            planned, we started to explore React and Javascript. To design the
            website, we worked with ReactJS and Material UI.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9} gutterBottom>
          <img
            className={classes.mainFeaturedPost}
            src={"/assets/website/home-login.png"}
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
            Landing Page
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            This is the page that the user will first see when they visit the
            website. The page will provide portals to a university and company
            page. These are located in the center of the page as buttons. Once
            each of these buttons is pressed, it will redirect the user to the
            corresponding login page.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Login Page
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            This page lets the user enter their login credentials to access the
            corresponding page. If the credentials are valid, then the display
            is switched to an appropriate Home Page for the user type. If the
            credentials are invalid, notify the user and allow a limited number
            of additional attempts. Permissions unlocked to various functions
            based on User Type. For example, the admin has the ability to add,
            edit, and delete teams, while a student can only view teams.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Project Creation
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Creates a new project viewable by students and includes details and
            powerpoints. Once a project has been created a Unique Number to the
            Project is assigned and it is added to the database. The Sponsor
            will submit a form that contains all details related to the Project
            as well as any additional non-text files like powerpoints. The
            server will store these and assign the Project a unique identifier.
            Missing information should be reported back to the Sponsor and
            perhaps Admin.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Help Ticket Submission
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Creates a new project viewable by students and includes details and
            powerpoints. Once a project has been created a Unique Number to the
            Project is assigned and it is added to the database. The Sponsor
            will submit a form that contains all details related to the Project
            as well as any additional non-text files like powerpoints. The
            server will store these and assign the Project a unique identifier.
            Missing information should be reported back to the Sponsor and
            perhaps Admin.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Data Manipulation (for admin)
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            If an error occurs in the database, the admin should be able to
            correct it. Likewise if some information is absent or extraneous,
            the admin should be able to add or remove it respectively. The
            system should update to reflect these changes and report if the
            change was unsuccessful for any reason.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Team Selection
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Students are able to pick which teams to join, up to a certain
            capacity. During the first week of the semester, students are
            contacted by the admin to sign up for teams on the website. Students
            can join an existing team or create a new team. The teams constantly
            update their statuses.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Project Selection
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            The teams can submit their top X projects that they would like to
            take on. After teams have been assembled, they will have to rank the
            projects they’d preferred to be assigned to. Ranking is done
            ordinally though will not guarantee assignment to those projects.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
