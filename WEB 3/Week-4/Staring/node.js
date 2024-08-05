const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://FishinTrial:JayVegad@cluster0.nbhadhq.mongodb.net/");
const User = mongoose.model("User",({email:String,password:String}));
app.get('/signin',(req,res)=>{
    const e = req.body.e;
    const p = req.body.p;
    if(e && p) {
        res.send("Enter valid input");
    }
    else {
        const user = new User({email:e,password:p});
        user.save().then(()=>console.log("Data saved"));
        console.log(e)
        console.log(p)
        res.send("Login Succesfull");
    }
})

app.listen(3000,()=>{
    console.log("Server Started");
})