import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      return alert("Please enter username and password");
    }

    console.log(username, password, role)

    if (role === "ministry") {
      try {
        const res = await axios.post("http://localhost:3000/ministry/login", {
          username,
          password,
        });

        //Check the response status
        console.log("Response status:", res.data);

        if (!res.statusText) {
          alert("Login failed");
          throw new Error("Login failed");
        }

        // parse the response body
        const { token } = await res.data;
        document.cookie = `token=${token}; path=/`;
        const decodedToken = jwtDecode(token); 

        if (decodedToken.role === "Ministry") {
          alert("Welcome Ministry!");
          navigate("/home");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        alert(error.message);
      }
    } 

    else if (role === "asc") {
      try {
        const res = await axios.post("http://localhost:3000/agrarian/login", {
          username,
          password,
        });

        //Check the response status
        console.log("Response status:", res.data);

        if (!res.statusText) {
          alert("Login failed");
          throw new Error("Login failed");
        }

        // parse the response body
        const { token } = await res.data;
        document.cookie = `token=${token}; path=/`;
        const decodedToken = jwtDecode(token); 

        if (decodedToken.role === "AgrarianServCen") {
          alert("Welcome Agrarian Service Center!");
          navigate("/home");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        alert(error.message);
      }
    }

    else if (role === "fo") {
      try {
        const res = await axios.post("http://localhost:3000/farmersOrg/login", {
          username,
          password,
        });

        //Check the response status
        console.log("Response status:", res.data);

        if (!res.statusText) {
          alert("Login failed");
          throw new Error("Login failed");
        }

        // parse the response body
        const { token } = await res.data;
        document.cookie = `token=${token}; path=/`;
        const decodedToken = jwtDecode(token); 

        if (decodedToken.role === "FarmersOrg") {
          alert("Welcome Farmers' Organization!");
          navigate("/home");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        alert(error.message);
      }
    }


  };

  return (
    <MDBContainer fluid className="login-container">
      <MDBRow className="w-100">
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5" onSubmit={handleLogin}>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h1
              className="fw-normal mb-3 ps-5 pb-3"
              style={{
                letterSpacing: "1px",
                fontFamily: "Arial, sans-serif",
                fontSize: "2.5rem", // Increased font size
                color: "#333",
              }}
            >
              Log in
            </h1>

            <div className="mb-4 mx-5 w-100">
              <label
                htmlFor="role"
                className="form-label"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1.15rem", // Increased font size
                  color: "#555",
                }}
              >
                Role
              </label>
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                id="role"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1.15rem", // Increased font size
                  color: "#555",
                }}
              >
                <option>Please Select</option>
                <option value="ministry">Ministry</option>
                <option value="asc">Agrarian Service center</option>
                <option value="fo">Farmers' Organization</option>
              </select>
            </div>
            <br></br>

            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="username"
              size="lg"
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "1.15rem", // Increased font size
                color: "#333",
              }}
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              size="lg"
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "1.15rem", // Increased font size
                color: "#333",
              }}
            />

            <MDBBtn
              className="mb-4 px-5 mx-5 w-100 custom-btn"
              size="lg"
              type="button"
              onClick={handleLogin}
            >
              Login
            </MDBBtn>
          </div>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="/login.jpg"
            alt=""
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
