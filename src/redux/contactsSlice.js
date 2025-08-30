import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './contactsOps'

const contactsInitialState = {
    items: [],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: builder =>
        builder
            // fetchContacts
            .addCase(fetchContacts.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // addContact
            .addCase(addContact.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false
                state.items.push(action.payload)
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // deleteContact
            .addCase(deleteContact.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false
                state.items = state.items.filter(
                    contact => contact.id !== action.payload
                )
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            }),
})

export const contactsReducer = contactsSlice.reducer
