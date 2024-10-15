import {Items} from "../models/table.js"


// Create The items
export const createItem = async (req,res) =>{
    try {
        const newItems = new Items(req.body)
        const savedItem = await newItems.save()
        res.status(201).json(savedItem)
        
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

// Get the Items
export const getItem = async (req,res) => {
    try {
        const datas = await Items.find({});
        res.status(200).json(datas)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// Update The Items
export const updateItems = async (req,res) =>{
    try {
        const updateTheItems = await Items.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updateTheItems){
            return res.status(404).json({message:'item not found'})
        }
        res.status(200).json(updateTheItems)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// Delete The items
export const deleteItems = async (req,res) => {
    try {
        await Items.findByIdAndDelete(req.params.id)
        res.status(200).json({message:'Item Deleted'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}