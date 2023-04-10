import { ArrowsLeftRight } from "phosphor-react";
import { Button } from "./styles";
import { CurrencyConverterMethod } from "../CurrencyConverterMethod";
import { CurrencyConverterForm } from "../CurrencyConverterForm";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

enum typeOfPurchase {
  money = "money",
  card = "card",
}

const confirmConvertValidationSchema = zod.object({
  dollar: zod.string().min(1, "Informe o dollar"),
  stateFee: zod.string().min(1, "Informe o valor do estado"),
  typeOfPurchase: zod.nativeEnum(typeOfPurchase, {
    errorMap: () => {
      return { message: "Informe o tipo da compra" }
    }
  })
})

type OrderData = zod.infer<typeof confirmConvertValidationSchema>

type ConfirmConvert = OrderData

export function CurrencyConverter() {

  const confirmConvert = useForm<ConfirmConvert>({
    resolver: zodResolver(confirmConvertValidationSchema),
/*     defaultValues: {
      typeOfPurchase: undefined,
    }, */
  });

  const { handleSubmit } = confirmConvert

  function handleCovertCurrency(data: ConfirmConvert) {
    console.log(data);
  }

  return (
    <FormProvider {...confirmConvert} >
      <form onSubmit={handleSubmit(handleCovertCurrency)}>
        <CurrencyConverterForm />
        <CurrencyConverterMethod />
        <Button type="submit">
          <ArrowsLeftRight size={24} /> Converter
        </Button>
      </form>
    </FormProvider>
  );
}
