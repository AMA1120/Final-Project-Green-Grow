import React from "react";
import Navbar from "../components/NavBar/navbar";
import { useState } from "react";
import axios from "axios";
// import "./home.css";
import { useNavigate } from "react-router-dom";

function AddASC() {
  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
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
      !name ||
      !province ||
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
      const response = await axios.post("http://localhost:3000/agrarian/add", {
        name,
        province,
        district,
        municipalcouncil,
        city,
        username,
        password,
      });
      console.log(response.data);
      if (response.data.status === "error") {
        alert("Failed to add Agrarian Service Center");
        return;
      }

      // Show success alert
      alert("Agrarian Service Center added successfully!");
      navigate("/home");
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
            Add Agrarian Service Center
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Agrarian Service Center admin Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <input
              type="text"
              placeholder="Enter Province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <input
              type="text"
              placeholder="Enter District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <input
              type="text"
              placeholder="Enter Municipal Council"
              value={municipalcouncil}
              onChange={(e) => setMunicipalcouncil(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <input
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <button
              type="submit"
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

export default AddASC;
