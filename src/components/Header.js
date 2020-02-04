import React from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import logo from "./../../public/images/logo.svg";


 /**
     * Header component - header of the entire application
     *
  */
const Header = () => (
  <header className="header">
    <Link className="header__title" to="/">
      <SVG className="header__logo" src={logo} />
    </Link>
  </header>
);

export default Header;
