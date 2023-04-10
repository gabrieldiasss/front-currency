import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/theme/global";
import { defaultTheme } from "./styles/theme/default";
import { AppWrapper } from "./styles";
import { CurrencyConverter } from "./components/CurrencyConverter";
import { CurrencyImage } from "./components/CurrencyImage";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <main>
          <CurrencyConverter />
        </main>

        <CurrencyImage />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
