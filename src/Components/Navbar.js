import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="container">
      <h1 className="logo">DesiArt</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
