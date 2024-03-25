import React, { useState, useEffect } from "react";
import "./Farmer.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Footer from "../../components/Footer";
import { Form } from "react-bootstrap";

function FarmerHome() {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:3000/farmers/get")
      .then((response) => response.json())
      .then((farmers) => setFarmers(farmers))
      .catch((error) => console.error("Error fetching farmer data:", error));
  }, []);

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <div className="text-center">
              <img
                src="https://media.istockphoto.com/id/1269841295/photo/side-view-of-a-senior-farmer-standing-in-corn-field-examining-crop-at-sunset.jpg?s=612x612&w=0&k=20&c=Lheldd6VVGQGxrgC8_mwUTLxXGg9v8Y6abjmYLhLHug="
                alt="Profile"
                className="img-fluid rounded-circle mb-3"
              />
              {farmers.map((farmer) => (
                <div key={farmer._id}>
                  <h3>{farmer.name}</h3>
                </div>
              ))}
              <p className="text-muted">
                Piliyandala Govi Mithuru Farmers' organization Member
              </p>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div className="mb-5"></div>
            <div className="mb-10">
              <h2>My Information</h2>
              <ul className="list-unstyled">
                {farmers.map((farmer) => (
                  <tr key={farmer._id}>
                    <li>NIC: {farmer.NIC}</li>
                    <li>Date Of Birth: {farmer.DOB}</li>
                    <li>Address{farmer.address}</li>
                    <li>Mobile No.: {farmer.phone}</li>
                    <li>Size of the land: {farmer.farmlandSize}</li>
                    <li>Farmland Location: {farmer.farmlandLocation}</li>
                    <li>Reg No. of the land: {farmer.landRegNo}</li>
                  </tr>
                ))}
              </ul>
            </div>
            <Button variant="secondary">Edit Profile</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>This is some text within a card body.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>This is some text within a card body.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>This is some text within a card body.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <div className="contact-us-container">
              <h2>Tell Us Your Concerns</h2>
              <Form className="contact-us-form">
                <Form.Group controlId="problemType">
                  <Form.Label>Problem Type</Form.Label>
                  <Form.Control as="select" className="problem-type-select">
                    <option value="">Select</option>
                    <option value="Fertilizer Quality">Fertilizer Quality</option>
                    <option value="Rice Diseases">Rice Diseases</option>
                    <option value="Paddy Field Management">Paddy Field Management</option>
                    <option value="other">Other</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    className="message-textarea"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="submit-button"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default FarmerHome;
