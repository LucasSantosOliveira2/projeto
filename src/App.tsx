
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyles'
import theme from './theme'
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App