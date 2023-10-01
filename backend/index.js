const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require('stripe')

const app = express();
app.use(cors());
app.use(express.json({limit : "10mb"}))

const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
    res.send("Server is running");
  });

app.post("/signup", (req, res) => {
    console.log(req.body);
})
  

//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
