// react
import { useRef } from "react";

// types
import { ISignInProps } from "../types";

// components
import Input from "./Input";

// services
import { handleSubmit } from "../services/handleSubmit";
import { handleChange } from "../services/handleChange";

import "../styles/SignIn.css";

export default function Signin({
  onSubmit,
}: {
  onSubmit: (formValues: ISignInProps) => void;
}) {
  const inputs = useRef({
    email: "",
    password: "",
  });

  return (
    <div>
      <h3>Login</h3>
      <form
        onSubmit={(e) => handleSubmit(e, inputs, onSubmit)}
        className={"inputsForm"}
      >
        <div>
          <span>Email</span>
          <Input
            type={"email"}
            name={"email"}
            id={"loginEmail"}
            placeholder={"Email"}
            handleChange={(e) => handleChange(e, inputs)}
          />
        </div>
        <div>
          <span>Пароль</span>
          <Input
            name={"password"}
            type={"password"}
            id={"loginPassword"}
            placeholder={"Пароль"}
            handleChange={(e) => handleChange(e, inputs)}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
