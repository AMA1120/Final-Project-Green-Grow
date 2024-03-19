import React from "react";
import Navbar from "../components/NavBar/navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddFO() {
  const [orgname, setOrgname] = useState("");
  const [district, setDistrict] = useState("");
  const [municipalcouncil, setMunicipalcouncil] = useState("");
  const [city, setCity] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !orgname ||
      !district ||
      !municipalcouncil ||
      !city ||
      !username ||
      !password
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/farmersOrg/add",
        {
          orgname,
          district,
          municipalcouncil,
          city,
          username,
          password,
        }
      );
      console.log(response.data);
      if (response.data.status === "error") {
        alert("Failed to add Farmers' Organization");
        return;
      }

      // Show success alert
      alert("Farmers' Organization added successfully!");
      navigate("/farmersOrg");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Add Farmers' Organization
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Organization Name"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={orgname}
              onChange={(e) => setOrgname(e.target.value)}
            />
            <input
              type="text"
              placeholder="District"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <input
              type="text"
              placeholder="Municipal Council"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={municipalcouncil}
              onChange={(e) => setMunicipalcouncil(e.target.value)}
            />

            <input
              type="text"
              placeholder="City"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              type="text"
              placeholder="Username"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFO;
