var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  User = require("./users/model"),
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Twitterdb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require("./users/routes"); //importing route
userRoutes(app); //register the route

app.listen(port);
