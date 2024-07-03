const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

},  
{
    timestamps:true
});

module.exports = mongoose.model("User",userSchema,"User");