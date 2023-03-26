const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
  console.log("connected");
});
