import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    array: []
}

export const errorImagesSlice = createSlice({
    name: 'errorImages',
    initialState,
    reducers: {
        setErrorImages: (state, action) => {
            state.array = action.payload
        }
    }
})

export const { setErrorImages } = errorImagesSlice.actions

export default errorImagesSlice.reducer