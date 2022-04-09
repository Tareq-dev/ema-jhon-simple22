import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <div>
        <Link className="text-xl" to="/">
          Shop
        </Link>
        <Link className="text-xl" to="/order">
          Order
        </Link>
        <Link className="text-xl" to="/inventory">
          Inventory
        </Link>
        <Link className="text-xl" to="/about">
          About
        </Link>
      <Link className="text-xl" to="/login">
      Login
    </Link>
      </div>
    </div>
  );
}

export default Header;
