import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice/cartSlice"
import { saveCartToCookies } from "./CartSlice/cookies";
import { saveWishlistToCookies } from "./WishlistSlice/wishlistCookie";
import wishlistReducer from "./WishlistSlice/WishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer
  }
});

store.subscribe(() => {
  const state = store.getState();
  saveCartToCookies(state.cart.items);
    saveWishlistToCookies(state.wishlist.items);
});
export default store;