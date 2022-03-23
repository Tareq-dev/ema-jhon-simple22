import React from "react";

const Cart = ({cart}) => {
  return (
    <div>
      <h4>Order Samary</h4>
      <h2>Selected Item : {cart.length}</h2>
    </div>
  );
};

export default Cart;
