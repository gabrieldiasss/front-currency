import { CurrencyMethodInput } from "../CurrencyMethodInput";
import { Label, RegularText } from "../Typograph";
import {
  ConvertSelectedMethodContainer,
  ConvertSelectedMethodInputs,
} from "./styles";
import { useFormContext } from "react-hook-form";

const type = {
  money: {
    label: "Dinheiro",
  },
  card: {
    label: "Cartão",
  },
};

export function CurrencyConverterMethod() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const typePurchaseError = errors.typeOfPurchase?.message as unknown as string;

  return (
    <>
        <ConvertSelectedMethodContainer>
          <Label color="500" size="xs">
            Tipo de compra
          </Label>

          <ConvertSelectedMethodInputs>
            {Object.entries(type).map(([key, { label }]) => (
              <CurrencyMethodInput
                key={label}
                id={key}
                label={label}
                value={key}
                {...register("typeOfPurchase")}
              />
            ))}
          </ConvertSelectedMethodInputs>
        </ConvertSelectedMethodContainer>
        
        <RegularText hasError={true}>{typePurchaseError}</RegularText>
    </>
  );
}
