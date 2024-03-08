import React from 'react';
import { useRole } from '../../contexts/RoleContext';
import { Link, useNavigate } from 'react-router-dom';
import "./navbar.css";
import Cookies from 'js-cookie';

function Navbar() {
  const role = useRole();
  console.log("Role:", role);


  const navigate = useNavigate();

  const handleLogOut = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <ul className="nav-menu">
          {role === "ministry" && (
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
                <Link to="/farmers">
                  <i className="fas fa-users"></i> Farmers
                </Link>
              </li>
            </>
          )}

          {role === "asc" && (
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
            </>
          )}

          {role === "fo" && (
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
