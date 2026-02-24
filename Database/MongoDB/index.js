const express = require('express')
const db = require('./db') // Import the database connection
const app = express()

const userRoutes = require('./Routes/users') // Import user routes

app.use(express.json()) // Middleware to parse JSON request bodies

//User routes:
app.use('/api/users', userRoutes); //here we are using use() middleware to mount the user routes at the path /api/users 

app.get('/' , (req , res) =>{
    res.send("Hello World");
})
app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})