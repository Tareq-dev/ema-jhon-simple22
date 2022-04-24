import React from "react";
import useCart from "../../Hooks/useCart";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";
import { useNavigate } from "react-router-dom";

function Order() {
  const [cart, setCart] = useCart();
  console.log(cart);
  const navigate = useNavigate();
  if (cart.length) {
    console.log(cart.length);
  }
  //remove products

  const handleRemoveProduct = (item) => {
    console.log(item);
    const rest = cart.filter((pd) => pd.id !== item.id);
    setCart(rest);
    removeFromDb(item.id);
  };
  return (
    <div className="shop-container">
      <div className="grid grid-rows-1 gap-5 p-5">
        {cart.map((item) => (
          <ReviewItems
            handleRemoveProduct={handleRemoveProduct}
            item={item}
            key={item.id}
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
