import { createSlice } from "@reduxjs/toolkit";
import { loadCartFromCookies } from "./cookies";

const initialState = {
  items: loadCartFromCookies()
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        i =>
          i.product_id === item.product_id &&
          i.size === item.size &&
          i.color === item.color
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },

    updateSize: (state, action) => {
      const { id, size } = action.payload;

      const item = state.items.find(i => i.id === id);
      if (item) {
        item.size = size;
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  updateSize
} = cartSlice.actions;

export default cartSlice.reducer;