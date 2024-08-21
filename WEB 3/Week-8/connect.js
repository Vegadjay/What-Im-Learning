const mongoose = require("mongoose");


async function connectToMongo(url) {
    return mongoose.connect(url).then(()=> console.log("MongoDb Connected"))
}  

module.exports = {
    connectToMongo,
}