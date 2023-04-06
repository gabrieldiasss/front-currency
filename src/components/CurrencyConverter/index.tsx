import { ArrowsLeftRight } from "phosphor-react";
import {
  Button,
  ConvertCurrencyField,
  ConvertCurrencyForm,
  ConvertSelectedMethodContainer,
  ConvertSelectedMethodInputs,
  ConvertValue,
} from "./styles";

export function CurrencyConverter() {
  return (
    <>
      <ConvertCurrencyForm>
        <ConvertValue>
          <ConvertCurrencyField>
            <label htmlFor="dolar">Dólar</label>
            <input type="number" id="dolar" placeholder="$ 0,00" />
          </ConvertCurrencyField>

          <ConvertCurrencyField>
            <label htmlFor="stateFee">Taxa do Estado</label>
            <input type="number"  id="stateFee" placeholder="0 %" />
          </ConvertCurrencyField>
        </ConvertValue>

        <ConvertSelectedMethodContainer>
          <label>Tipo da compra</label>

          <ConvertSelectedMethodInputs>
            <div>
              <input id="money" type="radio" />
              <label htmlFor="money">Dinheiro</label>
            </div>

            <div>
              <input id="card" type="radio" />
              <label htmlFor="card">Cartão</label>
            </div>
          </ConvertSelectedMethodInputs>
        </ConvertSelectedMethodContainer>

        <Button type="submit"> <ArrowsLeftRight size={24} /> Converter</Button>
      </ConvertCurrencyForm>
    </>
  );
}
