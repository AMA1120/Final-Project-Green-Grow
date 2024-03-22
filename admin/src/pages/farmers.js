import Navbar from "../components/NavBar/navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Farmers() {

  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:3000/farmers/get")
      .then((response) => response.json())
      .then((farmers) => setFarmers(farmers))
      .catch((error) =>
        console.error("Error fetching farmer data:", error)
      );
  }, []);


  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <div className="tbl-container">
          <h1>Farmers' Details</h1>
          <Link to="/addFarmer" className="add-button">
            + Add new Farmer 
          </Link>
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>NIC</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>Phone No.</th>
                <th>Size of Farmland</th>
                <th>Farmland Location</th>
                <th>Land Reg no.</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {farmers.map((farmer) => (
                <tr key={farmer._id}>
                  <td>{farmer.name}</td>
                  <td>{farmer.NIC}</td>
                  <td>{farmer.DOB}</td>
                  <td>{farmer.address}</td>
                  <td>{farmer.phone}</td>
                  <td>{farmer.farmlandSize}</td>
                  <td>{farmer.farmlandLocation}</td>
                  <td>{farmer.landRegNo}</td>
                  <td>{farmer.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Farmers;
