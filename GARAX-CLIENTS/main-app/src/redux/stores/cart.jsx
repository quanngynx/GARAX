import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    // totalQuantity: 0,
  },
  reducers: {
    addToCarts(state, action) {
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
