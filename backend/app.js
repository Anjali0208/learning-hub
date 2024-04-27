const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" }); // need to declare once in your global file
const PORT = process.env.PORT;

// to use conn.js content
require("./db/conn");

// a middleware that converts json data into object format
app.use(express.json());

app.use(require("./route/auth"));

// const User = require("./model/userSchema");

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
