const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res
    .status(200)
    .json({ success: true, messge: "Successfully retrived user details" });
});

app.post("/user", (req, res) => {
  res
    .status(201)
    .json({ success: true, messge: "Successfully added new user" });
});

app.delete("/user", (req, res) => {
  res.status(200).json({ success: true, messge: "Successfully delted user" });
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
