import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storeCart = getStoredCart();
    const savedCart = [];
    const keys = Object.keys(storeCart);
    fetch("https://infinite-dawn-21979.herokuapp.com/productByKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storeCart) {
          const addedProduct = products.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);
  return [cart, setCart];
};
export default useCart;
