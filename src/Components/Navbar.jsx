import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import NumResult from "./NumResult";

function Navbar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

export default Navbar;
