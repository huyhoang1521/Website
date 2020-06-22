const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
//var config = require(".env");

require("dotenv").config();

const app = express();

// Static folder
//app.use("/client", express.static(path.join(__dirname, "client")));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors());

/*app.get("/", (req, res) => {
  app.set("view engine", "hello");
});*/

app.post("/api/sendEmail", (req, res) => {
  console.log(req.body);
  let data = req.body;
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
    to: "hhoang2197@gmail.com",
    subject: `Message from ${data.name}`,
    html: `<p>${req.body.message}</p>`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("sucess");
      res.send("Success");
    }
  });

  smtpTransport.close();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Server started..."));
