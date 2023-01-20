import {screen} from "@testing-library/react";
import {renderWithProviders} from "utils/test-utils";
import App from "./App";

describe("<App />", () => {
  test("renders <App /> component", () => {
    renderWithProviders(<App />);
    const divElement = screen.getByTestId("App.Container");
    expect(divElement).toBeInTheDocument();
  });
});
