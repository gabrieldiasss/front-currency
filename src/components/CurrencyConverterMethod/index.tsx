import { Label } from "../Typograph";
import {
  ConvertSelectedMethodContainer,
  ConvertSelectedMethodInputs,
  CurrencyMethodField,
} from "./styles";

export function CurrencyConverterMethod() {
  return (
    <ConvertSelectedMethodContainer>
      <Label size="xs">Tipo de compra</Label>

      <ConvertSelectedMethodInputs>
        <CurrencyMethodField>
          <input id="card" type="radio" />
          <label>
            <div>Dinheiro</div>
          </label>
        </CurrencyMethodField>

        <CurrencyMethodField>
          <input id="card" type="radio" />
          <label>
            <div>Dinheiro</div>
          </label>
        </CurrencyMethodField>
      </ConvertSelectedMethodInputs>
    </ConvertSelectedMethodContainer>
  );
}
