const mongoose = require("mongoose") 
MonkeySchema = mongoose.Schema({name: String, color: String, weight: Number }) 
 
module.exports = mongoose.model("Monkey", MonkeySchema) 