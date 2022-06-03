// setup your server here
var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

app.listen(port, () => {
  console.log("the server started .....");
});
