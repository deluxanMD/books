import React from "react";
import PasswordField from "components/form/fields/password-field/password-field.component";
import UsernameField from "components/form/fields/username-field/username-field.component";

const SignInForm = () => {
  return (
    <>
      <UsernameField name="username" label="Email Address" />
      <PasswordField name="password" label="Password" autoComplete="password" />
    </>
  );
};

export default SignInForm;
