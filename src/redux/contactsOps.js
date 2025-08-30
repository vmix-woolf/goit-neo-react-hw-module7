import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contactData, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contactData)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${id}`)
            return id
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
