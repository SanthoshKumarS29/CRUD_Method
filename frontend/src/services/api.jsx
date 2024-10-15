import axios from 'axios';

const API_URL = 'http://localhost:1000/api//items';

export const getItems = async() => {
    const response = await axios.get(`${API_URL}/get`)
    return response.data;
}

export const createItems = async(item) => {
    const response = await axios.post(`${API_URL}/post`, item)
    return response.data
}

export const updateItems = async(id, item) => {
    const response = await axios.put(`${API_URL}/update/${id}`,item)
    return response.data
}

export const deleteItems = async(id) => {
    const response = await axios.delete(`${API_URL}/delete/${id}`)
    return response.data
}