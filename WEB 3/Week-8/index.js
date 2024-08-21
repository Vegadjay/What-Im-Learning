const express = require("express");
const urlRoute = require("./routes/url")
const {connectToMongo} = require("./connect");
const app = express();
app.use(express.json())
const PORT = 3000;
connectToMongo("mongodb://127.0.0.1:27017/short-url")
app.use("/url", urlRoute);
app.listen(PORT,()=>{
    console.log("Server Started")
})