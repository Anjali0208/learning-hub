const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

// database
const db = process.env.DATABASE;
//it returns a promise, so we use .then() to handle the promise returned from the
// server side and then return data if successful or an error message.
mongoose
  .connect(db)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("connection error: " + err);
  });

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/login", (req, res) => {
  res.send("login");
});

app.get("/register", (req, res) => {
  res.send("register");
});

app.get("/chatting", (req, res) => {
  res.send("chatting");
});

app.get("/profile", (req, res) => {
  res.send("profile");
});

app.listen(8080, () => {
  console.log("server listening on port");
});
