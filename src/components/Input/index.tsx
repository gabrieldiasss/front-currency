import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyled, InputFake, InputFakeContainer } from "./styles";
import { RegularText } from "../Typograph";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  dollar?: boolean;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ dollar, error, ...props }, ref) => {
    return (
      <InputFakeContainer>
        <InputFake>
          {dollar && <span>$</span>}
          <InputStyled ref={ref} {...props} />
        </InputFake>

        <RegularText hasError={true}>{error}</RegularText>
      </InputFakeContainer>
    );
  }
);
