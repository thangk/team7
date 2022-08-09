import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    numOfItems: 5
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setNumOfCartItems: (state, action) => {
            state.numOfItems = action.payload
        },
        incrementCartItem: (state) => {
            state.numOfItems++
        },
        decrementCartItem: (state) => {
            state.numOfItems--
        }
    }
})

export const { setNumOfCartItems, incrementCartItem, decrementCartItem } = cartSlice.actions

export default cartSlice.reducer