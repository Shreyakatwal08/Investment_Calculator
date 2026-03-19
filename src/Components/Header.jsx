import React from "react";
import logo from "../assets/investment_bag_logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
