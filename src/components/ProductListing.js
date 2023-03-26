import axios from "axios";
import React, { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log(searchTerm, response);
      setProducts(response?.data);
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
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
        <CartIcon />
      </div>

      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductListing;
