import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar/navbar";
import "./home.css";

function Home() {
  const [agrarian, setagrarian] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:3000/Agrarian/get")
      .then((response) => response.json())
      .then((agrarian) => setagrarian(agrarian))
      .catch((error) => console.error("Error fetching agrarian data:", error));
  }, []);

  const handleDelete = async (username) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete the agrarian '${username}'?`
    );
    if (!isConfirmed) {
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/deleteASC", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const responseData = await response.json();

      // If deletion is successful,The table get reset
      
      if (responseData.success) {
        const updatedagrarian = agrarian.filter((agrarian) => agrarian.username !== username);
        setagrarian(updatedagrarian);
        alert("succesfully Deleted the agrarian service center!");
      } else {
        console.log("agrarian not found.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">


        <div className="tbl-container">
          <h1>Agrarian Service Centers</h1>
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Province</th>
                <th>District</th>
                <th>Municipal Council</th>
                <th>city</th>
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
                      onClick={() => handleDelete(agrarian.username)}
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
