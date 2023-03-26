import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      className="card"
      style={{
        width: "18rem",
        height: "25rem",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        margin: "1rem",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ height: "15rem", width: "15rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>

        <p className="card-text">$ {product.price}</p>
        <Button
          variant="contained"
          size="small"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{ ml: 2 }}
          onClick={() => navigate(`/products/${product.id}`)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
