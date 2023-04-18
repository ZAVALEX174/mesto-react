import logo from "../images/logo.svg";
import React from "react";

function Header() {
  return (
    <header className="header container">
      <img src={logo} alt="Логотип сайта" className="logo" />
    </header>
  );
}

export default Header;
