import React from "react";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";
import { useNavigate } from "react-router-dom";

function Order() {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();

  //remove products 

  const handleRemoveProduct = (item) => {
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
