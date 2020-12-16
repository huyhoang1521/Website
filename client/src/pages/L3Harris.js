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
}));

export default function ImageGridList() {
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
            L3Harris - Software Engineer
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            I spent a spring and summer semester of college doing a co-op for
            L3Harris. There, I helped to design a GUI application that the
            pilots see when they operate the aircraft. The application was
            implemented in C++ scripts and Qt. After I graduated, I came back
            and am currently working there full time as a software engineer.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Agile
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            One of the greatest benefits to working at L3Harris was learning and
            gaining experience with the agile methodology. I was placed in a
            scrum team. Each week, we would participate in a sprint. Each sprint
            would last 2 weeks. Within this sprint, we would have a set amount
            of tasks that we plan to complete by the next sprint. At the end of
            each sprint, we presented our work to the customers. There, the
            customers were free to provide feedback and any changes they may
            want to make to the product.
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
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            My experience at L3Harris was great. Initially, I didn’t know what
            to expect, since i had not had any professional experience. However,
            I quickly began to adapt to the work and felt more comfortable.
            Everyone was also very welcoming and helpful with any questions I
            had. I’m grateful to have had such a great team to work on the
            project with me.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
