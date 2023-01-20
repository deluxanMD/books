import {prettyDOM, screen} from "@testing-library/react";
import FormWrapper from "components/form/form-wrapper.component";
import {useForm} from "react-hook-form";
import {renderWithProviders} from "utils/test-utils";
import UsernameField from "./username-field.component";

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

describe("<UsernameField />", () => {
  test("should render <UsernameField /> component", () => {
    renderWithProviders(
      <FormTest>
        <UsernameField name="username" />
      </FormTest>
    );
    const usernameEl = screen.getByLabelText("Email Address");
    expect(usernameEl).toBeInTheDocument();
  });

  test("should render helper text if available", () => {
    renderWithProviders(
      <FormTest>
        <UsernameField name="username" helperText="username is a required field" />
      </FormTest>
    );
    const helperText = screen.getByText("username is a required field");
    expect(helperText).toBeInTheDocument();
  });
});
