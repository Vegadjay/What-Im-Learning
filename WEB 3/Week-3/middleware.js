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
// here i am using app.use this is the run middleware with any place without writing function inside route

app.use(express());
// app.use("express.json()")
app.get("/", (req, res) => {
  if (rq == 4) {
    res.send("Limit is done!!");
  } else {
    res.send("Add one");
  }
});
app.get("/second", (req, res) => {});
// Here also you use "use" function with some unique function
// ! Note here inside the use method use add fn than it's take 4 input as a args
// ! this is the special type of middleware this is called as error handling middleware....
app.use((err, res, req, next) => {
  res.json({
    msg: "Something Went Wrong",
  });
});

app.listen(3000);
