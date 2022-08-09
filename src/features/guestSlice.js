import { createSlice } from '@reduxjs/toolkit'


// cart is array of 
/*

    {
        watchId: 3,
        qty: 3
    }

    objects

*/

const initialState = {
    cart: [
        {
            watchId: 11,
            qty: 2
        },
        {
            watchId: 15,
            qty: 2
        },
        {
            watchId: 18,
            qty: 1
        }
    ]
}

export const guestSlice = createSlice({
    name: 'guest',
    initialState,
    reducers: {
        addToCart: (state, action) => [...state.cart, action.payload],

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.watchId !== action.payload)
        },

        incrementCartItem: (state, action) => {
            
            state.cart.map(item => item.watchId === action.payload ? {...item, qty: item.qty++} : item)
        },
        decrementCartItem: (state, action) => {
            state.cart.forEach(item => {
                if (item.watchId === action.payload) {
                    item.qty--
                }
            })
        },
        resetCart: (state) => {
            state.cart = []
        },

        getCount: (state) => {
            let itemCount = 0

            for (const item of state.cart) {
                itemCount += item.qty
            }

            console.log(state.cart)

            return itemCount
        }
    }
})

export const { addToCart, removeFromCart, incrementCartItem, decrementCartItem, resetCart, getCount } = guestSlice.actions

export default guestSlice.reducer

