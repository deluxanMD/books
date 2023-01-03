import {screen} from "@testing-library/react";
import App from "./App";
import {renderWithProviders} from "./utils/test-utils";

describe("<App />", () => {
  it("renders <App /> component", () => {
    renderWithProviders(<App />);
    const divElement = screen.getByTestId("App.Container");
    expect(divElement).toBeInTheDocument();
  });

  it("should contains paragraph", () => {
    renderWithProviders(<App />);
    const pElement = screen.getByText(/App Component/i);
    expect(pElement).toBeInTheDocument();
  });
});
