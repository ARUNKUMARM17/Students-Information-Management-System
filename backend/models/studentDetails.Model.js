import { Schema } from "mongoose";
export default studentDetailsSchema=new Schema(
    {
        student:{
            type:Schema.Types.ObjectId,
            ref:"user",
        },
        rollno:{
            type:String,
            required:true,
            unique:true,
        },
        department:{
            type:Schema.Types.ObjectId,
            ref:"Dept",
        },
        Batch:{
            type:String,
            required:true,
        },
        Year:{
            type:String,
            required:true,
        },
        Semester:{
            type:String,
            required:true,
        },
        SSLC_Percentage:{
            type:Number,
            required:true,
        },
        HSC_Percentage:{
            type:Number,
            required:true,
            
        },
        CGPA:{
            type:Number,
            required:true,
        },
        Backlogs:{
            type:Number,
            required:true,
        },

        




        

        
    }
)
