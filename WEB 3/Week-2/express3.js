const express = require("express");
const app = express();

var users = [
  {
    name: "john",
    kidney: [
      {
        healty: false,
      },
      {
        healty: true,
      },
    ],
  },
];
// This is the new Get method to send request to user.
app.get("/", (req, res) => {
  const johnKidney = users[0].name;
  res.send(johnKidney);
});

app.listen(3000);
