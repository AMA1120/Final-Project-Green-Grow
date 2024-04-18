import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar= () => {
  const token = localStorage.getItem("token");
  const [click, setClick] = useState(false);
  const history = useHistory(); // Get history object for redirection

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/Login"); // Redirect to login page after logout
  };

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
            {token ? (
              <>
                <li className="nav-items">
                  <Link
                    to="/Profile"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    My Profile
                  </Link>
                </li>
                <li className="nav-items">
                  <button
                    className="nav-links-mobile"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-items">
                  <Link
                    to="/"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-items">
                  <Link
                    to="/Service"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Community"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Community
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


              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
