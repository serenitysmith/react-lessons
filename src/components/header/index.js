import React from "react";
import "./header.css";
import logo from "./react_logo.jpeg"
function Header() {
  return (
    <header>
      <nav className="navbar">
<img src={logo} alt="logo" className="reactlogo"></img>

        <ul className="list">
          <li>Price</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
