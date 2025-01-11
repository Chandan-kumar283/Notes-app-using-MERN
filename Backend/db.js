const mongoose = require('mongoose')
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

console.log(`MongoDB URI: ${process.env.MONGO_URI.replace(/:\/\/.*@/, '://***:***@')}`);
;

const connectToMongo = async()=>{
  await mongoose.connect(mongoURI);
        console.log(`connected to mongoDB sucessfully ${mongoose.connection.host}`)
    }

module.exports = connectToMongo;