// ! This is the basic things from express
// ! this is the rest api and this ia make using express and make using object
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post("/", (req, res) => {
  const message = req.query.message;
  console.log(message);
  res.send("Hello world");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("rq is reach here");
  }
});
