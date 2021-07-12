import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(17),
      paddingRight: theme.spacing(17),
    },
    marginTop: theme.spacing(16),
    marginBottom: theme.spacing(12),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  title: {
    fontSize: 25,
  },
  mailButton: {
    borderRadius: 0,
    fontSize: "14px",
    paddingLeft: "24px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "24px",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
  },
}));

function Contact() {
  const classes = useStyles();

  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [sent, setSent] = React.useState(false);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function resetForm() {
    setName(" ");
    setEmail(" ");
    setMessage(" ");

    setTimeout(() => {
      setSent(false);
    }, 3000);
  }

  function handleSubmit(event) {
    console.log("name is " + name);
    console.log("email is " + email);
    console.log("message is " + message);
    axios
      .post("/api/sendEmail", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log("response from email", response);
        if (response.data.success) {
          console.log("email sent");
          setSent(true);
          console.log("sent is " + sent);
          resetForm();
        } else {
          console.log("unsuccessful email");
        }
      })
      .catch((error) => {
        console.log("message not sent error: ", error);
      });
  }

  return (
    <div
      className={classes.root}
      style={{
        overflow: "hidden",
      }}
    >
      <Fade in={true} timeout={1000}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item md={12}>
              <Typography
                variant="h4"
                gutterBottom
                align="left"
                className={classes.title}
              >
                Thanks for visiting! Let’s stay connected.
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <form noValidate autoComplete="off">
                <TextField
                  required
                  id="name"
                  label="Name"
                  fullWidth
                  onChange={(event) => handleNameChange(event)}
                />
              </form>
            </Grid>
            <Grid item xs={6} md={6}>
              <form noValidate autoComplete="off">
                <TextField
                  required
                  id="email"
                  label="Email"
                  fullWidth
                  onChange={(event) => handleEmailChange(event)}
                />
              </form>
            </Grid>
            <Grid item xs={12} md={12}>
              <form noValidate autoComplete="off">
                <TextField
                  required
                  id="message"
                  label="Message"
                  fullWidth
                  rows="8"
                  multiline
                  onChange={(event) => handleMessageChange(event)}
                />
              </form>
            </Grid>
            <Grid item md={12}>
              <Button
                size="large"
                fullWidth
                square={true}
                disableRipple
                className={classes.mailButton}
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}

export default Contact;
