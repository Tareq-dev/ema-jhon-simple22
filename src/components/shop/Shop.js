import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../product/Product";
import { useNavigate } from 'react-router-dom';
import "./Shop.css";

const Shop = () => {
  const [products] = useProducts();

  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            handleAddToCart={handleAddToCart}
            product={product}
          />
        ))}
      </div>
      <div className="order-container">
        <Cart cart={cart}>
        <button
            onClick={() => navigate("/order")}
            className="bg-black text-white px-3 py-2 rounded-lg text-xl font-bold mx-2 mt-5"
          >
            Review Order
          </button>
          </Cart>
      </div>
    </div>
  );
};

export default Shop;
