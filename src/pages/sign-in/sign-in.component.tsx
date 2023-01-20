import {Paper, Typography} from "@mui/material";
import FormWrapper from "components/form/form-wrapper.component";
import {useSignInForm} from "components/form/sign-in-form/sign-in-form.hooks";
import SignInForm from "components/form/sign-in-form/sign-in-form.component";
import {LoadingButton} from "@mui/lab";

const SignIn = () => {
  const formMethods = useSignInForm();

  const onValid = async (data: any) => {
    console.log({data});
  };

  const onInValid = async (err: any) => {
    console.log({err});
  };

  return (
    <Paper
      sx={{
        width: ["90%", 500],
        p: 2
      }}
      data-testid="Page.SignIn"
    >
      <Typography variant="h4" sx={{marginBottom: 1}}>
        Sign In
      </Typography>
      <FormWrapper
        formMethods={formMethods}
        onSubmit={formMethods.handleSubmit(onValid, onInValid)}
        data-testid="Form.SignIn"
      >
        <SignInForm />

        <LoadingButton
          type="submit"
          fullWidth
          sx={{mt: 1}}
          loading={false}
          variant="contained"
          data-testid="LoadingButton.Login"
        >
          Sign in
        </LoadingButton>
      </FormWrapper>
    </Paper>
  );
};

export default SignIn;
