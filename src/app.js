const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("First route handler");
    res.status(200).send("This is the first route handler");
    next();
  },
  (req, res, next) => {
    console.log("Second route handler");
    res.send("second request handler");
    // next();
  },
  (req, res, next) => {
    console.log("third route handler");
    // next();
    res.status(200).send("This is the third route handler");
  }
);

app.listen(3000, () => {
  console.log("Server is up and running");
});
