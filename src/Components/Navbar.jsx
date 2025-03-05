import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import NumResult from "./NumResult";

function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult />
    </nav>
  );
}

export default Navbar;
