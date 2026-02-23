const express = require('express');

//this express gives us an app
const app = express()


//Middleware
app.use((req, res, next) =>{
    console.log("Request URL : " , req.url)
    next();
})


//This are know as Request Handlers 
//GET method
app.get('/', (req,res) =>{
    res.status(200).send("Hello Haran!");
})

//POST method

app.post('/post', (req,res) =>{
    res.status(200).send("Hello from POST!..")
})


//MiddleWare 
app.use((req, res, next) =>{
    res.status(404).send("404 Page not Found")
})

app.listen(5000 , () => {
    console.log("Express port on 5000");
})