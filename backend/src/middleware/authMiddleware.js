import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
const authenticate=asyncHandler(async(req,res,next)=>{
    let token=req.cookies.jwt;
    if(token){
        try{    
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findById(decoded.userId).select("-password");
            next();
        }
        catch(error){
            throw new Error("Not authorized, invalid token");
        }
    }
    else{
        throw new Error("Not authorized, no token");
    }
});
const authadmin=asyncHandler(async(req,res,next)=>{
    if(req.user && req.user.role==="admin"){
        next();
    }
    else{
        throw new Error("Not authorized as an admin");
    }
});
export {authenticate,authadmin};

