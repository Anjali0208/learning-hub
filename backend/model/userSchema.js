const mongoose = require("mongoose");
const bcrpt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});

// here we are hashing the password

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrpt.hash(this.password, 12);
    this.cpassword = await bcrpt.hash(this.cpassword, 12);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
