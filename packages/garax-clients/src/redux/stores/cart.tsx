import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem } from '../../interfaces/cartItem'

interface CartState {
  items: CartItem[];
  // totalQuantity?: number;
}

const initialState: CartState = {
  items: [],
  // totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCarts(state, action: PayloadAction<CartItem>) {
      const { 
        productId, 
        title,
        alias,
        productCode,
        desc,
        detail,
        img,
        originalPrice,
        price,
        priceSale,
        quantity,
        titleCategory
      } = action.payload;
      state.items.push({ 
        productId, 
        title,
        alias,
        productCode,
        desc,
        detail,
        img,
        originalPrice,
        price,
        priceSale,
        quantity,
        titleCategory
       });
    },
  },
});

export const { addToCarts } = cartSlice.actions
export default cartSlice.reducer;
