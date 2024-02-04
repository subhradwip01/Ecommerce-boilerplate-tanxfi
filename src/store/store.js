import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./slice/cartSlice";
import userReducer from "./slice/authSlice";
export default configureStore({
  reducer: {
    cart:cartReducer,
    user:userReducer
  },
})