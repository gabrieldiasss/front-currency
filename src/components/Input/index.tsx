import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyled, InputFake } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  dollar?: boolean;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ dollar, error, ...props }, ref) => {
    return (
      <div>
        <InputFake>
          {dollar && <span>$</span>}
          <InputStyled ref={ref} {...props} />
        </InputFake>

        {error}
      </div>
    );
  }
);
