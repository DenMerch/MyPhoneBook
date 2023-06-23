import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";
axios.defaults.baseURL = 'http://localhost:9000';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/api/contacts');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contacts, thunkAPI) => {
        try {
            const response = await axios.post('/api/contacts', contacts);
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/api/contacts/${contactId}`);
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const correctContact = createAsyncThunk(
    'contacts/correctContact',
    async ({ id, name, number }, thunkAPI) => {
        try {
            const response = await axios.patch(`/api/contacts/${id}`, { name, number });
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)