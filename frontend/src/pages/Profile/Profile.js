import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Profile.css";
import axios from "axios";

function ProfileEdit() {
  const [formData, setFormData] = useState({
    name: "",
    NIC: "",
    DOB: "",
    address: "",
    phone: "",
    farmlandSize: "",
  });

  const history = useHistory();

  useEffect(() => {
    // Fetch farmer data from server and set form data
    const fetchFarmerData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/farmers/get");
        const farmerData = response.data[0]; // Assuming there's only one farmer data
        setFormData(farmerData);
      } catch (error) {
        console.error("Error fetching farmer data:", error);
      }
    };

    fetchFarmerData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update farmer data on server
      const response = await axios.put(
        "http://localhost:3000/farmers/update",
        formData
      );
      console.log(response.data);
      alert("Profile updated successfully");
      // Redirect to home page or any other page after successful update
      history.push("/FarmerHome");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Container className="mt-8">
      <Row>
        <Col>
          <h2>Edit Profile</h2>
          <Form onSubmit={handleSubmit}>
            {/* Form fields */}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="NIC">
              <Form.Label>NIC</Form.Label>
              <Form.Control
                type="text"
                name="NIC"
                value={formData.NIC}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="DOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="DOB"
                value={formData.DOB}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="farmlandSize">
              <Form.Label>Farmland Size</Form.Label>
              <Form.Control
                type="text"
                name="farmlandSize"
                value={formData.farmlandSize}
                onChange={handleChange}
              />
            </Form.Group>
            <br />

            <Button onClick={handleSubmit} type="submit">
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileEdit;
