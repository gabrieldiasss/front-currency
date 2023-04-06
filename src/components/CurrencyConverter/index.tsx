import { ArrowsLeftRight } from "phosphor-react";
import {
  Button,
} from "./styles";
import { CurrencyConverterMethod } from "../CurrencyConverterMethod";
import { CurrencyConverterForm } from "../CurrencyConverterForm";

export function CurrencyConverter() {
  return (
      <form>
        <CurrencyConverterForm />
        <CurrencyConverterMethod />
        <Button type="submit"> <ArrowsLeftRight size={24} /> Converter</Button>
      </form>
  );
}
