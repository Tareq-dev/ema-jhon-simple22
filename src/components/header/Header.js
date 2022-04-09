import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
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
        {user ? (
          <button
            onClick={() => signOut(auth)}
            className="bg-white mx-4 px-2 text-xl py-2 rounded-lg"
          >
            Sign Out
          </button>
        ) : (
          <Link className="text-xl" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
