import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "./initialState";
import { fetchContacts, addContact, deleteContact } from "./apiContacts";
import { handleDelete, handleFulfilled, handlePending, handleRejected, handleUpdate } from "./contactsService";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, handleFulfilled)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, handleUpdate)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, handleDelete)
            .addCase(deleteContact.rejected, handleRejected)
    }
})

export const contactsReducer = contactsSlice.reducer