import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Inventory from "./components/Inventory/Inventory";
import Order from "./components/Order/Order";
import Review from "./components/About/About";
import Shop from "./components/shop/Shop";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop></Shop>} />
        <Route path="/order" element={<Order></Order>} />
        <Route path="/inventory" element={<Inventory></Inventory>} />
        <Route path="/about" element={<Review></Review>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
