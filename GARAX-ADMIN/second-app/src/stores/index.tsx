import { configureStore } from '@reduxjs/toolkit';
// import { authReducer } from '../slices';
// import cartReducer from './cart';
// import counterReducer from '../slices/counterSlice'
import sidenavReducer from "./slices/sidenavSlice";

export const store = configureStore({
    reducer: {
        // cart: cartReducer,
        // counter: counterReducer,
        // . . . user,
        // auth: authReducer,
        sidenav: sidenavReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch