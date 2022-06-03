import { ThemeProvider } from 'styled-components';

import { theme } from './theming/theme';
import GlobalStyle from './theming/globalStyles';
import Calculator from './components/Calculator/Calculator.component';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
