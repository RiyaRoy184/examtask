import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchProducts = createAsyncThunk("recipes/fetchProducts",async ()=>{
    const result = await axios.get("https://dummyjson.com/recipes")
    sessionStorage.setItem("allProducts",JSON.stringify(result.data.recipes))
    return result.data.recipes
})

const productSlice = createSlice({
    name:'recipes',
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        loading:false,
        errorMsg:""
    },
    reducers:{
       searchProduct :(state,actionByHeader)=>{
        state.allProducts =  state.dummyAllProducts.filter(item=>item.cuisine.toLowerCase().includes(actionByHeader.payload))
       }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state.dummyAllProducts=apiResult.payload
            state.loading=false
            state.errorMsg=""
        })
        builder.addCase(fetchProducts.pending,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]
            state.loading=true
            state.errorMsg=""
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]
            state.loading=false
            state.errorMsg="API call failed"
        })
    }
})
export const {searchProduct} = productSlice.actions
export default productSlice.reducer