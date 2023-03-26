import React from "react";

const ProductCard = ({ product }) => {
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
      </div>
    </div>
  );
};

export default ProductCard;
