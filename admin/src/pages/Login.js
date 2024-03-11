import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      navigate("/home");
    }
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      return alert("Please enter username and password");
    }

    console.log(username, password, role);

    if (role === "ministry") {
      try {
        const res = await axios.post("http://localhost:3000/ministry/login", {
          username,
          password,
        });

        console.log("Response status:", res.data);

        if (!res.statusText) {
          alert("Login failed");
          throw new Error("Login failed");
        }

        const { token } = await res.data;
        document.cookie = `token=${token}; path=/`;
        const decodedToken = jwtDecode(token);

        if (decodedToken.role === "Ministry") {
          navigate("/home");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        alert(error.message);
      }
    } else if (role === "asc") {
      try {
        const res = await axios.post("http://localhost:3000/agrarian/login", {
          username,
          password,
        });

        console.log("Response status:", res.data);

        if (!res.statusText) {
          alert("Login failed");
          throw new Error("Login failed");
        }

        const { token } = await res.data;
        document.cookie = `token=${token}; path=/`;
        const decodedToken = jwtDecode(token);

        if (decodedToken.role === "AgrarianServCen") {
          navigate("/farmersOrg");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        alert(error.message);
      }
    } else if (role === "fo") {
      try {
        const res = await axios.post("http://localhost:3000/farmersOrg/login", {
          username,
          password,
        });

        console.log("Response status:", res.data);

        if (!res.statusText) {
          alert("Login failed");
          throw new Error("Login failed");
        }

        const { token } = await res.data;
        document.cookie = `token=${token}; path=/`;
        const decodedToken = jwtDecode(token);

        if (decodedToken.role === "FarmersOrg") {
          navigate("/farmers");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        alert(error.message);
      }
    }
  };

  return (
    <MDBContainer fluid className="login-container">
      <MDBRow className="login-form">
        <MDBCol sm="75">
          <div
            className="d-flex flex-row ps-9 pt-9 "
            onSubmit={handleLogin}
          ></div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h1
              className="fw-normal mb-3 ps-5 pb-3"
              style={{
                letterSpacing: "1px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "2.5rem",
                color: "#333",
              }}
            >
              LOGIN HERE
            </h1>

            <div className="mb-4 mx-5 w-100">
              <label
                htmlFor="role"
                className="form-label"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "1.15rem",
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
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "1.15rem",
                  color: "#555",
                  padding: "10px" /* Added */,
                  border: "none" /* Added */,
                  borderRadius: "5px" /* Added */,
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" /* Added */,
                  appearance: "none" /* Added */,
                  backgroundColor: "#fff" /* Added */,
                  cursor: "pointer" /* Added */,
                }}
              >
                <option>Please Select</option>
                <option value="ministry">Ministry</option>
                <option value="asc">Agrarian Service center</option>
                <option value="fo">Farmers' Organization</option>
              </select>
            </div>
            <br />

            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="username"
              size="lg"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "1.15rem",
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
                fontFamily: "Open Sans, sans-serif",
                fontSize: "1.15rem",
                color: "#333",
              }}
            />

            <MDBBtn
              className="mb-4 px-5 mx-5 w-100 custom-btn bg-warning"
              size="lg"
              type="button"
              onClick={handleLogin}
            > 
              Login
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
