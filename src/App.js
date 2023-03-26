import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/CartPage";
import IndividualProductPage from "./components/IndividualProductPage";
import ProductListing from "./components/ProductListing";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2D3142",
      },
      secondary: {
        main: "#BFC0C0",
      },
    },
  });
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
