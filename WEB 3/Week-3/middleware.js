// while we make some route that we add two param one is route and second is cb that also we can use one thing like middleware this middleware is use for reduce readancy of the code like make one fn and use second fn like param

// this code is count the rq for that hits to server by the user

const express = require("express");

const app = express();
let rq = 0;
function calcereq(req, res, next) {
  rq++;
  next();
  console.log(rq);
}

app.get("/", calcereq, (req, res) => {
  if (rq == 4) {
    res.send("Limit is done!!");
  } else {
    res.send("Add one");
  }
});
app.get("/second", calcereq, (req, res) => {});

app.listen(3000);
