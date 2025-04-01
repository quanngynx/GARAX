import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../slices';
import primaryKeyProductReducer from "../slices/primaryKeyProductSlice";
// import cartReducer from './cart';
// import counterReducer from '../slices/counterSlice'

export const store = configureStore({
    reducer: {
        // cart: cartReducer,
        // counter: counterReducer,
        // . . . user,
        primaryKeyProduct: primaryKeyProductReducer,
        auth: authReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;