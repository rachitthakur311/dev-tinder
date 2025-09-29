const express = require("express");
const path = require("path");
const {isAdminAuthorized, isUserAuthorized} = require('../middleware/authMiddleware');
const {connectDB} = require('../src/config/database')
require("../src/config/database")
const user = require("../src/models/user")
require("dotenv").config({path:'../config/config.env'});
const app = express();

app.use(express.json())
app.post('/signUp',async(req, res)=>{
    console.log(req.body)
    // creating a new instance of user model
    const userObj = new user(req.body)
    // ({
    //     firstName:"akashay",
    //     lastName:"Saini",
    //     emailId:"akashay@saini.com",
    //     password:"wdjcuiweg78y2",
    //     age:29,
    //     gender:"male"
    // })
    try{
         await userObj.save()
        res.send("user added successfully")
    }catch(err){
        res.status(400).send("Error saving the user" + err.message)

    }
    
})

app.delete("/deleteUser", async(req, res)=>{
    const{
        userId,
    }= req.body
try{
    const User = await user.findByIdAndDelete(userId);
    res.send("user deleted successfully")
}catch(error){
    res.send.status("something wend wrong user can't be deleted")
}
   
})

app.patch("/updateUser", async (req, res)=>{
    const userId = req.body.userId
    const data = req.body;
    try{
        const userUpdate = await user.findByIdAndUpdate({_id:userId},data, {returnDocument:"before"})
        console.log(userUpdate)
        res.send("user updated successfully")
    }catch(error){
        console.log("error updating user document")
    }
})





const PORT = process.env.PORT || 8080;

 connectDB()
    .then(() => {
        console.log("Database connected successfully...")
        app.listen(PORT,()=>{
        console.log(`server is running on the ${process.env.MODE} mode on ${process.env.PORT}`)
    })
    })
    .catch(() => {
        console.log("Data connection error!!")
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



// fs.get("http:/qwduguywd/djwfg", (res)=>{
//     console.log("API data", res.data)
// })

// fs.readfile("./hshdui/sgdud.text","utf-8", (data)=>{
//     console.log("file data",data)
// })