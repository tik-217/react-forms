import { ChangeEvent } from "react";

export function handleChange<T>(
  e: ChangeEvent<HTMLInputElement>,
  inputs: React.MutableRefObject<T>
) {
  const inputType = (e.target as HTMLInputElement).type;
  let inputValue = (e.target as HTMLInputElement).value;

  if (inputType === "radio") {
    inputValue = (e.target as HTMLInputElement).id;
  }

  inputs.current = {
    ...inputs.current,
    [(e.target as HTMLInputElement).name]: inputValue,
  };
}
