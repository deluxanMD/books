import * as yup from "yup";

export const signInFormSchema = yup.object().shape({
  username: yup.string().email().trim().max(25).required(),
  password: yup.string().trim().max(25).required()
});
