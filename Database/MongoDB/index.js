const express = require('express')
const db = require('./db') // Import the database connection
const app = express()
const User = require('./Models/User') // Import the User model

app.use(express.json()) // Middleware to parse JSON request bodies

//User routes:
// Create a new user
app.post('/api/users', async(req, res) =>{
    const data = req.body
    const user = new User(req.body)
    const savedUser = await user.save() // why await is used here because save() method returns a Promise that resolves to the saved user document
    res.status(201).json(savedUser)
})
 

app.get('/' , (req , res) =>{
    res.send("Hello World");
})
app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})