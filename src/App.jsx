import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global-styles/global-styles";
import theme from "./theme/theme";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Index from "./pages/salad/pages/Home/Index";
import KingJames500 from "./pages/Kingjames500/Kingjames500";
import Portfolio from "./pages/mosesmukabi/Portfolio";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index/>} />
          <Route path="/kingjames500" element={<KingJames500 />} />
          <Route path="/mosesmukabi" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
