import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { ReactComponent as Hamburger } from "./assets/burger-menu-svgrepo-com.svg";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="Navbar">
      <div className="Menu">
        <div className="MenuIcon" onClick={handleShowNavbar}>
          <Hamburger fill='red' />
        </div>
        <div className={`NavElements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/tech">Технология</NavLink>
            </li>
            <li>
              <NavLink to="/graph">График полетов</NavLink>
            </li>
            <li>
              <NavLink to="/guarant">Гарантии</NavLink>
            </li>
            <li>
              <NavLink to="/about">О компании</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Контакты</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
