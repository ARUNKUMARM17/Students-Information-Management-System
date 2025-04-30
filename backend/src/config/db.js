import mongoose from "mongoose";
const ConnectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb is connected succesfully 👌`);

    }catch(error){
        console.log(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default ConnectDb;
