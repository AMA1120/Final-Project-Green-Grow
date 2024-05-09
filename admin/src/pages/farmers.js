import Navbar from "../components/NavBar/navbar";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

function Farmers() {
  const [farmers, setFarmers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:3000/farmers/get")
      .then((response) => response.json())
      .then((farmers) => setFarmers(farmers))
      .catch((error) => console.error("Error fetching farmer data:", error));
  }, []);

  useEffect(() => {
    // Filter farmers based on search query
    const results = farmers.filter((farmer) =>
      farmer.NIC.includes(searchQuery)
    );
    setSearchResults(results);
  }, [searchQuery, farmers]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCollectionStatus = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/farmers/updateCollectionStatus/${id}`
      );
  
      if (response.status === 200) {
        const updatedFarmer = response.data.updatedFarmer; // Assuming the response contains the updated farmer object
        setFarmers(
          farmers.map((farmer) =>
            farmer._id === updatedFarmer._id ? updatedFarmer : farmer
          )
        );
      }

      navigate(0);
    } catch (error) {
      console.error("Error updating collection status:", error);
    }
  };
  

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <div className="tbl-container">
          <h1>Farmers' Details</h1>
          <div
            className="action-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Search by NIC..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                padding: "10px",
                width: "300px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <Link to="/addFarmer" className="add-button">
              + Add new Farmer
            </Link>
          </div>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((farmer) => (
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
                  <td> 
                    
                    
                    <Button
                      className={farmer.collectionStatus === "0" ? "bg-primary" : farmer.collectionStatus === "1" ? "bg-danger" : ""}
                      onClick={() => handleCollectionStatus(farmer._id)}
                      disabled={farmer.collectionStatus === "1"}
                    > {farmer.collectionStatus === "0" ? "Collect" : farmer.collectionStatus === "1" ? "Collected" : ""}
                    </Button>

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

export default Farmers;
