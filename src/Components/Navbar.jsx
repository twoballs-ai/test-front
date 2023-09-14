import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
import { ReactComponent as Hamburger } from "./assets/burger-menu-svgrepo-com.svg";

const serverUrl = "http://127.0.0.1:8000";

const Navbar = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(
          serverUrl + "/api/menu/"
          // ,{ headers: { Authorization: `Token da0d550bcc813a1b1cc6b905551cb11e3bf95046` } }
          // ,{headers: { "Content-Type": "multipart/form-data" }}
        )
        .then((response) => {
          console.log(response.data);
          setMenuData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="Navbar">
      <div className="Menu">
        <div className="MenuIcon" onClick={handleShowNavbar}>
          <Hamburger fill="red" />
        </div>
        <div className={`NavElements ${showNavbar && "active"}`}>
          <ul>
            {menuData.map((element, index) => {
              return (
                <li key={element.menu_sort}>
                  <NavLink to={element.menu_link}>{element.menu_title}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
