const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const bodyParser = require('body-parser')
const db = require ('./config/db.config')
const user = require ('./model/user')

dotenv.config({path: './config/config.env'})
db()

const app = express()

//middleware to bodyparser to decode the comming json body
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

// Route to register
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/register.html');
  });

app.post('/register',async (req, res) => {
    console.log("bodyfrom regist", req.body)
    const {username, password, email} = req.body 
    try{
        const response = await user.create({
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

const PORT = process.env.PORT
app.listen(PORT, console.log(`MongoDB running on port ${PORT}`))