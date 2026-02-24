const express = require('express')
const router = express.Router() // this route is act as app here we can use route instead of app
const User = require('../Models/User') // Import the User modelue

// Create a new user POST /api/users
router.post('/', async(req, res) =>{
    // const data = req.body
    const user = new User(req.body)
    const savedUser = await user.save() // why await is used here because save() method returns a Promise that resolves to the saved user document
    res.status(201).json(savedUser)
})

//Get all users GET /api/users
router.get('/', async(req, res)=>{
    const users = await User.find();
    res.status(201).json(users);
})

//Get single user ID GET /api/users/:id
router.get('/:id' , async(req,res)=>{
    console.log(req.params.id) // here we are using req.params.id to get the ID from the URL
    const user = await User.findById(req.params.id) // here we are using findById() method to find the user by the ID
    if(!user){
        return res.status(404).json({
            message : "user not found"
        })
    }
    res.status(201).json(user);
})

//Update users PUT /api/users/:id
router.put('/:id', async(req, res)=>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new : true}) // here we are using findByIdAndUpdate() method to update the user by the ID /
    // and we are passing the new data in the request body and we are also passing the option {new : true} to return the updated user document
    res.status(201).json(user)
})

//Delete user DELETE /api/users/:id
router.delete('/:id', async(req,res) =>{
    await User.findByIdAndDelete(req.params.id)
    res.sendStatus(204);
})


module.exports = router; // this is how you can export the router to use it in other files
 