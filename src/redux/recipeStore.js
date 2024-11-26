import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'

const recipeStore = configureStore({
    reducer:{
        productReducer : productSlice  
     }
})

export default recipeStore