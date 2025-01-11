const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://chandankr:llat0LACLDK8fz3j@notes.6evbw.mongodb.net/Notebook"
const connectToMongo = async()=>{
  await mongoose.connect(mongoURI);
        console.log(`connected to mongoDB sucessfully ${mongoose.connection.host}`)
    }

module.exports = connectToMongo;