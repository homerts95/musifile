const express = require("express");
const router = express.Router();
const user = require("../model/user");

router.post("/register",async  (req, res) => {
  const { username, password, email } = req.body;
  console.log("body from register", req.body);
  try {
    const response = await user.create({
      username,
      password,
      email,
    });
    console.log("user created", response);
  } catch (error) {
    if (error.code == 11000) {
      console.log(error);
      console.log(`Error : ${JSON.stringify(error)}`);
      return res.json({ status: "error", error: "Username already exists" });
    }

    //alert("Username already exists!") add USERNAME ALREADY EXISTS

    //UNDERSTAND WHY THIS IS NOT WORKING ON INSPECT ELEMENTS
    return res.json({ status: "error" });
  }

  res.json({ status: "ok" });
});

module.exports = router;
