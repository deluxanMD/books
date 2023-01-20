import {prettyDOM, screen} from "@testing-library/react";
import {useForm} from "react-hook-form";
import {renderWithProviders} from "utils/test-utils";
import FormWrapper from "./form-wrapper.component";

const FormTest = () => {
  const methods = useForm({
    resolver: () => {
      return {
        values: {},
        errors: {}
      };
    }
  });
  return <FormWrapper formMethods={methods} />;
};

describe("<FormWrapper />", () => {
  test("should render <FormWrapper /> component", () => {
    renderWithProviders(<FormTest />);
    const formEl = screen.getByRole("form");
    expect(formEl).toBeInTheDocument();
  });
});
