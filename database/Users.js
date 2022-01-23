const mongoose = require("mongoose");

//create publication
const usersSchema = mongoose.Schema({
username: String,
email: String,
password: String,


});

const UsersModel = mongoose.model("users", usersSchema);

module.exports = UsersModel;