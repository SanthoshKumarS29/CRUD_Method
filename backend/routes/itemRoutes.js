import express from "express"
import { createItem, deleteItems, getItem, updateItems } from "../controllers/crudController.js"

const router = express.Router()

router.post ('/items/post', createItem) //Create items
router.get ('/items/get', getItem) //Get Items
router.put ('/items/update/:id',updateItems) //update items
router.delete('/items/delete/:id', deleteItems)

export default router
