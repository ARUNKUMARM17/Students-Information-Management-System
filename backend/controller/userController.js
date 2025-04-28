import express from "express";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
export const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){

        res.status(401).json({message:"No user found for the given email"});
    }
    if(user){
        const checkPassword=await bcrypt.compare(password,user.password);
        if(!checkPassword){
            res.status(401).json({message:"Invalid password"});
        }
        if(checkPassword){
            res.status(200).json({message:"Login successful",user});
        }
    }

});
