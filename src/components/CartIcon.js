import { Badge, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <IconButton
      className="cart-icon"
      color="inherit"
      onClick={() => navigate("/cart")}
    >
      <Badge badgeContent={cartItemCount} color="secondary">
        <FaShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
