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
    <div className="cart-icon" onClick={() => navigate("/cart")}>
      <FaShoppingCart />
      {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
    </div>
  );
};

export default CartIcon;
