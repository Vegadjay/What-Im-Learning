const express = require("express");
const zod = require("zod");
const app = express();
app.use(express.json());

// const schema = zod.array(zod.string());

const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
});

app.post("/", (req, res) => {
  const email = req.body.email;
  const response = schema.safeParse(email);
  if (!response.success) {
    res.json({
      msg: "Email is not valid",
      msg1: "Password if not valid",
    });
  } else {
    res.json({
      msg: "Login Successfully",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running now");
});
