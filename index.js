// setup your server here
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to the Express server!");
});

app.listen(port, () => {
  console.log("the server started .....");
});
