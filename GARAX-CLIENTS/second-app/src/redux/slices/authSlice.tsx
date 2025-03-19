import { AccountInfo } from '@/api/models';
import { localStorageService } from '@/utils';
import { createSlice, PayloadAction, Slice, } from '@reduxjs/toolkit';
import { RootState } from '../stores';

export interface AuthState {
  accessToken: string | null;
  accountGeneralInfo: AccountInfo | null;
  isLoggedIn: boolean
  fetchingInfo: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  accountGeneralInfo: null,
  isLoggedIn: false,
  fetchingInfo: false,
};

const authSlice: Slice<
AuthState,
{
  setAccessToken: (
    state: AuthState,
    action: PayloadAction<string>,
  ) => void;

  setFetchingInfo: (
    state: AuthState,
    action: PayloadAction<boolean>,
  ) => void;

  setAccountInfo: (
    state: AuthState,
    action: PayloadAction<AccountInfo>,
  ) => void;
 
  login: (state: AuthState) => void;
  logout: (state: AuthState) => void;
  removeAuthState: (state: AuthState) => void;
},
'auth'
> = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state: AuthState, action: PayloadAction<string>) {
      state.accessToken = action.payload;

      localStorageService.set(
        'accessToken',
        action.payload,
      );
    },

    setFetchingInfo(state: AuthState, action: PayloadAction<boolean>) {
      state.fetchingInfo = action.payload;
    },

    setAccountInfo(
      state: AuthState,
      action: PayloadAction<AccountInfo>,
    ) {
      state.accountGeneralInfo = { ...action.payload };
    },

    login(state: AuthState) {
      state.isLoggedIn = true;
    },

    logout(state: AuthState) {
      state.isLoggedIn = false;
    },

    removeAuthState(state: AuthState) {
      state.accessToken = null;
      state.accountGeneralInfo = null;

      localStorageService.remove('accessToken');
    },
  },
});

export const {
  setAccessToken,
  setFetchingInfo,
  setAccountInfo,
  removeAuthState, 
  login, 
  logout 
} = authSlice.actions;

export const authReducer = authSlice.reducer;

export const selectIsAuthenticated = (state: RootState): boolean =>
  state.auth.accessToken !== null;

export const selectAccessToken = (state: RootState): string | null =>
  state.auth.accessToken;

export const selectAccountGeneralInfo = (
  state: RootState,
): AccountInfo | null => state.auth.accountInfo;

export const selectFetchingInfo = (state: RootState): boolean =>
  state.auth.fetchingInfo;

