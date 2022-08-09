import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    current: 'white',
    test: 'false'
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