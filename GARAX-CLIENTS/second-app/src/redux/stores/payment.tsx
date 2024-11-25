import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "infoPayment",
  initialState: {
    items: [],
    // totalQuantity: 0,
  },
  reducers: {
    addToInfoPayment(state, action) {
      const {
        fullName,
        codeOrder,
        email,
        phoneNumber,
        address,
        totalAmount,
        quantity,
        typePayment,
      } = action.payload;
      state.items.push({
        fullName,
        codeOrder,
        email,
        phoneNumber,
        address,
        totalAmount,
        quantity,
        typePayment,
      });
    },
  },
});

export const { addToInfoPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
