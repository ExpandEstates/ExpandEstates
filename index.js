// var express = require("express");
// var app = express();

// // app.get("/", (req, res) => {
// //   res.send("Welcome to servesr");
// // });

// app.use(express.static("./theme"));

// app.get("/about", (req, res) => {
//   res.send("Welcome to About");
// });

// app.listen(500, () => {
//   console.log("Node server started on port 500");
// });

var express = require("express");
var http = require("http");
var path = require("path");
var nodemailer = require("nodemailer");

var app = express();
var server = http.Server(app);
var port = 500;
app.use(express.static("./theme"));

app.set("view engine", "ejs");
// app.use(express.static(__dirname + "/public"));

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static("theme"));
// app.use(
//   express.static("/Users/jzjim/Desktop/Inbox/ExpandEstates/theme/index.html")
// );
// app.get("/", function (req, res) {
//   res.sendFile("/Users/jzjim/Desktop/Inbox/ExpandEstates/theme/index.html");
// });

app.get("/", function (req, res) {
  // res.render("test");
  res.send("he;;p");
});

app.post("/send_email", function (req, res) {
  var from = req.body.from;
  console.log("from" + from);
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
    to: "ExpandEstates@gmail.com",
    subject: subject,
    text: message + "\n Email: " + from,
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
