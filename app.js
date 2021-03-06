//const sslRedirect = require("heroku-ssl-redirect");
const express = require("express");
//const http = require('http');
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
//import hsp from "heroku-self-ping";

require("dotenv").config();
/*require("heroku-self-ping").default(
  "https://whispering-savannah-99312.herokuapp.com"
);*/

//var http = require("http");
//var enforce = require("express-sslify");

const app = express();

//hsp("https://whispering-savannah-99312.herokuapp.com");

/*app.get("/.well-known/acme-challenge/:content", function (req, res) {
  res.send(
    "bX5OlPCW27XIHTRrDRwdrOQctyr2fZwrd4ZXCyZHTnE.nxCsna_RCcK4Y-0eT6ixi2Ei2B4cClaRnswIzdzWjyM"
  );
});*/

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below

//pp.use(sslRedirect());

//app.use(enforce.HTTPS());

/*http.createServer(app).listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});*/

// Middleware
const whitelist = [
  "http://localhost:3000",
  "http://localhost:8080",
  "https://whispering-savannah-99312.herokuapp.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(
    express.static(path.join(__dirname, "client/build"), { dotfiles: "allow" })
  );
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors());

console.log(process.env.SERVICE);
console.log(process.env.EMAIL);

app.post("/api/sendEmail", (req, res) => {
  console.log(req.body);
  let data = req.body;
  console.log(data.name);
  console.log(data.email);
  console.log(data.message);
  let smtpTransport = nodemailer.createTransport({
    service: process.env.SERVICE,
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: data.email,
    to: process.env.EMAIL,
    subject: `Message from ${data.name}`,
    text: `<p>${data.message}</p>`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("Message sent: " + response.response);
      res.send("Success");
    }
  });

  smtpTransport.close();
});

const PORT = process.env.PORT || 3001;
//const PORT = process.env.PORT || 80;

//app.listen(80, () => console.log("Server started..."));

app.listen(PORT, () => console.log("Server started on port " + PORT + "..."));
