import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    pagetitle: 'Dashboard'
}

export const accountAreaSlice = createSlice({
    name: 'accountArea',
    initialState,
    reducers: {
        setPageTitle: (state, action) => {
            state.pagetitle = action.payload
        }
    }
})

export const { setPageTitle } = accountAreaSlice.actions

export default accountAreaSlice.reducer