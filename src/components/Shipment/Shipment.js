import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error] = useState("");

  const handleShipment = (event) => {
    event.preventDefault();
    const shipping = { name, email, phone, address };
    console.log(shipping);
  };
  return (
    <div>
      <div className="form-container py-5">
        <div>
          <h3 className="form-title">Shipping Information</h3>
          <form onSubmit={handleShipment}>
            <div className="input-group">
              <label htmlFor="email">Your Name</label>
              <input
                onBlur={(event) => setName(event.target.value)}
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="emial">Your Email</label>
              <input
                value={user?.email}
                readOnly
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Your Address</label>
              <input
                onBlur={(event) => setAddress(event.target.value)}
                type="text"
                name="address"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Your Phone No.</label>
              <input
                onBlur={(event) => setPhone(event.target.value)}
                type="text"
                name="phone"
                id=""
                required
              />
            </div>
            <p className="text-red-600 mb-5 mx-3">{error}</p>
            <input className="form-submit" type="submit" value="Add Shipping" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
