import express from "express";
import {loginUser} from "../controller/userController.js";
const userRouter=express.Router();
userRouter.post('/login',loginUser);
 export default userRouter;
