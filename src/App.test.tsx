import {render, screen} from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders <App /> component", () => {
    render(<App />);
    const divElement = screen.getByTestId("App.Container");
    expect(divElement).toBeInTheDocument();
  });

  it("should contains paragraph", () => {
    render(<App />);
    const pElement = screen.getByText(/App Component/i);
    expect(pElement).toBeInTheDocument();
  });
});
