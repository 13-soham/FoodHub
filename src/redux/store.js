import { configureStore } from '@reduxjs/toolkit';
import  CartSlice  from './features/AddtoCart';


export const store = configureStore({
    reducer : {
        cart : CartSlice
    }
});