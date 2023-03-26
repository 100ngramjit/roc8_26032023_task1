import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/CartPage";
import IndividualProductPage from "./components/IndividualProductPage";
import ProductListing from "./components/ProductListing";
import { theme } from "./theme/CustomTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route
            path="/products/:productId"
            element={<IndividualProductPage />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
