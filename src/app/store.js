import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import themeReducer from '../features/themeSlice'
import accountAreaReducer from '../features/accountAreaSlice'
import loggedInUserReducer from '../features/loggedInUserSlice'
import errorImagesReducer from '../features/errorImagesSlice'
import menuToggleReducer from '../features/menuToggleSlice'
import cartReducer from '../features/cartSlice'
import guestReducer from '../features/guestSlice'
import refReducer from '../features/refSlice'

const rootReducer = combineReducers({
    theme: themeReducer,
    accountArea: accountAreaReducer,
    loggedInUser: loggedInUserReducer,
    errorImages: errorImagesReducer,
    menuToggle: menuToggleReducer,
    cart: cartReducer,
    guest: guestReducer,
    ref: refReducer
})


const persistConfig = {
    key: 'root',
    storage
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})



export const persistor = persistStore(store)