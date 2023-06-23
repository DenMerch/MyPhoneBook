import { createSlice } from "@reduxjs/toolkit";
import { filterInitial } from "./initialState";

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitial,
    reducers: {
        filterContacts(state, action) {
            return state = action.payload
        }
    }
})
export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer