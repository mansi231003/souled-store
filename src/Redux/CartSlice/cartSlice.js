import { createSlice } from "@reduxjs/toolkit";
import { loadCartFromCookies } from "./cookies";

const initialState = {
  items: loadCartFromCookies(),
  isCartOpen: false,
  isSidebarOpen: false,
  sidebarType:"men"
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    openSidebar: (state,action) => {
      state.isSidebarOpen = true;
       state.sidebarType = action.payload;
    },

    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },

    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },

    openCart: (state) => {
      state.isCartOpen = true;
    },

    closeCart: (state) => {
      state.isCartOpen = false;
    },

    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

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
  updateSize,
  openCart,
  closeCart,
  toggleCart,
  openSidebar,
  closeSidebar,
  toggleSidebar
} = cartSlice.actions;

export default cartSlice.reducer;