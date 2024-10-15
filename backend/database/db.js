import mongoose from "mongoose";

const connectDb = async (req,res) =>{
    try {
        await mongoose.connect(process.env.DB)
        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb