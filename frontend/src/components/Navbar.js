import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import Cookies from "js-cookie";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [token, setToken] = useState(null);
  const history = useHistory(); // Get history object for redirection

  const handleLogout = () => {
    console.log("Token removed");
    Cookies.remove("token");
    setToken(null);
    history.push("/FarmerHome");
  };

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token from cookie:", token);
    
    if (token) {
      setToken(token);
    }
  }, [token]); // Add token as a dependency

  return (
    <>
      <nav className="navbar">
        <div className="navbar-con">
          <Link to="/" className="navbar-logo">
            Green-Grow
            <i className="fab fa-typo3" />
          </Link>
          <div
            className="menu-icon"
            onClick={() => setClick((prevState) => !prevState)}
          >
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {token ? (
              <>
                <li className="nav-items">
                  <Link to="/FarmerHome" className="nav-links">
                    Farmer Home
                  </Link>
                </li>
                <li className="nav-items">
                  <Link to="/Community" className="nav-links">
                    Community
                  </Link>
                </li>
                <li className="nav-items">
                  <Link to="/Profile" className="nav-links">
                    My Profile
                  </Link>
                </li>
                <li className="nav-items">
                  <Link to="/" className="nav-links" onClick={handleLogout}>
                    Log Out
                  </Link>
                </li>
              </>

            ) : (
              <>
                <li className="nav-items">
                  <Link to="/" className="nav-links">
                    Home
                  </Link>
                </li>
                <li className="nav-items">
                  <Link to="/Service" className="nav-links">
                    Services
                  </Link>
                </li>
                <li className="nav-items">
                  <Link to="/Login" className="nav-links">
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
};

export default Navbar;