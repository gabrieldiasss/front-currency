import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const date = new Date();

export const dateCurrent = format(date, "dd 'de' MMMM yyyy", { locale: ptBR });

export const hourCurrent = format(date, "HH:mm", { locale: ptBR });
