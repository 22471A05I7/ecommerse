import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">Restaurant</Link>
        
      </div>
      <div className="navbar-links">
       
        <Link to="/nonveg">Nonveg</Link>
        <Link to="/veg">Veg</Link>
      </div>
    </div>
  );
};

export default Navbar;