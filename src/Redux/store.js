import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice/cartSlice"
import { saveCartToCookies } from "./CartSlice/cookies";
const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

store.subscribe(() => {
  const state = store.getState();
  saveCartToCookies(state.cart.items);
});
export default store;