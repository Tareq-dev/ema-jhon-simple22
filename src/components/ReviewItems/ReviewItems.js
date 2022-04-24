import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItems = (props) => {
  const { item, handleRemoveProduct } = props;
 
  const { name, img, price, shipping, quantity } = props.item;
  return (
    <div className="p-2 w-full flex border border-neutral-300 items-center">
      <img className="w-20 h-20 rounded-lg" src={img} alt="img" />
      <div className="flex flex-auto items-center justify-between">
        <div className="mx-3">
          <h4 className="" title={name}>
            {name.lenght > 20 ? name.slice(0, 10) + "..." : name}
          </h4>
          <p>
            Price: <span className="text-yellow-500">${price}</span>
          </p>
          <p>
            Shipping Charge:
            <span className="text-yellow-500">${shipping}</span>
          </p>
          <p>
            Quantiy: <span className="text-yellow-500">{quantity}</span>
          </p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveProduct(item)}
            className="bg-red-100 p-2 w-10 h-10 rounded-3xl"
          >
            <FontAwesomeIcon
              className="text-2xl text-red-500"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
