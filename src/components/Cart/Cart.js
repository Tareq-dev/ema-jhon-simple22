import React from "react";
import "./Cart.css";
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price* product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order Samary</h4>
      <p>Selected Items : {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax : ${tax}</p>
      <h4>Grand Total : ${grandTotal}</h4>
      <div>
      <button className="bg-black text-white px-3 py-2 rounded-lg text-xl font-bold mx-2 mt-14"><Link to="/order">Review Order</Link></button>
      </div>
      <div>
     
      </div>
    </div>
  );
};

export default Cart;
