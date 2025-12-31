const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("this is test");
});

app.use("/hello", (req, res) => {
  res.send("this is hello");
});
app.listen(3000, () => {
  console.log("Server is up and running");
});
