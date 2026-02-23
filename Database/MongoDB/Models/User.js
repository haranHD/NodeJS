const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
    name : String,
    email : String
})

module.exports = mongoose.model('User', userSchema); //this is how you can export the model to use it in other files
//here in the parameter we have 2 agruments first is the name of the model and second is the schema we created for that model