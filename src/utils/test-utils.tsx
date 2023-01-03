import React, {PropsWithChildren} from "react";
import {render, RenderOptions} from "@testing-library/react";
import {configureStore, PreloadedState} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
// As a basic setup, import your same slice reducers
import authReducers from "../store/auth/authSlice";
import {AppStore, RootState} from "../store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {auth: authReducers},
      preloadedState
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({children}: PropsWithChildren<{}>) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
