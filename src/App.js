import Router from './Router';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import hellTheme from './Theme/hell';
import darkTheme from './Theme/dark';

function App() {
  const { hellMode } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={hellMode === true ? hellTheme : darkTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
export default App;
