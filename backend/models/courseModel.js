import mongoose from "mongoose";
import { Schema } from "mongoose";
const courseSchema=new Schema(
    {
        courseName:{
            type:String,
            required:true,
        },
        courseCode:{
            type:String,
            required:true,
            unique:true,
        },
        students:[{
            type:Schema.Types.ObjectId,
            ref:"User",
        }],



    }
)
export default mongoose.model("Course",courseSchema);
