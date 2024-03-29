import { Button, Card, Box, Chip, Container } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleIncrementQuantity = (itemId) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex((item) => item.id === itemId);
    updatedCartItems[itemIndex].quantity += 1;
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleDecrementQuantity = (itemId) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex((item) => item.id === itemId);
    updatedCartItems[itemIndex].quantity -= 1;
    if (updatedCartItems[itemIndex].quantity === 0) {
      updatedCartItems.splice(itemIndex, 1);
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <Container>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <Card
              sx={{ display: "flex", mb: 2, p: 2 }}
              elevation={20}
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ height: "15rem", width: "15rem" }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <Box className="quantity">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleDecrementQuantity(item.id)}
                  >
                    -
                  </Button>
                  <Chip label={item.quantity} />

                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleIncrementQuantity(item.id)}
                  >
                    +
                  </Button>
                </Box>
              </div>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default CartPage;
