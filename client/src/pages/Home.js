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

const header = {
  title: "I'm Huy Hoang",
  description: "A Software Engineer who's dedicated to creating things",
};

const featuredPosts = [
  {
    title: "Contact Manager Android App",
    image: "/assets/app/contact_management_app.png",
    link: "/contactmanager",
  },
  {
    title: "UT Dallas Senior Design Website",
    image: "/assets/website/projects-edit.png",
    link: "/utdseniordesign",
  },
  {
    title: "Reverie",
    image: "/assets/game/game1-edit.png",
    link: "/reverie",
  },
];

function Home() {
  const classes = useStyles();
  const [hover, sethover] = React.useState(false);

  return (
    <div className={classes.root}>
      <NameHeader post={header} />
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
