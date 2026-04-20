import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
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
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;