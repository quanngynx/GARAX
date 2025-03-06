import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cart';
// import counterReducer from '../slices/counterSlice'

export const store = configureStore({
    reducer: {
        // cart: cartReducer,
        // counter: counterReducer,
        // . . . user,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch