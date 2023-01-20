import {TextField, TextFieldProps} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";

type UsernameFieldType = {
  name: string;
  helperText?: string;
} & TextFieldProps;

const UsernameField = ({name, helperText, defaultValue, ...rest}: UsernameFieldType) => {
  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({field: {ref: rhfRef, ...fieldRest}, fieldState: {error}}) => (
        <TextField
          {...fieldRest}
          size="small"
          label="Email Address"
          fullWidth
          inputRef={rhfRef}
          error={!!error}
          helperText={helperText ?? error?.message}
          sx={{marginBottom: 1}}
          {...rest}
        />
      )}
    />
  );
};

export default UsernameField;
