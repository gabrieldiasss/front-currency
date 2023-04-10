import { useFormContext } from "react-hook-form";
import { Input } from "../Input";
import { Label } from "../Typograph";
import { ConvertCurrencyField, CurrencyConverterFormContainer } from "./styles";

export function CurrencyConverterForm() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <CurrencyConverterFormContainer>
      <ConvertCurrencyField>
        <Label color="500" size="xs" htmlFor="dolar">
          Dólar
        </Label>

        <Input error={errors.dollar?.message as string} dollar={true} type="number" placeholder="1,00" id="dolar" {...register("dollar")} />
      </ConvertCurrencyField>

      <ConvertCurrencyField>
        <Label color="500" size="xs" htmlFor="stateFee">
          Taxa do Estado
        </Label>
        <Input error={errors.stateFee?.message as string} type="number" placeholder="0 %" id="stateFee" {...register("stateFee")} />
      </ConvertCurrencyField>
    </CurrencyConverterFormContainer>
  );
}
