import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    url: ''
}

export const refUrl = createSlice({
    name: 'ref',
    initialState,
    reducers: {
        setRefUrl: (state, action) => {
            state.url = action.payload
        }
    }
})

export const { setRefUrl } = refUrl.actions

export default refUrl.reducer