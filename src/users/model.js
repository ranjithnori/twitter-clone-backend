"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Users", UserSchema);
