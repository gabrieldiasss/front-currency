import { InputHTMLAttributes, forwardRef } from "react";
import { CurrencyMethodField } from "./styles";

/* export function CurrencyMethodInput() {
    return (
        <CurrencyMethodField key={label} {...register("typeOfPurchase")}>
            <input id={label}  type="radio" {...register("typeOfPurchase")} />
            <label htmlFor={label}>
              <div>{label}</div>
            </label>
          </CurrencyMethodField>
    )
} */

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const CurrencyMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, label, ...props }, ref) => {
  return (
    <CurrencyMethodField>
      <input id={id} type="radio" ref={ref} {...props} />
      <label htmlFor={id}>
        <div>{label}</div>
      </label>
    </CurrencyMethodField>
  );
});
