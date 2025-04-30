import mongoose from "mongoose";
import { Schema } from "mongoose";
const deptSchema=new Schema({
    deptName:{
        type:String,
        required:true,
    },

})
export default mongoose.model("Dept",deptSchema);
