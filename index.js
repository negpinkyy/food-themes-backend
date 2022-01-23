const foodsModel = require("./database/foods");
const UserModel = require("./database/users")
require('dotenv').config();
const express = require("express");
var cors = require('cors');
//connecting to express
const app = express();
app.use (cors());
app.use(express.json());


//import the mongoose module
var mongoose = require('mongoose');
//set up the mongoose connction
var mongoDB  = "mongodb+srv://pinkywinky:a1buru25@cluster0.t3r9h.mongodb.net/bookMyFood?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));

//http:localhost:3000
app.get("/", (req, res) => {
    return res.json({"WELCOME":`to my Backend Software For The Food Company`})
});

//Route                /foods
//Description          Get All Food
//Access               PUBLIC
//Paremeter            None
//Methods             Get

//http local host:3000/foods
app.get("/foods", async (req, res) => {  
    const getAllFoods =await foodsModel.find();
  return res.json(getAllFoods);
});

//Route                /foods/:id
//Description          Get A Food
//Access               PUBLIC
//Paremeter            None
//Methods             Get

//http local host:3000/foods
app.get("/food/:id", async (req, res) => {  
    const {id} = req.params;
    const getAllFoods =await foodsModel.findOne({_id: id});
  return res.json(getAllFoods);
});



//Route                /foods
//Description          Get All Food
//Access               PUBLIC
//Paremeter            None
//Methods             Get
//http local host:5000/
app.get("/foods", async (req, res) => {  
    const getAllFoods =await foodsModel.find();
  return res.json(getAllFoods);
});

//Route                /Users-registration
//Description          post single user details in users collection
//Access               PUBLIC
//Paremeter            None
//Parameter            None

//http local host:5000/user-register
app.post("/user-register", async (req, res) => {  
    const addNewUser =await UserModel.create(req.body);
  return res.json({userAdded: addNewUser, mesage: "User was added !!!"});
});

app.listen(5000, () => {
    console.log("AM RUNING MY FIRST EXPRESS......")
})
