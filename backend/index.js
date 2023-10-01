const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require('stripe')

const app = express();
app.use(cors());
app.use(express.json({limit : "10mb"}))

const PORT = process.env.PORT || 8081;

//mongodb connection
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connection successfull"))
.catch((err)=>console.log(err))


//schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
      type : String,
      unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String,      //can comment out when required
})

//model

const userModel = mongoose.model("user", userSchema)

app.get("/", (req, res) => {
    res.send("Server is running");
  });

app.post("/signup", async(req, res) => {
    console.log(req.body);
    const {email} = req.body

    userModel.findOne({email : email},(err,result)=>{
      console.log(result)
      console.log(err)
      if(result){
        res.send({message : "Email id is already registered"})
      }
      else{
        const data = userModel(req.body)
        const save = data.save()
        res.send({message: "successfully registered"})
      }
    })
})
  

//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
