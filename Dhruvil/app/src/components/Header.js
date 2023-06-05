import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to={"about"}>About</Link>
        </li>
        <li><NavLink to={"Contact"}>Contact</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;
