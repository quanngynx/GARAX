import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

interface PrimaryKeyProductState {
  productId: number;
}

const initialState: PrimaryKeyProductState = {
    productId: 0,
};

const primaryKeyProductSlice = createSlice({
  name: "primaryKeyProduct",
  initialState,
  reducers: {
    setPrimaryKeyProduct: (state: PrimaryKeyProductState, action: PayloadAction<number>) => {
      state.productId = action.payload;
    },
  },
});

export const { setPrimaryKeyProduct } = primaryKeyProductSlice.actions;
export default primaryKeyProductSlice.reducer;