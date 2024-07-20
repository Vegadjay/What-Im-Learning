const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // taking input using headers
  const personName = req.headers.personname;
  const passWord = req.headers.password;

  console.log("Received personName:", personName);
  console.log("Received passWord:", passWord);

  if (personName === "jay" && passWord === "jdv") {
    res.json({
      msg: "Login Successfully",
    });
  } else {
    res.json({
      msg: "Login failed",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});