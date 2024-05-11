import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const navigate = useNavigate();

  const token = Cookies.get("token");
  const decodedToken = jwtDecode(token);

  console.log(decodedToken);

  const { role } = decodedToken;

  console.log(role);

  const handleLogOut = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <ul className="nav-menu">
          {role === "Ministry" && (
            <>
              <li>
                <Link to="/home">
                  <i className="fas fa-users"></i> Agrarian Service Centers
                </Link>
              </li>
              <li>
                <Link to="/farmersOrg">
                  <i className="fas fa-users"></i> Farmers' Organizations
                </Link>
              </li>
              <li>
                <Link to="/articles">
                  <i className="fas fa-newspaper"></i> Articles
                </Link>
              </li>
              <li>
                <Link to="/fertilizerDelivery">
                  <i className="fas fa-truck"></i> Fertilizer Delivery Status
                </Link>
              </li>
              <li>
                <Link to="/messages">
                  <i className="fas fa-bell"></i> Messages
                </Link>
              </li>
            </>
          )}

          {role === "AgrarianServCen" && (
            <>
              <li>
                <Link to="/farmersOrg">
                  <i className="fas fa-users"></i> Farmers' Organizations
                </Link>
              </li>
              <li>
                <Link to="/farmers">
                  <i className="fas fa-users"></i> Farmers
                </Link>
              </li>
              <li>
                <Link to="/fertilizerDelivery">
                  <i className="fas fa-truck"></i> Fertilizer Delivery Status
                </Link>
              </li>
            </>
          )}

          {role === "FarmersOrg" && (
            <>
              <li>
                <Link to="/farmers">
                  <i className="fas fa-users"></i> Farmers
                </Link>
              </li>
            </>
          )}

          <li>
            <Link to={"/login"} onClick={handleLogOut}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
