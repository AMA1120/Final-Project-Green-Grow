import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar/navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";

function Home() {
  const [agrarian, setagrarian] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:3000/agrarian/get")
      .then((response) => response.json())
      .then((agrarian) => setagrarian(agrarian))
      .catch((error) => console.error("Error fetching agrarian data:", error));
  }, []);

  const deleteASC = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/agrarian/deleteASC/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting ASC:", error);
    }
  };


  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">


        <div className="tbl-container">
          <h1>Agrarian Service Centers</h1>
          <Link to="/addASC" className="add-button">
                + Add new Agrarian Service Center
              </Link>
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Province</th>
                <th>District</th>
                <th>Municipal Council</th>
                <th>City</th>
                <th>Username</th>
                <th>Delete ASC</th>
              </tr>
            </thead>
            <tbody>
              {agrarian.map((agrarian) => (
                <tr key={agrarian._id}>
                  <td>{agrarian.name}</td>
                  <td>{agrarian.province}</td>
                  <td>{agrarian.district}</td>
                  <td>{agrarian.municipalcouncil}</td>
                  <td>{agrarian.city}</td>
                  <td>{agrarian.username}</td>
                  <td>
                    <button
                      className="button2"
                      onClick={() => { 
                       deleteASC(agrarian._id);
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

export default Home;
