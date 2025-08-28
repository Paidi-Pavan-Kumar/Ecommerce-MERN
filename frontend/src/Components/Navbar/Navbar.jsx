import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="w-full bg-white shadow-md px-4 py-2 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <p className="text-xl font-bold text-gray-800 ml-2 hidden sm:block">
          Pavazon{" "}
        </p>
      </div>
      <ul className="flex-1 flex justify-center gap-6 text-base font-medium text-gray-700">
        <li className="relative cursor-pointer" onClick={() => setMenu("shop")}>
          <Link className="no-underline hover:text-blue-600" to="/">
            Shop
          </Link>
          {menu === "shop" && (
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500 rounded"></span>
          )}
        </li>
        <li className="relative cursor-pointer" onClick={() => setMenu("men")}>
          <Link className="no-underline hover:text-blue-600" to="/mens">
            Men
          </Link>
          {menu === "men" && (
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500 rounded"></span>
          )}
        </li>
        <li
          className="relative cursor-pointer"
          onClick={() => setMenu("women")}
        >
          <Link className="no-underline hover:text-blue-600" to="/womens">
            Women
          </Link>
          {menu === "women" && (
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500 rounded"></span>
          )}
        </li>
        <li className="relative cursor-pointer" onClick={() => setMenu("kids")}>
          <Link className="no-underline hover:text-blue-600" to="/kids">
            Kids
          </Link>
          {menu === "kids" && (
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500 rounded"></span>
          )}
        </li>
      </ul>
      <div className="flex items-center gap-4">
        {localStorage.getItem("auth-token") ? (
          <Link to="/login">
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/login");
              }}
              className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
        )}
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="Cart" className="h-8 w-8" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {getTotalCartItems() ?? 0}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
