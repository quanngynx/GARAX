import { createSlice } from "@reduxjs/toolkit";

interface SynchronousHeightState {
  valueSynchronous: string;
}

const initialState: SynchronousHeightState = {
  valueSynchronous: '100vh',
};

const synchronousHeighSlice = createSlice({
  name: "synchronousHeight",
  initialState,
  reducers: {
    handleSynchronousHeight: (state: { valueSynchronous: string; }) => {
      state.valueSynchronous = state.valueSynchronous;
    },
  },
});

export const { handleSynchronousHeight } = synchronousHeighSlice.actions;
export default synchronousHeighSlice.reducer;