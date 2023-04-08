import { HeaderContainer, HeaderDate } from "./styles";
import Logo from "../../assets/logo.svg";
import { dateCurrent, hourCurrent } from "../../utils/format";
import { RegularText } from "../Typograph";

export function Header() {

  return (
    <HeaderContainer>
      <img src={Logo} alt="" width={150} />
      <div>
        <HeaderDate>
          <time>{dateCurrent}</time>
          <div>|</div>
          <time>{hourCurrent} UTC</time>
        </HeaderDate>
        <RegularText color="100" weight={400} size="s">Dados de câmbio disponibilizados pela Morningstar.</RegularText>
      </div>
    </HeaderContainer>
  );
}