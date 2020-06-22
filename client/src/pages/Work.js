import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WorkSquareImage from "../components/WorkSquareImage";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  typography: {
    marginBottom: theme.spacing(4),
  },
  experienceTypography: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

const featuredPosts = [
  {
    title: "UT Dallas Senior Design Website",
    image: "/assets/website/projects-edit.png",
    imageText: "Image Text",
    link: "/utdseniordesign",
  },
  {
    title: "Contact Manager Android App",
    image: "/assets/app/contact_management_app.png",
    imageText: "Image Text",
    link: "/contactmanager",
  },
  {
    title: "Reverie Video Game",
    image: "/assets/game/game1-edit.png",
    imageText: "Image Text",
    link: "/reverie",
  },
];

const ExperiencePosts = [
  {
    title: "L3Harris Technologies",
    image: "/assets/work/L3Harris_Logo.png",
    imageText: "Image Text",
    link: "/l3harris",
  },
];

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        className={classes.typography}
        variant="h5"
        gutterBottom
        align="left"
      >
        Projects
      </Typography>
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <WorkSquareImage key={post.title} post={post} />
        ))}
      </Grid>
      <Typography
        className={classes.experienceTypography}
        variant="h5"
        gutterBottom
        align="left"
      >
        Experience
      </Typography>
      <Grid container spacing={4}>
        {ExperiencePosts.map((post) => (
          <WorkSquareImage key={post.title} post={post} />
        ))}
      </Grid>
    </div>
  );
}

export default Home;
