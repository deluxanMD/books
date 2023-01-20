import {useRoutes} from "react-router-dom";
import AuthLayout from "../components/layouts/auth-layout/auth-layout.component";
import SignIn from "./sign-in/sign-in.component";

export const routesObject = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <SignIn />
      }
    ]
  }
];

const AuthRoutes = () => {
  return useRoutes(routesObject);
};

export default AuthRoutes;
