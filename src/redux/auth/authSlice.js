import { createSlice } from '@reduxjs/toolkit';

import { getUser, logIn, logOut, register } from './operation';

const initialState = {
    token: '',
    isLoggedIn: false,
    error: '',
    isRefreshing: false,
    user: { name: '', email: '' }
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state) {
            state.user = initialState.user;
            state.token = null;
            state.isLoggedIn = false;
        },
        [getUser.pending](state) {
            state.isRefreshing = true;
        },
        [getUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [getUser.rejected](state) {
            state.isRefreshing = false;
        },

    }
})

export const authReducer = authSlice.reducer


