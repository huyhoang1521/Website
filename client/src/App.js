import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UTDSeniorDesign from "./pages/UTDSeniorDesign";
import CssBaseline from "@material-ui/core/CssBaseline";
import ContactManager from "./pages/ContactManager";
import ToolbarFile from "./components/ToolbarFile";
import Footer from "./components/Footer";
import L3Harris from "./pages/L3Harris";
import Contact from "./pages/Contact";
import Reverie from "./pages/Reverie";
import About from "./pages/About";
import Work from "./pages/Work";
import Home from "./pages/Home";
import SummitOfFriendswood from "./pages/SummitOfFriendswood";
import "./styles.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d2d2d2",
    },
    secondary: {
      main: "#e7f3f3",
    },
    textSecondary: {
      main: "#264653",
    },
  },
  shadows: ["none"],
  typography: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 500,
    button: {
      textTransform: "none",
    },
  },
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <body>
          <div id="main-container">
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
                path="/summitoffriendswood"
                exact
                component={SummitOfFriendswood}
              />
              <Route
                path="/utdseniordesign"
                exact
                component={UTDSeniorDesign}
              />
            </Switch>
            <Footer />
          </div>
        </body>
      </Router>
    </MuiThemeProvider>
  );
}
