const express = require('express');
const router = express.Router();
const user = require ('../model/user');

router.post('/register',async (req, res) => {
    console.log("body from register", req.body)
    const {username, password, email} = req.body 
    try{
        const response = await user.create ({
            username,
            password,
            email
        })
        console.log('user created', response)
    } catch(error){
        console.log(error)
        //alert("Username already exists!") add USERNAME ALREADY EXISTS
        return res.json({status:'error'})
    }

    res.json({status: 'ok'}) 
})


module.exports = router;