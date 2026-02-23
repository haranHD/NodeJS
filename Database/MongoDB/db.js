
//This file is responsible the DB connection
//This how we connect to mongoDB using Mongoose
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/userDB")
.then(() =>{  // then() method returns a Promise that resolves when the connection is successful
    console.log("Connected to MongoDB")
})
.catch((err) =>{
    console.log("Error connecting to MongoDB:", err)
})