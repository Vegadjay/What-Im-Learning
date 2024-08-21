const mongoose = require("mongoose");


const Schema = new mongoose.Schema({
    shrotID: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl : {
        type: String,
        required: true,
    },
    visitHistory : [{
        timestamp : {type: Number} 
    }],
},{timestamps:true})

const Url = mongoose.model("url", Schema)


module.exports = {
    Url
}