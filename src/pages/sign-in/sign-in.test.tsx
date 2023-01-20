import {screen} from "@testing-library/react";
import {renderWithProviders} from "utils/test-utils";
import SignIn from "./sign-in.component";

describe("<SignIn />", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    renderWithProviders(<SignIn />);
  });

  test("should render <SignIn /> component", () => {
    const divElement = screen.getByTestId("Page.SignIn");
    expect(divElement).toBeInTheDocument();
  });

  test("should render proper title", () => {
    const h4Element = screen.getByRole("heading", {level: 4});
    expect(h4Element).toHaveTextContent("Sign In");
  });

  test("should render sign in form", () => {
    const formElement = screen.getByTestId("Form.SignIn");
    expect(formElement).toBeInTheDocument();
  });

  test("should render loading button", () => {
    const buttonElement = screen.getByTestId("LoadingButton.Login");
    expect(buttonElement).toHaveTextContent("Sign in");
  });
});
