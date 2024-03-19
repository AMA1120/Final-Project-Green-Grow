import React from "react";
import Navbar from "../components/NavBar/navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddFarmer() {
  const [name, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [DOB, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [farmlandSize, setFarmlandSize] = useState("");
  const [farmlandLocation, setFarmlandLocation] = useState("");
  const [landRegNo, setLandRegNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !name ||
      !NIC ||
      !DOB ||
      !address ||
      !phone ||
      !farmlandSize ||
      !farmlandLocation ||
      !landRegNo ||
      !username ||
      !password
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/farmers/add", {
        name,
        NIC,
        DOB,
        address,
        phone,
        farmlandSize,
        farmlandLocation,
        landRegNo,
        username,
        password,
      });
      console.log(response.data);
      if (response.data.status === "error") {
        alert("Failed to add Farmer");
        return;
      }

      // Show success alert
      alert("Farmer added successfully!");
      navigate("/farmers");
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
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Add Farmer Here
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="NIC No."
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={NIC}
              onChange={(e) => setNIC(e.target.value)}
            />
            <input
              type="text"
              placeholder="DOB"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone No."
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Size of Farmland"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={farmlandSize}
              onChange={(e) => setFarmlandSize(e.target.value)}
            />
            <input
              type="text"
              placeholder="Farmland Location"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={farmlandLocation}
              onChange={(e) => setFarmlandLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Land Reg no."
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={landRegNo}
              onChange={(e) => setLandRegNo(e.target.value)}
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
              className="button"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#4caf50",
                color: "black",
                fontSize: 20,
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
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

export default AddFarmer;
