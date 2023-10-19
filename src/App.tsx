
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyles'
import { BrowserRouter } from 'react-router-dom';
import theme from './theme'
import { Home } from './pages/Home';
import MainRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App