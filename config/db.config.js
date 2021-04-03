const mongoose = require('mongoose');

const  db = async () => {
    try {
        conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log("Connected")
    } catch (err){
        console.log(err)
    }
}

module.exports = db