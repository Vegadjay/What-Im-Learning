// creating http server using express.
const express = require("express");
const app = express();
const port = 3000;
/*
    while you get input from the user in the express than you take using query and this is the example of the input from input
*/

printname = (name) => {
  return name;
};

app.get("/", (req, res) => {
  // While we getting the input from the user than we query as like under shown
  const name = req.query.n;
  const ans = printname(name);
  res.send(`Here is you name ${ans}`);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is started");
  }
});
