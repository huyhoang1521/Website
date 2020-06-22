import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NameHeader from "../components/NameHeader";
import HomeSquareImage from "../components/HomeSquareImage";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "I'm Huy Hoang",
  description: "A Software Engineer who's dedicated to creating things",
};

const featuredPosts = [
  {
    title: "Contact Manager Android App",
    description: "This is a description of the app I haven't made.",
    image: "/assets/app/contact_management_app.png",
    imageText: "Image Text",
    link: "/contactmanager",
  },
  {
    title: "UT Dallas Senior Design Website",
    description: "This is a description of the project I worked on.",
    image: "/assets/website/projects-edit.png",
    imageText: "Image Text",
    link: "/utdseniordesign",
  },
  {
    title: "Reverie",
    description: "This is a description of the project I worked on.",
    image: "/assets/game/game1-edit.png",
    imageText: "Image Text",
    link: "/reverie",
  },
];

function Home() {
  const classes = useStyles();
  const [hover, sethover] = React.useState(false);

  return (
    <div className={classes.root}>
      <NameHeader post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <HomeSquareImage
            key={post.title}
            post={post}
            onMouseOver={() => sethover(true)}
            onMouseOut={() => sethover(false)}
            hover={hover}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Home;
