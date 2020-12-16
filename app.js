const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
//import hsp from "heroku-self-ping";

require("dotenv").config();
/*require("heroku-self-ping").default(
  "https://whispering-savannah-99312.herokuapp.com"
);*/

/*app.get("/.well-known/acme-challenge/:content", function (req, res) {
  res.send("YwTkgy0MHVHae8dDZYFBhIe69QZzVvi8Phreq2P8Nu4");
});*/

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Server started..."));

//app.listen(80, () => console.log("Server started..."));

//hsp("https://whispering-savannah-99312.herokuapp.com");

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
