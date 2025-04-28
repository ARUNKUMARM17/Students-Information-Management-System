import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    regno:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:["admin","student","teacher"],
    },
    department:{
        type:String,
        required:true,
        enum:["CSE","ECE","MECH","CIVIL","EEE","AI-DS","AI-ML","MTS","FT","IT","CSD","EIE","AUTO"],
    },
    year:{
        type:String,
        required:true,
        enum:["1","2","3","4"],
    },

    

},{timestamps:true})
const User=mongoose.model("user",userSchema);

export default User;
