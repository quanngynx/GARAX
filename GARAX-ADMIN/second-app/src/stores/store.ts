// import { AnyAction, ThunkMiddleware, configureStore } from '@reduxjs/toolkit';
// import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

// import {
//   IdentityState,
//   identityReducer,
// } from '../features/identity/identity.slice';
// import { UiSettingsState, uiSettingsReducer } from '../features/uiSettings';

// export const store: ToolkitStore<
//   {
//     identity: IdentityState;
//     uiSettings: UiSettingsState;
//   },
//   AnyAction,
//   [
//     ThunkMiddleware<{
//       identity: IdentityState;
//       uiSettings: UiSettingsState;
//     }>,
//   ]
// > = configureStore({
//   reducer: {
//     identity: identityReducer,
//     uiSettings: uiSettingsReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
