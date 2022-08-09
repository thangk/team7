import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    current: null
}

export const loggedInUser = createSlice({
    name: 'loggedInUser',
    initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.current = action.payload
        }
    }
})

export const { setLoggedInUser } = loggedInUser.actions

export default loggedInUser.reducer