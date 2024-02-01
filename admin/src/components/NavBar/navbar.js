import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        
        <ul className="nav-menu">
          <li>
        <Link to="/home">
          <i className="fas fa-users"></i> Agrarian Service Centers
            </Link>
          </li>
          <li>
        <Link to="/food">
          <i className="fas fa-hamburger"></i> Farmers' Organizations
            </Link>
          </li>
          <li>
        <Link to="/homepromotions">
          <i className="fas fa-gift"></i> Farmers
            </Link>
          </li>
          <li>
        <Link to="/login">
          <i className="fas fa-sign-out-alt"></i> Logout
            </Link>
          </li>
          </ul>
      </div>
      
      {/* Content area for rendering the pages */}
      <div className="content">
        {/* You can render the corresponding component based on the route */}
        {/* For example, using React Router Switch and Route */}
        {/* <Switch>
          <Route path="/home" component={UsersComponent} />
          <Route path="/food" component={FoodItemsComponent} />
          <Route path="/homepromotions" component={PromotionsComponent} />
          <Route path="/login" component={LoginComponent} />
        </Switch> */}
      
      </div>
    </div>
  );
}

export default Navbar;
