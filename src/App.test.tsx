import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

test("renders <App /> component", () => {
  render(<App />);
  const divElement = screen.getByTestId("App.Container");
  expect(divElement).toBeInTheDocument();
});

test("should contains paragraph", () => {
  render(<App />);
  const pElement = screen.getByText(/App Component/i);
  expect(pElement).toBeInTheDocument();
});
