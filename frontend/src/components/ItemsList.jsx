import React, { useEffect, useState } from "react";
import { getItems,createItems,updateItems,deleteItems } from "../services/api";

const ItemsList = () =>{
    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [editingId,setEditingId] = useState(null)

    useEffect(() => {
        loadItems();
    },[])

    const loadItems = async () => {
        const data = await getItems();
        setItems(data)
    }

    const handleCreate = async () => {
        const newItem = {name,description};
        await createItems(newItem)
        loadItems()
        setName('');
        setDescription('');
    }

    const handleEdit = (item) => {
        console.log("editing item with ID", item._id)
        setEditingId(item._id)
        setName(item.name)
        setDescription(item.description)
    }

    const handleUpdate = async () => {
        const updateItem = {name, description}
        await updateItems(editingId, updateItem)
        loadItems()
        setEditingId(null)
        setName('');
        setDescription('');
    }

    const handleDelete = async (id) => {
        await deleteItems(id)
        loadItems()
        setName('');
        setDescription('');
    }




    return(   
        <div className="container">
            <h1 className="text-center my-4">Todo List</h1>
            <div className="d-flex flex-column justify-content-between align-items-start gap-3">
            <div className="mb-3 w-100">
                <label htmlFor="Name" className="form-label">Name:</label>
                <input 
                type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3 w-100">
                <label htmlFor="Description" className="form-label">Description:</label>
                <input type="textarea"  className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                {editingId ? (
                    <button type="button" className="btn btn-primary"onClick={handleUpdate}>Update it</button>
                ):(
                    <button type="button" className="btn btn-primary"onClick={handleCreate}>Add it</button>
                )}
            </div>
            </div>
            <div className="mt-4">
            <ul className="list-group">
                {items.map(item => (
                <li className="list-group-item d-flex justify-content-between align-items-center gap-2" key={item._id}>
                    <div className="lh-md">
                        <p className="mb-1 fw-bold">{item.name}</p>
                        <p className="mb-0">{item.description}</p>
                    </div>
                    <div className="d-flex gap-2">
                        <button type="button" className="btn btn-danger btn-sm" onClick={()=>handleEdit(item)}>Edit</button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default ItemsList