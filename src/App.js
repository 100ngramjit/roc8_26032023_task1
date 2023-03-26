import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndividualProductPage from "./components/IndividualProductPage";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route
          path="/products/:productId"
          element={<IndividualProductPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
