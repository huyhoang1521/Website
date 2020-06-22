import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const featuredPosts = [
  {
    title: "UT Dallas Senior Design Website",
    description:
      "Designed the front end of the UT Dallas senior design website. The purpose of the website was to create a central place for students, faculty and staff, and companies to use for the senior design class.",
    image: "/assets/home_page.PNG",
    imageText: "Image Text"
  },
  {
    title: "Contact Manager Application",
    description:
      "Created an Android application that allows users to manage contacts on their phones. Users can add, edit, or delete contacts. The contacts are stored in a SQLite database. Each contact contains basic information about them, such as their name and phone number, and address.",
    image: "/assets/android.png",
    imageText: "Image Text"
  },
  {
    title: "2D Platformer Video Game",
    description:
      "Designed a 2d platforming video game in Unity in which the player will have to navigate through obstacles to complete levels. Implemented C# scripts for various level components, providing character physics, and enemy AI to attack the player.",
    image: "/assets/game.PNG",
    imageText: "Image Text"
  }
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {featuredPosts.map(card => (
              <Grid item key={card.title} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
