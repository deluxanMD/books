import {fireEvent, prettyDOM, screen} from "@testing-library/react";
import FormWrapper from "components/form/form-wrapper.component";
import {useForm} from "react-hook-form";
import {renderWithProviders} from "utils/test-utils";
import PasswordField from "./password-field.component";

const FormTest = ({children}: any) => {
  const methods = useForm({
    resolver: () => {
      return {
        values: {},
        errors: {}
      };
    }
  });

  return <FormWrapper formMethods={methods}>{children}</FormWrapper>;
};

describe("<PasswordField />", () => {
  test("should render <PasswordField /> component", () => {
    renderWithProviders(
      <FormTest>
        <PasswordField name="password" label="Password" />
      </FormTest>
    );

    const passwordField = screen.getByLabelText("Password");
    expect(passwordField).toBeInTheDocument();
  });

  test("should show/hide text field while toggle", () => {
    renderWithProviders(
      <FormTest>
        <PasswordField name="password" label="Password" />
      </FormTest>
    );

    const passwordField = screen.getByLabelText("Password");
    const toggleBtn = screen.getByTestId("PasswordField.IconButton");
    expect(passwordField).toHaveAttribute("type", "password");
    fireEvent.click(toggleBtn);
    expect(passwordField).toHaveAttribute("type", "text");
  });
});
