import { createSlice } from "@reduxjs/toolkit";
import {logout} from "./authSlice";
const INITIAL_STATE = {
    products:[]
}

const favoriteSlice = createSlice({
    name:"favourite",
    initialState:INITIAL_STATE,
    reducers:{
        addProduct:(state,action)=>{
            const {product} = action.payload;
            const findProductIndex = state.products.findIndex(pdt=>pdt.id.toString()===product.id.toString());
            if(findProductIndex>=0){
                return;
            }else{
                state.products.push(product)
            }
            return state;
        },
        removeProduct:(state,action) =>{
            const {productId} = action.payload;
            const findProductIndex = state.products.findIndex(pdt=>pdt.id===productId);
            if(findProductIndex>=0){
                state.products.splice(findProductIndex,1);
            }else{
                throw Error("No such product found in the Cart")
            }
            return state;
        },
        clearFavorites:(state,action)=>{
            return INITIAL_STATE;
        },
        initialFavoritesStateSet:(state,action)=>{
            const {favoriteProductInformation} = action.payload;
            console.log(favoriteProductInformation);
            state.products = favoriteProductInformation;
            return state;
        }
    },
    extraReducers: builder => {
        builder.addCase(logout.type,(state,action)=>{
            return INITIAL_STATE;
        })
    }
})

export const {addProduct,removeProduct,initialFavoritesStateSet, clearCart} = favoriteSlice.actions

export default favoriteSlice.reducer;