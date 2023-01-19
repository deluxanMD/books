import {screen} from "@testing-library/react";
import {renderWithProviders} from "utils/test-utils";
import TopBar from "./top-bar.component";

describe("<TopBar/>", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    renderWithProviders(<TopBar />);
  });

  test("should render <TopBar/> component", () => {
    const header = screen.getByTestId("TopBar.Container");
    expect(header).toBeInTheDocument();
  });

  test("should render proper logo", () => {
    const logo = screen.getByTestId("AccountBalanceWalletIcon");
    expect(logo).toBeInTheDocument();
  });

  test("should render proper title", () => {
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText("EXPENSES").closest("a")).toHaveAttribute("href", "/");
  });
});
