import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },

    description:{
        type:String,
    },

    date:{
        type: Date,
        default: Date.now
    }

})

export const Items = mongoose.model('Items',ItemSchema)