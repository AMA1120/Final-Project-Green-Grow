import { useState, useEffect } from "react";
import Navbar from "../components/NavBar/navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function FarmersOrg() {
  const [organization, setorganization] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:3000/farmersOrg/get")
      .then((response) => response.json())
      .then((organization) => setorganization(organization))
      .catch((error) =>
        console.error("Error fetching organization data:", error)
      );
  }, []);

  const deleteFO = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/farmersOrg/deleteFO/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting FO:", error);
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <div className="tbl-container">
          <h1>Welcome to ASC Admin Dashboard</h1>
          <Link to="/addFO" className="add-button">
            + Add new Farmers' Organization
          </Link>
          <table className="user-table">
            <thead>
              <tr>
                <th>Organization Name</th>
                <th>District</th>
                <th>Municipal Council</th>
                <th>City</th>
                <th>Username</th>
                <th>Delete FO</th>
              </tr>
            </thead>
            <tbody>
              {organization.map((organization) => (
                <tr key={organization._id}>
                  <td>{organization.orgname}</td>
                  <td>{organization.district}</td>
                  <td>{organization.municipalcouncil}</td>
                  <td>{organization.city}</td>
                  <td>{organization.username}</td>
                  <td>
                    <button
                      className="button2"
                      onClick={() => {
                        deleteFO(organization._id);
                        window.location.reload();
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FarmersOrg;
