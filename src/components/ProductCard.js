import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  return (
    <div
      className="card"
      style={{
        width: "18rem",
        height: "25rem",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        margin: "2rem",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ height: "15rem", width: "15rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>

        <p className="card-text">${product.price}</p>
        <a href={`/products/${product.id}`} className="btn btn-primary">
          View Details
        </a>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
