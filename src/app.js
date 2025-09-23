const express = require("express");
const path = require("path");
const {isAdminAuthorized, isUserAuthorized} = require('../middleware/authMiddleware');
const connectDB = require('../src/config')
require("../src/config/database")
require("dotenv").config({path:'../config/config.env'});


const app = express();
const PORT = process.env.PORT || 8080;


app.listen(PORT,()=>{
    connectDB()
    .then(() => {
        console.log("Database connected successfully...")
    })
    .catch(() => {
        console.log("Data connection error!!")
    })
    console.log(`server is running on the ${process.env.MODE} mode on ${process.env.PORT}`)
})




// db connection String 

// mongodb+srv://Pandit_ji:tinder8888@panditji.mjqqnvo.mongodb.net/


// app.use('/admin', isAdminAuthorized);
// // app.use('/users', isUserAuthorized)


// app.get('/admin/getUserData',(req, res)=>{
//     res.status(200).send("All data of user is getting successfully")
// })

// app.get('/admin/deleteUserData',(req, res)=>{
//     res.status(200).send("All data of user is deleted successfully")
// })

// app.get('/users/specificUserData', isUserAuthorized, (req, res)=>{
//     res.status(200).send("All getting successfully of specific user")
// })