import { NavLink } from "react-router-dom";
import React from "react";

const activeStyle = { color: "gold" };

export const Navbar = () => (
  <div className="nav-bar">
    <NavLink activeStyle={activeStyle} exact to="/">
      Home
    </NavLink>
  </div>
);
