import { Input } from "../Input";
import { Label } from "../Typograph";
import { ConvertCurrencyField, CurrencyConverterFormContainer } from "./styles";

export function CurrencyConverterForm() {
    return (
        <CurrencyConverterFormContainer>
          <ConvertCurrencyField>
            <Label size="xs" htmlFor="dolar">Dólar</Label>
            <Input type="number" placeholder="$ 1,00" />
          </ConvertCurrencyField>

          <ConvertCurrencyField>
            <Label size="xs" htmlFor="stateFee">Taxa do Estado</Label>
            <Input type="number" placeholder="5.3 %" />
          </ConvertCurrencyField>
        </CurrencyConverterFormContainer>
    )
}