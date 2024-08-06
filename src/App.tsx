// components
import Signin from "./components/SignIn";
import Signup from "./components/SignUp";

// types
import { ISignUpProps, ISignInProps } from "./types";

// styles
import "./App.css";

export default function App() {
  function signInValues(values: ISignInProps) {
    console.log(values);
  }

  function signUpValues(values: ISignUpProps) {
    console.log(values);
  }

  return (
    <>
      <Signin onSubmit={(values) => signInValues(values)} />
      <Signup onSubmit={(values) => signUpValues(values)} />
    </>
  );
}
