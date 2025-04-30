import express from "express";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import createToken from "../utils/createToken.js";
import bcrypt from "bcrypt";
export const registerUser=asyncHandler(async(req,res)=>{
    const{name,email,password,role,department}=req.body;
    const userExists=await User.findOne({email});
    if(!name || !email || !password || !role){
        res.status(400).json({message:"All fields are required"});
    }
    if(userExists){
        throw new Error("User already exists");
    };
    const hashedPassword=await bcrypt.hash(password,10);
    const user=new User({name,email,password:hashedPassword,role,department: role !== 'admin' ? department : undefined,
    });
    try{
        await user.save();
        createToken(res,user._id);
        res.status(201).json({message:"User Created Successfully"});
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});
    }

})
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
            createToken(res,user._id);

            res.status(200).json({message:"Login successful",user});
        }
    }

});
