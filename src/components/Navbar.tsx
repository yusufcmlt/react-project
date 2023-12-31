// Navbar.js
import shoppingCartLogo from "../assets/shooping-cart.png";

import { Link } from "react-router-dom";
import Search from "./Search";
import { FC } from "react";

type NavbarProps = {
  onSearch: (searchText: string) => void;
};

const Navbar: FC<NavbarProps> = ({ onSearch }) => {
  return (
    <nav>
      <ul>
        <li className="navbar-logo">
          <img src={shoppingCartLogo} />
        </li>
        <li>
          <Link to="/">Ürünler</Link>
        </li>
        <li>
          <Link to="/about">Hakkımızda</Link>
        </li>
        <li>
          <Search onSearch={onSearch} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
