const express = require("express");
const path = require("path");

require("dotenv").config({path:'../config/config.env'});


const app = express();


app.use("/user/auth",(req, res)=>{
   
      res.send("<h1>hello from server side<h1>") 
    
})

const PORT = process.env.PORT || 8080;


app.listen(PORT,()=>{
    console.log(`server is running on the ${process.env.MODE} mode on ${process.env.PORT}`)
})