import { createSlice } from "@reduxjs/toolkit";

interface InfoPaymentProps {
  fullName: string;
  codeOrder: string;
  email: string;
  phoneNumber: string;
  address: string
  totalAmount: string;
  quantity: number;
  typePayment: string;
}

interface PaymentState {
  items: InfoPaymentProps[];
}

const initialState: PaymentState = {
  items: [],
};

const paymentSlice = createSlice({
  name: "infoPayment",
  initialState: initialState,
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
