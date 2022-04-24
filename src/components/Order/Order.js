import React from "react";
import useCart from "../../Hooks/useCart";
import { removeFromDb } from "../../utilities/fakedb";
import ReviewItems from "../ReviewItems/ReviewItems";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";

function Order() {
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
 
  //remove products

  const handleRemoveProduct = (item) => {
    console.log(item);
    const rest = cart.filter((pd) => pd._id !== item._id);
    setCart(rest);
    removeFromDb(item._id);
  };
  return (
    <div className="shop-container">
      <div className="grid grid-rows-1 gap-5 p-5">
        {cart.map((item) => (
          <ReviewItems
            handleRemoveProduct={handleRemoveProduct}
            item={item}
            key={item._id}
          />
        ))}
      </div>
      <div className="order-container">
        <Cart cart={cart}>
          <button
            onClick={() => navigate("/shipment")}
            className="bg-black text-white px-3 py-2 rounded-lg text-xl font-bold mx-2 mt-5"
          >
            Procced Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
}

export default Order;
