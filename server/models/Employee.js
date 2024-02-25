const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,

        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true,

        },
       
        password:{
            type:String,
            required:[true,"Password is required"],
            unique:true,
            min:[6,"Password should be greater than 6 character"],

        },
        refreshToken:{
            type:String
        }

    }
    ,{timestamps:true})

const User = mongoose.model("User",userSchema)
module.exports = User