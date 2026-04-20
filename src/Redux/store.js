import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice/cartSlice"

export default configureStore({
  reducer: {
    cart: cartReducer
  }
});