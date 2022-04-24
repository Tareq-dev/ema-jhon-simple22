import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, price, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="product" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>Seller : {seller}</p>
        <p>Rating : {ratings} starts</p>
      </div>
      <button className="btn-cart" onClick={() => handleAddToCart(product)}>
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
