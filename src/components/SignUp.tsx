import { useRef } from "react";
import Input from "./Input";
import { handleChange } from "../services/handleChange";
import { ISignUpProps } from "../types";
import { handleSubmit } from "../services/handleSubmit";
import { IconAt } from "@tabler/icons-react";

export default function Signup({
  onSubmit,
}: {
  onSubmit: (formValues: ISignUpProps) => void;
}) {
  const inputs = useRef({
    name: "",
    signUpEmail: "",
    niknameEmail: "",
    gender: "male",
    password: "",
    confirmPassword: "",
  });

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={(e) => handleSubmit(e, inputs, onSubmit)}>
        <div>
          <span>Имя</span>
          <Input
            type={"text"}
            name={"name"}
            id={"name"}
            placeholder={"Имя"}
            handleChange={(e) => handleChange(e, inputs)}
          />
        </div>
        <div>
          <span>Никнейм</span>
          <Input
            type={"text"}
            name={"niknameEmail"}
            id={"nikname"}
            placeholder={"Никнейм"}
            icon={<IconAt size={"0.8em"} />}
            handleChange={(e) => handleChange(e, inputs)}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            type={"email"}
            name={"signUpEmail"}
            id={"signUpEmail"}
            placeholder={"Email"}
            handleChange={(e) => handleChange(e, inputs)}
          />
        </div>
        <div>
          <label htmlFor="male">Мужской</label>
          <Input
            type={"radio"}
            name={"gender"}
            checked={true}
            id={"male"}
            handleChange={(e) => handleChange(e, inputs)}
          />
          <label htmlFor="female">Женский</label>
          <Input
            type={"radio"}
            name={"gender"}
            id={"female"}
            handleChange={(e) => handleChange(e, inputs)}
          />
        </div>
        <div>
          <span>Пароль</span>
          <Input
            type={"password"}
            name={"password"}
            id={"signUpPassword"}
            placeholder={"Пароль"}
            handleChange={(e) => handleChange(e, inputs)}
          />
        </div>
        <div>
          <span>Подтвердите пароль</span>
          <Input
            type={"password"}
            name={"confirmPassword"}
            id={"signUpConfirmPassword"}
            placeholder={"Подтвердите пароль"}
            handleChange={(e) => handleChange(e, inputs)}
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
