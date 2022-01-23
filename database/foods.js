const mongoose = require("mongoose");

//create publication
const foodsSchema = mongoose.Schema({

image: String,
title: String,
ganished: String,
request: String
});

const foodsModel = mongoose.model("foods", foodsSchema);

module.exports = foodsModel;