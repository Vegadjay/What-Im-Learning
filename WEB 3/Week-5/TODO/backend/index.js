const express = require("express");
const { createTodo, updateTodo } = require("./zod");
const app = express();

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(404).json({
      msg: "Wrong Inputs",
    });
    return;
  } // put the todo in mongo db
  else {
    res.status(200).json({
      msg: "Todo added",
    });
  }
});

app.get("/todos", (req, res) => {});

app.put("/compeleted", (req, res) => {
  const updatePayload = req.body;
  const parseupdatePayload = updatePayload.safeParse(updatePayload);
  if (!parseupdatePayload.success) {
    res.status(404).json({
      msg: "Input is not valid so todo is not updated",
    });
    return;
  } else {
    // update todo in mongo db
  }
});

app.listen(3000, () => {
  console.log("Server is started...");
});
