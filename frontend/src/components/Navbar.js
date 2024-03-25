import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false); 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    // Perform logout actions here
    setLoggedIn(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-con">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Green-Grow
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {loggedIn ? (
              <>
                <li className="nav-items">
                  <Link
                    to="/myprofile"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    My Profile
                  </Link>
                </li>
                <li className="nav-items">
                  <button className="nav-links-mobile" onClick={handleLogout}>
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-items">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
            )}
            <li className="nav-items">
              <Link
                to="/Serivce"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-items">
              <Link
                to="/Login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
