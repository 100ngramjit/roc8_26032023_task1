import { Box, Button, Chip, CircularProgress, Paper } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const IndividualProductPage = () => {
  const { productId } = useParams();
  const { handleAddToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );

        setProduct(response?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper sx={{ p: 3, m: 3 }}>
      <h2>{product.title}</h2>
      <img
        style={{ height: 350, width: 350 }}
        src={product.image}
        alt={product.title}
      />
      <p>{product.description}</p>
      <Chip label={`$ ${product.price}`} />
      <Chip
        sx={{ ml: 2 }}
        label={` Rating - ${product.rating.rate}
        (${product.rating.count} votes) `}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </Button>
    </Paper>
  );
};

export default IndividualProductPage;
