import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import Grid from "@material-ui/core/Grid";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    justifyContent: "center",
    backgroundColor: "#000000",
    // marginTop: theme.spacing(8),
    padding: theme.spacing(10),
  },
  typography: {
    color: "#FFFFFF",
    fontSize: 14,
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid
          className={classes.gridContainer}
          container
          spacing={4}
          align="center"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} align="left">
            <Typography
              className={classes.typography}
              variant="subtitle2"
              color="textSecondary"
              component="p"
            >
              ©2021 Designed by Huy Hoang
            </Typography>
          </Grid>
          <Grid container xs={6} align="right">
            <Grid item xs={12}>
              <Link
                rel="stylesheet"
                href="https://www.linkedin.com/in/huyhoang2197/"
              >
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                >
                  LinkedIn
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link rel="stylesheet" href="https://github.com/huyhoang1521">
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                >
                  GitHub
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link rel="stylesheet" href="/contact">
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                >
                  Mail
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
