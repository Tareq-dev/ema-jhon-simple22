import React from "react";
import './Header.css';
import logo from '../../images/Logo.svg';

function Header() {
  return (
     <div className="header">
     <img src={logo} alt="logo" />
     <div>
     <a href="/order">Order</a>
     <a href="/order-review">Order Review</a>
     <a href="/manage-inventory">Manage Inventory</a>
     <a href="/shop">Shop</a>
     </div>
     </div>
  );
}

export default Header;
