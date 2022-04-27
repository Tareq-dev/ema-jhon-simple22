import useCart from "../../Hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../product/Product";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
import { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://infinite-dawn-21979.herokuapp.com/product?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  useEffect(() => {
    fetch("https://infinite-dawn-21979.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product._id}
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
      <div className="pagination mt-5 mb-5 flex justify-center">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            key={number._id}
            onClick={() => setPage(number)}
            className={page === number ? "selectedPage" : ""}
          >
            {number + 1}
          </button>
        ))}
        <select onChange={(e) => setSize(e.target.value)} defaultValue="10">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
