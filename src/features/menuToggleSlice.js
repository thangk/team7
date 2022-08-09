import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    isOpen: false
}

export const menuToggleSlice = createSlice({
    name: 'menuToggle',
    initialState,
    reducers: {
        toggleMenu: (state, action) => {
            // state.isOpen = action.payload ? false : true
        }
    }
})

export const { toggleMenu } = menuToggleSlice.actions

export default menuToggleSlice.reducer