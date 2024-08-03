// This is the middleware and this is the calculate rq by hitting 

const express = require("express");
const app = express();

var checkRq = 0;

function calcFunction(req,res,next) {
    checkRq++;
    console.log(checkRq);
    next();
}

app.get('/', calcFunction ,(req, res) => {
   res.send("Welcone /") 
});

app.get('/1', calcFunction ,(req, res) => {
    res.send("Welcone /1")
});


app.get('/2', calcFunction ,(req, res) => {
    res.send("Welcone /2")
});


app.get('/3', calcFunction ,(req, res) => {
    res.send("Welcone /3")  
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
