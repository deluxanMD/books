import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {signInFormSchema} from "./sign-in-form.schema";

export const useSignInForm = () => {
  return useForm({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });
};
