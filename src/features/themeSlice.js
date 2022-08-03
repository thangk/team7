import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    current: 'white'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.current = action.payload
        }
    }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer