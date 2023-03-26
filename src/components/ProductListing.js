import axios from "axios";
import React, { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products`);
        console.log(searchTerm, response);
        setProducts(response?.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      };
      fetchProducts();
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <CartIcon />
      </div>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <div>
          {products.length > 0 &&
            products?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          {products.length === 0 && <div>No Products</div>}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
