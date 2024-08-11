const express = require("express")
const randomParagraph = require("random-paragraph");
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
app.use(cors({}));
app.use(bodyParser.json());
app.post('/',(req,res)=>{
    var max = req.body.max;
    console.log(max);
    res.send(randomParagraph({min: 0, max: max}))
})

app.listen(3000);