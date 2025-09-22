const express = require("express");
const path = require("path");
const {isAdminAuthorized, isUserAuthorized} = require('../middleware/authMiddleware') 

require("dotenv").config({path:'../config/config.env'});


const app = express();

app.use('/admin', isAdminAuthorized);
// app.use('/users', isUserAuthorized)


app.get('/admin/getUserData',(req, res)=>{
    res.status(200).send("All data of user is getting successfully")
})

app.get('/admin/deleteUserData',(req, res)=>{
    res.status(200).send("All data of user is deleted successfully")
})

app.get('/users/specificUserData', isUserAuthorized, (req, res)=>{
    res.status(200).send("All getting successfully of specific user")
})
const PORT = process.env.PORT || 8080;


app.listen(PORT,()=>{
    console.log(`server is running on the ${process.env.MODE} mode on ${process.env.PORT}`)
})