import { createSlice } from "@reduxjs/toolkit";

interface SidenavState {
  isCollapsed: boolean;
}

const initialState: SidenavState = {
  isCollapsed: false,
};

const sidenavSlice = createSlice({
  name: "sidenav",
  initialState,
  reducers: {
    toggleSidenav: (state: { isCollapsed: boolean; }) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { toggleSidenav } = sidenavSlice.actions;
export default sidenavSlice.reducer;