import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  footer: {
    justifyContent: "center",
    backgroundColor: "#000000",
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box p={2}>
            <Link
              rel="stylesheet"
              href="https://www.linkedin.com/in/huyhoang2197/"
            >
              <LinkedInIcon />
            </Link>
          </Box>
          <Box p={2}>
            <Link rel="stylesheet" href="https://github.com/huyhoang1521">
              <GitHubIcon />
            </Link>
          </Box>
          <Box p={2}>
            <Link rel="stylesheet" href="/contact">
              <MailIcon />
            </Link>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
