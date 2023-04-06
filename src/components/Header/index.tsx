import { HeaderContainer, HeaderDate, HeaderInfos } from "./styles";
import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" width={150} />
      <HeaderInfos>
        <HeaderDate>
          <time>20 de março de 2023 </time>
          |
          <time>22:00 UTC</time>
        </HeaderDate>
        <p>Dados de câmbio disponibilizados pela Morningstar.</p>
      </HeaderInfos>
    </HeaderContainer>
  );
}
