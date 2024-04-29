var express = require("express");
var http = require("http");
var path = require("path");
var nodemailer = require("nodemailer");
const fs = require("fs");

var app = express();
var server = http.Server(app);
var port = 500;
app.use(express.static("./"));

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send_email", function (req, res) {
  console.log("Im here");
  var name = req.body.name;
  var userEmail = req.body.userEmail;
  console.log("from" + userEmail);
  var to = req.body.to;
  var subject = req.body.subject;
  var message = req.body.message;
  var phoneNbr = req.body.phoneNbr;

  const replacements = {
    "{{name}}": name,
    "{{userEmail}}": userEmail,
    "{{message}}": message,
    "{{phoneNbr}}": phoneNbr,
  };

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "expandestates@gmail.com",
      pass: "cazl hvkj culg uzko",
    },
  });

  fs.readFile("./main/email-confirmation.html", "utf8", (err, htmlContent) => {
    Object.entries(replacements).forEach(([placeholder, value]) => {
      htmlContent = htmlContent.replace(new RegExp(placeholder, "g"), value);
    });
    var emailConfirmation = {
      from: "expandestates@gmail.com",
      to: userEmail,
      subject: "Thank You and Anticipating Further Communication",
      html: htmlContent,
    };
    transporter.sendMail(emailConfirmation, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email Send: " + info.response);
      }
      res.redirect("/main/thank-you.html");
    });
  });
  fs.readFile(
    "./main/email-confirmation-team.html",
    "utf8",
    (err, htmlContent) => {
      Object.entries(replacements).forEach(([placeholder, value]) => {
        htmlContent = htmlContent.replace(new RegExp(placeholder, "g"), value);
      });
      var mailOptions = {
        from: userEmail,
        to: "expandestates@gmail.com",
        subject: subject,
        html: htmlContent,
      };
      transporter.sendMail(mailOptions);
    }
  );
});

server.listen(port, function () {
  console.log("Starting Server on port: " + port);
});
