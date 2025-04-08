import { createSlice } from "@reduxjs/toolkit";

interface InfoServiceProps {
  fullName: string;
  codeOrder: string;
  email: string;
  phoneNumber: string;
  address: string
  totalAmount: string;
  quantity: number;
  typePayment: string;
}

interface ServiceState {
  items: InfoServiceProps[];
}

const initialState: ServiceState = {
  items: [],
};

const serviceSlice = createSlice({
  name: "infoService",
  initialState: initialState,
  reducers: {
    addToService(state, action) {
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

export const { addToService } = serviceSlice.actions;
export default serviceSlice.reducer;
