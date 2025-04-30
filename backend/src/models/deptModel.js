import mongoose from "mongoose";
import { Schema } from "mongoose";
const deptSchema=new Schema({
    deptName:{
        type:String,
        required:true,
    },
    students:[{
        type:Schema.Types.ObjectId,
        ref:"User",
    }],


},{
    timestamps:true,
})
export default mongoose.model("Dept",deptSchema);
