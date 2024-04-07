const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("auth.js");
});

// USING PROMISES
// router.post("/register", (req, res) => {
//   const { name, phone, email, password, cpassword } = req.body;

//   if (!name || !phone || !email || !password || !cpassword) {
//     return res.status(422).json({ error: "fill the all fields!" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ message: "already registered" });
//       }
//       const user = new User({ name, phone, email, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered" });
//         })
//         .catch((err) => {
//           consol.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// USING ASYNC-AWAIT
router.post("/register", async (req, res) => {
  const { name, phone, email, password, cpassword } = req.body;

  if (!name || !phone || !email || !password || !cpassword) {
    return res.status(422).json({ error: "fill the all fields!" });
  }

  try {
    // to check if user exists
    const userExist = await User.findOne({ email: email }); // we will put await from where we are getting the email
    // a promise(.then()) or data

    if (userExist) {
      return res.status(422).json({ message: "user already exists!" });
    }

    const user = new User({ name, phone, email, password, cpassword });

    const userRegister = await user.save(); // save user data for registration

    if (userRegister) {
      res.status(201).json({ message: "Registered" });
    } else {
      res.status(500).json({ message: "failed registration" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "Please fill all fields " });
    }

    const userLogin = await User.findOne({ email: email }); // first email is from databas and 2nd email
    // is from the req.body

    if (!userLogin) {
      res.json({ err: "not registered" });
    } else {
      res.json({ message: "signned in successfully" });
      console.log(userLogin);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
