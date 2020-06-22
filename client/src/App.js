import React from "react";
import "./styles.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Home from "./pages/Home";
import ContactManager from "./pages/ContactManager";
import About from "./pages/About";
import UTDSeniorDesign from "./pages/UTDSeniorDesign";
import L3Harris from "./pages/L3Harris";
import Reverie from "./pages/Reverie";
import Work from "./pages/Work";
import ToolbarFile from "./components/ToolbarFile";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d2d2d2",
    },
    secondary: {
      main: "#ABD2FA",
    },
  },
  shadows: ["none"],
  typography: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    button: {
      textTransform: "none",
    },
  },
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Router>
          <div className="App">
            <ToolbarFile />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/work" exact component={Work} />
              <Route path="/about" exact component={About} />
              <Route path="/contactmanager" exact component={ContactManager} />
              <Route path="/l3harris" exact component={L3Harris} />
              <Route path="/reverie" exact component={Reverie} />
              <Route path="/contact" exact component={Contact} />
              <Route
                path="/utdseniordesign"
                exact
                component={UTDSeniorDesign}
              />
            </Switch>
          </div>
        </Router>
      </Container>
      <Footer />
    </MuiThemeProvider>
  );
}