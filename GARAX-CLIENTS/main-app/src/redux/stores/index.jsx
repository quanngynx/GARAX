import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import counterReducer from '../slice/counterSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // counter: counterReducer,
        // . . . user,
    }
})