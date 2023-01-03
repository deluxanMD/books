import {combineReducers, configureStore, PreloadedState} from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  auth: authReducer
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
