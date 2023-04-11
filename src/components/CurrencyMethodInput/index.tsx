import { InputHTMLAttributes, forwardRef } from "react";
import { CurrencyMethodField } from "./styles";
import { RegularText } from "../Typograph";
import { useFormContext } from "react-hook-form";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const CurrencyMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, label, ...props }, ref) => {

  return (
    <>
      <CurrencyMethodField>
        <input id={id} type="radio" ref={ref} {...props} />
        <label htmlFor={id}>
          <div>{label}</div>
        </label>
      </CurrencyMethodField>

    </>
  );
});
