import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./slice/cartSlice";
import userReducer from "./slice/authSlice";
import favoriteReducer from "./slice/favouriteSlice";
export default configureStore({
  reducer: {
    cart:cartReducer,
    user:userReducer,
    favourite:favoriteReducer
  },
})