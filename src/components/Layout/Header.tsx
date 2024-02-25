import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Badge from "../../Badge";
import { Movie } from "../../types/movie";
import ASSETS from "../../utils/constant/assets";
import { useCart } from "../../store/CartContext";

const Header = () => {
  const { cartItems } = useCart();
  let navigate = useNavigate();
  const itemCounts = cartItems.reduce(
    (total: number, item: Movie) => total + item.quantity,
    0
  );
  return (
    <header className="bg-gray-900 text-white body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-2 py-4 flex-col md:flex-row items-center gap-4">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer"
          src={ASSETS.STARWARS_LOGO}
          width={180}
          alt="logo"
        />
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/" className="hover:text-gray-400">
            Home
          </NavLink>
        </nav>
        <NavLink to={"/cart"} className={`relative`}>
          <img
            className="cursor-pointer p-1 hover:bg-slate-600 hover:rounded-lg"
            src={ASSETS.CART}
            width={50}
            alt="cart"
          />
          {itemCounts > 0 && <Badge count={itemCounts} />}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
