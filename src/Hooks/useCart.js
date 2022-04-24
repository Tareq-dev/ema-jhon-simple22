import { useEffect, useState } from "react";
import { getStoreCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storeCart = getStoreCart();
    const savedCart = [];
    const keys = Object.keys(storeCart);
    console.log(keys);
    fetch("http://localhost:5000/productByKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        for (const id in storeCart) {
          const addedProduct = products.find((product) => product.id === id);
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
}
export default useCart;
