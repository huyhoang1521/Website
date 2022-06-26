import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footer: {
    justifyContent: "center",
    backgroundColor: "#000000",
    // marginTop: theme.spacing(8),
    padding: theme.spacing(10),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  typography: {
    color: "#FFFFFF",
    fontSize: 14,
    "&:hover": {
      color: "#d2d2d2",
      backgroundColor: "transparent",
    },
  },
  grid: {
    padding: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="false">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          justify="center"
          alignItems="top"
        >
          <Grid xs={11} sm={11} md={9} lg={9} xl={6} className={classes.grid}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              disableRipple
            >
              <Link
                rel="stylesheet"
                style={{ textDecoration: "none" }}
                href="https://github.com/huyhoang1521/Website"
              >
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                >
                  {`©${new Date().getFullYear()} Designed by Huy Hoang`}
                </Typography>
              </Link>
            </IconButton>

            <Typography variant="h6" className={classes.title}></Typography>
          </Grid>
          <Grid
            container
            xs={1}
            sm={1}
            md={1}
            lg={1}
            xl={1}
            className={classes.grid}
            align="right"
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Link
                rel="stylesheet"
                style={{ textDecoration: "none" }}
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
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Link
                rel="stylesheet"
                style={{ textDecoration: "none" }}
                href="https://github.com/huyhoang1521"
              >
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
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Link
                rel="stylesheet"
                style={{ textDecoration: "none" }}
                href="/contact"
              >
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
