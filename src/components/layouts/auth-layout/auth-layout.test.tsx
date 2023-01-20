import {screen} from "@testing-library/react";
import {renderWithProviders} from "utils/test-utils";
import AuthLayout from "./auth-layout.component";

describe("<AuthLayout/>", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    renderWithProviders(<AuthLayout />);
  });

  test("should render <AuthLayout/> component", () => {
    const mainEl = screen.getByTestId("Layout.Auth");
    expect(mainEl).toBeInTheDocument();
  });
});
