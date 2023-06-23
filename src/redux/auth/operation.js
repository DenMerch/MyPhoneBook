import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = 'https://test4-jq2r.onrender.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};


export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        // const { data } = await axios.post('/users/signup', credentials);
        const { data } = await axios.post('/users/register', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.unset();
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        console.log("get");
        if (!persistedToken) {
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');;
            return data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);