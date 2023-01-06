import React from "react";
import {useState} from "react";
import {TextField} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type PasswordFieldType = {
  name: string;
  label: string;
  helperText?: string;
  autoComplete?: string;
};

const PasswordField = ({name, helperText, autoComplete, ...rest}: PasswordFieldType) => {
  const {control} = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {ref, ...fieldRest}, fieldState: {error}}) => (
        <TextField
          {...fieldRest}
          type={showPassword ? "text" : "password"}
          size="small"
          fullWidth
          inputRef={ref}
          error={!!error}
          helperText={helperText ?? error?.message}
          sx={{marginBottom: 1}}
          InputProps={{
            autoComplete,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  data-testid="PasswordField.IconButton"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
          {...rest}
        />
      )}
    />
  );
};

export default PasswordField;
