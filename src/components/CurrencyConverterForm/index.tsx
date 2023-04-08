import { Input } from "../Input";
import { Label } from "../Typograph";
import { ConvertCurrencyField, CurrencyConverterFormContainer } from "./styles";

export function CurrencyConverterForm() {
    return (
        <CurrencyConverterFormContainer>
          <ConvertCurrencyField>
            <Label color="500" size="xs" htmlFor="dolar">Dólar</Label>
            <Input type="number" placeholder="$ 1,00" id="dolar" />
          </ConvertCurrencyField>

          <ConvertCurrencyField>
            <Label color="500" size="xs" htmlFor="stateFee">Taxa do Estado</Label>
            <Input type="number" placeholder="5.3 %" id="stateFee" />
          </ConvertCurrencyField>
        </CurrencyConverterFormContainer>
    )
}