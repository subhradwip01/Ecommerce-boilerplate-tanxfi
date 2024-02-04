import { createSlice } from "@reduxjs/toolkit";
import {logout} from "./authSlice";
const INITIAL_STATE = {
    totalPrice:0,
    totalQuantity:0,
    products:[]
}

const cartSlice = createSlice({
    name:"product",
    initialState:INITIAL_STATE,
    reducers:{
        addProduct:(state,action)=>{
            const {product} = action.payload;
            const findProductIndex = state.products.findIndex(pdt=>pdt.productDetails.id.toString()===product.id.toString());
            if(findProductIndex>=0){
                state.products[findProductIndex].quantity+=1;
            }else{
                state.products.push({
                    productDetails:product,
                    quantity:1
                })
            }
            // As it is increamenting by one only just add the price
            state.totalPrice +=  Number(product.amount);
            // also need to update the total quantity
            state.totalQuantity+=1;
            localStorage.setItem("cartInformation",JSON.stringify(state));
            return state;
        },
        removeProduct:(state,action) =>{
            const {productId} = action.payload;
            console.log(typeof productId);
            const findProductIndex = state.products.findIndex(pdt=>pdt.productDetails.id===productId);
            console.log(findProductIndex);
            let amount = 0;
            if(findProductIndex>=0){
                const quantity = state.products[findProductIndex].quantity;
                amount = state.products[findProductIndex].productDetails.amount;
                console.log(findProductIndex);
                if(quantity==1){
                    state.products.splice(findProductIndex,1);
                }else{
                    state.products[findProductIndex].quantity-=1;
                }
                state.totalPrice-=amount;
                state.totalQuantity-=1;
                localStorage.setItem("cartInformation",JSON.stringify(state));
            }else{
                throw Error("No such product found in the Cart")
            }
            return state;
        },
        clearCart:(state,action)=>{
            localStorage.removeItem('cartInformation');
            return INITIAL_STATE;
        },
        initialStateSet:(state,action)=>{
            const {cartInformation} = action.payload;
            state = cartInformation;
            return state;
        }
    },
    extraReducers: builder => {
        builder.addCase(logout.type,(state,action)=>{
            localStorage.removeItem('cartInformation');
            return INITIAL_STATE;
        })
    }
})

export const {addProduct,removeProduct,initialStateSet, clearCart} = cartSlice.actions

export default cartSlice.reducer;