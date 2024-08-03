// This is the global catches ex and this 

const express = require("express");
const app = express();
// when use body than must use this app.use 
app.use(express.json())

app.post("/do-checkup",(req,res)=>{

    // require array in kidney data [1,2,3]
    const kidney = req.body.kidney;
    const length = kidney.length;

    res.send("Kideny Length is: "  + length)
})

// This is the global catches and this is send when error is done

app.use(function(err,req,res,next) {
    res.status(500).send("Wrong Input is done")
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});