import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
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
        enum:["admin","student","staff"],
        default:"student",
    },
    department:{
        type:String,
        required: function() {
            return this.role !== 'admin'; // Required only for non-admin users
          },
      
    },

    
    




    

},{timestamps:true})
const User=mongoose.model("User",userSchema);

export default User;
