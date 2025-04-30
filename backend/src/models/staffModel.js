import mongoose from "mongoose";
import { Schema } from "mongoose";
const staffSchema=new Schema({
    staff:{
        type:Schema.types.ObjectId,
        ref:"User",
    },
    courses:[{
        type:Schema.types.ObjectId,
        ref:"Course",
    }],

});
export default mongoose.model("Staff",staffSchema);
    
