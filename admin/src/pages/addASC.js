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
      if(response.data.status === "error"){
        alert("Failed to add Agrarian Service Center");
        return;
      }

      // Show success alert
      alert("Agrarian Service Center added successfully!");
      navigate("/home");

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="d-flex justify-content-center align-items-center">
        <div className="custom-container">
          <div className="form">
            <form>
              <div className="mb-2">
                <label htmlFor="name">Admin Name</label>
                <input
                  type="text"
                  placeholder="Enter Agrarian Service Center admin Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="province">Province</label>
                <input
                  type="text"
                  placeholder="Enter the province of the ASC"
                  className="form-control"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  placeholder="Enter the district of the ASC"
                  className="form-control"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="municipalcouncil">Municipal Council</label>
                <input
                  type="text"
                  placeholder="Enter the municipal council of the ASC"
                  className="form-control"
                  value={municipalcouncil}
                  onChange={(e) => setMunicipalcouncil(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  placeholder="Enter the city of the ASC"
                  className="form-control"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddASC;
