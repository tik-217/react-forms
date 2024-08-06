// react
import { FormEvent } from "react";

export function handleSubmit<T>(
  e: FormEvent,
  inputs: React.MutableRefObject<T>,
  onSubmit: (formValues: T) => void
) {
  e.preventDefault();
  onSubmit(inputs.current);
}
