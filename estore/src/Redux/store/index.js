import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice";
import productSlice from "../Products/productSlice";


export const store = configureStore({
    reducer:{
        categoryReducer : categorySlice,
        pr : productSlice
    }
})