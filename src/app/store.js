import { combineReducers, configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/themeSlice'
import accountAreaReducer from '../features/accountAreaSlice'
import loggedInUserReducer from '../features/loggedInUserSlice'
import errorImagesSlice from '../features/errorImagesSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    theme: themeReducer,
    accountArea: accountAreaReducer,
    loggedInUser: loggedInUserReducer,
    errorImages: errorImagesSlice
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