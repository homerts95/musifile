const express = require("express");
const router = express.Router();
const user = require("../model/user");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("body from login:", req.body);

  try {
    const response = await user.findOne({ username, password });

    if (!response) {
      console.log("Not found");
      //res.status(201);
      res.send({
        message: "Wrong username / password",
      });
      console.log("Wrong username / password");
    }

    if (response) {
      console.log("success");
      res.status(200);
      res.send({
        message: "Successfully logged in",
      });
      console.log("Successfull login, User:",response);
    }

  } catch (error) {
    console.log(error);

    
    return res.json({ status: "error" });
    //alert("Username already exists!") add USERNAME ALREADY EXISTS

    //UNDERSTAND WHY THIS IS NOT WORKING ON INSPECT ELEMENTS
    //  return res.json({status:'error'})
  }
});
module.exports = router;
