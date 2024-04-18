var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Welcome to servesr");
});

app.use(express.static("./public"));

app.get("/about", (req, res) => {
  res.send("Welcome to About");
});

app.listen(5000, () => {
  console.log("Node server started on port 5000");
});
