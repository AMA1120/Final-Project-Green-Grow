import Navbar from "../components/NavBar/navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Farmers() {
  const [farmers, setFarmers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:3000/farmers/get")
      .then((response) => response.json())
      .then((data) => setFarmers(data))
      .catch((error) => console.error("Error fetching farmer data:", error));
  }, []);

  useEffect(() => {
    // Filter farmers based on search query and collection status
    let results = farmers.filter((farmer) => farmer.NIC.includes(searchQuery));
    if (filter !== "all") {
      results = results.filter((farmer) => farmer.collectionStatus === filter);
    }
    setSearchResults(results);
  }, [searchQuery, farmers, filter]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleCollectionStatus = async (id) => {
    try {
      // Update collection status
      const response = await axios.put(
        `http://localhost:3000/farmers/updateCollectionStatus/${id}`
      );

      if (response.status === 200) {
        // If collection status is updated successfully, send SMS
        await axios.post("http://localhost:3000/messages/send-sms", {
          message: "You have collected all fertilizers. Thank You!",
          number: "+94772057454", // Replace with recipient's number
        });

        console.log("SMS sent successfully");

        // Navigate after sending SMS
        navigate(0);
      }
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
            <select
              onChange={handleFilterChange}
              style={{ padding: "10px", borderRadius: "5px" }}
            >
              <option value="all">All</option>
              <option value="0">Not Collected</option>
              <option value="1">Collected</option>
            </select>
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
                <th>collection Status</th>
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
                      className={
                        farmer.collectionStatus === "0"
                          ? "bg-primary"
                          : farmer.collectionStatus === "1"
                          ? "bg-danger"
                          : ""
                      }
                      onClick={() => handleCollectionStatus(farmer._id)}
                      disabled={farmer.collectionStatus === "1"}
                    >
                      {farmer.collectionStatus === "0"
                        ? "Collect"
                        : "Collected"}
                    </Button>
                  </td>
                  <td>
                    {farmer.collectionStatus === "0"
                      ? "Not Collected"
                      : "Collected"}
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
