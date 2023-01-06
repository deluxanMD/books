import React from "react";
import {Box} from "@mui/material";
import {FormProvider} from "react-hook-form";

type FormWrapperType = {
  children?: any;
  "data-testid"?: string;
  formMethods: any;
  onSubmit?: () => void;
};

const FormWrapper = ({
  children,
  "data-testid": dataTestId,
  formMethods,
  ...rest
}: FormWrapperType) => {
  return (
    <FormProvider {...formMethods}>
      <Box component="form" role="form" data-testid={dataTestId} {...rest}>
        {children}
      </Box>
    </FormProvider>
  );
};

export default FormWrapper;
