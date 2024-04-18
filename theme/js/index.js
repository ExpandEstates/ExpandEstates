var express = require("express");
var http = require("http");
var path = require("path");
var nodemailer = require("nodemailer");

var app = express();
var server = http.Server(app);
var port = 500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "index1.html")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index1.html"));
});

app.post("/send_email", function (req, res) {
  var from = req.body.from;
  var to = req.body.to;
  var subject = req.body.subject;
  var message = req.body.message;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "expandestates@gmail.com",
      pass: "cazl hvkj culg uzko",
    },
  });

  var mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: message,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Send: " + info.response);
    }
    res.redirect("/");
  });
});

server.listen(port, function () {
  console.log("Starting Server on port: " + port);
});
