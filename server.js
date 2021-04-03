const express = require('express')
const dotenv = require('dotenv')
//const path = require('path')
//const bodyParser = require('body-parser')
const db = require ('./config/db.config')
//const user = require ('./model/user')
const cors = require('cors') //frontend to backend using axios and cors


dotenv.config({path: './config/config.env'})
db()

const app = express()
app.use(cors());
app.use(express.json());

//middleware to bodyparser to decode the comming json body
//app.use('/', express.static(path.join(__dirname, 'static')))
//app.use(bodyParser.json())

const userRoute = require('./routes/user')
app.use('/user',userRoute)

const PORT = process.env.PORT
app.listen(PORT, console.log(`MongoDB running on port ${PORT}`))

