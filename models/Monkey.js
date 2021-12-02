const mongoose = require("mongoose") 
MonkeySchema = mongoose.Schema({name: String, color: String, weight: {type:Number,min:20,max:100} }) 
 
module.exports = mongoose.model("Monkey", MonkeySchema) 