import { Box, CircularProgress, Container, Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );

      setProduct(response?.data);
      console.log(response);
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
      <p>${product.price}</p>
      <p>
        Rating - {product.rating.rate}
        {`(${product.rating.count} votes) `}
      </p>
    </Paper>
  );
};

export default IndividualProductPage;
